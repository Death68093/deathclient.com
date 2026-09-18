document.addEventListener("DOMContentLoaded", () => {
    const featureCards = document.querySelectorAll(".feature-card");

    featureCards.forEach((card) => {
        card.addEventListener("mousemove", (event) => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const rotateX = ((y / rect.height) - 0.5) * -3;
            const rotateY = ((x / rect.width) - 0.5) * 3;

            card.style.transform = `translateY(-5px) perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
});