// setTimeout() - Global Object Method

// The setTimeout() is used during the execution of
// remaining stattements of the code or data retrieval.

// setTimeout(() => {}, MilliSeconds)

// Let's take an example where, we'll display a start message & after 3 seconds,
// a "Timed Out" message will be displayed.

setTimeout(() => {
  console.log('Timed Out!');
}, 3000);

console.log('Timer Started.');

//  To stop the setTimeout()'s timer, we have another method
// called "clearTimeout()".

// The "clearTimeout()" method is used to stop the timer set
// using setTimeout() method.

// const setTimeoutInstance = setTimeout(function, time)
// clearTimeout(setTimeoutInstance)

secondTimer = setTimeout(() => {
  console.log('Timed Out!');
}, 3000);

const stopTimer = () => {
  clearTimeout(secondTimer);
  console.log('Timer Cleared!');
};

console.log('Timer started');

stopTimer();

// To repeat the process on regular intervals of time,
// we have the "setInterval()" method.

// setInterval()
// Used to repeat a process on regular intervals of time
// Useful in real-life situations.
// setInterval(() => {}, TimeInterval)

//  setInterval(seperateFunction, TimeInterval)
// function seperateFunction() {
// code
// }

// Let's create a counter that will increment
// & display value starting with 1 using setInterval()

//  clearInterval()
// For stopping or clearing the setInterval(),
// we have another global method called clearInterval()
// clearInterval(InstanceObject)
// InstanceObject = setInterval(() => {}, Milliseconds)

let i = 1;

function startCounter() {
  timerObj = setInterval(() => {
    if (i <= 5) {
      console.log(i);
      i++;
    } else {
      clearInterval(timerObj);
    }
  }, 1000);
}

startCounter();

// The "process"
// Global Object
// Contains the information of the ongoing Node process -
// & also gives control over it.
// Gives some lifecycle methods as well.
// Multiple properties offered by "process" that allow
//  to take control over the Node processes

console.log(process);

// process.on()
// Execute some process on various stages of execution

// process.kill()
// To terminate a process

// process.uptime()
// To get the duration of the running process

// process.memoryUsage()
// To check the memory usage
