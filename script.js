
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function celebrate() {
    particles = [];

    for (let i = 0; i < 180; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: -Math.random() * canvas.height,
            size: Math.random() * 8 + 3,
            speed: Math.random() * 5 + 2,
            color: [
                "#ff4081",
                "#ffd700",
                "#7c4dff",
                "#00e5ff",
                "#ff5722"
            ][Math.floor(Math.random() * 5)]
        });
    }

    document.querySelector("h1").innerText =
        "🎉 Happy Birthday! 🎉";

    animateConfetti();
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);

        p.y += p.speed;
        p.x += Math.sin(p.y / 30);
    });

    particles = particles.filter(
        p => p.y < canvas.height
    );

    if (particles.length > 0) {
        requestAnimationFrame(animateConfetti);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function openGift() {
    document.getElementById("surprise").innerHTML =
        "💖 Surprise! You are one of the most special people in my life! 🌹 May all your dreams come true! 🎂";

    document.querySelector(".gift").innerHTML =
        "🎊";

    celebrate();
}
