# clicky-magee


## Clicky-Magee is a fun matching game where you try and click each image displayed once, and as soon as you click the same image twice, the game ends.

## Components:
 ### the game is divided into 6 components:
 - Header
 - Footer
 - Navbar
 - Scoreboard
 - Wrapper
 - Gamecard
 
### Gameplay
 #### Each time you click an image, the game will shuffle each of the images displayed. 
 ```
 shuffle = (arr) => {
        let j, x, i;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
        return arr;
    }
 ```
 #### If you clicked the same image as previously clicked, your game will notify you that the game is over, and restart your score.
 ```
     handleClick = event => {
        this.setState({ winLossMessage: ''})
        let newClickedImage = [];
        newClickedImage.push(event.target.id)
        this.setState ({
            currentScore: this.state.currentScore + 1,
            clicked: newClickedImage
        });
        this.rndDisplayOrder();
    }
  ```
 #### If you beat out your previous high score, the game will update the highscore section of the scoreboard, and notify you that you set a new highscore
 ```
 if (this.state.clicked.includes(event.target.id)) {
      this.handleReset();
      if (this.state.currentScore > this.state.topScore) {
          this.setState({
              topScore: this.state.currentScore,
              winLossMessage: 'Nice, you set a new record!'
          })
      } else {
          this.setState({
              topScore: this.state.topScore,
              winLossMessage: 'Bummer, looks like you lost. Let\'s try again.'
          })
      }
  }
 ```
 ## Technologies used:
 - React.js
 - Javascript
 - Bootstrap
