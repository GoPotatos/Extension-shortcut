chrome.browserAction.onClicked.addListener(tab=>{
	chrome.tabs.sendMessage(tab.id,"get-selection",(res)=>{
		const url="https://google.com/search?q=" +res;
		chrome.tabs.create({url});
	})
})
