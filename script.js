let ligada = false;

const botao = document.querySelector("#interruptor");
const lampada = document.querySelector("#lampada");
const aviso = document.querySelector("#aviso");

botao.addEventListener("click", function () {
  ligada = !ligada;

  if (ligada) {
    lampada.setAttribute("aria-label", "Lâmpada acesa");
    aviso.textContent = "A luz está acesa. Que bom ter você por aqui!";
    botao.textContent = "Apagar a luz";
    botao.setAttribute("aria-pressed", "true");
    document.body.classList.add("acesa");
  } else {
    lampada.setAttribute("aria-label", "Lâmpada apagada");
    aviso.textContent = "A luz está apagada.";
    botao.textContent = "Acender a luz";
    botao.setAttribute("aria-pressed", "false");
    document.body.classList.remove("acesa");
  }
});
