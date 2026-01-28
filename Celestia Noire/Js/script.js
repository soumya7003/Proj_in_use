// navabar
document.querySelector(".toggler").addEventListener("click", function () {
    const menu = document.querySelector(".nav-wrapper-main .menu-part");
    const icon = document.querySelector(".toggler i");

    menu.classList.toggle("d-menu");

    // Toggle icon
    if (menu.classList.contains("d-menu")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark"); // cross
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars"); // bars
    }
});

// active navigation highlighting + hide menu after click
let navlinks = document.querySelectorAll(".menu-part ul li a");
let menuPart = document.querySelector(".nav-wrapper-main .menu-part");
let toggleIcon = document.querySelector(".toggler i");

for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", function (e) {

        for (let j = 0; j < navlinks.length; j++) {
            navlinks[j].classList.remove("activee");
        }
        this.classList.add("activee");


        if (this.id !== "explore") {
            menuPart.classList.remove("d-menu"); // hide menu
            toggleIcon.classList.remove("fa-xmark");
            toggleIcon.classList.add("fa-bars");
        }
    });
}



//sticky-navbar on tablet screen 
let navBar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 50) {
        navBar.classList.add("sticky");
        navBar.style.padding = "25px 0";
        navBar.style.backgroundColor = "#000";
        navBar.style.borderBottom = "1px solid #ffffff33";
    }
    else {
        navBar.classList.remove("sticky");
        navBar.style.padding = "";
        navBar.style.backgroundColor = "";
        navBar.style.borderBottom = "";
    }
});





const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");
const loginForm = document.getElementById("loginForm");

// Open modal
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "flex";
});

// Close modal
closeModal.addEventListener("click", () => {
    loginModal.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = "none";
    }
});

// Handle form submit
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Simple email regex check
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    if (password.length < 5) {
        alert("Password must be at least 5 characters long!");
        return;
    }

    // Redirect if valid
    alert("Login successful!");
    window.location.href = "https://logixor.in";
});


$(document).ready(function () {
    $("#owlone").owlCarousel({
        items: 3,
        loop: true,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 3000, // 3s between slides
        autoplaySpeed: 800,    // smooth transition speed
        smartSpeed: 800,       // smooth speed for manual nav
        nav: true,
        dots: false,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        autoplayHoverPause: true, // pause on hover
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            991: {
                items: 3,
            }
        }
    });

    $("#owl-two").owlCarousel({
        items: 3,
        loop: true,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 3000, // 3s between slides
        autoplaySpeed: 800,    // smooth transition speed
        smartSpeed: 800,       // smooth speed for manual nav
        nav: true,
        dots: false,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        autoplayHoverPause: true, // pause on hover
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            991: {
                items: 3,
            }
        }
    });

    $("#owl-three").owlCarousel({
        items: 3,
        loop: true,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 3000, // 3s between slides
        autoplaySpeed: 800,    // smooth transition speed
        smartSpeed: 800,       // smooth speed for manual nav
        nav: true,
        dots: false,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        autoplayHoverPause: true, // pause on hover
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            991: {
                items: 3,
            }
        }
    });
});

//subscribeValidation

document.getElementById("subscribeBtn").addEventListener("click", function () {

    let emailInput = document.getElementById("emailInput");
    let email = emailInput.value.trim();
    let msgbox = document.getElementById("msg");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        msgbox.innerText = "Please enter your email address.";
        msgbox.style.color = "red";
        msgbox.style.display = "block";
    } else if (!emailPattern.test(email)) {
        msgbox.textContent = "Please enter a valid email address!";
        msgbox.style.color = "red";
        msgbox.style.display = "block";
    } else {
        msgbox.textContent = "Thank you for subscribing!";
        msgbox.style.color = "green";
        msgbox.style.display = "block";
        emailInput.value = "";
    }
});



document.querySelectorAll(".home-sec-two .card .second-univ-btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();


        let card = btn.closest(".card");
        let text = card.querySelector(".card-textt");
        text.classList.toggle("text-d-block")
    })
})

// Scroll Event Based UI Interaction for dynamic experience


let btn = document.getElementById("scrollBtn");

window.addEventListener("scroll", function () {

    //page scroll
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    //displayarea height
    let windowHeight = window.innerHeight;
    // total document height
    let docHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= docHeight - 10) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // ✅ smooth animation
    });
});


// document.getElementById("explore").addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("hello");
// });