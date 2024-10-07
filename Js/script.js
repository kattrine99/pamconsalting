const hamburger = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-list");


hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

function showCityInfo(cityId) {

    const cityContainers = document.querySelectorAll('.cityCard');
    cityContainers.forEach(container => container.style.display = 'none');
    
    const selectedCity = document.getElementById(cityId);
    selectedCity.style.display = 'flex';
}

