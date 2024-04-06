// Buffer
// Node.js offers a global object called
// "Buffer" to deal with binary data.

// Buffer does a lot of operations automatically, but we still nedd to know
// the important methods & concepts.

// Buffers are fixed size containers in memory
// which receives the binary data & sends it futher,
// where it can be processed

// "Buffer" is the global object that offers the
// ".alloc()" method to create a buffer.
// A buffer is a fixed size container

// Buffer.from()
// To make it dynamic, we can use ".from()" instead of ".alloc()"
// "Dynamic" means that the Buffer will adapt to the initial value,
// however it is still a fixed memory container & cannot be changed.

const buff = Buffer.alloc(5);
const buff1 = Buffer.from('Hi');
buff.write('Hi');
console.log(buff);
console.log(buff1);
console.log(buff.toString());
