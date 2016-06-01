var fs = require('fs');
var path = require('path');

//splice out node filesave.js to get to arguments
var args = process.argv.splice(2);
//Get either list or add dependent on what was selcted.
var command = args.shift();
var taskDescription = args.join(' ');
var file = path.join(process.cwd(), '/.tasks');
console.log(file);

switch(command){
     case 'list':
          listTasks(file);
          break;
     case 'add':
          addTask(file,taskDescription);
          break;
     default:
          console.log('Usage: ' + process.argv[0] + 'list|add [taskDescription]');
}

//return an array of arguments
function loadOrInitTaskArrayFile(file,cb){
     fs.exists(file,function(exists){
          var tasks = [];
          if(exists){
               fs.readFile(file,'utf8', function(err,data){
                    if(err){throw err;}
                    var data = data.toString();
                    //console.log(data);
                    var tasks = JSON.parse(data || '[]');
                    console.log(tasks)
                    cb(tasks);
               });
          } else {
               cb([]);
          }
     });
}

function listTasks(file){
     loadOrInitTaskArrayFile(file,function(tasks){
          for(var i in tasks){
               console.log(tasks[i]);
          }
     });
}


function storeTasks(file,tasks){
     fs.writeFile(file,JSON.stringify(tasks), 'utf8', function(err){
          if(err){throw err;}
          console.log('Saved')
     });
}

function addTask(file,taskDescription){
     loadOrInitTaskArrayFile(file, function(tasks){
          tasks.push(taskDescription);
          storeTasks(file,tasks);
     });
}
