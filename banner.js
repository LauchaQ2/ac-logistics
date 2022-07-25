const bannerBackground = [
    './assets/banner1.jpg',
    './assets/banner2.jpg',
    './assets/banner3.jpg',
]

const banner = document.getElementById('ban');
var index = 0;

const changeBackground = () =>{
    banner.style.backgroundImage = `url(${bannerBackground[index]})`

    if (index < 2){
        index++
    } else{
        index = 0;
    }

}

setInterval(() => {
   changeBackground() 
}, 3500);