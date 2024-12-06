document.addEventListener('DOMContentLoaded', function () {
    const sinopsisLinks = document.querySelectorAll('.sinopsis-link'); // Menangkap semua tombol sinopsis
    const sinopsisContainers = document.querySelectorAll('.sinopsis-flex'); // Menangkap semua konten sinopsis

    sinopsisLinks.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Scroll halus ke bagian container sinopsis
            document.querySelector('.container-sinopsis').scrollIntoView({
                behavior: 'smooth'
            });

            // Ganti konten sinopsis dengan animasi transisi
            sinopsisContainers.forEach((container, i) => {
                if (i === index) {
                    container.style.display = 'flex';  
                    setTimeout(() => {
                        container.style.opacity = 1; 
                        container.style.transition = 'opacity 0.5s';
                    }, 100);
                } else {
                    container.style.opacity = 0; 
                    container.style.transition = 'opacity 0.5s';
                    setTimeout(() => {
                        container.style.display = 'none';
                    }, 500); // Sesuaikan dengan durasi transisi
                }
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const sinopsisLinks = document.querySelectorAll('.sinopsis-link'); // Menangkap semua tombol sinopsis
    const sinopsisContainers = document.querySelectorAll('.sinopsis-flex'); // Menangkap semua konten sinopsis
    const daftarSeriButtons = document.querySelectorAll('.daftar-seri-button'); // Menangkap semua tombol daftar seri

    sinopsisLinks.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Scroll halus ke bagian container sinopsis
            document.querySelector('.container-sinopsis').scrollIntoView({
                behavior: 'smooth'
            });

            // Ganti konten sinopsis dengan animasi transisi
            sinopsisContainers.forEach((container, i) => {
                if (i === index) {
                    container.style.display = 'flex';  
                    setTimeout(() => {
                        container.style.opacity = 1; 
                        container.style.transition = 'opacity 0.5s';
                    }, 100);
                } else {
                    container.style.opacity = 0; 
                    container.style.transition = 'opacity 0.5s';
                    setTimeout(() => {
                        container.style.display = 'none';
                    }, 500); // Sesuaikan dengan durasi transisi
                }
            });
        });
    });

    daftarSeriButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            // Scroll halus ke bagian container seri
            document.querySelector('.container-seri').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});




let isLightMode = false;

const switchModeButton = document.getElementById('switch-mode');
const modeIcon = document.getElementById('mode-icon');

switchModeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    isLightMode = !isLightMode;
});



function toggleEpisodes(seasonId) {
    var episodes = document.getElementById(seasonId);
    var seasonElement = episodes.parentElement; 

    if (episodes.style.display === "none" || episodes.style.display === "") {
        episodes.style.display = "block";
        seasonElement.classList.add("no-hover"); 
    } else {
        episodes.style.display = "none";
        seasonElement.classList.remove("no-hover");  
    }
}
