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

The package has total 3 features (just click on any of them to know more) <br>
<a href = "https://www.npmjs.com/package/discord-censor#badwords-array"><img src="https://cdn.discordapp.com/emojis/762224193793818625.png?v=1" alt = "💜" width="20px"> &nbsp; An array for bad words (badwords)<br> </a>
<a href = "https://www.npmjs.com/package/discord-censor#check"><img src="https://cdn.discordapp.com/emojis/762224193793818625.png?v=1" alt = "💜" width="20px"> &nbsp; A function to check for those words in messages (check) </a> <br>
<a href = "https://www.npmjs.com/package/discord-censor#censor">
<img src="https://cdn.discordapp.com/emojis/762224193793818625.png?v=1" alt = "💜" width="20px"> &nbsp; A function to replace bad words from messages (censor)<br></a>

<a href = "https://www.npmjs.com/package/discord-censor#usage-in-discordjs-">This package is tailored to be used with discord.js </a>

# Usage <img src="https://cdn.discordapp.com/emojis/757399420319825950.png?v=1" alt = "✏" width="35px">

## Badwords (array)
You might want to interact with the badwords array to change it's content if needed. <br>
By default, it has 500 about bad words stored in it <br>
To interact with the array, see the code example below <br>
```js
const censor = require('discord-censor');

console.log(censor.badwords) //prints all the badwords in the array

const index = censor.badwords.indexOf('Word'); // Replace word with any word you would like to remove from array
censor.badwords.splice(index, 1); //Removes 'Word' from array
```

## Check

It is a very handy function and returns value as true or false <br>
To understand it better, see the code example below <br>

```js
const censor = require('discord-censor');

const CurseOrNot = censor.check("Is it a curse?")
console.log(CurseOrNot) //Prints False
```

```js
const censor = require('discord-censor');

const CurseOrNot = censor.check("Is it a fuckin curse?")
console.log(CurseOrNot) //Prints true
```

## Censor

This function will check for curses and replaces them by itself <br>
It has two parameters <br>
```js
const censor = require('discord-censor');

censor.censor('The string you want to censor', 'censored word will be replaced by this (This parameter is optional)')
```
For more information, let's see the example code below <br>
```js
const censor = require('discord-censor');

const censored = censor.censor('I am fuckin cursing right now', '🤬')
console.log(censored) //prints "I am 🤬 cursing right now"
```

# Usage in Discord.Js <img src="https://discord.js.org/static/logo-square.png" alt = "✏" width="35px">

Just combine the codes above and use the module in your discord bot. <br>
For more information, let's see the example code below <br>
```js
const censor = require('discord-censor');

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
    if(censor.check(message.content) == true){				      //Check if message has curses or not
        const censored = censor.censor(message.content, '🤬')   	     //Censor the message if they have curses
        message.channel.send(`${message.author.username} said ${censored}`) //Send the censored version of message
        message.delete()        					   //Delete the original of message version which has curses
    }                           					  //That's all you have to do to censor messages in discord 💜
});

client.login('your-token-goes-here');
```


# Like the package? <img src="https://cdn.discordapp.com/emojis/599598716521021441.gif?v=1" alt = "✏" width="35px">
<a href = "https://www.buymeacoffee.com/TheRamann">
Support the creator here
</a>
