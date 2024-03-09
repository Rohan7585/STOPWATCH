let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let sec = 0, min = 0, hr = 0, laps = 1, flag = 0;
let interval;
console.log(hours+":"+minutes+":"+seconds);
let Start=()=>{
    console.log("Start");
    flag++;
    if(flag == 1){
    interval = setInterval(()=>{
        if(sec<59){
            sec++;
        }
        else if(min<59){
            sec=0;
            min++;
        }
        else{
            min = 0;
            hr++;
        }
        let second = String(sec).padStart(2,"0");
        let minute = String(min).padStart(2,"0");
        let hour = String(hr).padStart(2,"0");
        console.log(hour+" : "+minute+" : "+second);

        hours.innerHTML = `${hour}`;
        minutes.innerHTML = `${minute}`;
        seconds.innerHTML = `${second}`;
    },1000);
 }
}
let Stop=()=>{
    console.log("Stop");
    clearInterval(interval);
    flag = 0;
}
let Reset=()=>{
    console.log("Reset");
    clearInterval(interval);
    sec = 0;
    min = 0;
    hr = 0;
    flag = 0;
    hours.innerHTML = `00`;
    minutes.innerHTML = `00`;
    seconds.innerHTML = `00`;
    laps = 1;
    document.getElementById('time_laps').innerHTML = '';
}

let Laps=()=>{
    console.log("Laps");
    let lapTime = String(hr).padStart(2,"0") +' : '+String(min).padStart(2,"0")+' : '+String(sec).padStart(2,"0");
    let lapItem = document.createElement('div');
    lapItem.className = 'lap-Item';
    lapItem.textContent = `Lap ${laps}: ${lapTime}`;
    document.getElementById('time_laps').appendChild(lapItem);
    laps++;
}