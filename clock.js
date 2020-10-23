//Reseting setting
let countDown = 0;
const secondsHand = document.getElementById('second');
const minutesHand = document.getElementById('minute');

const hoursHand = document.getElementById('hour');


//Automation for the clock!!!!!!
function setTime(secs,mins,hours){
    secPosition = `rotate(${secs * 6}deg)`;
    minPosition = `rotate(${mins * 6}deg)`;
    hourPosition = `rotate(${hours * 30}deg)`;
    hoursHand.style.transform=hourPosition;
    minutesHand.style.transform=minPosition;
    secondsHand.style.transform=secPosition;    
}

setTime(0,9,3);



function tickSecond() {
countDown = countDown  + 6;    
countDown2 =  `rotate(${countDown}deg)`;
secondsHand.style.transform=countDown2;

console.log(countDown2);
return countDown, countDown2;

    
}



function tickMinutes() {
    countDown = countDown  + 6;    
    countDown2 =  `rotate(${countDown}deg)`;
    c=countDown2;
    
    console.log(countDown2);
    return countDown, countDown2;
    
        
    }
    function tickHours() {
        countDown = countDown  + 6;    
        countDown2 =  `rotate(${countDown}deg)`;
        hoursHand.style.transform=countDown2;
        
        console.log(countDown2);
        return countDown, countDown2;
        
            
        }



// //function hush() {
// 	clearInterval(seconds);
// }
let seconds = setInterval(tickSecond, 1000);
//setTimeout(hush, 60000);

// //function hush() {
// 	clearInterval(seconds);
// }
let minutes = setInterval(tickMinutes, 60000);
let hours = setInterval(tickMinutes, 36000000);
//setTimeout(hush, 60000);

// const secondsHand = document.getElementById('second')

// const minutesHand = document.getElementById('minute')

// const hoursHand = document.getElementById('hour')

// function moveSecondsHand(){

// } 

console.log(seconds);