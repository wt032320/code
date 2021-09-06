console.log('1');

setTimeout(function() {   // callback1
    console.log('2');
    process.nextTick(function() { // callback2
        console.log('3');
    })
    new Promise(function(resolve) { // callback3
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})

new Promise(function(resolve) {  // callback4
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})
process.nextTick(function() {  // callback5
  console.log('6');
})

setTimeout(function() { // callback6
    console.log('9');
    process.nextTick(function() { // callback7
        console.log('10');
    })
    new Promise(function(resolve) { // callback8
        console.log('11'); 
        resolve();
    }).then(function() {
        console.log('12')
    })
})
