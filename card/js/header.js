document.write('<!-----------  公共js和css 开始----------->\n');
document.write(
    '<link rel="stylesheet" href="https://ss.4r7.com/card/css/mouse.css">\n' +
    '<link rel="stylesheet" href="https://ss.4r7.com/card/css/iconfont.css" type="text/css">\n' +
    '<link rel="stylesheet" href="https://ss.4r7.com/card/css/page.css">\n');

//控制pace.js进度条加载时间上限，自动隐藏
function hidepacejs() {
    var pacediv = document.getElementsByClassName("pace")[0];
    pacediv.style.display = "none";
}
var pacet1 = window.setInterval(hidepacejs, 7000);

// ----------- introduction 开始 -----------
var first = true;
var introduction = function (documentElement, sentence) {
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

// ----------- introduction 结束 -----------

// 选择所有具有锚点链接的元素
const anchorLinks = document.querySelectorAll('a[href^="#"]');
// 添加点击事件监听器
anchorLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // 阻止默认的点击事件
        event.preventDefault();
        // 获取目标锚点的id
        const targetId = this.getAttribute('href');
        // 使用平滑滚动到达目标锚点
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.write('<!-----------  公共js和css 结束----------->\n');
