
function tickSecond() {
    let countDown = 0;
    countDown = countDown + 1;
    console.log(countDown);
    return countDown;
    
}

function hush() {
	clearInterval(seconds);
}
let seconds = setInterval(tickSecond, 1000);
setTimeout(hush, 10000);