function renderInfoButtons(buttonElemntId) {
  document.getElementById("divInfoBotones").style.display = "block";
  switch (buttonElemntId) {
    case "quienes":
      document.getElementById("divInfoBotones").innerHTML =
        "<h3>Quienes Somos</h3><p>Nos dedicamos a la impresión, modelado y diseño 3D, siempre con un espíritu emprendedor e innovador.</p>";
      break;
    case "queHac":
      document.getElementById("divInfoBotones").innerHTML =
        "<h3>Que hacemos</h3><p>Ofrecemos servicios de impresión 3D personalizados, desde el diseño hasta la producción, utilizando tecnología de vanguardia para garantizar la máxima calidad.</p>";
      break;
    case "comoHac":
      document.getElementById("divInfoBotones").innerHTML =
        "<h3>Cómo lo hacemos</h3><p>Gestionamos cada paso del proceso, desde el diseño y la impresión hasta los acabados finales, incluyendo la pintura a mano para un detalle único y personalizado..</p>";
      break;
    case "haciaDon":
      document.getElementById("divInfoBotones").innerHTML =
        "<h3>Hacia donde vamos</h3><p>Buscamos ofrecer la mejor calidad posible, mientras seguimos aprendiendo y creciendo para superarnos día a día.</p>";
      break;
    default:
      document.getElementById("divInfoBotones").innerHTML = "";
      break;
  }
}

const but = document.querySelectorAll(".botonesInfo");
but.forEach((button) => {
  button.addEventListener("click", (e) => {
    renderInfoButtons(e.target.id);
    console.log("click", e.target.id);
  });
});
