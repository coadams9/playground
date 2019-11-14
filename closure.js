// function password() {

//     let word = 'secret'
//     function encrypt() {
//         return word + '1234'
//     }
//     return encrypt()
// }


// password()

// const pro = new Promise

// console.log(pro)

const wait = time => {
    return new Promise((resolve) => setTimeout(resolve, time))
}


wait(3000).then(() => console.log('Hello!'))
