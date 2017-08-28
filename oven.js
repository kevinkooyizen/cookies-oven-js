//Write appropriate functions here for the oven. You may want to consider the following:
//1. A restart button is created when the user clicks the stop button.
//2. Now that you have created a restart button, think of what should happen when the restart button is clicked (refer back to the demo to help you).
//3. If you encountered any bugs in the demo, this is also the place where you can improve the demo's code.
//4. Some functions that you may find useful: getElementById, removeChild, innerHTML, setAttribute, appendChild, insertBefore.
function restart() {
	cookieTray = document.getElementById('tray');
	cookieTray.innerHTML = '';
	clearBtn = document.getElementById('clear');
	clearBtn.parentNode.removeChild(clearBtn);
	restartBtn = document.getElementById('restart-btn');
	restartBtn.parentNode.removeChild(restartBtn);
	p = document.getElementById('deliver-cookies');
	p.innerHTML = "";
	cookieStatus = document.getElementById('cookie-status')
	cookieStatus.innerHTML = "";
	if ((alertNotice = document.getElementById('alert')) != null) {
	alertNotice.innerHTML = "";
	};
	p = document.getElementById('timer');
	p.innerHTML = "";
	cookieCount = 0;
	p = document.getElementById('counter');
	p.innerHTML = 'You have placed ' + cookieCount + ' cookie dough onto the tray.';
	ovenAlreadyRan = false;
	document.getElementById("stop-btn").disabled = false;
    oven = document.getElementById('oven');
    oven.style.backgroundImage = "";
}

function createRestartBtn(){
  restart_btn = document.createElement('button');
  // [STUDENT] guess what does setAttribute do to the <> element?
  restart_btn.setAttribute('id', 'restart-btn');
  // clearBtn.setAttribute('class', 'link');
  restart_btn.innerHTML = 'Restart';
  restart_btn.addEventListener('click', restart);
  return restart_btn;
}

function restartTimer() {
	p = document.getElementById("deliver-cookies")
	if (!document.getElementById('restart-btn')) {
		restart_btn = createRestartBtn();
		p.parentNode.insertBefore(restart_btn, p.nextsibling);
	}
}