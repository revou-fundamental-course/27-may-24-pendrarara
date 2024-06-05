document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('messageForm');
    const currentTime = document.getElementById('currentTime');
    const userName = document.getElementById('userName');
    const userDob = document.getElementById('userDob');
    const userGender = document.getElementById('userGender');
    const userMessage = document.getElementById('userMessage');
    const namePlaceholder = document.getElementById('name-placeholder');

    // Dynamically set the welcome name
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const name = urlParams.get('name');
    if (name) {
        namePlaceholder.textContent = name;
    }

    // Form validation and display values
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.nama.value;
        const dob = form.dob.value;
        const gender = form.gender.value;
        const message = form.pesan.value;

        const now = new Date();
        const formattedTime = now.toString();

        currentTime.textContent = `Current time: ${formattedTime}`;
        userName.textContent = `Nama: ${name}`;
        userDob.textContent = `Tanggal Lahir: ${dob}`;
        userGender.textContent = `Jenis Kelamin: ${gender}`;
        userMessage.textContent = `Pesan: ${message}`;
    });

    // Navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target.getAttribute('href');
            if (target === 'index.html') {
                document.getElementById('home-page').style.display = 'block';
                document.getElementById('profile-page').style.display = 'none';
            } else if (target === 'profile.html') {
                document.getElementById('home-page').style.display = 'none';
                document.getElementById('profile-page').style.display = 'block';
            }
        });
    });
});
