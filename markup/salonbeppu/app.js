function closeMenuOnClick() {
    const hamchan = document.getElementById("hamchan");
    hamchan.checked = false;
}

const navLinks = document.querySelectorAll(".nav a");
navLinks.forEach((link) => {
    link.addEventListener("click", closeMenuOnClick);
});

