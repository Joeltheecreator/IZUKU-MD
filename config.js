const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("Reborn, da Goat")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/excelottah6/IZUKU-MD'
global.location = 'Nigeria'
global.gurl = 'https://instagram.com/Reborn2104' // add your username
global.sudo = process.env.SUDO || '2348110961623,2348110961623'
global.devs = '2348110961623';
global.website = 'https://github.com/excelottah6/IZUKU-Md' //wa.me/+2348110961623
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'REBORN 𝐁𝐨𝐭' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'REBORN' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'IZUKU;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0ltVzFFY09IN2VXV3RPdDMxMHJuMjdaM3Y0b0lEcmk5YnB4a1B5V3QwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHYwR200NzU3dm0vYzJIcnNRMkVJQUMrNEZhTTRndXdIUmlWb0hEL3BERT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSkJ2b3lZWTF4R01scjFIRnNFZWVVMDRtL04xWE9DWnRNOXltRHlhWVVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxby9Ua3NhTm9qUU9TM3F2endKdmNDRW1saXp1UXNCQXFEai92aldTeERVPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdHWlFORXJOS21aRHJFNkdGQVE4eGV3czJwWVJJQUtPZCtQY2NXa21FbGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im10Nk4wMXNlZWlZWUxtMkIvb2w1ZXpaeElKUFlqa1puN210RSthRUh5Q2M9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvbWY5SXAzaGJYNXFXbGhGV3Z1K3FESmZteWlUK0RUdlNXcFBHUVpaSUtQTHY3R25TWXY0Ym5mK3owOG9HVVl6eHVtSlBTdGZMdkJYODI4dFM4WFNoUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjM0LCJhZHZTZWNyZXRLZXkiOiJRZGxXL3JzRTB1MERiNi9vTDlvZ294RXkvbFM0eHRrdUhrREZnRHVhZ1I4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5NkZqd1JvRVNaeVZUaEg0RkJpNi13IiwicGhvbmVJZCI6IjcwYzc5ZjUzLTY2NTAtNDJlYi1hMWEwLTc1MzkwMTVmNWI0ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRGY3V1FvbU5JNVo4eE5tcy9XWk9nMFR1dUk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imdsd3RtaHRROVNlTUpLSXhtc0h4OW40elRHWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lDTnROc0VFTGpaNHFrR0dCST0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV29OaE5wanF5bmVMNlQyTjlMTlVtc2VWcUE5elFrQmErVXdBOENWNjFBWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibzFrYnJlSWt3MHM1SGFPOGMzdWp0ZEgxMEhJRng3ZGFPS0RVQnZWaWljN1VSNzJRUVg2ZTdqelRkbW9TVG1GQVBTdUlGRUxhSW1sK3M4bXFHM29BQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlZUOXhYbVc3MnM4T2VYdkdiK2pMN3phSFQwdVNSM3l2ZUNZTHRGZGhqNS9uRG1FTE9RTHFKK2czN28wRlNsQUprNGpCYW0zc1VtbzdLcElPazZNdGlnPT0ifSwibWUiOnsiaWQiOiIyMzQ4MTEwOTYxNjIzOjIzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKEosqZ4bSb4bSF4pyT8J2agfCdmbTwnZmx8J2ZvvCdmoHwnZm9In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMTA5NjE2MjM6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnFEWVRhWTZzcDNpK2s5amZTelZKckhsYWdQYzBKQVd2bE1BUEFsZXRRRyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTY5ODIxMzA1MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGYU8ifQ==' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'REBORN' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'REBORN-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'IZUKU',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
