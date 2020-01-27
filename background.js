chrome.browserAction.onClicked.addListener(function(tab){
  console.log("Going to rewrite a url on this page");
  chrome.tabs.executeScript({
    file: 'rewrite.js'
  });
});
