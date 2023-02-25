// code your solution here

const superbowlWin = (record) => {
    const win = record.find((obj) => obj.result === "W")
    return win ? win.year : undefined
    // if(win){
    //     return win.year
    // } else {
    //     return undefined
    // }
}

// Passes the first test with ".year" at the end.  If I take ".year" off of the end it passes the second test instead:

// const superbowlWin = (record) => record.find(bowlWin => bowlWin.result === "W").year;


// console.log(superbowlWin);



