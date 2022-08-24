const fs = require('fs')
const chalk = require('chalk'); 
const toBool = (x) => x == 'true'
const { existsSync } = require('fs')
  const { Sequelize } = require('sequelize');
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
const DATABASE_URL =
	process.env.DATABASE_URL === undefined
		? './zerotwo'
		: process.env.DATABASE_URL
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoReadAll = true // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)
//═══════[modification]════════\\
let number = process.env.OWNER_NUMBER;
if (!number) { number = "15069751205"; }
global.owner = number.split(",");
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port = process.env.PORT || 5000
global.botname = process.env.BOT_NAME || '*Elei*'
global.ownername = process.env.ownername || 'Ronen' //owner name
global.SUDO = process.env.SUDO || '916000530073' 
global.packname = 'Elei' //sticker package name
global.author = 'Ronen' //sticker author name
let pgdb = process.env.DATABASE_URL || "none";
global.sessionNamew = 'session.sam'
global.sessionName = process.env.SESSION_ID || 'PUT-HERE'
global.zerotwo = "https://chat.whatsapp.com/Hooxu1kZEoFKoNpdFLqXMO" //ur gc link
global.zerotwo2 = "https://chat.whatsapp.com/Hooxu1kZEoFKoNpdFLqXMO" //ur gc link2
global.websitex = "https://chat.whatsapp.com/Hooxu1kZEoFKoNpdFLqXMO" //ur website
global.prefa = process.env.PREFIX || ['-'] //prefix
const { Pool } = require("pg");
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
module.exports = {
  nsfw_detect_ai : process.env.NSFW_DETECTION_AI || 'true',
  pmpermit: process.env.PMPERMIT || "true",
  pmpermit_mutetime: process.env.PMPERMIT_MUTETIME || "1800",
  mongodb_url: process.env.MONGODB_URI || "Enter-MongoURI-HERE",
  HEROKU: {
        HEROKU: process.env.HEROKU || `true`,
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
    },
  BRANCH: 'main',
  DATABASE_URL: DATABASE_URL,
DATABASE:
		DATABASE_URL === './zerotwo'
			? new Sequelize({
					dialect: 'sqlite',
					storage: DATABASE_URL,
					logging: false,
			  })
			: new Sequelize(DATABASE_URL, {
					dialect: 'postgres',
					ssl: true,
					protocol: 'postgres',
					dialectOptions: {
						native: true,
						ssl: { require: true, rejectUnauthorized: false },
					},
					logging: false,
			  }),
  VERSION: process.env.VERSION === undefined ? 'v.0.0.2' : process.env.VERSION,
 LANG: process.env.THEME|| 'SECTOR',
DEBUG: DEBUG,
 SUPPORT: "120363040838753957@g.us",
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
	require(file)
})
