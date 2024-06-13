const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () =>  hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".form-content form");
    
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Formun varsayılan gönderimini engelle

        // Dropdown'dan seçilen seçeneği al
        const selectedOption = document.getElementById("car-type").value;

        // Seçilen seçeneğe göre hedef sayfayı belirle
        let targetPage = "";
        if (selectedOption === "FİRMA") {
            targetPage = "firmaanasayfa.html";
        } else if (selectedOption === "MÜŞTERİ") {
            targetPage = "musterianasayfa.html";
        } else {
            // Diğer seçenekleri gerekiyorsa ele al
        }

        // Hedef sayfaya yönlendir
        if (targetPage !== "") {
            window.location.href = targetPage;
        }
    });
});
