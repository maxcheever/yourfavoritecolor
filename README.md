# Your Favorite Color
https://maxcheever.github.io/yourfavoritecolor/

An Interactive piece meant to explore identity. The viewer is prompted to enter a name, which is transformed into a 224 bit hash by the Keccak cryptographic hash algorithm. The first 24 bits of this hash are used to populate the box in the center of the screen with a color (hex color codes are 24 bits). The "collective identity" box in the top right corner is set to the hex code #000000 on initial button click. After the viewer enters another name (friend, celebrity, teacher?), the "collective identity" box becomes their "favorite color" from before. Each subsequent name entered into the name input is stored with the first two states of the "favorite color" box. Each time the button is pressed, the most common bit at each index (0-24) for each previous 24 bit hash is selected to make the "collective identity" hash. If the page is refreshed (or a different viewer visits the site), the state of the boxes is reset. This makes each viewers experience with the piece unique.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
