const sessao = document.querySelector(".first--section")
const escondido = document.querySelector(".second--section")


function hideBox () {
    sessao.style.display = "none"
    escondido.style.display = "flex"
}
function hideBox2 () {
    sessao.style.display = "flex"
    escondido.style.display = "none"
}

sessao.addEventListener("click" , function () {
    hideBox()
})
escondido.addEventListener("click" , function () {
    hideBox2()
})