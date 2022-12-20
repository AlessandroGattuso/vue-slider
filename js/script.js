const { createApp } = Vue;

createApp({
  data(){
    return {
      itemActive: 0,
      autoplay: null,
      imagesArray: [
        {
            titolo: "Marvel's Spider-Man: Miles Morales",
            descrizione: "The latest adventure in the Spider-Man universe will build on and expand ‘Marvel’s Spider-Man’ through an all-new story. Players will experience the rise of Miles Morales as he masters new powers to become his own Spider-Man"
        },
        {
            titolo: "Ratchet & Clank: Rift Apart",
            descrizione: "Ratchet and Clank have been doing the whole “saving the universe” thing for quite some time, and their latest adventure, Rift Apart, amusingly acknowledges that right from the start"
        },
        {
            titolo: "Fortnite",
            descrizione: "Why you should play warzone 2 instead of Fortnite. Warzone is a grittier take on the Battle Royale, featuring Call of Duty's tight gunplay, and the interesting Gulag System.  Warzone is there for the hardcore gamers. It requires a lot more shooting skill, and in a lot of ways, more tactical skill"
        },
        {
            titolo: "Stray",
            descrizione: "Stray is a third-person cat adventure game set amidst the detailed, neon-lit alleys of a decaying cybercity and the murky environments of its seedy underbelly"
        },
        {
            titolo: "Marvel's Avengers",
            descrizione: "Marvel's Avengers combines an original story with single-player and co-operative gameplay in the definitive Avengers gaming experience. Assemble into teams of up to four players online, master extraordinary abilities, customize a growing roster of Heroes, and defend the Earth from escalating threats"
        }

      ]
    }
  },
  created() {
    this.addProperties();
    this.startAutoplay();
    window.addEventListener('keydown', this.right_down_arrow);
    window.addEventListener('keydown', this.left_up_arrow);
  },
  methods: {
    addProperties(){
      this.imagesArray.forEach((element, index) => {
        element.url = `./img/0${index+1}.webp`;
      });
    },
    scroll_right_down(){
      this.itemActive = (++this.itemActive > this.imagesArray.length - 1) ? 0 : this.itemActive;
    },
    scroll_left_up(){
      this.itemActive = (--this.itemActive < 0) ? this.imagesArray.length - 1 : this.itemActive;
    },
    goAtThatIndex(index){
      this.itemActive = index;
    },
    startAutoplay(){
      this.autoplay = setInterval(()=>this.scroll_right_down(), 3000);
    },
    stopAutoplay(){
      clearInterval(this.autoplay);
    },
    right_down_arrow(event){
      this.stopAutoplay();
      if(event.key == "ArrowRight" || event.key == "ArrowDown"){
        this.stopAutoplay();
        this.scroll_right_down();
        this.startAutoplay();
     }
    },
    left_up_arrow(event){
      if(event.key == "ArrowLeft" || event.key == "ArrowUp"){
        this.stopAutoplay();
        this.scroll_left_up();
        this.startAutoplay();
     }
    }
  }
}).mount('#app');