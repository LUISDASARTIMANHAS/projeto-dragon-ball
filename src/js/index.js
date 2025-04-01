window.addEventListener("load", () => {
  try {
    const btnAvancar = document.getElementById("btnAvancar");
    const btnVoltar = document.getElementById("btnVoltar");
    const cartoes = document.querySelectorAll(".cartao");
    let cartaoAtual = 0;

    cartoes.forEach(cartao =>{
      cartao.addEventListener("click",function (){
        const cartaVirada = document.querySelector(".carta-virada");
        const descricao = cartao.querySelector(".descricao");

        // virar o cartão
        cartao.classList.toggle("virar")
        // mostrar fundo
        cartaVirada.classList.toggle("mostrar-fundo-carta")
        // esconder descrição para resoluções menores
        descricao.classList.toggle("esconder");
      })
    })

    // indentificando o clique do botão
    btnAvancar.addEventListener("click", () => {
      if (cartaoAtual === cartoes.length - 1) return;
      console.log(cartaoAtual + "<=" + cartoes.length - 1);

      esconderCartaoSelecionado();
      cartaoAtual++;
      mostrarCartao(cartaoAtual);
    });

    // Identificando o clique do botão
    btnVoltar.addEventListener("click", () =>{
      if (cartaoAtual == 0) return;
      console.log(cartaoAtual + "<=" + cartoes.length - 1);

      esconderCartaoSelecionado();
      cartaoAtual--;
      mostrarCartao(cartaoAtual);
    });

    function esconderCartaoSelecionado() {
      const cartaoSelecionado = document.querySelector(".selecionado");

      cartaoSelecionado.classList.remove("selecionado");
    }

    function mostrarCartao(cartaoAtual) {
      cartoes[cartaoAtual].classList.add("selecionado");
    }
  } catch (error) {
    alert(`
			ERRO FATAL!
			REPORTE AO ADMINISTRADOR DO SITE.
			Error: ${error}`);
  }
});
