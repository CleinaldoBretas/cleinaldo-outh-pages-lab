async function consultarSessao() {
  const status = document.getElementById("status");

  try {
    const resposta = await fetch("/api/me", {
      credentials: "same-origin",
      cache: "no-store"
    });

    if (resposta.status === 401) {
      status.textContent = "Nenhuma sessão ativa neste navegador.";
      return;
    }

    if (!resposta.ok) {
      status.textContent = "Não foi possível consultar a sessão.";
      return;
    }

    const usuario = await resposta.json();

    status.textContent =
      `Sessão ativa: ${usuario.email ?? usuario.displayName ?? "usuário autenticado"}`;
  } catch {
    status.textContent = "Erro ao consultar a sessão.";
  }
}

consultarSessao();
