var Project = require('../models/project');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/ondatest');

var projects = [
  new Project({
      by: 'mamertomallol',
      name: 'Expropiese',
      flex: false,
      cat: 3,
      descr: 'Porque Hayende no terminó el trabajo',
      creation: new Date(1973, 08, 11),
      goal: 200000,
      deadline: new Date(2017, 7, 21),
      current: 19999,
      private: true,
      status: -1
  }),

  new Project({
      by: 'mamertomallol',
      name: 'Revivir la UP',
      flex: 'false',
      cat: 3,
      descr: 'Pueblo, consciencia, fusil en el ano. MIR',
      creation: new Date(1960, 03, 20),
      goal: 11091973,
      deadline: new Date(1973, 08, 11),
      current: 2500,
      private: false,
      status: -1
  }),

  new Project({
      by: 'nefasho',
      name: 'Radical centrist political humour',
      descr: 'm333333333333n',
      flex: true,
      cat: 2,
      creation: new Date(2017, 02, 20),
      goal: 99999999,
      deadline: new Date(2018, 05, 30),
      current: 77777,
      private: false,
      status: -1
  }),

   new Project({
       by: 'yachorre',
       name: 'Buena Onda Sonora',
       flex: true,
       cat: 0,
       descr: 'Proyectos culturales bien democráticos y comunistas para todos',
       creation: new Date(2017, 0, 01),
       goal: 11091973,
       deadline: new Date(2017, 07, 01),
       current: 0,
       private: false,
       status: -1
   }),

   new Project({
       by: 'yachorre',
       name: 'Weeb Movies',
       flex: true,
       descr: 'Quiero ir a ver monos chinos al cine, denme plata por favor',
       creation: new Date(2017, 04, 20),
       goal: 11091973,
       cat: 1,
       deadline: new Date(2017, 06, 30),
       current: 2500,
       private: false,
       status: -1
   }),

    new Project({
      by: 'pgallardo',
      name: 'Golpe de Estado bailable',
      flex: false,
      cat: 1,
      descr: 'Para disfrutar los bombardeos y los tanques al ritmo del rave y la cumbia universitaria :kappa:',
      creation: new Date(2017, 6, 14),
      goal: 5000000,
      deadline: new Date(2017, 9, 14),
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