// 타입 좁히기
// 조건문 등을 이용해 넓은타입에서 좁은타입으로
// 타입을 상황에 따라 좁히는 방법
// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => null : null
// value => person : name은 age살 입니다.
function func(value) {
    if (value === null)
        return;
    if (typeof value === "number") {
        console.log(value.toFixed());
        return;
    }
    if (typeof value === "string") {
        console.log(value.toUpperCase());
        return;
    }
    if (value instanceof Date) {
        console.log(value.toLocaleString());
        return;
    }
    if (value && "age" in value) {
        console.log(`${value.name}은 ${value.age}살 입니다`);
    }
}
func(123);
func("hello");
func(new Date());
func(null);
func({ name: "홍길동", age: 30 });
export {};
