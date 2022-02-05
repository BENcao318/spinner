let spin = ['|', '/', '-', '\\', '/', '-'];
let delay = 0;
spin.forEach((char) => {
  setTimeout(() => {
    process.stdout.write(`\r${char}   ${delay}`);
  }, delay); 
  delay += 200;
})

