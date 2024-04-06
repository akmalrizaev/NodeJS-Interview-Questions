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

const buff = Buffer.alloc(5);
buff.write('Hello');
console.log(buff);
console.log(buff.toString());
