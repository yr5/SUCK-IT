
const Discord = require('discord.js');
const client = new Discord.Client();

console.log("The Welcome Is ready");
 






client.on('message', message => {
      var ms = 12000;
        let timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`الله اكبر`,`الحمدالله`,`سبحان الله`]
if (message.content === "اجر") {
  
       setInterval (function () {
          message.channel.send(`**${words[Math.floor(Math.random() * words.length)]}**`) 
       
      }, ms); 
    }
});





client.login(process.env.AKA)
