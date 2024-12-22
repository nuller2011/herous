const starsContainer = document.getElementById("stars");
const light = document.getElementById("light");

// Создание звезд
for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    starsContainer.appendChild(star);
}

// Анимация света
document.addEventListener("mousemove", (e) => {
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
    light.style.transform = `translate(-50%, -50%) scale(1.2)`;
    setTimeout(() => {
        light.style.transform = `translate(-50%, -50%) scale(1)`;
    }, 100);
});
