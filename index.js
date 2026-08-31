console.log("Start")
Promise.resolve().then(() => {console.log("Promise resolved")})
setTimeout(() => {
    console.log("setTimeout");
}, 1000)
console.log("End");