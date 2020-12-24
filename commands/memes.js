const fetch  = require("node-fetch")

module.exports = {
    
    name: "meme",
    description: "Generate a random meme.",
    execute(message, args) {
        let meme;
        if (args[0] === '-h')
            message.reply(this.description);
        else if (args[0] !== "-h" && args != false)
            message.reply("Wrong argument!")
        else {
            fetch("https://meme-api.herokuapp.com/gimme")
                .then(res => { return res.json() })
                .then(data => {
                    message.channel.send(data.preview[data.preview.length-1]);
                })
        }
    }
};