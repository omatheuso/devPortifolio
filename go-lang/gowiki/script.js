// const frontPage = document.querySelector(".home--section")
// const backpage = document.querySelector(".active--section")
// const meAperta = document.querySelector(".front--btn")
// const meAperta2 = document.querySelector(".back--btn")


// function hideBox () {
//     frontPage.style.display = "none"
//     backpage.style.display = "flex"
// }
// function hideBox2 () {
//     frontPage.style.display = "flex"
//     backpage.style.display = "none"
// }

// meAperta.addEventListener("click" , function () {
//     hideBox()
// })
// meAperta2.addEventListener("click" , function () {
//     hideBox2()
// })


const ratingButtons = document.querySelectorAll(".rate--button")
const submitButton = document.querySelector(".submit--button")
const ratePhrase = document.querySelector(".thanks--phrase")
const homePage = document.querySelector(".home")
const thanksPage = document.querySelector(".thanks")

let rate = ''

function saveRate (value) {
    rate = value
}

function thanksPhrase (rate) {
    ratePhrase.innerText = `You selected ${rate} out of 5`
}

ratingButtons.forEach(
    el => {
        el.addEventListener('click', () => {
            saveRate (el.textContent)
            thanksPhrase(rate)
        })
    }
)

function hideFrontPage (){
    homePage.style.display = "none"
    thanksPage.style.display = "flex"
}

submitButton.addEventListener('click', () => {
    hideFrontPage()
})