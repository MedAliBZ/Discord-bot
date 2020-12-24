module.exports = {
    name: 'dicksize',
	description: "Get your dick's size (but not really) except for Haziyama it's real.",
	execute(message, args) {
        if(args[0]==='-h')
            message.reply(this.description);
        else if(args[0] !== "-h" && args!=false)
            message.reply("Wrong argument!")
        else {
            let dickSize=Math.floor(Math.random() * 30) + 1;
            if (message.author.username==="Haziyama"){
                message.reply("you don't even have one! :middle_finger:");
                return;
            }
            else if (message.author.username==="MAB"){
                message.reply("69 cm");
                message.channel.send('https://tenor.com/view/shock-surprised-open-eye-gif-9777993');
                return;
            }
            else if (dickSize>=15)
                message.reply(dickSize+" cm :eggplant:");
            else if (dickSize<15)
                message.reply(dickSize+" cm :pinching_hand:");
        }
	}
};