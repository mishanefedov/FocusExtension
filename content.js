chrome.runtime.onMessage.addListener(async function(request) {
    if (request.message === "toggleScreenFocus") {
      var overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.right = 0;
      overlay.style.bottom = 0;
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      overlay.style.zIndex = 2147483647;
      document.body.appendChild(overlay);
    } else if (request.message === "removeScreenFocus") {
      var overlays = document.getElementsByTagName("div");
      for (var i = 0; i < overlays.length; i++) {
        overlays[i].remove();
      }
    } else if (request.message === "toggle-focus"){
        chrome.scripting.executeScript({
            target: { 
                tabId: request.tabs[0].id
            },
            function: screenFocus
        });   
    }
});

const screenFocus = () => {
    document.body.classList.toggle("screen-focus-enabled");
}
  