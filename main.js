info = document.getElementById('info');
infoShow= document.getElementById('infoShow')
share = document.getElementById('share');
overlay=document.getElementById('overlay');
closeimg=document.querySelector('.closeimg')

infoShow.addEventListener('click', Overlay);

function Overlay() {
	if (info.classList.contains('show')){
		info.classList.remove('show');
		infoShow.src='static/icon/circle.png'
	}else{
		info.classList.add('show');
		infoShow.src='static/icon/close_circle.png'
	}
}

share.addEventListener('click', Share )
closeimg.addEventListener('click', Share);

function Share () {
	if (overlay.classList.contains('show')){
		overlay.classList.remove('show');
	}else{
		overlay.classList.add('show')
	}
}