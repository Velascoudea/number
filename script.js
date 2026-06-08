const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const mensajes = [
    "❌ Respuesta incorrecta, intente nuevamente por favor.",
    "🤔 Creo que esa no era la respuesta...",
    "😑... intenta otra vez.",
    "⚠️ Error del sistema.",
    "😅 Esa opción no parece funcionar.",
    "🤩 Pista: la respuesta correcta empieza con S."
];

function goToQuestion() {
    screen1.classList.remove("active");
    screen2.classList.add("active");
}

function notAilin() {
    alert("Esta página fue creada especialmente para Naylin✨ ");
}

function showError() {

    const random =
        mensajes[Math.floor(Math.random() * mensajes.length)];

    document.getElementById("error").innerText = random;

    moveButton();

    const btnNo = document.getElementById("btnNo");

    btnNo.animate(
        [
            { transform: "translateX(0)" },
            { transform: "translateX(-8px)" },
            { transform: "translateX(8px)" },
            { transform: "translateX(-8px)" },
            { transform: "translateX(0)" }
        ],
        {
            duration: 350
        }
    );
}

function moveButton() {

    const btn = document.getElementById("btnNo");

    const x = Math.floor(Math.random() * 100) - 50;
    const y = Math.floor(Math.random() * 60) - 30;

    btn.style.transform =
        `translate(${x}px, ${y}px)`;
}

function acceptAnswer() {

    screen2.classList.remove("active");
    screen3.classList.add("active");

    setTimeout(() => {
        createConfetti();
    }, 300);
}

function createConfetti() {

    for(let i = 0; i < 25; i++){

        const heart = document.createElement("div");

        heart.innerHTML = "";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.top = "-20px";
        heart.style.fontSize =
            (Math.random() * 20 + 20) + "px";

        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        const duration =
            Math.random() * 3000 + 2000;

        heart.animate(
            [
                {
                    transform:"translateY(0)"
                },
                {
                    transform:"translateY(100vh)"
                }
            ],
            {
                duration:duration
            }
        );

        setTimeout(() => {
            heart.remove();
        }, duration);
    }
}