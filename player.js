window.player = {
     cover : document.querySelector(".card-image"),
     title : document.querySelector(".card-content h5"),
     artist :document.querySelector(".artist"),
     audio : document.querySelector("audio"),
     data : {
        title:
          "Anjos",
        artist: "O Rappa",
        cover: "files/rappa.jpg",
        file: "music/Anjos.mp3"
      }, 
       start(){
        this.cover.style.background = `url('${this.data.cover}') no-repeat center center / cover`;
        this.title.innerText = this.data.title;
        this.artist.innerText = this.data.artist;
        this.audio.src = this.data.file;
    }
     
};

player.start();
 