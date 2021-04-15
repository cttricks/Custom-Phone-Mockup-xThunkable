var styles = `
.customebtn {
    position: absolute;
    z-index: 99;
    top: 20px;
    left: 385px;
}

#swicthButtonExt{
	display: none;
}

`;

var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

var swicthBtn = document.createElement('button');
swicthBtn.classList.add('ant-btn');
swicthBtn.classList.add('preview-mode-button');
swicthBtn.classList.add('customebtn');
swicthBtn.id = "swicthButtonExt";
swicthBtn.innerHTML = '<span>Switch to iOS</span>';
document.body.appendChild(swicthBtn);

/*View Button*/
setTimeout(viewButton, 3500);
function viewButton(){
	document.getElementById("swicthButtonExt").style.display= "block";
}

var sFlag = true;
document.getElementById("swicthButtonExt").addEventListener("click", ()=>{
	var elem = document.getElementsByClassName("phone-preview");
	elem[0].style.removeProperty('background-color');
	if(sFlag){
		elem[0].style.background = "url(https://cttricks.com/assets/mock1.png) no-repeat";
		document.getElementById("swicthButtonExt").innerHTML= "<span>Switch to Android</span>";
		sFlag = false;
	}else{
		elem[0].style.background = "url(https://cttricks.com/assets/mock2.png) no-repeat";
		document.getElementById("swicthButtonExt").innerHTML= "<span>Switch to iOS</span>";
		sFlag = true;
	}
	
});