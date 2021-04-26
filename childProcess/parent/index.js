const { fork } = require('child_process');
// 创建一个可与父进程通信的子进程(并执行)
const p = fork(`${__dirname}/../child/index.js`);
p.on('message', (msg) => {
  console.log('父进程收到的消息为', msg);
});
p.send({ hello: 'world' });
