function addUpTo(n) {
    let num = 0;
    for (let i = 1; i <= n; i++) {
        num += i;
    }
    return num;
}

function addUpTo2(n) {
    let i = 1;
    let num = 0;
    while (i <= n) {
        num += i;
        i++;
    }
    return num;
}

function addUpTo3(n) {
    let i = 1;
    let num = 0;
    while (true) {
        if (i <= n) {
            num += i;
            i++;
        } else {
            break;
        }
    } return num;
}

function addUpTo4(n) {
    if (n <= 1) {
        return n;
    }
    console.log(n)
    return n + addUpTo4(n - 1)
    
}

console.log(addUpTo4(4));