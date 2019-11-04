// var num = 4

// const outer = () => {
//     var num = 2
//     const inner = () => {
//         console.log(num)
//         var num = 5
//         console.log(num)
//     }
//     inner()
// }

// outer()

// {
//     var num = 3
//     {
//         num++
// console.log(num)

//     }
// }

function outer2() {
    function inner2() {
        // num
        console.log(num)
    }
    inner2()
}

var num = 4
outer2()

