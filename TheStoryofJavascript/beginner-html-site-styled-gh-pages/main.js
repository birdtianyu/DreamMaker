var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myHeading.textContent = 'Hello world!';

function setUserName() {
    // prompt() 函数会像 alert() 一样弹出一个对话框。
    // 只不过 prompt() 需要用户输入数据,，而且在用户点击确定后将数据存储在变量里。
    var myName = prompt('Please enter your name.'); 
    // localStorage API ，它允许我们将数据存储在浏览器里以供后续获取。
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}