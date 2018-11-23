var Bird = {
    name: 'Myname',
    fly: function(){
        console.log(this.name + 'is flying...');
    }
};

var Xiaoming = {
    name: "Xiaoming"
};

// 最原始方法改变一个对象的原形, 不建议使用
Xiaoming.__proto__ = Bird;  
Xiaoming.fly();

var Student = {
    name:"Robot",
    height:1.2,
    run:function(){
        console.log(this.name + ' is runing...');
    }
};

function createStudent(name) {
    var s = Object.create(Student);    // 基于Student原型创建一个新对象:
    s.name = name;                     // 初始化新对象:
    return s;
}

var xiaoming = createStudent('小明');
xiaoming.run(); // 小明 is running...
console.log(xiaoming.__proto__ === Student); // true

/************************************************************************/
function NewStudent(name){
    this.name = name;
    this.hello = function () {
        console.log('Hello, ' + this.name + '!');
    };
}

var xiaohong = new NewStudent('さやか');
xiaohong.hello();
console.log("*******************************************************************");

