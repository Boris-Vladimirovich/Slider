const images = [
    'https://wallpaperscraft.com/image/mountains_peaks_clouds_116642_1024x768.jpg',
    'https://wallpaperscraft.com/image/trees_forest_railway_116640_1024x768.jpg',
    'https://wallpaperscraft.com/image/birds_sky_flight_silhouettes_116639_1024x768.jpg',
    'https://wallpaperscraft.com/image/waterfall_current_water_breakage_116634_1024x768.jpg',
    'https://wallpaperscraft.com/image/mountains_snow_sky_night_116631_1024x768.jpg',
    'https://wallpaperscraft.com/image/glacier_argentina_el_calafate_moreno_116627_1024x768.jpg'
];

let fullWidth = 0;
let displayed = 0;
let slideWidth = 0;
let left = 0;
const stripe = document.getElementById('stripe');

images.forEach(el => {
    let img = document.createElement('img');
    img.src = el;
    stripe.appendChild(img);
});

const slides = document.querySelectorAll('img');

recountWidth = (width) => {
    fullWidth = width;

    if (fullWidth < 768){
        displayed = 1;
    }else if(fullWidth < 1200){
        displayed = 2;
    }else{
        displayed = 3;
    }

    slideWidth = fullWidth/displayed;
    stripe.style.width = slideWidth * images.length + 'px';
    slides.forEach(el => {el.style.width = slideWidth + 'px'});
};

recountWidth(window.innerWidth);

function prev() {
    left = left + slideWidth;
    if(left > 0){
        left = -(images.length - displayed)*slideWidth;
    }
    stripe.style.left = left + 'px';
}

function next() {
    left = left - slideWidth;
    if(left < -(images.length - displayed)*slideWidth){
        left = 0;
    }
    stripe.style.left = left + 'px';
}

window.onresize = () => {
    left = 0;
    stripe.style.left = left + 'px';
    recountWidth(window.innerWidth)
};