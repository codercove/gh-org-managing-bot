import {Client, GatewayIntentBits,Events} from 'discord.js'

const client = new Client({intents:[
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
]})

client.on(Events.ClientReady,()=>console.log(`client logged in as ${client.user.tag}`))