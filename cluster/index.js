const cluster = require('cluster');
if (cluster.isMaster) {
  const worker = cluster.fork();
  worker.send('你好');

} else if (cluster.isWorker) {
  process.on('message', (msg) => {
    process.send(msg);
  });
}