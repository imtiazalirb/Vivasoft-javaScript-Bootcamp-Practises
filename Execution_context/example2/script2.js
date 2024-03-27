console.log('First output of global execution context');

function fn(){
    console.log('waiting for timeout');
    setTimeout(() => {
        console.log('Output in Function local execution context after timeout')
    }, 5000);
}

fn()
console.log('last output of global execution context before on FEC');