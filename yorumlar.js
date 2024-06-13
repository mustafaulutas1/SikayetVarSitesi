const complaintForm = document.getElementById('complaintForm');
const complaintList = document.getElementById('complaintList');

function addComplaint() {
    const date = document.getElementById('complaintDate').value;
    const owner = document.getElementById('complaintOwner').value;
    const description = document.getElementById('complaintDescription').value;

    if (date && owner && description) {
        const complaint = document.createElement('div');
        complaint.className = 'complaint';
        complaint.innerHTML = `
            <p><strong>Şikayet Tarihi:</strong> ${date}</p>
            <p><strong>Şikayet Sahibi:</strong> ${owner}</p>
            <p><strong>Şikayet Açıklaması:</strong> ${description}</p>
            <button onclick="deleteComplaint(this)">Şikayeti Sil</button>
            <button onclick="editComplaint(this)">Şikayeti Düzenle</button>
        `;
        complaintList.appendChild(complaint);

        // Şikayeti localStorage'a ekle
        const storedComplaints = JSON.parse(localStorage.getItem('complaints')) || [];
        storedComplaints.push({ date, owner, description });
        localStorage.setItem('complaints', JSON.stringify(storedComplaints));

        // Temizleme işlemi
        complaintForm.reset();
    } else {
        alert('Lütfen tüm alanları doldurun.');
    }
}

function deleteComplaint(button) {
    const complaint = button.parentElement;
    complaintList.removeChild(complaint);

    // Şikayeti localStorage'dan sil
    const storedComplaints = JSON.parse(localStorage.getItem('complaints')) || [];
    const index = Array.from(complaintList.children).indexOf(complaint);
    storedComplaints.splice(index, 1);
    localStorage.setItem('complaints', JSON.stringify(storedComplaints));
}

function editComplaint(button) {
    const complaint = button.parentElement;
    const date = complaint.querySelector('p:nth-child(1)').textContent.replace('Şikayet Tarihi: ', '');
    const owner = complaint.querySelector('p:nth-child(2)').textContent.replace('Şikayet Sahibi: ', '');
    const description = complaint.querySelector('p:nth-child(3)').textContent.replace('Şikayet Açıklaması: ', '');

    document.getElementById('complaintDate').value = date;
    document.getElementById('complaintOwner').value = owner;
    document.getElementById('complaintDescription').value = description;

    deleteComplaint(button);
}
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




