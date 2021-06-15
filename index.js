(()=>{
	const header=document.body.appendChild(document.createElement('h2'));
	let text=header.textContent='What I know about coding...|';
	function cursor(){
		text=header.textContent=text.includes('|',text.length-1)?text.slice(0,-1):text+'|';
		setTimeout(cursor,800);
	}
	cursor();
})();