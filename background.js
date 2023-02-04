chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            css: [".screen-focus-disabled"]
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
  
  chrome.runtime.onMessage.addListener(function(tab) {
    chrome.tabs.executeScript({
      code: 'document.body.classList.toggle("screen-focus-enabled");'
    });
});
  