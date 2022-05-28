const { readdirSync } = require('fs');

module.exports = (client, Discord) => {
    const commandFolder = readdirSync('./src/Commands');
    for (const folder of commandFolder) {
        const commandFiles = readdirSync(`./src/Commands/${folder}`).filter(files => files.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../Commands/${folder}/${file}`);
            client.commands.set(command.name, command)
        };
    };
};