const fs = require('fs');
function copy(src, dst) {
  // 适用于大文件的copy操作
  fs.createReadStream(src).pipe(fs.createWriteStream(dst));
  // 适用于小文件的copy操作
  fs.writeFileSync(dst, fs.readFileSync(src));
}

function main(argv) {
  copy(argv[0], argv[1]);
}

main(process.argv.slice(2));
