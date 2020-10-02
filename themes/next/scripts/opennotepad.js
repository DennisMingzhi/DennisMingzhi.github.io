var spawn = require('child_process').exec;
hexo.on('new', function(data){
  spawn('start  "C:\Users\Dennis\AppData\Local\Programs\Microsoft VS Code\Code.exe" ' + data.path);
});