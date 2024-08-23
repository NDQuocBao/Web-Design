
window.addEventListener("load", function () {
    /*ẩn hiện menu*/
    var toggle = document.getElementById("toggle");
    toggle.onclick = function () {
        var menu = document.querySelector(".navbars");
        menu.classList.toggle("show")
    }

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

    
});

window.onscroll = function () {
    var gototop = document.getElementById("gototop");
    var menu = document.getElementById("menu");
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        //Go to top
        gototop.style.display = "block";
        //Menu
        menu.style.position = "fixed";
        menu.style.zIndex = 9;
        menu.style.top = 0;
        menu.style.left = 0;
        menu.style.right = 0;
        menu.style.opacity = 0.9;
    }
    else {
        gototop.style.display = "none";

        menu.style.position = "relative";
    }
}

function goToTop() {
    let timer = setInterval(function () {
        document.documentElement.scrollTop -= 20;
        if (document.documentElement.scrollTop <= 0)
            clearInterval(timer);
    },10)   
}




