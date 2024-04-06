// OS Module

// The OS module is useful as it provides all the information
// regarding the Operating System
// on which a process is running

const os = require('os');

console.log(os.hostname());
console.log(os.freemem());
console.log(os.platform());
console.log(os.arch());
