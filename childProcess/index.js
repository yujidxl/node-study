const { spawn, exec, execFile } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`子进程退出，退出码${code}`);
});


exec('ls -a src', (err, stdout, stderr) => {
  if (err){
    console.error(err);
  }
  console.log(stdout);
});

exec('echo "\\$HOME 变量为 $HOME"', (err, stdout, stderr) => {
  if (err){
    console.error(err);
  }
  console.log(stdout);
});

execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.dir(stdout, stderr);
});