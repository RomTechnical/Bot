const Discord = require('discord.js');


var bot = new Discord.Client();
var prefix = ("+");
var randnum = 0; 


bot.on('ready', () => {
    bot.user.setPresence({ game: {name: '|+help|', type : 0}})
    console.log('Bot Ready !');
});

bot.login('MzkyNjE3MzI0OTIzODQ2NjU2.DRp7ow.h5HRZXAFEpgxroQIMUW4IKkHA-A');


bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log("ping pong");
    }
});
bot.on('message', message => {
        if (message.content === "mc"){
            message.reply("Voila Mon Frere [https://discordapp.com/oauth2/authorize?client_id=393068614137151498&permissions=8&scope=bot]");
            console.log("mc");
        }
});

bot.on('message', message => {
    if (message.content === "sa va"){
        message.reply("Oui Et toi");
        console.log("sv");
    }
});
bot.on('message', message => {
    if (message.content === "ca va"){
        message.reply("Oui Et toi");
        console.log("cv");
    }
});
bot.on('message', message => {
    if (message.content === "cv"){
        message.reply("Oui Et toi");
        console.log("cv1");
    }
});
bot.on('message', message => {
    if (message.content === "sv"){
        message.reply("Oui Et toi");
        console.log("sv1");
    }
});
bot.on('message', message => {
    if (message.content === "Salut"){
        message.reply("Salutations");
        console.log("sv1");
    }
});
bot.on('message', message => {
    if (message.content === "2+2"){
        message.reply("4");
        console.log("2+2");
    }
});
bot.on('message', message => {
    if (message.content === "1+1"){
        message.reply("2");
        console.log("1+1");
    }
});
bot.on('message', message => {
    if (message.content === "10+10"){
        message.reply("20");
        console.log("10+10");
    }
});
    bot.on('message', message => {
        if (message.content === "create by"){
            message.reply("created by \Users\<ROMAIN>");
            console.log("CREATEDBY");
        }
    });
    bot.on('message', message => {
        if (message.content === "salut"){
            message.reply("PRÉSENT !");
            console.log("present");
        }
    });
    bot.on('message', message => {
        if (message.content === "tfk"){
            message.reply("Je Ne Suis Q'un Robot Je Ne Fait Pas Grand Chose");
            console.log("tfk");
        }
    });
    bot.on('message', message => {
        if (message.content === "Mr_Rayzox"){
            message.reply("@Mr_Rayzox#4997 Est Appelé A L'accueil");
            console.log("tfk");
        }
    });
        bot.on('message', message => {
            if (message.content === "invite"){
                message.reply("Invite Moi Sur Ton Serveur [https://discordapp.com/api/oauth2/authorize?client_id=392617324923846656&permissions=8&scope=bot]");
                console.log("invite");
            }
            if (message.content === "lol"){
                message.channel.sendMessage("Ya Quoi De Marrant");
            }
            if (message.content === "Swallalala"){
                message.channel.sendMessage("Shimmy shimmy yay, shimmy yay, shimmy ya");
            }
            if (message.content === "@everyone"){
                message.channel.sendMessage("Venez @everyone");
            }
            if (message.content === "I'm Bot"){
                var help_embed = new Discord.RichEmbed()
                .setColor('#00FFFF')
                .addField("Oui ?", "Fais help Pour Plus D'Info")
                message.channel.sendEmbed(help_embed)
                message.reply("Fin De Discussion")
                console.log("help");
            }


        if (message.content === prefix + "help"){
            var help_embed = new Discord.RichEmbed()
            .setColor('#0085FA')
            .addField("help", "Affiche Les Commandes ")
            .addField("ping", "Le Bot Vous Répond pong ")
            .addField("invite", "Invite Moi Sur Ton Serveur Discord")
            .addField("tfk", "Le Bot Vous Repond Qu'il N'est Qu'un Robot")
            .addField("sa va", "Le Bot Vous Repond Oui Et Toi")
            message.channel.sendEmbed(help_embed);
            //message.channel.sendMessage("Voici Les Commandes Du Bot :\n /help Pour Afficher Les Commandes");
            console.log("help");
        }
    

   


});
