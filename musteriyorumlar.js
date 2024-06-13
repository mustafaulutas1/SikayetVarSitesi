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
