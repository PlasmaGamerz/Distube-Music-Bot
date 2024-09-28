require('dotenv').config();


module.exports = {
    token: '',
    clientId: '1273230302822797312',
    guildId: '1106591466651922502',
    youtubeApiKey: 'AIzaSyCugcpVn3q3r9CmuV6xHu8yLydvREXL4oQ,
    mongoUri: 'mongodb+srv://axo:axoop@cluster0.imckmpc.mongodb.net/?retryWrites=true&w=majority,
    spotify: {
        clientId: '731ac5bf0603411f80ac446f5c02e290,
        clientSecret:'cd16a34c385b4fa5915abd596fd4e480,
    },
    cookies:{
        domain: ".youtube.com",
        expirationDate: 1757764090.235338,
        hostOnly: false,
        httpOnly: false,
        name: "__Secure-1PAPISID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "0",
        value: "1WEHRrYUBttCn9ih/ACbOwdBzceu9lwe-x",
        id: 1
    },
    
    distubeOptions: {
        emitAddListWhenCreatingQueue: true,
        emitAddSongWhenCreatingQueue: false,
        emitNewSongOnly: true,
        joinNewVoiceChannel: true,
        nsfw: true,
        savePreviousSongs: true,
    }
};
