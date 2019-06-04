const Discord = require('discord.js');
const bot = new Discord.Client ();

bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('guildMemberAdd', member => {
   member.send("Welcome to the server!");
   console.log(`${member.user.username}has joined`);

});

bot.login('NTc2NDE3NjExMTMxMjU2ODcz.XNrygQ.8MVVmBtgOVY4da3FJCP3_JY6xcM');