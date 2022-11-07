class Song {
    constructor(name, genre) {
      this.name = name;
      this.genre = genre;
    }
    describe() {
      return `${this.name} is a ${this.genre}.`;
    }
  }
  
  class Music {
    constructor(name) {
      this.name = name;
      this.Song = [];
    }
  
    addSong(Song) {
      if (Song instanceof Song) {
        this.Song.push(Song);
      } else {
        throw new Error(
          `You can only add an instance of Song. Argument is not a Song. ${Song}`
        );
      }
    }
  
    describe() {
      return `${this.name} has ${this.Song.length} Song.`;
    }
  }
  
  class Menu {
    constructor() {
      this.Music = [];
      this.selectedMusic = null;
    }
  
    start() {
      let selection = this.showMainMenuOptions();
      while (selection != 5) {
        switch (selection) {
          case "1":
            this.createMusic();
            break;
          case "2":
            this.viewMusic();
            break;
          case "3":
            this.deleteMusic();
            break;
          case "4":
            this.displayMusic();
            break;
          default:
            selection = 0;
        }
        selection = this.showMainMenuOptions();
      }
  
      alert("Peace!");
    }
  
    showMainMenuOptions() {
      return prompt(`
          1. Add New music
          2. View music
          3. Delete music
          4. Display all music
          5. Exit
          `);
    }
  
    showMusicMenuOptions(MusicInfo) {
      return prompt(`
          1. Add a song
          2. Delete a song
          3. Go Back
          ---------------
          ${MusicInfo}
          `);
    }
  
    displayMusic() {
      let MusicString = "";
      for (let i = 0; i < this.Music.length; i++) {
        MusicString += i + ". " + this.Music[i].name + "\n";
      }
      alert(MusicString);
    }
  
    createMusic() {
      let name = prompt("Enter name for new Music:");
      this.Music.push(new Music(name));
    }
  
    deleteMusic() {
      let index = prompt("Select Music to delete");
      if (index > -1 && index < this.Music.length) {
        this.Music.splice(index, 1);
      }
    }
  
    viewMusic() {
      let index = prompt("Enter the index of the Music you wish to view: ");
      if (index > -1 && index < this.Music.length) {
        this.selectedMusic = this.Music[index];
        let description = "Music Name: " + this.selectedMusic.name + "\n";
  
        for (let i = 0; i < this.selectedMusic.Song.length; i++) {
          description +=
            '             ' + i +
            ". " +
            this.selectedMusic.Song[i].name +
            " - " +
            this.selectedMusic.Song[i].genre +
            "\n";
        }
  
        let selection = this.showMusicMenuOptions(description);
        switch (selection) {
          case "1":
            this.createSong();
            break;
          case "2":
            this.deleteSong();
        }
      }
    }
    createSong() {
      let name = prompt("Enter a new song:");
      let genre = prompt("Enter a genre for the new song:");
      this.selectedMusic.Song.push(new Song(name, genre));
    }
  
    deleteSong() {
      let index = prompt("Select index of the song you would like to delete:");
      if (index > -1 && index < this.selectedMusic.Song.length) {
        this.selectedMusic.Song.splice(index, 1);
      }
    }
  }
  
  let menu = new Menu();
  menu.start();