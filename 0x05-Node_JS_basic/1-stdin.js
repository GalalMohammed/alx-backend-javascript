console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
  let chunk = process.stdin.read();
  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
  process.exit();
});
