// Asynchronicity is important in server development as you will often be doing different operations
// Each of which take time, eg. fetching images, download images, sorting database data
// Instead of running them one after the other, you can run all of them asynchronously, saving time
// Don't worry if you find this concept challenging, many do at first!
// But the more you encounter code using promises, the better you'll understand it.

// async function myAsyncFunction() {
//    setTimeout(() => { // what does setTimeout do?
//        console.log("hi there")
//    }, 1000)
// }

// myAsyncFunction() // bye bye runs before myAsyncFunction, putting the function call in the background while we run the code 
// console.log("bye bye")

async function myAsyncPromiseFunction() {
     return new Promise((res, rej) => { // creating a promise object, taking resolve and reject as args short for resolve and reject
         setTimeout(() => {
             let success = false
             // do some operations
             if (success) {
                 res("good job!") // either resolves or rejects -> when the promise resolves, then the string will be passed throgh
             } else {
                 rej("unknown error")
             }
         }, 1000)
     })
 }
myAsyncPromiseFunction()

 async function main() {
      // await can only be used in a async function
    myAsyncPromiseFunction() // try it without await -> forcing the code to stop execution without running the next line first 
     .then(res => { // short for result, is called when promise is resolved successfully 
         console.log(`operation succeeded and returned: ${res}`)
     })
     .catch(err => { // short for error, is called when the promise is rejected, unsuccessfully 
         console.log(`an error was thrown: ${err}`)
     })
     console.log("hello world")
 }

 main()