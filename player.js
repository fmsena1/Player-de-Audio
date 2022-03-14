window.player = {
     cover : document.querySelector(".card-image"),
     title : document.querySelector(".card-content h5"),
     artist :document.querySelector(".artist"),
     playPause:document.querySelector("#play-pause"),
     isPlaying:false,
     audioData:musicas,

     currentAudio : {
      }, 

      currentTrack:0,
      createAudioElement(audio){
        this.audio = new Audio(audio);
      },

      action(){
        this.playPause.onclick = () => this.audio.togglePlayPause();
      },

       start(){
         this.action.call(this);
        this.update();
        this.audio.onended = () => this.next();
        },

        play(){
          this.isPlaying = true;
          this.artist.play();

        },

        pause(){
          this.isPlaying = false;
          this.audio.pause();
        },

       togglePlayPause() {
          if(this.isPlaying){
            this.pause();
          }else {
            this.play();
          }

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
          this.createAudioElement.call(this, path(this.currentAudio.file));
          this.audio.src = path(this.currentAudio.file);
        },
        restart(){
          this.currentTrack=0;
            this.update();
        }
    };
     


 