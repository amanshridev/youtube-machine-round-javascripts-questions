// const buttonResolve = document.getElementById("resolveBtn");

// const myPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("Resolved");
//     }, 1000)
// })

// buttonResolve.addEventListener("click", () => {
//   myPromise.then((res) => {
//     console.log(res)
//   })
// });


async function firstFun(){
    await new Promise(resolve => {
        setTimeout(()=>{
            console.log("Pending")
            resolve(); // resolve the promise here
        }, 1000)
    })
    console.log("Promise resolved!")
}

firstFun()


// console.log(res)