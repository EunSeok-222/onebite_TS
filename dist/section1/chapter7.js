//void
// void -> 공허 아무것도 없다.
// 함수에서 반환값이 없을 때 사용
function func1() {
    return "hello";
}
function func2() {
    //이렇게 반환값이 없을 때 void를 사용한다.
    console.log("hello");
}
let a;
a = 1; // error
a = "hello"; // error
a = true; // error
a = null; // error
a = {}; // error
a = []; // error
a = function () { }; // error
a = undefined;
// never 타입
// never -> 존재하지 않는 값, 절대 일어나지 않는 일
function func3() {
    while (true) { }
}
export {};
