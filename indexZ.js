//imagenes zoom
document.addEventListener('DOMContentLoaded', function () {
    const deportes = document.getElementById('deportes');
    const videojuegos = document.getElementById('videojuegos');

    let zIndex = 1;

    deportes.addEventListener('click', () => {
        deportes.style.zIndex = zIndex;
        zIndex++;
    });

    videojuegos.addEventListener('click', () => {
        videojuegos.style.zIndex = zIndex;
        zIndex++;
    });
})