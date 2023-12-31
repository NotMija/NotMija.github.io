
document.addEventListener('DOMContentLoaded', function () {
    const deportes = document.getElementById('deportes');
    const videojuegos = document.getElementById('videojuegos');

    function togglePopup(popupId) {
        const popup = document.getElementById(popupId);
        if (popup.style.display === 'block') {
            popup.style.display = 'none';
        } else {
            popup.style.display = 'block';
        }
    }

    deportes.addEventListener('click', function () {
        togglePopup('popup-deportes');
    });

    videojuegos.addEventListener('click', function () {
        togglePopup('popup-videojuegos');
    });
});

