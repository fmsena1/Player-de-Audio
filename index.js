const cover = document.querySelector(".card-image");
const title = document.querySelector('.card-content h5');
const artist = document.querySelector('.artist');
const audio = document.querySelector('audio');

const data = {
    title:"Anjos",
    artist:"O Rappa",
    cover: "files/rappa.jpg",
    fileMusic:"Anjos.mp3"


};

cover.style.background = `url ('${data.cover}') no-repeat center center  / cover `;