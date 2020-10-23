function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        // console.log(minutes);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        display.textContent = minutes + ":" + seconds;
        
        if (--timer < 0) {
            console.log("now");
            // popup(1)
            timer = duration;
        }
    }, 1000);
}

const countdown = time => {
    window.onload = function () {
        var fiveMinutes = time,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    }
};

const getElement = id => document.getElementById(id);
const reload = time => setInterval(() => {
    location.reload();
}, time);

const setTimeValue = value => sessionStorage.setItem("time", value);

const minutesFromButtons = document.getElementsByClassName("min");
for (let i = 0; i < minutesFromButtons.length; i++) {
    const time = minutesFromButtons[i];
    time.addEventListener("click", () => {
        setTimeValue((time.innerHTML)*60);
        sessionStorage.setItem('minTime', null);
        sessionStorage.setItem('maxTime', null);
        location.reload();
    })    
}

const randomInput = document.getElementById("randomInputForm");
const setCustomTime = document.getElementById("setCustomTime");    

setCustomTime.addEventListener('submit', (e) => {
    e.preventDefault();
    const time = document.getElementById('custom-seconds').value;
    // sessionStorage.setItem('time', time);
    popup([time, "setCustomTime"])
    location.reload();
})

randomInput.addEventListener('submit', (e) => {
      e.preventDefault();
      const min = document.getElementById('from').value;
      const max = document.getElementById('to').value;

    //   sessionStorage.setItem('minTime', min);
    //   sessionStorage.setItem('maxTime', max);
      popup([min,max, "randomInput"])
      location.reload();
    })

// let timeInput = parseInt(sessionStorage.getItem("time"));
// let randomTime = () => {
//     let minTime = parseInt(sessionStorage.getItem("minTime"));
//     let maxTime = parseInt(sessionStorage.getItem("maxTime"));
//     const diff = maxTime - minTime;
//     const time = (Math.random()*diff)+parseInt(minTime);
//     console.log(time)
//     return time;
// }
// const randomTime2 = randomTime();
// if(timeInput) {
//     countdown(timeInput);
//     setInterval(() => {
//         // popup(timeInput*1000)
//     }, (timeInput*1000));
// }
// else if(randomTime2) {
//     setInterval(() => {
//         location.reload();
//         popup(randomTime2*1000)
//         console.log(randomTime2);
//     }, (randomTime2*1000));
// }

document.getElementById("stopBtn").addEventListener('click', () => {
    sessionStorage.setItem('minTime', null);
    sessionStorage.setItem('maxTime', null);
    sessionStorage.setItem('time', null)
    location.reload();
    });
document.getElementById("randomBtn").addEventListener('click', () => {
    sessionStorage.setItem('time', null);
    location.reload();
    });
document.getElementById("customTimeBtn").addEventListener('click', () => {
    sessionStorage.setItem('minTime', null);
    sessionStorage.setItem('maxTime', null);
    location.reload();
    });

    function popup(time) {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": time});
       });
      }