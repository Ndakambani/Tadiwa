const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU2Y6rOBT8lSvPI/QkEMgmtTSQpUnIBoQsjO6DMQbcrLFNEtLKv4/oRd0Pc+/08GTZpk75VNV5AXlBGDZxDYYvoKTkDDlulrwuMRgCvQpDTIEIAsghGILZTKfL+SCVcydoxWG4tSbxCrHr2V/GBWtzt5/N0d6b8pw9grsIyspPCfoNoOqEtJLppCVf13PfuSL90I+t+mzltbE2exfFGt1wIZwUQ3kE9wYREkryaFLGOMMUpiauN5DQ79GvpkV58ZbQoCGfzadb7+TFx3QkocMFR2Eqoe1u02uVT4LxTfpEDuTandWnlrbZ7/fe4uhcF06nxaYbhG6n1hK3e0k3K2w7eaPPSJTjYBbgnBNef7vvwmqWhjPbb3UYcuMiLvaxlAtuFva0bgeNbrtLqXvWTjUS7XvE21pXWplaiFWSyJttwlzpxOtpe3I+HhBSUiUU0G4SVKfE/Up8Qz+8kvyfvj+NXDy1g8Dajb1btz2YtzcL82h1rb6pj9eC4nJuJnZmR4dv0lenqrH3rrcAyXqnWsfmphTiULn2nLLw+37teoNuOVlSll0+6UNe0d+amxrCrhPvpjtb0Df+UjOl53RG7bPVxWg8WPeXpT4JyvF6KUR5Ro8T2y5tf7liwSn2tLBcj/rzej/OQsXw+bmz5FxVRpfH1xcluJ4FYCjdRUBxRBinkJMif92TOiKAwdnBiGL+2l7gqYnUhvtUPUx1vX+aCbuzHj3Voa1GrZV7M8iB2VHlHhSoPAIRlLRAmDEcGITxgtZLzBiMMAPDv3+KIMdX/iZcU64jiSAklHE3r8q0gMGHqh+HEKGiyrlT52jULDAFw/bnNuac5BFr+ljlkKKYnPEohpyBYQhThu8iCPCZINzggWeU6YeVm1gke1pfE2Pahg7TGspxkb9dGciwj7rd3kOv56sPiqpKD4Mw6D6EA1XyURCGUJGACMh7Zpp/finhJGATNfEFFsmKpegc1b41HRSKP7m8yvDWe0xxAIacVlgEPkRJVW6LBOe/wZXgJtovqvltQHZ2odMwTu25DI0dcr/gvmkKhi+fc2pUBA3e0hzspscnA4gge7UgaV4udzu9niQNVEmVh1L/L/bnpWkkLMs/c8yBCHLY3Aba6mmy+DGe/Vhq9kz78ccPSWqKvivSwAWYQ5IyMASjVWseaX3reUONKjoeNUfTTE1rXPKh4EcU3qwW0I4irfA235B9/eTIZjVY7MukvChTdjWEjTvOzePYf7ZG7X8DAUMwV6mHTwVJfSQxSbJ4W49r2suNeENwkkAH14Jwuun7anyKqHLApnm1Qkd5hgd2Pu2PAZv3u5riG1h5tnYQ6Rre6k1uPpz0tdhV2pB8cZ1b2rIqJnvvWnRadOxmeW8VZ9d2NrG7AXQ6s1LvVjwk1R56o1FvnJ3tUpe92Wpxyg4TfaCTVbC4hWSsCkU2jt5C+jok0vfhTF7j8/Luu5Dg11n3rsh/KvcZgfZd/ILxPj1/YTP9AAfCantI1JuSsjjhhJ4d6eSZaK37S7v1LGlqnWmy0tY4uN9/iqBMIQ8LmoEhYJkPgQhSyLj2GeEtyTDjMCvBUOp1OorcVdS+CLJaK0uHQ/6RfKA13+zSAvd/ALFEj/oVCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "James sigauke",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " James sigauke",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

