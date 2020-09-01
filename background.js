//add listener for messages from content.js
chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse){
		//change logo and popup to specified only on this tab
		if(request.imgPath != ""){ chrome.browserAction.setIcon({path: {"48": request.imgPath}, tabId: sender.tab.id}); }
		if(request.popupPath != ""){ chrome.browserAction.setPopup({popup: request.popupPath, tabId: sender.tab.id}); }
		//save url that used pwned password
		if(request.url != ""){
			//update urls before making changes
			chrome.storage.local.get('urlList', function(item){
				urls = item.urlList;
			});
			//console.log("1",urls);
			if(request.url.split(':')[0] == "add"){ 
				if(!urls.includes(request.url.split(':')[1].trim())){
					urls.push(request.url.split(':')[1].trim());
				}
			}
			else{
				for( var i = 0; i < urls.length; i++){ 
					if ( urls[i] === request.url.split(':')[1].trim()){ 
						urls.splice(i, 1); i--; 
					}
				}
			}
			//update urls with new info
			chrome.storage.local.set({'urlList': urls});
		}
	}
);

var urls = new Array();

//save urls to storage if it doesn't exist
chrome.storage.local.get('urlList', function(item){
	if (typeof item.urlList === "undefined"){
		chrome.storage.local.set({urlList: urls});
		console.log("setting urlList");
	}
});