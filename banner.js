const bannerBackground = [
    'https://i.ibb.co/Jp6d37D/banner1.jpg',
    'https://i.ibb.co/QdXGfC1/banner2.jpg',
    'https://i.ibb.co/dgSRzz1/banner3.jpg',
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