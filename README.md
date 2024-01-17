# Footle - Footballer Guessing Game

Footle is a footballer guessing game, similar to the concept of Worlde.
The game allows users 10 guesses to work out the mystery footballer. Currently the game is limited to Premier League footballers, including all 20 teams and their full squads. 
This game was made using React.js, CSS and utilised my Web-Scraper, which gathers data from www.transfermarkt.co.uk and stores within a MongoDB database. 
My game was made during Summer 2023, as a solo project. I chose to make a footballer guessing game because football is something I am very passionate about, and it highly interests me.

## How the game works
After running the game, by executing ```npm start``` in the terminal, a random player from within the database is chosen to by the mystery player for the game.

Then, the game begins. You are given 10 guesses to work out the mystery football player.
The game considers 5 attributes about the players; Age, Position, Foot, Nation and Club.
When a guess is made, if an attribute matches one of the mystery player, that tile will become green.

For example, guessing Jarrod Bowen in this game, results in: __

![image](https://github.com/Danielx2003/Footle/assets/70431670/44e50cb6-62a2-484a-9757-6104c2f93a7b)


This indicates that there are 4. The player is younger than 26, a forward, left footed, from England, and a West Ham player.

Guessing Divin Mubama this time, results in: __

![image](https://github.com/Danielx2003/Footle/assets/70431670/967c05b7-8c38-4303-96e6-416b470a7d4f)


All attributes were correct, so the game is won!

The game ends when the user either guesses the correct player, or reaches a total of 10 guesses.
The program can be run again by closing the browser, and running ```npm start``` in the terminal. This will select a random player from the database, and the game can be played again!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

ool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
