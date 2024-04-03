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
