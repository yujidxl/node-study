process.on('message', (msg) => {
  console.log('子进程收到的消息为', msg);
});
process.send({ foo: 'bar', baz: NaN });
