window.onloadedPersonagensEBotoes = function onloadedPersonagensEBotoes() {
  try {
    const listaBotoes = document.querySelectorAll(".botao");
		const listaPersonagens = document.querySelectorAll(".personagem");

    console.log(listaBotoes);

    listaBotoes.forEach((botao,i) => {
      botao.addEventListener("click", () => {
          const botaoSelecionado = document.querySelector(".botao.selecionado");
					const personSelecionado = document.querySelector(".personagem.selecionado");
					const personagem = listaPersonagens[i];

          botaoSelecionado.classList.remove("selecionado");
          botao.classList.add("selecionado");

					personSelecionado.classList.remove("selecionado");
					personagem.classList.add("selecionado");
      });
    });
  } catch (error) {
    alert("ERRO FATAL! REPORTE AO ADMINISTRADOR DO SITE. \n Error:" + error);
  }
};
