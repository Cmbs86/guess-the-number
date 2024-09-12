# Guess The Number - JavaScript and TypeScript

A former vanilla JavaScript game where you guess a randomly generated number between 1 and 20, now enhanced with significant improvements, including a red screen for invalid guesses, light/dark mode, and, notably, TypeScript integration for improved type safety and maintainability

## Features

- **Basic Game Mechanics**: Guess the number and see if you’re correct!
- **Enhanced User Interface**: Added visual feedback and improved styling for a more engaging user experience.
- **Red Background on No Input or Invalid Guess**: If the input field is empty, or if the guessed number is below 1 or above 20, the background turns red, and an appropriate message is displayed to guide the user.
- **Dark and Light Mode**: Toggle between dark and light themes using a button. Your theme preference is saved and applied on page reload for a personalized experience.
- **TypeScript Integration**: The game logic has been enhanced with TypeScript for better type safety, code maintainability, and improved developer experience.

## Project Structure

- `index.html`: The HTML structure of the game.
- `style.css`: The CSS file for styling the game, including dark and light themes.
- `script.ts`: TypeScript file with the game logic with added type safety and maintainability.
- `theme.ts`: TypeScript file that manages the dark/light mode functionality with improved type safety.

## How to Run

1. **Clone the Repository**
   
   ```git clone https://github.com/yourusername/guess-the-number.git```
2. **Navigate to the Project Directory**
   
   ```cd guess-the-number```
   
3. **Instal Dependencies** 
   
   ```npm install```
4. **Start Development Server**
   
   ```npm start```
5. **Open `index.html`in your Browser**
    
   Simply open `index.html` file in a web browser to start playing.
   
## How it Works

- `Game Logic`: The game generates a random number between 1 and 20, and the player attempts to guess it. Feedback is provided based on the guess, and the score is updated accordingly.
- `No Input Handling`: If the input field is empty when "Check!" is pressed, the background color changes to red to alert the user.
- `Theme Switching`: Use the button with a moon/sun icon to toggle between dark and light modes. The selected theme is saved in `localStorage` and applied on page load.
- `TypeScript Integration`: TypeScript is used to enhance code quality and maintainability by adding type safety and improving the overall code structure.

## Key Code Files

- `index.html`: The main HTML file includes the structure for the game and the theme toggle button.
- `style.css`: Handles the styling of the game and includes CSS variables for dark and light themes.
- `script.ts`: TypeScript file with improved game logic and type safety.
- `theme.ts`: TypeScript file for managing dark and light mode functionality with enhanced type safety.


## Screenshots

![Screenshot 1](images/Shot1.png)
![Screenshot 2](images/Shot2.png)
![Screenshot 3](images/Shot3.png)
![Screenshot 4](images/Shot4.png)

## Known Issues

- Ensure that JavaScript is enabled in your browser for the game to function correctly.
- The theme toggle button may not work in some older browsers.

## License

- This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- Inspired by a Udemy class on JavaScript fundamentals.
- Font used: `Press Start 2P` from Google Fonts.
