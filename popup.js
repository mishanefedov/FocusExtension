document.getElementById('toggle-focus').addEventListener("click", async function() {
    tabs = await chrome.tabs.query({ active: true, currentWindow: true })
    setTimeout(function() {
        chrome.runtime.sendMessage({
            message: "toggle-focus",
            tabs: tabs
        });
    }, 1000)
});
  