

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
window.onload = function() {
    makeMapResponsive();
    window.addEventListener('resize', makeMapResponsive);
};

function makeMapResponsive() {
    var img = document.querySelector('.MapImg');
    var originalWidth = 681; 
    var originalHeight = 414; 
    var newWidth = img.clientWidth;
    var newHeight = img.clientHeight;
    
    var widthRatio = newWidth / originalWidth;
    var heightRatio = newHeight / originalHeight;

    updateMapArea('Paphos', [50,280,80], widthRatio, heightRatio);
    updateMapArea('Limassol', [133, 310, 80], widthRatio, heightRatio);
    updateMapArea('Nicosia', [179, 239, 80], widthRatio, heightRatio);
    updateMapArea('Larnaka', [265, 286, 80], widthRatio, heightRatio);
}

function updateMapArea(areaName, coords, widthRatio, heightRatio) {
    var area = document.querySelector(`area[alt='${areaName}']`);
    var scaledCoords = coords.map((coord, index) => {
        if (index % 2 === 0) {
            return Math.round(coord * widthRatio);
        } else {
            return Math.round(coord * heightRatio);
        }
    });
    area.coords = scaledCoords.join(',');
}

function showCityInfo(cityId) {

    const cityContainers = document.querySelectorAll('.cityCard');
    cityContainers.forEach(container => container.style.display = 'none');
    
    const selectedCity = document.getElementById(cityId);
    selectedCity.style.display = 'flex';
}

