

// 滚轮事件兼容性封装


function myScroll(obj,upFn,downFn) {
    obj.onmouseheel = fn;
    obj.addEventListener('DOMMouseScroll',fn)

    function fn(ev) {

        if (ev.wheelDetal > 0 || ev.detail < 0) {
            // 这儿表示向上滚动
            upFn.call(obj,ev);
        } else {
            downFn.call(obj,ev)
        }

        ev.preventDefault();
        return false;
    }

}