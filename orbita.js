'use strict';
const KEY = 'becoslab.orbita.v1';
// Site público: senha só para casual; o arquivo orbita-dados.json é a última versão publicada.
const PUBLIC = location.hostname === 'arabeco.github.io';
const GATE_HASH = 'dd130a849d7b29e5541b05d2f7f86a4acd4f1ec598c1c9438783f56bc4f0ff80';
const PUBLISHED_KEY = 'becoslab.orbita.publicado';
let baselineDone = new Set();
const $ = id => document.getElementById(id);
// Top to bottom: 10 at the top, 1 at the bottom, archived as a separate shelf without a number.
// Cinco degraus no meio, Pronto em cima e Pausado embaixo. Cada degrau cobre dois níveis da régua de 1 a 10.
const LEVELS=[
 {key:'pronto',title:'Pronto',hint:'Publicado, vendendo, operação ativa (10)'},
 {key:'9',title:'Validação',hint:'Beta, pré-venda ou primeiros alunos (9)'},
 {key:'7',title:'Refino',hint:'Revisão e acabamento (7 e 8)'},
 {key:'5',title:'Núcleo',hint:'Parte central e acervo (5 e 6)'},
 {key:'3',title:'Criação',hint:'Forma e caminho do produto (3 e 4)'},
 {key:'1',title:'Ideia',hint:'Objetivo, escopo e estrutura (1 e 2)'},
 {key:'pausado',title:'Pausado',hint:'Fora do foco; guarda o último nível'}
];
const BUCKET_OF=n=>n>=10?'pronto':n>=9?'9':n>=7?'7':n>=5?'5':n>=3?'3':'1';
const REP={pronto:10,'9':9,'7':7,'5':5,'3':3,'1':1};
const TITLE=Object.fromEntries(LEVELS.map(l=>[l.key,l.title]));
// Catálogo de docs/catalogo-projetos.md e master-script-maturidade-becoslab.md. Estimativas ficam marcadas no documento.
const SEED_LEVELS={glyph:8,'mind-practice':8,elite:8,kingsworld:2,tarot:4,studio:8,'frequencias-sagradas':6,'mapa-do-imperio':8,'ebook-compendio':2,'video-matrix':10,'video-arqueiro':10,'video-copo':10,'video-anel':10,'video-sorte':10,'video-limpeza':5};
// Migração de versões antigas (etapas por texto) para a escada.
const LEGACY_LEVEL={doing:2,middle:5,almost:7,ready:8,stored:2};
const seed = [
 ['glyph','Glyph','glyph.jpg'],['mind-practice','Mind Practice','mindpractice.jpg'],['elite','Elite','elite50.jpg'],['kingsworld','KingsWorld','kingsworld.jpg'],['tarot','Tarot','tarot.jpg'],['studio','Sabedoria Animada','sabedoriaanimada.jpg'],['frequencias-sagradas','Frequências Sagradas','studio.jpg'],['mapa-do-imperio','Mapa do Império','becoslab.jpg'],['ebook-compendio','Ebook Compêndio','becoslab.jpg']
].map(([id,name,image])=>({id,name,image:'assets/'+image,level:SEED_LEVELS[id],archived:false,tasks:[]}));
const initialVideos=[
 ['video-matrix','studio','A Matrix Oculta — Desvendando as Sociedades Secretas'],
 ['video-arqueiro','studio','O Arqueiro Cego: Foque no Seu Esforço, ESQUEÇA o Resultado Final'],
 ['video-copo','studio','O Verdadeiro Peso do Copo: SOLTE a Ansiedade Antes Que Ela te PARALISE'],
 ['video-anel','studio','O Anel do Rei: O Segredo para Superar QUALQUER Dor'],
 ['video-sorte','frequencias-sagradas','SORTE LÍQUIDA — Meditação Guiada para Transformar Sua Realidade'],
 ['video-limpeza','frequencias-sagradas','Limpeza Total']
];
function addInitialVideos(list){
 for(const [id,parentId,name] of initialVideos){const parent=list.find(p=>p.id===parentId);if(parent && !list.some(p=>p.id===id))list.push({id,parentId,name,level:SEED_LEVELS[id],archived:false,image:parent.image,tasks:[]});}
 return list;
}
let projects=addInitialVideos(structuredClone(seed)),selected=null,nameMode='new',storageBlocked=false;
const uid=()=>crypto.randomUUID();
function normalizeFraming(value){const n=Number(value);return Number.isFinite(n)?n:null;}
function framingFor(p){return p.parentId?(projects.find(x=>x.id===p.parentId)?.framing || {zoom:1,x:50,y:50}):(p.framing || {zoom:1,x:50,y:50});}
function applyFraming(img,p){const f=framingFor(p);img.style.setProperty('--image-zoom',f.zoom);img.style.setProperty('--image-x',f.x+'%');img.style.setProperty('--image-y',f.y+'%');}
function zoneOf(p){return p.archived?'pausado':BUCKET_OF(p.level);}
function levelText(p){return p.archived?`Pausado · nível ${p.level}`:`${TITLE[zoneOf(p)]} · nível ${p.level}`;}
function isDone(p){return !p.archived && p.level===10;}
// Subitems that reached "No ar" leave the board and stay inside their parent.
function isHiddenSubitem(p){return !!p.parentId && isDone(p);}
function setZone(p,key){if(key==='pausado')p.archived=true;else{p.archived=false;p.level=REP[key];}}
// Version 4 stores level and archived. Older versions are read by their previous stage.
function placeFrom(p,version){
 if(version>=4)return {level:p.level,archived:p.archived};
 const stage=version===1?(p.rest?'stored':'doing'):p.stage;
 return {level:SEED_LEVELS[p.id]??LEGACY_LEVEL[stage],archived:stage==='stored'};
}
function validate(data){
 if(!data || ![1,2,3,4].includes(data.version) || !Array.isArray(data.projects) || data.projects.length>1000) throw Error('Backup inválido');
 const ids=new Set();
 const loaded=data.projects.map(p=>{
  if(!p || typeof p.id!=='string' || ids.has(p.id) || typeof p.name!=='string' || !p.name.trim() || p.name.length>160 || !Array.isArray(p.tasks) || p.tasks.length>5000) throw Error('Projeto inválido');
  const place=placeFrom(p,data.version);
  if(!Number.isInteger(place.level) || place.level<1 || place.level>10 || typeof place.archived!=='boolean') throw Error('Projeto inválido');
  ids.add(p.id);const taskIds=new Set();
  const tasks=p.tasks.map(t=>{if(!t || typeof t.id!=='string' || taskIds.has(t.id) || typeof t.text!=='string' || !t.text.trim() || t.text.length>500 || typeof t.done!=='boolean')throw Error('Tarefa inválida');taskIds.add(t.id);return {id:t.id,text:t.text,done:t.done};});
  if(p.parentId!==undefined && p.parentId!==null && typeof p.parentId!=='string')throw Error('Vínculo inválido');
  const f=p.framing;const framing=f && normalizeFraming(f.zoom)!==null && normalizeFraming(f.x)!==null && normalizeFraming(f.y)!==null?{zoom:Math.max(1,Math.min(3,Number(f.zoom))),x:Math.max(0,Math.min(100,Number(f.x))),y:Math.max(0,Math.min(100,Number(f.y)))}:undefined;
  return {framing,parentId:p.parentId || null,id:p.id,name:p.name,image:seed.find(s=>s.image===p.image)?.image || 'assets/becoslab.jpg',level:place.level,archived:place.archived,tasks};
 });
 // Keep the original ID and tasks on Sabedoria; the new channel starts empty.
 const studio=loaded.find(p=>p.id==='studio');
 if(studio && studio.name==='Studio / YouTube'){
  studio.name='Sabedoria Animada';
  if(!loaded.some(p=>p.id==='frequencias-sagradas')){
   const channel=structuredClone(seed.find(p=>p.id==='frequencias-sagradas'));
   loaded.splice(loaded.indexOf(studio)+1,0,channel);
  }
 }
 if(!loaded.some(p=>p.id==='ebook-compendio'))loaded.push(structuredClone(seed.find(p=>p.id==='ebook-compendio')));
 if(data.version<3)addInitialVideos(loaded);
 for(const p of loaded){if(p.parentId){const parent=loaded.find(x=>x.id===p.parentId);if(!parent || parent.parentId || parent.id===p.id)throw Error('Projeto pai inválido');}}
 return loaded;
}
if(!PUBLIC)try{const raw=localStorage.getItem(KEY);if(raw)projects=validate(JSON.parse(raw));}catch{storageBlocked=true;$('saveStatus').className='save-error';$('saveStatus').textContent='Não foi possível ler seus dados. Exporte o que fizer antes de sair; o registro anterior foi preservado.';}
function save(){
 try{if(storageBlocked)throw Error();localStorage.setItem(KEY,JSON.stringify({version:4,projects}));$('saveStatus').className='sr-only';$('saveStatus').textContent='Salvo neste navegador · exporte um backup para guardar.';}catch{$('saveStatus').className='save-error';$('saveStatus').textContent='Não foi possível salvar no navegador. Exporte um backup antes de sair.';}
}
function element(tag,cls,text){const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;}
let suppressClickUntil=0;
let activeDrag=null;
// 10 é a faixa horizontal de cima; 1 a 9 são quadrados lado a lado (1 à esquerda); arquivado fica embaixo.
function makeZone(lv,cls){
 const archive=lv.key==='pausado',top=lv.key==='pronto';
 const zone=element('section','stage rung '+cls);
 zone.id='zone-'+lv.key;zone.title=lv.hint;zone.setAttribute('aria-label',`${lv.title}: ${lv.hint}`);
 const label=element('div','rung-label');
 label.append(element('span','rung-num',archive?'☾':top?'✓':lv.key),element('strong','rung-name',lv.title),element('small','rung-hint',lv.hint));
 const nodes=element('div','stage-nodes');nodes.id='nodes-'+lv.key;
 zone.append(label,nodes);return zone;
}
function buildLadder(){
 const ladder=$('ladder');
 const squares=element('div','levels');
 for(const lv of LEVELS.filter(l=>l.key!=='pronto' && l.key!=='pausado').reverse())squares.append(makeZone(lv,'tile'));
 ladder.append(makeZone(LEVELS[0],'rung-top'),squares,makeZone(LEVELS[LEVELS.length-1],'rung-archive'));
}
function nearestStage(x,y){
 let nearest=LEVELS[0].key,distance=Infinity;
 for(const {key} of LEVELS){
  const r=$('zone-'+key).getBoundingClientRect();
  const dx=Math.max(r.left-x,0,x-(r.left+r.width)),dy=Math.max(r.top-y,0,y-(r.top+r.height));
  const d=dx*dx+dy*dy;if(d<distance){distance=d;nearest=key;}
 }
 return nearest;
}
function clearDrop(){for(const {key} of LEVELS)$('zone-'+key).classList.remove('drop-ready');}
function placeNodes(container,items,oldPositions){
 const width=container.clientWidth || 600,height=container.clientHeight || 400;
 const columns=Math.max(1,Math.min(items.length,Math.ceil(Math.sqrt(items.length*width/height))));
 const rows=Math.max(1,Math.ceil(items.length/columns));
 const size=Math.max(8,Math.min(90,width/(columns+0.5),height/(rows+0.6)));
 items.forEach((p,i)=>{
  const b=element('button','planet'+(p.parentId?' subitem':'')+(p.archived?' is-stored':''));b.type='button';b.dataset.projectId=p.id;b.setAttribute('aria-label',`Abrir ${p.name}`);b.title=p.name;
  const row=Math.floor(i/columns),rowCount=Math.min(columns,items.length-row*columns);
  b.style.width=b.style.height=(p.parentId?Math.min(36,size*.42):size)+'px';b.style.left=((i%columns+.5)*width/rowCount)+'px';b.style.top=((row+.5)*height/rows)+'px';
  const frame=element('span','image-frame');const img=element('img');img.src=p.image;img.alt='';img.draggable=false;applyFraming(img,p);frame.append(img);b.append(frame);
  const label=element('span','project-ribbon',p.name);b.append(label);
  b.style.setProperty('--ribbon-width',Math.max(16,Math.min(p.parentId?120:142,width/columns-8))+'px');
  b.onclick=()=>{if(Date.now()>suppressClickUntil)openProject(p.id);};
  let drag=null;
  b.onpointerdown=e=>{
   if(e.button!==0 || activeDrag)return;
   drag={id:e.pointerId,x:e.clientX,y:e.clientY,moved:false,left:parseFloat(b.style.left),top:parseFloat(b.style.top)};activeDrag=b;
   b.setPointerCapture(e.pointerId);
  };
  b.onpointermove=e=>{
   if(!drag || e.pointerId!==drag.id)return;
   const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
   if(!drag.moved && Math.hypot(dx,dy)<6)return;
   drag.moved=true;b.classList.add('dragging');b.style.left=drag.left+dx+'px';b.style.top=drag.top+dy+'px';
   clearDrop();$('zone-'+nearestStage(e.clientX,e.clientY)).classList.add('drop-ready');
  };
  function finish(e,cancelled){
   if(!drag || e.pointerId!==drag.id)return;
   const moved=drag.moved;drag=null;activeDrag=null;clearDrop();
   if(b.hasPointerCapture(e.pointerId))b.releasePointerCapture(e.pointerId);
   if(!moved)return;
   suppressClickUntil=Date.now()+400;
   if(!cancelled){setZone(p,nearestStage(e.clientX,e.clientY));save();}
   renderBoard();
  }
  b.onpointerup=e=>finish(e,false);b.onpointercancel=e=>finish(e,true);b.onlostpointercapture=e=>{if(drag)finish(e,true);};
  container.append(b);
  // Center the image and wrapped caption together inside the magnetic slot.
  const captionHeight=label.offsetHeight || 24;
  const cellHeight=height/rows;
  const diameter=Math.max(8,Math.min(parseFloat(b.style.width),cellHeight-captionHeight-8));
  b.style.width=b.style.height=diameter+'px';
  b.style.top=((row+.5)*cellHeight-captionHeight/2)+'px';
  const old=oldPositions.get(p.id);
  if(old && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
   const now=b.getBoundingClientRect();
   const dx=old.left+old.width/2-now.left-now.width/2,dy=old.top+old.height/2-now.top-now.height/2;
   b.animate([{transform:`translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(1.06)`},{transform:'translate(-50%, -50%) scale(1)'}],{duration:420,easing:'cubic-bezier(.2,.85,.25,1)'});
  }
 });
}
function renderBoard(){
 if(activeDrag)return;
 const oldPositions=new Map();
 for(const {key} of LEVELS)for(const node of $('nodes-'+key).children)oldPositions.set(node.dataset.projectId,node.getBoundingClientRect());
 for(const {key} of LEVELS){
  const container=$('nodes-'+key);container.replaceChildren();placeNodes(container,projects.filter(p=>zoneOf(p)===key && !isHiddenSubitem(p)),oldPositions);
 }
}
window.addEventListener('resize',renderBoard);
function current(){return projects.find(p=>p.id===selected);}
function renderDetail(){
 const p=current();if(!p)return;
 $('detailTitle').textContent=p.name;$('detailImage').src=p.image;applyFraming($('detailImage'),p);$('detailState').textContent=levelText(p);$('projectStage').value=zoneOf(p);
 $('newSubitem').hidden=!!p.parentId;
 $('parentProject').hidden=!p.parentId;
 $('parentProject').textContent=p.parentId?'← '+projects.find(x=>x.id===p.parentId).name:'';
 $('children').replaceChildren();
 const children=projects.filter(x=>x.parentId===p.id);
 $('childrenSection').hidden=!!p.parentId;
 $('childrenCount').textContent=children.filter(isDone).length+' concluídos';
 children.sort((a,b)=>isDone(a)-isDone(b)).forEach(child=>{
  const button=element('button','child-item');const img=element('img');img.src=child.image;img.alt='';applyFraming(img,child);
  button.append(img,element('span','',child.name),element('small','',isDone(child)?'✓ No ar':levelText(child)));
  button.onclick=()=>openProject(child.id);$('children').append(button);
 });
 $('taskCount').textContent=`${p.tasks.filter(t=>t.done).length} / ${p.tasks.length}`;$('emptyTasks').hidden=p.tasks.length>0;$('tasks').replaceChildren();
 p.tasks.forEach(t=>{
  const row=element('div','task'+(t.done?' done':''));const check=element('input');check.type='checkbox';check.checked=t.done;check.setAttribute('aria-label',`Concluir ${t.text}`);
  const text=element('input');text.type='text';text.value=t.text;text.maxLength=500;text.setAttribute('aria-label','Editar tarefa');
  check.onchange=()=>{t.done=check.checked;save();row.classList.toggle('done',t.done);$('taskCount').textContent=`${p.tasks.filter(t=>t.done).length} / ${p.tasks.length}`;renderBoard();};
  text.onchange=()=>{const value=text.value.trim();if(!value){text.value=t.text;return;}t.text=value;check.setAttribute('aria-label',`Concluir ${value}`);save();};
  const del=element('button','','×');del.setAttribute('aria-label',`Excluir tarefa ${t.text}`);del.onclick=()=>{if(!confirm(`Excluir “${t.text}”?`))return;p.tasks=p.tasks.filter(x=>x.id!==t.id);save();renderDetail();renderBoard();};row.append(check,text,del);$('tasks').append(row);
 });
}
function openProject(id){selected=id;renderDetail();$('taskInput').value='';if(!$('projectDialog').open)$('projectDialog').showModal();}
$('closeProject').onclick=()=>$('projectDialog').close();
$('projectStage').onchange=()=>{const p=current();setZone(p,$('projectStage').value);save();renderBoard();renderDetail();};
$('taskForm').onsubmit=e=>{e.preventDefault();const text=$('taskInput').value.trim();if(!text)return;current().tasks.push({id:uid(),text,done:false});save();renderDetail();renderBoard();$('taskInput').value='';$('taskInput').focus();};
function openName(mode){nameMode=mode;$('nameTitle').textContent=mode==='new'?'Novo projeto':mode==='child'?'Novo subitem':'Renomear projeto';$('nameInput').value=mode==='rename'?current().name:'';$('nameDialog').showModal();$('nameInput').focus();}
$('newSubitem').onclick=()=>openName('child');
$('parentProject').onclick=()=>openProject(current().parentId);
$('newProject').onclick=()=>openName('new');$('renameProject').onclick=()=>openName('rename');$('cancelName').onclick=()=>$('nameDialog').close();
$('nameForm').onsubmit=e=>{e.preventDefault();const name=$('nameInput').value.trim();if(!name)return;if(nameMode==='new' || nameMode==='child'){if(projects.length>=1000){alert('Limite de 1000 itens atingido.');return;}projects.push({id:uid(),parentId:nameMode==='child'?current().id:null,name,image:nameMode==='child'?current().image:'assets/becoslab.jpg',level:1,archived:false,tasks:[]});if(nameMode==='child')renderDetail();}else{current().name=name;renderDetail();}save();renderBoard();$('nameDialog').close();};
$('backup').onclick=()=>{const blob=new Blob([JSON.stringify({version:4,projects},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=element('a');a.href=url;a.download=`becoslab-orbita-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('restore').onclick=()=>$('backupFile').click();
$('backupFile').onchange=async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>5000000)throw Error();const imported=validate(JSON.parse(await file.text()));if(!confirm('Importar este backup e substituir os projetos e checklists deste navegador? Exporte o atual antes se quiser preservá-lo.'))return;projects=imported;storageBlocked=false;selected=null;save();renderBoard();}catch{alert('Não foi possível importar. Escolha um backup válido da Órbita. Seus dados foram mantidos.');}finally{e.target.value='';}};
window.addEventListener('storage',e=>{if(e.key===KEY){$('saveStatus').className='save-error';$('saveStatus').textContent='O painel mudou em outra aba. Recarregue antes de continuar para usar a versão mais recente.';storageBlocked=true;}});
async function sha256(text){const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text));return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join('');}
// Carrega a versão publicada. Se ela mudou desde a última vez, substitui a cópia local deste navegador.
async function openPublished(){
 const res=await fetch('orbita-dados.json',{cache:'no-store'});
 if(!res.ok)throw Error('sem arquivo');
 const text=await res.text();const stamp=await sha256(text);
 const published=validate(JSON.parse(text));
 let stored=null,local=null;
 try{stored=localStorage.getItem(PUBLISHED_KEY);local=localStorage.getItem(KEY);}catch{}
 if(stored===stamp && local){try{projects=validate(JSON.parse(local));}catch{projects=published;}}
 else{projects=published;try{localStorage.setItem(PUBLISHED_KEY,stamp);}catch{}save();}
 baselineDone=new Set(published.flatMap(p=>p.tasks.filter(t=>t.done).map(t=>t.id)));
 try{sessionStorage.setItem('orbita-ok',stamp);}catch{}
 $('gate').hidden=true;buildLadder();renderBoard();
}
function startGate(){
 $('gate').hidden=false;
 let remembered=null;try{remembered=sessionStorage.getItem('orbita-ok');}catch{}
 if(remembered){openPublished().catch(()=>{$('gate').hidden=false;$('gateError').textContent='Não foi possível carregar a versão publicada.';});return;}
 $('gateForm').onsubmit=async e=>{
  e.preventDefault();
  if(await sha256($('gatePassword').value)!==GATE_HASH){$('gateError').textContent='Senha incorreta.';$('gatePassword').select();return;}
  $('gateError').textContent='';
  try{await openPublished();}catch{$('gateError').textContent='Não foi possível carregar a versão publicada.';}
 };
}
function doneSinceBase(){
 return projects.flatMap(p=>{const name=p.parentId?`${projects.find(x=>x.id===p.parentId)?.name} · ${p.name}`:p.name;return p.tasks.filter(t=>t.done && !baselineDone.has(t.id)).map(t=>`${name}: ${t.text} ✓`);});
}
async function copyDone(){
 const lines=doneSinceBase();
 if(!lines.length){alert('Nada marcado desde a última versão publicada.');return;}
 const text=lines.join('\n');
 try{await navigator.clipboard.writeText(text);alert('Copiado. Cole e me mande.');}catch{alert(text);}
}
if(PUBLIC){$('copyDone').hidden=false;$('copyDone').onclick=copyDone;startGate();}
else{buildLadder();renderBoard();}
