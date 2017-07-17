var Creator = require('../models/creator');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/ondatest');

var creators = [
    new Creator({
        userId: 'nefasho',
        name: 'Men El Men',
        email: 'men@elmen.us',
        phNumber: '5689999999'
    }),

    new Creator({
       userId: 'mamertomallol',
       name: 'Mamerto Mallol',
       email: 'mallol@pcchile.ru',
       phNumber: '1916-1973'
    }),

    new Creator({
        userId: 'yachorre',
        name: 'Yzabel Aschoorra',
        email: 'mskr@mskr.io',
        phNumber: '696969696969'
    }),

    new Creator({
       userId: 'pgallardo',
       name: 'Pedro Gallardo',
       email: 'pgallardo@mskr.io',
       phNumber: '0303456'
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