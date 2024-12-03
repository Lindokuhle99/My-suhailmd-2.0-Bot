const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="lindokuhle.ndlangamandla99@gmail.com"
global.location="Durban, South Africa."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/0087a0f2c1bc2446e4ce5.png" || "https://telegra.ph/file/0087a0f2c1bc2446e4ce5.png" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©Lindo Tech" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27657006860";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/0087a0f2c1bc2446e4ce5.png" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_45_12_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDMxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgODEsXG4gICAgICAgIDIyLFxuICAgICAgICAyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDgwLFxuICAgICAgICA1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDU2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDIxLFxuICAgICAgICAzMixcbiAgICAgICAgNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMixcbiAgICAgICAgMTc0LFxuICAgICAgICA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc3LFxuICAgICAgICAzNixcbiAgICAgICAgMjM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDgsXG4gICAgICAgIDk5LFxuICAgICAgICA1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NixcbiAgICAgICAgNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NixcbiAgICAgICAgMjAzLFxuICAgICAgICA0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxCUEd5b0xxeWsxL3hKbGhnSFd6ZVphL29KU3pHTDNORFpsTldUMFFGUzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZEei1vSEZWUUQ2M2t4UkpqLW5ic2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmVkNzc2YWMtNGYxZC00OTQ5LThhMGItZDhlMDg2ODYxOTA0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgMCxcbiAgICAgIDE0NyxcbiAgICAgIDQ1LFxuICAgICAgNzcsXG4gICAgICAxNzMsXG4gICAgICAyNSxcbiAgICAgIDI0NixcbiAgICAgIDE5NCxcbiAgICAgIDI0OSxcbiAgICAgIDE2MyxcbiAgICAgIDE3NixcbiAgICAgIDEzMSxcbiAgICAgIDU1LFxuICAgICAgMjAxLFxuICAgICAgMjQwLFxuICAgICAgMTE1LFxuICAgICAgNjgsXG4gICAgICAxNTEsXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgNzcsXG4gICAgICA2NSxcbiAgICAgIDE5NSxcbiAgICAgIDIyOSxcbiAgICAgIDI5LFxuICAgICAgNTcsXG4gICAgICA4NyxcbiAgICAgIDc3LFxuICAgICAgMzUsXG4gICAgICAwLFxuICAgICAgOTgsXG4gICAgICAxNyxcbiAgICAgIDQsXG4gICAgICAyMTIsXG4gICAgICAzMyxcbiAgICAgIDIzOCxcbiAgICAgIDE5OCxcbiAgICAgIDM4LFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNORFlnekFRNi9lOXVnWVlCaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRvNThodXQvUnhqbURwaWZma2d3TUpkYkc0STJ5TXQ5ZkZXdE1qRUY2bEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYTB3VmVSVW9tckdmTEMyak5VRkM3M1YwelZJUlpaRVRJVlFJa2Y2NDd6d1k2L3dKUVE4dU1GZ2R6MjVTTmxaTjEzREFmL2R0eWRVUG45bDJUOUI3QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL3hxSjh4U0ZWeFY0VFdNbWtSc2NXanlPbDVXWEF1bnR6bXRFMHk5YlZ2S2JZZjZGaVFYbGtGMFNWanhuaTFERVJYQitrblRkaDZqSy9pNXQ1MFZKakE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzY1NzAwNjg2MDo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkxpbmRva3VobGUgRGVzaWduc1wiLFxuICAgIFwibGlkXCI6IFwiNzQ4Nzg1NjA1NTEwMzY6NDJAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNzY1NzAwNjg2MDo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMjYyMzIxXG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "Hypothesis Non Fingo- Isacc Newton" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Lindokuhle Designs",
  packname: process.env.PACK_NAME || "Lindo Bot",
  botname : process.env.BOT_NAME  || "Lindo Bot",
  ownername:process.env.OWNER_NAME|| "Lindokuhle Designs",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "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",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

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
