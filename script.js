// Mengubah background navbar saat scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shadow-lg');
    } else {
        header.classList.remove('shadow-lg');
    }
});

// Kamu bisa tambah fungsi lainnya di sini (misal: alert saat klik submit)