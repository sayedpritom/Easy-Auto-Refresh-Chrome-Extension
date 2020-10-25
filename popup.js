const getElement = id => document.getElementById(id);
const reload = time => setInterval(() => {
    location.reload();
}, time);

const setTimeValue = value => sessionStorage.setItem("time", value);

const minutesFromButtons = document.getElementsByClassName("min");
for (let i = 0; i < minutesFromButtons.length; i++) {
    const time = minutesFromButtons[i];
    time.addEventListener("click", () => {
        popup([((time.innerHTML)*60), "setCustomTime"])
        location.reload();
    })    
}
   
const randomInput = getElement("randomInputForm");
const setCustomTime = getElement("setCustomTime");    

setCustomTime.addEventListener('submit', (e) => {
    e.preventDefault();
    const time = getElement('custom-seconds').value;
    popup([time, "setCustomTime"])
    location.reload();
})

randomInput.addEventListener('submit', (e) => {
      e.preventDefault();
      const min = getElement('from').value;
      const max = getElement('to').value;
      popup([min,max, "randomInput"])
      location.reload();
    })
document.getElementById("stopBtn").addEventListener('click', () => {
    popup(["stopBtn"])
    location.reload();
    });

    function popup(time) {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": time});
       });
      }