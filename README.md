# Discord-Censor

People curse too much in your discord server? <br>
Use this npm package to censor their messages and keep your discord server friendly for all ages (unless you wanted to ....)
# Installation <img src="https://cdn.discordapp.com/emojis/316264057659326464.png?v=1" alt = "🖥" width="35px">
<b><a href = "https://www.npmjs.com/package/discord-censor"> npm: </a><b> 
<p>
<code> npm i discord-censor </code>
    <p><b><a href = "https://classic.yarnpkg.com/en/package/discord-censor"> yarn: </a></p>
        <code>yarn add discord-censor </code>

# Features

The package has total 3 features <br>
<a href = "https://www.npmjs.com/package/discord-censor##badwords"><img src="https://cdn.discordapp.com/emojis/762224193793818625.png?v=1" alt = "💜" width="20px">An array for bad words (badwords)<br> </a>
<a href = "https://www.npmjs.com/package/discord-censor##check"><img src="https://cdn.discordapp.com/emojis/762224193793818625.png?v=1" alt = "💜" width="20px">A function to check for those words in messages (check) </a> <br>
<a href = "https://www.npmjs.com/package/discord-censor##censor">
<img src="https://cdn.discordapp.com/emojis/762224193793818625.png?v=1" alt = "💜" width="20px">A function to replace bad words from messages (censor)<br></a>

# Usage <img src="https://cdn.discordapp.com/emojis/757399420319825950.png?v=1" alt = "✏" width="35px">

## Badwords (array)
You might want to interact with the badwords array to change it's content if needed. <br>
By default, it has 500 about bad words stored in it <br>
To interact with the array, see the code example below <br>
```js
const censor = require(discord-censor);

console.log(censor.badwords) //prints all the badwords in the array

const index = censor.badwords.indexOf('Word'); // Replace word with any word you would like to remove from array
censor.badwords.splice(index, 1); //Removes 'Word' from array
```

## Check

It is a very handy function and returns value as true or false <br>
To understand it better, see the code example below <br>

```js
const censor = require(discord-censor);

const CurseOrNot = censor.check("Is it a curse?")
console.log(CurseOrNot) //Prints False
```

```js
const censor = require(discord-censor);

const CurseOrNot = censor.check("Is it a fuckin curse?")
console.log(CurseOrNot) //Prints true
```

## Censor

This function will check for curses and replaces them by itself <br>
It has two parameters <br>
```js
const censor = require(discord-censor);

censor.censor('The string you want to censor', 'censored word will be replaced by this (This parameter is optional)')
```
For more information, let's see the example code below <br>
```js
const censor = require(discord-censor);

const censored = censor.censor('I am fuckin cursing right now', '🤬')
console.log(censored) //prints "I am 🤬 cursing right now"
```

# Like the package? <img src="https://cdn.discordapp.com/emojis/599598716521021441.gif?v=1" alt = "✏" width="35px">
<a href = "https://www.buymeacoffee.com/TheRamann">
Support the creator here
</a>