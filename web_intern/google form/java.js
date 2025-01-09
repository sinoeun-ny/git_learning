const dots = document.querySelectorAll(".dot");

dots.forEach((e) => {  // Fixed 'foreach' to 'forEach'
    e.addEventListener('click', () => {
        dots.forEach((v) => {
            v.classList.remove("active"); // Fixed 'classlist' to 'classList'
        });
        e.classList.add("active");
    });
});