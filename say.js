const Discord = require('discord.js')
const { EmbedBuilder } = require("discord.js");

module.exports = {

    name: "say",
    description: "Permet d'envoyer un message custom",
    permission: Discord.PermissionFlagsBits.Administrator,
    dm: false,
    category: "Autres",
    options: [
        {
            type: "string",
            name: "message",
            description: "Le message a envoyer.",
            required: true,
            autocomplete: false
        }
    ],

    async run(enfant, message, args, emoji) {
        message.reply({ content: 'Message envoyer !', ephemeral: true });
        let msg = args.getString("message");

        message.channel.send(`${msg}`)
    }
}