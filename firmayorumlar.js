document.addEventListener('DOMContentLoaded', function () {
    displayComplaintsAndResponses();
});

function displayComplaintsAndResponses() {
    const storedComplaints = JSON.parse(localStorage.getItem('complaints')) || [];

    const complaintResponsesDiv = document.getElementById('complaintResponses');
    complaintResponsesDiv.innerHTML = ''; // Önceki içeriği temizle

    storedComplaints.forEach((complaint, index) => {
        const complaintDiv = document.createElement('div');
        complaintDiv.className = 'complaint';
        complaintDiv.innerHTML = `
            <p><strong>Şikayet Tarihi:</strong> ${complaint.date}</p>
            <p><strong>Şikayet Sahibi:</strong> ${complaint.owner}</p>
            <p><strong>Şikayet Açıklaması:</strong> ${complaint.description}</p>
            <button onclick="respondToComplaint(${index})">Cevapla</button>
            <button onclick="deleteComplaint(${index})">Sil</button>
            <div id="response-${index}" class="response-form" style="display: none;">
                <textarea id="responseDescription-${index}" placeholder="Cevapınızı buraya yazın"></textarea>
                <button onclick="submitResponse(${index})">Gönder</button>
            </div>
            <div id="responseText-${index}" class="response-text" style="display: none;"></div>
        `;

        complaintResponsesDiv.appendChild(complaintDiv);
    });
}

function respondToComplaint(index) {
    const responseDiv = document.getElementById(`response-${index}`);
    responseDiv.style.display = 'block';
}

function deleteComplaint(index) {
    const storedComplaints = JSON.parse(localStorage.getItem('complaints')) || [];
    storedComplaints.splice(index, 1); // Belirtilen dizindeki şikayeti kaldırın
    localStorage.setItem('complaints', JSON.stringify(storedComplaints));
    displayComplaintsAndResponses(); // Görüntülenen şikayetleri güncelleyin
}

function submitResponse(index) {
    const responseDescription = document.getElementById(`responseDescription-${index}`).value;
    if (responseDescription) {
        const responseTextDiv = document.getElementById(`responseText-${index}`);
        responseTextDiv.innerHTML = `<p><strong>Cevap:</strong> ${responseDescription}</p>`;
        responseTextDiv.style.display = 'block';

        // Burada responseDescription'ı saklayabilir veya başka işlemler yapabilirsiniz.
        // Şu an sadece formu gizliyoruz, isteğe bağlı olarak başka işlemler ekleyebilirsiniz.
        const responseDiv = document.getElementById(`response-${index}`);
        responseDiv.style.display = 'none';
    } else {
        alert('Lütfen cevap alanını doldurun.');
    }
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

