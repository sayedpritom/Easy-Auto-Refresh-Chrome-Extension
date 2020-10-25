chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if((request.message).length == 2) {
      if(request.message[1] == "setCustomTime") {
        sessionStorage.setItem('minTime', null);
        sessionStorage.setItem('maxTime', null);
      }
      sessionStorage.setItem("time", request.message[0]);
      location.reload()
    }
    else if((request.message).length == 3) {
      if(request.message[2] == "randomInput") {
        sessionStorage.setItem('time', null);
      }
      sessionStorage.setItem("minTime", request.message[0]);
      sessionStorage.setItem("maxTime", request.message[1]);
      location.reload()
    } else {
        sessionStorage.setItem('minTime', null);
        sessionStorage.setItem('maxTime', null);
        sessionStorage.setItem('time', null);
        location.reload()
    }
    // console.log(request.message);    
    }
);

let timeInput = parseInt(sessionStorage.getItem("time"));
let randomTime = () => {
  let minTime = parseInt(sessionStorage.getItem("minTime"));
  let maxTime = parseInt(sessionStorage.getItem("maxTime"));
  const diff = maxTime - minTime;
  const time = (Math.random()*diff)+parseInt(minTime);
  return time;
}
const randomTime2 = randomTime();


if(timeInput) {
      setInterval(() => {
          // console.log(timeInput);
        location.reload();
      }, (timeInput*1000));
  }
  else if(randomTime2) {
      setTimeout(() => {        
        // console.log(randomTime2);
        location.reload();
      }, (randomTime2*1000));
  }