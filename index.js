const fs = require('fs')
const Discord = require('discord.js');
const {prefix,token} = require('./config.json');
const Client = require('./client/Client');	

const client = new Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
	const args = message.content.slice(prefix.length).split(" ");
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);


	if (!message.content.startsWith(prefix) || message.author.bot)
		return;
	else if (!client.commands.has(commandName)){
		message.reply('Barra nayek ekteb bel gdee!!');
		return;
	}
	else{
		try {
			if(commandName == "ban" || commandName == "userinfo") {
				command.execute(message, client);
			} else if (commandName == "play" || commandName == "stop" || commandName == "skip" || commandName == "nowplaying"){
				command.execute(message);
			}
			else
				command.execute(message,args);
		} catch (error) {
			console.error(error);
			message.reply('There was an error trying to execute that command!');
		}
	}

});


client.login(token);