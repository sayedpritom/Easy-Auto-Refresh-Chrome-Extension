chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    const num = parseInt(request.message);
    if(num) {
    location.reload()
    console.log(num)    
}
// start(num);
    }
);

// function start(num){
//     // alert(num);
//     console.log(num);
//     location.reload()
// }