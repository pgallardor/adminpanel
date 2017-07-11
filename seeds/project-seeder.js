var Project = require('../models/project');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/ondatest');

var projects = [
  new Project({
      url: 'expropia',
      byUser: 'mamertomallol',
      name: 'Expropiese',
      descr: 'Porque Hayende no terminó el trabajo',
      creation: 11-09-1973,
      goal: 200000,
      deadline: 23-06-2017,
      current: 19999,
      private: true,
      status: 0
  }),

  new Project({
      url: 'mir',
      byUser: 'mamertomallol',
      name: 'Revivir la UP',
      descr: 'Pueblo, consciencia, fusil en el ano. MIR',
      creation: 20-03-1960,
      goal: 11091973,
      deadline: 30-06-2018,
      current: 2500,
      private: false,
      accepted: -1
  }),

  new Project({
      clientId: 'menelmen',
      title: 'Nefasheria',
      goal: 69000,
      accepted: false
  }),

   new Project({
       clientId: 'yachorre',
       title: 'MaSKaR',
       goal: 420000,
       accepted: false
   }),

   new Project({
       clientId: 'yachorre',
       title: 'Weeb Movies',
       goal: 3000,
       accepted: true
   })
];

var done = 0;
for (var i = 0; i < projects.length; i++){
    projects[i].save(function (err, result) {
        done++;
        if (done == projects.length)
            mongoose.disconnect();
    });
}