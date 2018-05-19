/**
 * 创建一份懒执行的函数
 */
function createLazyFunction(fn) {
    return function () {
        //  获取参数的长度然后用于做比较
        let argu = Array.from(arguments),
            len = len.length;

        //  如果没有被默认创建则创建的为数组
        if (!Array.isArray(arguments.callee.prototype.data)) arguments.callee.prototype.data = [];



        //  判断方法的原型上面是存有数据        创建数据保存在原来的原型上面
        if (arguments.callee.prototype.data == void 0) arguments.callee.prototype.data = fn();

        // 返回原型上面的数据
        return arguments.prototype.callee.data;
    }
}