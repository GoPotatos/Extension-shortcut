chrome.runtime.onMessage.addListener((message,sender,response)=>{
	const selection=window.getSelection().toString()
	response(selection);
})