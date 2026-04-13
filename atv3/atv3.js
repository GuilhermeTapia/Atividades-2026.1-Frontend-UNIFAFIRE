function mudarCor() {
    const caixa = document.getElementById("caixa");

    // alterna a cor
    if (caixa.style.backgroundColor === "lightblue") {
        caixa.style.backgroundColor = "lightgray";
    } else {
        caixa.style.backgroundColor = "lightblue";
    }
}