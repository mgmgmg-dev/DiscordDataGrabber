// By running this code you certify to have read and accepted the file "DISCLAIMER.txt".
// If it's not there, please don't run this code.

// Importing libraries
const Discord = require("discord.js")
const DiscordUser = require("discord-user-bots");
const { Intents } = require("discord.js")
const fs = require("fs");

// Importing CONFIG.json
if(!fs.existsSync("CONFIG.json")) {
    console.log("Can't manage to find CONFIG.json (You haven't renamed it have you?)")
    return
}
const config = JSON.parse(fs.readFileSync("./CONFIG.json").toString())

// Initializing clients
const bot = new Discord.Client({ intents: [Intents.FLAGS.DIRECT_MESSAGES] })
bot.login(config.bottoken)

const user = new DiscordUser.Client(config.usertoken);

// Bot ready message
bot.once("ready", () => {
    console.log(`Logged in as ${bot.user.tag}`)
})

// User ready message
user.on.ready = function () {
    console.log(`Logged in as ${user.user.username}#${user.user.discriminator}`)
};

const command = config.command
user.on.message_create = function (msg) {
    if(msg.author.id !== user.user.id) return
    if(msg.content !== command) return
    var found = null

    user.guilds.forEach(g => {
        if(found !== null) return
        g.channels.forEach(c => {
            if(found !== null) return
            if(c.id == msg.channel_id) found = c
        })
    })
    user.private_channels.forEach(c => {
        if(found !== null) return
        if(c.id == msg.channel_id) found = c
    })

    if(found === null) return
    found.recipient_ids.forEach(rid => {
        bot.users.fetch(rid).then(u => {
            user.send(
                found.id,
                {
                    content: JSON.stringify(u.toJSON())
                    .replaceAll(`,"`, `,\n"`)
                    .replace("{","")
                    .slice(0, -1),
                    reply: null,
                    tts: false,
                    embeds: [],
                    allowed_mentions: {
                        allowUsers: true,
                        allowRoles: true,
                        allowEveryone: true,
                        allowRepliedUser: true,
                    },
                    components: [],
                    stickers: [],
                    attachments: [],
                }
            )
        })
    })
};