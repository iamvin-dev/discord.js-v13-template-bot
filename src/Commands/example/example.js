const { MessageEmbed } = require('discord.js');
const config = require('../../../config.json');

module.exports = {
    name: 'example',
    permissions: [],
    cooldown: 1,

    async execute(message, args, commandName, client, Discord) {
        
        const example = new MessageEmbed()
        .setTitle('Example Command')
        .setColor(config.embed_color)
        .setDescription('Hey this is an example command!')

        message.reply({ embeds: [example] })

    }
};