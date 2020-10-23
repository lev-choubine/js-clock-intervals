//Automation for the clock!!!!!!
let countDown = 0;
const secondsHand = document.getElementById('second');
const minutesHand = document.getElementById('minute')

const hoursHand = document.getElementById('hour')

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
    minutesHand.style.transform=countDown2;
    
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
let hours = setInterval(tickMinutes, 720000);
//setTimeout(hush, 60000);

// const secondsHand = document.getElementById('second')

// const minutesHand = document.getElementById('minute')

// const hoursHand = document.getElementById('hour')

// function moveSecondsHand(){

// } 

console.log(seconds);