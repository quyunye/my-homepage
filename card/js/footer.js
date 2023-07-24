document.write('<!----------- 公共 footer开始 ----------->\n');


// ----------- button 开始 -----------
// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// Function to toggle dark mode
function toggleDarkMode() {
    let body = document.body;
    //这里button:nth-child需要对按钮的顺序进行正确定义
    var darkModeIcon = document.querySelector('.fixed_buttons button:nth-child(1) i');
    if (body.classList.contains("dark_mode")) {
        body.classList.remove("dark_mode");
        darkModeIcon.className = 'iconfont icon-yewan';
    } else {
        body.classList.add("dark_mode");
        darkModeIcon.className = 'iconfont icon-taiyang';
    }
}
// Function to toggle fullscreen mode
function toggleFullscreen() {
    if (document.fullscreenElement) {
        exitFullscreen();
    } else {
        enterFullscreen();
    }
}
// Function to enter fullscreen mode
function enterFullscreen() {
    var element = document.documentElement;
    if (element.requestFullscreen) {
        element.requestFullscreen().then(updateFullscreenButton);
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen().then(updateFullscreenButton);
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
        element.webkitRequestFullscreen().then(updateFullscreenButton);
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen().then(updateFullscreenButton);
    }
}
// Function to exit fullscreen mode
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen().then(updateFullscreenButton);
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen().then(updateFullscreenButton);
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen().then(updateFullscreenButton);
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen().then(updateFullscreenButton);
    }
}
// Function to update the fullscreen button icon based on the current state
function updateFullscreenButton() {
    var fullscreenIcon = document.querySelector('.fixed_buttons button:nth-child(3) i');
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        fullscreenIcon.className = 'iconfont icon-suoxiao';
    } else {
        fullscreenIcon.className = 'iconfont icon-fangda';
    }
}
//button鼠标悬浮反色
function re_fixed_buttons(in_fixed_button) {
    var fixed_button = document.getElementById(in_fixed_button);
    if (fixed_button.style.filter == 'invert(100%)') {
        fixed_button.style.filter = '';
    } else {
        fixed_button.style.filter = 'invert(100%)';
    }
}
// ----------- button 结束 -----------


//点击事件修改index_card尺寸
const indexCard = document.getElementById('index_card');
const cards = document.querySelectorAll('.card');
const button1Elements = document.getElementsByClassName('button_1');
//index_card全尺寸
function index_big() {
    first = false;
    indexCard.classList.remove('small_effect');
    for (let i = 0; i < button1Elements.length; i++) {
        button1Elements[i].classList.remove('small_effect');
    }
};
//index_card小尺寸
function index_small() {
    first = false;
    indexCard.classList.add('small_effect');
    for (let i = 0; i < button1Elements.length; i++) {
        button1Elements[i].classList.remove('hover_effect');
        button1Elements[i].classList.add('small_effect');
        first = false;
    }
};
document.addEventListener('click', function (event) {
    var isCardElement = Array.from(cards).some(card => card.contains(event.target));
    //在indexCard和card之外点击
    if ((!indexCard.contains(event.target)) && (!isCardElement)) {
        index_small();
    };
    //在indexCard之内点击
    if (indexCard.contains(event.target)) {
        index_big();
    };
});



document.write('<!----------- 公共 footer结束 ----------->\n');