

const hamburger = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-list");
navMenu.style.maxHeight = "0px";

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    if(navMenu.style.maxHeight == "0px")
    {
        navMenu.style.maxHeight = "300px";
    }
    else{
        navMenu.style.maxHeight = "0px";
    }
});

function showCityInfo(cityId) {

    const cityContainers = document.querySelectorAll('.cityCard');
    cityContainers.forEach(container => container.style.display = 'none');
    
    const selectedCity = document.getElementById(cityId);
    selectedCity.style.display = 'flex';
}

