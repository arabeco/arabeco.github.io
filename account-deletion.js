const DELETION_SUPABASE_CONFIG = window.BECOSLAB_DELETION_SUPABASE || {
  url: "",
  anonKey: "",
  table: "account_deletion_web_requests",
  supportEmail: "",
};

// To activate real submissions, define window.BECOSLAB_DELETION_SUPABASE before this script
// with url, anonKey, table and optional supportEmail.

document.querySelectorAll("[data-account-deletion-form]").forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const status = form.querySelector("[data-deletion-status]");
    const submitButton = form.querySelector("button[type='submit']");
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = {
      app_slug: String(data.app_slug || "").trim(),
      email: String(data.email || "").trim(),
      nickname: String(data.nickname || "").trim() || null,
      identifier: String(data.identifier || "").trim() || null,
      reason: String(data.reason || "").trim(),
      status: "pending",
    };

    if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setDeletionStatus(status, "Informe um email válido para localizar a conta.", "error");
      return;
    }

    if (data.confirm_delete !== "on") {
      setDeletionStatus(status, "Confirme que deseja solicitar a exclusão da conta.", "error");
      return;
    }

    if (!payload.reason) {
      setDeletionStatus(status, "Informe o motivo da solicitação para registrar o pedido web.", "error");
      return;
    }

    submitButton.disabled = true;
    setDeletionStatus(status, "Registrando solicitação...", "pending");

    try {
      if (hasSupabaseConfig()) {
        await sendDeletionRequestToSupabase(payload);
        form.reset();
        setDeletionStatus(status, "Solicitação recebida. O pedido ficará em análise para processamento.", "success");
        return;
      }

      if (DELETION_SUPABASE_CONFIG.supportEmail) {
        openDeletionMailFallback(payload);
        setDeletionStatus(
          status,
          "Integração Supabase ainda não configurada. Abrimos um pedido estruturado no seu cliente de email para suporte.",
          "success",
        );
        return;
      }

      setDeletionStatus(
        status,
        "Formulário validado. Para receber pedidos reais, conecte a URL e a chave anon do Supabase neste site.",
        "pending",
      );
    } catch (error) {
      setDeletionStatus(status, "Não foi possível enviar agora. Tente novamente ou acesse o suporte.", "error");
    } finally {
      submitButton.disabled = false;
    }
  });
});

function hasSupabaseConfig() {
  return Boolean(DELETION_SUPABASE_CONFIG.url && DELETION_SUPABASE_CONFIG.anonKey);
}

async function sendDeletionRequestToSupabase(payload) {
  const url = DELETION_SUPABASE_CONFIG.url.replace(/\/$/, "");
  const table = DELETION_SUPABASE_CONFIG.table || "account_deletion_web_requests";
  const response = await fetch(`${url}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: DELETION_SUPABASE_CONFIG.anonKey,
      Authorization: `Bearer ${DELETION_SUPABASE_CONFIG.anonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Supabase request failed: ${response.status}`);
  }
}

function openDeletionMailFallback(payload) {
  const subject = `[Exclusão de conta] ${payload.app_slug}`;
  const body = [
    "Solicitação de exclusão de conta",
    "",
    `App: ${payload.app_slug}`,
    `Email da conta: ${payload.email}`,
    `Nickname: ${payload.nickname || "não informado"}`,
    `Identificador: ${payload.identifier || "não informado"}`,
    `Motivo: ${payload.reason || "não informado"}`,
    "",
    "Confirmo que desejo solicitar a exclusão da minha conta e dados associados, conforme a política do app.",
  ].join("\n");

  window.location.href = `mailto:${DELETION_SUPABASE_CONFIG.supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function setDeletionStatus(element, message, state) {
  if (!element) return;
  element.textContent = message;
  element.dataset.state = state;
}
