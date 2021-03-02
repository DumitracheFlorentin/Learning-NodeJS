const os = require('os');

// Platform
console.log(os.platform());

// CPU Architecture
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home directory
console.log(os.homedir());

// Uptime (seconds)
console.log(os.uptime());