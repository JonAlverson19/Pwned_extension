//add listener for messages from content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
	//change logo and popup to specified only on this tab and while on this site
    if(request.imgPath != "") { chrome.browserAction.setIcon({path: {"48": request.imgPath}, tabId: sender.tab.id}); }
	if(request.popupPath != "") { chrome.browserAction.setPopup({popup: request.popupPath, tabId: sender.tab.id}); }
	
	//save url that used pwned password
	if(request.url != ""){
	  if (request.url.split('.')[0] == "add") { urls.add(request.url.split('.')[1]); }
	  else{
	  	  if(urls.has(request.url.split('.')[1])) { urls.delete(request.url.split('.')[1]); }
	  }
	}
	//console.log("set: " + urls.values())
  }
);

var urls = new Set();

//need to iterate over the set to determine if page should have unlocked logo and html