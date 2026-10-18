// Presentation only: retain the existing data model and saved answers.
const financeColumns=document.querySelector('.finance-columns');
const financeLeft=document.createElement('div');financeLeft.className='finance-left';
financeColumns.prepend(financeLeft);
financeLeft.append(document.querySelector('.finance-col'),document.querySelector('.result'));
const financeHint=document.querySelector('#ordem > p.hint:last-child');
if(financeHint){financeHint.className='finance-note';financeLeft.append(financeHint)}
document.querySelector('.arena-key').after(Object.assign(document.createElement('p'),{className:'hint',textContent:'Horas por semana são opcionais. A estrela indica sua prioridade atual.'}));
document.querySelector('.week-instructions').textContent='Selecione uma arena e toque num período para adicioná-la. Cabem até três por período; não é preciso ocupar todos. No celular, escolha o dia abaixo.';
const dayTabs=document.createElement('div');dayTabs.className='day-tabs';dayTabs.setAttribute('role','tablist');dayTabs.setAttribute('aria-label','Dia da semana');
let visibleDay=0;
dayTabs.innerHTML=days.map((day,index)=>`<button type="button" role="tab" data-day="${index}" aria-selected="${index===0}">${day}</button>`).join('');
const selectionNote=document.createElement('p');selectionNote.className='week-selection';selectionNote.setAttribute('aria-live','polite');
document.querySelector('.week-scroll').before(selectionNote,dayTabs);
function decorateWeek(){
 const children=[...el('week-grid').children];
 children.forEach((node,index)=>{if(index%8!==0){const day=index%8-1;node.dataset.weekDay=day;node.classList.toggle('day-active',day===visibleDay)}});
 const chosen=state.arenas.find(a=>a.id===activeArenaId);
 selectionNote.textContent=chosen?`Selecionada: ${chosen.name||'Arena sem nome'} · toque num período para colocar.`:'Adicione suas arenas para montar uma semana de referência.';
}
dayTabs.addEventListener('click',e=>{const button=e.target.closest('[data-day]');if(!button)return;visibleDay=Number(button.dataset.day);dayTabs.querySelectorAll('button').forEach(b=>b.setAttribute('aria-selected',String(b===button)));decorateWeek()});
new MutationObserver(decorateWeek).observe(el('week-grid'),{childList:true});
decorateWeek();
