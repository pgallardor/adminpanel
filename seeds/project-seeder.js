var Project = require('../models/project');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/ondatest');

var projects = [
  new Project({
      url: 'expropia',
      byUser: 'mamertomallol',
      name: 'Expropiese',
      descr: 'Porque Hayende no terminó el trabajo',
      creation: new Date(1973, 09, 11),
      goal: 200000,
      deadline: new Date(2017, 7, 21),
      current: 19999,
      private: true,
      status: -1
  }),

  new Project({
      url: 'mir',
      byUser: 'mamertomallol',
      name: 'Revivir la UP',
      descr: 'Pueblo, consciencia, fusil en el ano. MIR',
      creation: new Date(1960, 03, 20),
      goal: 11091973,
      deadline: new Date(1973, 09, 11),
      current: 2500,
      private: false,
      status: -1
  }),

  new Project({
      url: 'men',
      byUser: 'nefasho',
      name: 'Radical centrist political humour',
      descr: 'm333333333333n',
      creation: new Date(2017, 03, 20),
      goal: 99999999,
      deadline: new Date(2018, 06, 30),
      current: 77777,
      private: false,
      status: -1
  }),

   new Project({
       url: 'ondasonora',
       byUser: 'yachorre',
       name: 'Buena Onda Sonora',
       descr: 'Proyectos culturales bien democráticos y comunistas para todos',
       creation: new Date(2017, 01, 01),
       goal: 11091973,
       deadline: new Date(2017, 08, 01),
       current: 0,
       private: false,
       status: -1
   }),

   new Project({
       url: 'movies',
       byUser: 'yachorre',
       name: 'Weeb Movies',
       descr: 'Quiero ir a ver monos chinos al cine, denme plata por favor',
       creation: new Date(2017, 05, 20),
       goal: 11091973,
       deadline: new Date(2018, 06, 30),
       current: 2500,
       private: false,
       status: -1
   }),

    new Project({
      url: 'fasho',
      byUser: 'pgallardo',
      name: 'Golpe de Estado bailable',
      descr: 'Para disfrutar los bombardeos y los tanques al ritmo del rave y la cumbia universitaria :kappa:',
      creation: new Date(2017, 07, 14),
      goal: 5000000,
      deadline: new Date(2017, 07, 14),
      current: 0,
      private: true,
      status: -1
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