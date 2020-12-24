module.exports={
    name: "creator",
    description: "The creator of this bot",
    execute(message,args){
        if(args[0] !== "-h" && args!=false)
            message.reply("Wrong argument!")
        else 
            message.channel.send("Created by MAB, find me @ https://github.com/MohamedAliBouzaiene");
    }
};