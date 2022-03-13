window.player = {
     cover : document.querySelector(".card-image"),
     title : document.querySelector(".card-content h5"),
     artist :document.querySelector(".artist"),
     audio : document.querySelector("audio"),
     audioData:musicas,
     currentAudio : {
      }, 
      currentTrack:0,
       start(){
        this.update();
       
        this.audio.onended = () => this.next();
        },
        next(){
          this.currentTrack++
          if (this.currentTrack == this.audioData.length) this.restart();
           
          this.update();
          
        },
        update(){
          this.currentAudio = this.audioData[this.currentTrack];
          this.cover.style.background = `url('${path(
            this.currentAudio.cover
          )}') no-repeat center center / cover`;
          this.title.innerText = this.currentAudio.title;
          this.artist.innerText = this.currentAudio.artist;
          this.audio.src = path(this.currentAudio.file);
        },
        restart(){
          this.currentTrack=0;
            this.update();
        }
    };
     


 