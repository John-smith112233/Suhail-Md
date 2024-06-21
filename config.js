const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233531725160";
AutoReact.https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/plugins/areact.js



//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "233531725160,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_21_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDg5LFxuICAgICAgICA4MCxcbiAgICAgICAgNyxcbiAgICAgICAgMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyLFxuICAgICAgICA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTczLFxuICAgICAgICA2MixcbiAgICAgICAgMTA5LFxuICAgICAgICAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNixcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMixcbiAgICAgICAgMTM5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgODMsXG4gICAgICAgIDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNyxcbiAgICAgICAgMzksXG4gICAgICAgIDY4LFxuICAgICAgICA5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMSxcbiAgICAgICAgNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3YmZLQkpwZHBlSk5Ka0pyYktPQkd4OXVoandDWmF5YlE0bURRcUxkRk5BPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvUmRoZ1FHUlIxS2JnY2ZPcjRTUjh3XCIsXG4gIFwicGhvbmVJZFwiOiBcImJjYzUzNzc0LWRjZWYtNGRhYS05Y2IzLTZlYWFiYWI2Mjg5OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICAyMDUsXG4gICAgICA3NSxcbiAgICAgIDE5NixcbiAgICAgIDEwMCxcbiAgICAgIDIxMixcbiAgICAgIDc2LFxuICAgICAgMjQ1LFxuICAgICAgNTQsXG4gICAgICA2MCxcbiAgICAgIDExNixcbiAgICAgIDQsXG4gICAgICAxOTYsXG4gICAgICA0MSxcbiAgICAgIDEyNyxcbiAgICAgIDIyMyxcbiAgICAgIDk5LFxuICAgICAgNDIsXG4gICAgICAxNTAsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDQsXG4gICAgICAxMixcbiAgICAgIDI0NCxcbiAgICAgIDI0LFxuICAgICAgNzAsXG4gICAgICAyNDAsXG4gICAgICA0MSxcbiAgICAgIDEyNCxcbiAgICAgIDMsXG4gICAgICAyMjYsXG4gICAgICAxMDYsXG4gICAgICAxMDcsXG4gICAgICA4MCxcbiAgICAgIDcyLFxuICAgICAgNjksXG4gICAgICA2MCxcbiAgICAgIDIzNixcbiAgICAgIDE0NCxcbiAgICAgIDEwNixcbiAgICAgIDEyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMWTVLTExQUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTMxNzI1MTYwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NTUyNzIxMDAzNzMzOTo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ096QXNvSURFSlBBenJNR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNWVva3lqYnVLNWpSMzdTYVY3Q0xkZElYRy9VNlFQaUhHNTJpcDh5NTJ6RT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzZFRLVWl3WG1rcGF2RjcwbXc3NXF0MHBYOEdXa2JUQi9kcXNmeVlyMXJuTExmNTdGYVYxakhpRnRpZFBxdVFXZjVFb3BUTkR6Q2s3UmhWc0dFeG9EZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBQ1Y0R1JRL2pVcGtxSW1jZkkzZHJjOE1OZ3VhdGRSOHBESSsxZC9naGxGbnFNaUtmdU55UFR2VElGb3E5YnVYRUtFWk5zdXNiNDFlZElFV1VPc0JDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1MzE3MjUxNjA6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4ODUzNjU2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ1B0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDUHQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrUzZjVGVzWmZTbFFyRlRlbDVRWGhnaFN3QU4rNDRydjdLVDBCODJ5ZEVrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgxMDMyODE3MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "❌‿❌➳ᴹᴿ᭄ⅅÇ⚔️ ℒøℛⅅ ℬℛëëℤᎽ✧❤乂",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "❌‿❌➳ᴹᴿ᭄ⅅÇ⚔️ ℒøℛⅅ ℬℛëëℤᎽ✧❤乂",
  ownername:process.env.OWNER_NAME|| "❌‿❌➳ᴹᴿ᭄ⅅÇ⚔️ ℒøℛⅅ ℬℛëëℤᎽ✧❤乂",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";


















https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/plugins/fakereply.js


global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
DelSpamhttps://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/plugins/delspam.js
// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/plugins/delete.js
