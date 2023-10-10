const btnToggle = document.querySelector(".btn-menu"), 
    menu = document.querySelectorAll(".container-menu a"),
    navigationText = document.querySelector(".navigation-text h2")

const navigationTextList = [{class: "fa-gamepad", text: "waleedbai"}, 
{ class: "fa-circle-user", text: "shmooser" }, 
{ class: "fa-gear", text: "creedel" }, 
{ class: "fa-envelope", text: "envelopage" }];

function displayController(hidden, e) {
    if (hidden) {
        e.classList.remove("visible");
        e.classList.add("hidden");
    } else {
        e.classList.remove("hidden");
        e.classList.add("visible");
    }
}

btnToggle.addEventListener("click", () => {
    if (!btnToggle.classList.contains("active")) {
        displayController(true, circle1);
        displayController(true, circle2);
        btnToggle.classList.add("active");
        menu[0].style.transform = "translate(2.8em, 2.8em)";
        menu[1].style.transform = "translate(-2.8em, 2.8em)";
        menu[2].style.transform = "translate(-2.8em, -2.8em)";
        menu[3].style.transform = "translate(2.8em, -2.8em)";
    } else{
        menu.forEach((item) => {
            item.style.transform = "translate(0,0)"
        })
        btnToggle.classList.remove("active");
        displayController(false, circle1);
        displayController(false, circle2);
    }
})

menu.forEach(menuItem => {
    menuItem.addEventListener("mouseover", function(event) {
        displayController(false, navigationText);
        for (let i = 0; i < navigationTextList.length; i++) {
            if (event.target.classList.contains(navigationTextList[i].class)) {
                navigationText.innerHTML = navigationTextList[i].text;
            }
        }
    })
    menuItem.addEventListener("mouseout", function(event) {
        displayController(true, navigationText);
    })
})