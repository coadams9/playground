const addTo = function (passed) {

    const add = function (inner) {
        return passed + inner
    }

    return add
}

const addThree = new addTo(3)

console.log(addThree(2))