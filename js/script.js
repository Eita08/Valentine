document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".step").forEach((step) => {
        step.style.display = "none"; // Oculta todos los pasos
    });
    document.getElementById('step1').style.display = "block"; // Solo muestra el primero
});

// Create hearts effect
 function createHearts() {
    const hearts = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHearts, 300);

// Move "No" button function
function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

// Navigation functions
function goToStep2() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step1').style.display = "none"; 
    document.getElementById('step2').style.display = "block"; 
    document.getElementById('step2').classList.add('active'); 
}

function goToStep3() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step2').style.display = "none";
    document.getElementById('step3').style.display = "block";
    document.getElementById('step3').classList.add('active');
}

function finalStep() {
    document.getElementById('step3').classList.remove('active');
    document.getElementById('step3').style.display = "none";
    document.querySelector('.final-message').style.display = 'block';
    document.querySelector('.whatsapp-btn').style.display = 'inline-block';
}
