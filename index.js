const {Client, Intents} = require("discord.js");
console.log("Running");

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



const run = async () => {
  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
  });
  client.once("ready", async () => {
    console.log(`Logged in as ${client.user.tag}`);
    const d = new Date();
    const day = weekday[d.getDay()];
    await client.channels.cache.get(process.env.CHANNEL_ID).send(`
      Happy ${day}! Post your wordle scores here!
      https://www.powerlanguage.co.uk/wordle/
    `)
    process.exit(0);
  })
  console.log(process.env.TOKEN);
  client.login(process.env.TOKEN)
}

run();


