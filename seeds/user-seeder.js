var Creator = require('../models/creator');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/ondatest');

var creators = [
    new Creator({
        username: 'nefasho',
        email: 'men@elmen.us',
        rut: '5689999999',
        passwd: {
            salt: '666',
            hash: '666'
        },
        profile: {
            fullname: 'Nefasho el M3n',
            country: 'Chile',
            city: 'Santiago',
            address: 'Calle el M3n'
        }
    }),

    new Creator({
       username: 'mamertomallol',
       email: 'mallol@pcchile.ru',
       rut: '1916-1973',
       passwd: {
         salt: '555',
         hash: '4444'
       },
       profile: {
           fullname: "Mamerto Mallol",
           country: 'Rusia',
           city: 'Leningrado',
           address: 'Ogon po Gotovnosti'
       }
    }),

    new Creator({
        username: 'yachorre',
        email: 'mskr@mskr.io',
        rut: '696969696969',
        passwd: {
          salt: '555',
          hash: '4444'
        },
        profile: {
            fullname: 'Yzabel Aschoorra',
            country: 'Suecia',
            city: 'Estocolmo',
            address: 'I dunno dude'
        }
    }),

    new Creator({
       username: 'pgallardo',
       email: 'pgallardo@mskr.io',
       rut: '0303456',
       passwd: {
           salt: '5dd',
           hash: 'alkjsd'
       },
       profile: {
           fullname: 'Pedro Gallardo',
           country: 'Suiza',
           city: 'Berna',
           address: 'Jej'
       }
    })
]

var done = 0;
for (var i = 0; i < creators.length; ++i){
    creators[i].save(function (err, result){
        done++;
        if (done == creators.length)
            mongoose.disconnect();
    });
}