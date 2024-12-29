// function showMessage(text, from){
//     console.log(`${from}, ${text}`)
// }
// setTimeout(showMessage, 2000, 'Hello', 'World')



// function showMessage(text, from){
//     console.log(`${from}, ${text}`)
// }
// setInterval(showMessage, 7000, 'Hello', 'World')



// function showNumber(num){
//     console.log(num)
//     if(num < 1000){
//         setTimeout(showNumber, 100, ++num)
//     }
// }
// setTimeout(showNumber, 1000, 1)




// function showNumber(num){
//     console.log(num);
//     let timeId = setTimeout(showNumber, 1000, ++num);
//    if (num === 10){
//     clearTimeout(timeId)
//    }
// }
// setTimeout(showNumber, 1000, 1)



function uptadeTimer(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(uptadeTimer, 1000)

uptadeTimer();