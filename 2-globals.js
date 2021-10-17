//GLOBALS

// __dirname   - path to current directory
// __filename  - file name including absolute path
// require     - function to use module (commonJS)
// module      - info about current module (File)
// process     - info about where the program is being executed e.g process['arch'] / process['platform'] 

console.log(__filename);

setInterval(() => {
    console.log('Hello world');
}, 1000);


