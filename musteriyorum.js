const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Mobil menüyü göster
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
 
//Şikayet arama kutusu*********************************************************



function searchComplaints() {
    const searchInput = document.getElementById('complaintSearch').value.toLowerCase();
    const storedComplaints = JSON.parse(localStorage.getItem('complaints')) || [];
    const filteredComplaints = storedComplaints.filter(complaint => {
        // İhtiyaca göre arama kriterlerini özelleştirebilirsiniz
        return (
            complaint.date.toLowerCase().includes(searchInput) ||
            complaint.owner.toLowerCase().includes(searchInput) ||
            complaint.description.toLowerCase().includes(searchInput)
        );
    });
    displayComplaints(filteredComplaints);
}

function refreshComplaintList() {
    const storedComplaints = JSON.parse(localStorage.getItem('complaints')) || [];
    displayComplaints(storedComplaints);
}

function displayComplaints(complaints) {
    const complaintList = document.getElementById('complaintList');
    complaintList.innerHTML = ''; // Listeyi temizle

    complaints.forEach((complaint, index) => {
        const complaintElement = document.createElement('div');
        complaintElement.className = 'complaint';
        complaintElement.innerHTML = `
            <p><strong>Şikayet Tarihi:</strong> ${complaint.date}</p>
            <p><strong>Şikayet Sahibi:</strong> ${complaint.owner}</p>
            <p><strong>Şikayet Açıklaması:</strong> ${complaint.description}</p>
            <button onclick="deleteComplaint(${index})">Şikayeti Sil</button>
            <button onclick="editComplaint(${index})">Şikayeti Düzenle</button>
        `;
        complaintList.appendChild(complaintElement);
    });
}





