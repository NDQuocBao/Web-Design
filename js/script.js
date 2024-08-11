
function init() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const newTransformValue = -currentIndex * 100;
        document.querySelector('.carousel-container').style.transform = `translateX(${newTransformValue}%)`;
    }

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 4000);

}

window.onscroll = function () {
    let gototop = document.getElementById("gototop");
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        gototop.style.display = "block";
    }
    else {
        gototop.style.display = "none";
    }
}

function goToTop() {
    let timer = setInterval(function () {
        document.documentElement.scrollTop -= 20;
        if (document.documentElement.scrollTop <= 0)
            clearInterval(timer);
    },10)   
}




