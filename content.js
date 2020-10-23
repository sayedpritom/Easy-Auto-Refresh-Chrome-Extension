chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // const num = parseInt(request.message);
    // if(num) {
    //   // sessionStorage.setItem('time', num);
    //   // location.reload()
    // }
    // const time, minTime, maxTime;
    if((request.message).length == 2) {
      // time = parseInt(request.message);
      if(request.message[1] == "setCustomTime") {
        sessionStorage.setItem('minTime', null);
        sessionStorage.setItem('maxTime', null);
      }
      sessionStorage.setItem("time", request.message[0]);
      location.reload()
    }
    else {
      if(request.message[2] == "randomInput") {
        sessionStorage.setItem('time', null);
      }
      sessionStorage.setItem("minTime", request.message[0]);
      sessionStorage.setItem("maxTime", request.message[1]);
      location.reload()
    }
    console.log(request.message);    
    // sessionStorage.setItem(request.message);
// start(num);
    }
);

// function start(num){
//     // alert(num);
//     console.log(num);
//     location.reload()
// }
let timeInput = parseInt(sessionStorage.getItem("time"));
let randomTime = () => {
  let minTime = parseInt(sessionStorage.getItem("minTime"));
  let maxTime = parseInt(sessionStorage.getItem("maxTime"));
  const diff = maxTime - minTime;
  const time = (Math.random()*diff)+parseInt(minTime);
  // console.log(time)
  return time;
}
const randomTime2 = randomTime();


if(timeInput) {
      // countdown(timeInput);
      setInterval(() => {
          // popup(timeInput*1000)
          console.log(timeInput);
      }, (timeInput*1000));
  }
  else if(randomTime2) {
      // setInterval(() => {
      //   // popup(randomTime2*1000)
      // }, (randomTime2*1000));
      setTimeout(() => {        
        console.log(randomTime2);
        location.reload();
      }, (randomTime2*1000));
  }