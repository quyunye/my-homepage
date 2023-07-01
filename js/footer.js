document.write('<!----------- 公共js footer开始 ----------->');
document.write('<br><br>');
document.write('<p style="color:#333;" style="text-align: center;">');
document.write('QuYunye.com 屈耘野 © 2013 - 2023');
document.write('</p>');


// ----------- introduction 开始 -----------
var first = true;
var introduction = function (documentElement) {
    var sentence = ["临邛道士鸿都客,能以精诚致魂魄", "天长地久有时尽，此恨绵绵无绝期", "豫兮若冬涉川,旷兮其若谷"];
    var msForwardDelay = 80;
    var msBackwardDelay = 2;
    var msWaitTime = 1000;
    for (var i = sentence.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = sentence[i];
        sentence[i] = sentence[j];
        sentence[j] = temp;
    }
    function randomSelect() {
        return b[Math.floor(Math.random() * b.length)]
    }
    function generateRandomCharacter() {
        return String.fromCharCode(94 * Math.random() + 33)
    }
    function generateDocumentFragment(r) {
        for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
            var l = document.createElement("span");
            l.textContent = generateRandomCharacter(), l.style.color = randomSelect(), n.appendChild(l)
        }
        return n
    }
    function updateContent() {
        var t = o[c.skillI];
        if (c.step) {
            c.step--;
        } else {
            c.step = g;
            if (c.prefixP < l.length) {
                if (c.prefixP >= 0) {
                    c.text += l[c.prefixP];
                }
                c.prefixP++;
            } else if ("forward" === c.direction) {
                if (c.skillP < t.length) {
                    c.text += t[c.skillP];
                    c.skillP++;
                } else if (c.delay) {
                    c.delay--;
                } else {
                    c.direction = "backward";
                    c.delay = a;
                    if (first) {
                        //Sentence first load completed
                        document.getElementById("index_card").classList.add("hover_effect");
                        first = false;
                    }
                    setTimeout(updateContent, msWaitTime); // Wait before starting the backward animation
                    return; // Exit the function without scheduling the next update
                }
            } else if (c.skillP > 0) {
                c.text = c.text.slice(0, -1);
                c.skillP--;
            } else {
                c.skillI = (c.skillI + 1) % o.length;
                c.direction = "forward";
            }
        }
        documentElement.textContent = c.text;
        documentElement.appendChild(
            generateDocumentFragment(
                c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP)
            )
        );
        var nowDelay = (c.direction === "backward") ? msBackwardDelay : msForwardDelay;
        setTimeout(updateContent, nowDelay);
    }
    var l = "", o = sentence.map(function (r) { return r + "" }), a = 2, g = 1, s = 5, d = msForwardDelay, b = ["rgb(110,110,110)", "rgb(150,150,150)", "rgb(191,191,191)", "rgb(228,228,228)", "rgb(254,254,254)", "rgb(90,90,90)", "rgb(120,120,120)", "rgb(150,150,150)", "rgb(226,226,226)", "rgb(198,198,198)", "rgb(175,175,175)", "rgb(127,127,127)", "rgb(82,82,82)", "rgb(48,48,48)", "rgb(29,29,29)", "rgb(26,26,26)", "rgb(35,35,35)", "rgb(54,54,54)", "rgb(76,76,76)", "rgb(96,96,96)"], c = { text: "", prefixP: -s, skillI: 0, skillP: 0, direction: "forward", delay: a, step: g };
    updateContent()
};

introduction(document.getElementById('introduction'));

// ----------- introduction 结束 -----------


// ----------- button 开始 -----------

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    var fullscreenIcon = document.querySelector('.fixed-buttons button:nth-child(2) i');
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        fullscreenIcon.className = 'iconfont icon-suoxiao';
    } else {
        fullscreenIcon.className = 'iconfont icon-quanping';
    }
}
// ----------- button 结束 -----------

document.write('<!----------- 公共js footer结束 ----------->');