document.addEventListener("DOMContentLoaded", () => {
    const egg = document.querySelector(".egg");
    const petsCount = document.getElementById("pets-count");

    let count = parseInt(localStorage.getItem("petCount")) || 0;
    let isBouncing = false;

    petsCount.textContent = count;

    function bounceEgg() {
        if (isBouncing) return;

        isBouncing = true;
        count++;
        petsCount.textContent = count;
        localStorage.setItem("petCount", count);

        egg.classList.add("bouncing");
        setTimeout(() => {
            egg.classList.remove("bouncing");
            isBouncing = false;
        }, 300);
    }

    egg.addEventListener("pointerdown", bounceEgg);
});
