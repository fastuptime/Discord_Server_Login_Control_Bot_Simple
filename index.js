const { Client, Collection, GatewayIntentBits, Events } = require('discord.js');
const { StarDB } = require('stardb');
const db = new StarDB('data.json');

const config = require('./config.js');

const client = new Client({
    intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    ]
});

client.once(Events.ClientReady, async readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}`);
    if (!await db.has('users')) db.set('users', []);
});


client.on(Events.MessageCreate, async (message) => {
    if (!message.content.startsWith(config.prefix)) return;

    const [command, ...args] = message.content.slice(config.prefix.length).split(' ');
    const users = await db.get('users');
    const user = users.find(u => u.id === message.author.id);
    if (!user) {
        message.reply({ content: 'First you need to login to use the bot!' });

        message.member.kick({ reason: 'Not logged in' }).catch(console.error);

        return;
    }

    if (Date.now() - user.date > 7200000) {
        message.reply({ content: 'You have been kicked due to inactivity!' });
        await db.set('users', users.filter(u => u.id !== message.author.id));
        message.member.kick({ reason: 'Inactivity' }).catch(console.error);
        return;
    }

    if (command === 'login') {
        if (args.join(' ') === config.password) {
            message.reply({ content: 'You have successfully logged in!' });
            await db.set('users', users.filter(u => u.id !== message.author.id));
        } else {
            message.reply({ content: 'Invalid password!' });
            setTimeout(async () => {
                message.member.kick({ reason: 'Invalid password' }).catch(console.error);
                await db.set('users', users.filter(u => u.id !== message.author.id));
            }, 3000);
        }
    } else message.reply({ content: 'Invalid command!' });
});

client.on(Events.GuildMemberAdd, async (member) => {
    const users = await db.get('users');
    const user = users.find(u => u.id === member.id);
    if (!user) {
        await db.push('users', { id: member.id, date: Date.now() });
    } else {
        await db.set('users', users.filter(u => u.id !== member.id));
        await db.push('users', { id: member.id, date: Date.now() });
    }
});

setInterval(async () => {
    const users = await db.get('users');
    const guild = await client.guilds.fetch(config.guildID);
    if (!guild) return;
    if (users.length < 1) return;
    for (const user of users) {
        if (Date.now() - user.date > 7200000) {
            const member = await guild.members.fetch(user.id);
            member.kick({ reason: 'Inactivity' }).catch(console.error);
            await db.set('users', users.filter(u => u.id !== user.id));
        }
    }
}, 60000);


client.login(config.token).catch(console.error);