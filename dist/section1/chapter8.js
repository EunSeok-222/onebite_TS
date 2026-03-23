let num1 = 10;
let num2 = 10;
num1 = num2;
let person = {}; // 타입 단언 이렇게 하면 오류 발생 안함 as 대신 <Person> 사용 가능
person.name = "이은석";
person.age = 30;
let person2 = {};
person2.name = "홍길동";
person2.age = 20;
// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나 A가 B의 서브 타입이어야 함
// let num3  = 10 as string; // 오류 발생
let num4 = 10; // 오류 발생 안함 -> unknown은 모든 타입의 슈퍼타입이므로 가능
// 타입 단언은 컴파일러에게만 정보를 주는 것이므로 런타임에는 영향을 주지 않음
// 즉, 타입 단언을 사용하면 런타임에는 오류가 발생할 수 있음
// 타입 단언은 꼭 필요한 경우에만 사용해야함
// const 단언
let num5 = 10; // num5의 타입은 10이 됨 -> 리터럴 타입
let cat = {
    name: "나비",
    age: 1,
}; // cat의 타입은 {name: "나비", age: 1}이 됨 -> 리터럴 타입
cat.name = "야옹이"; // 오류 발생 -> const 단언을 사용했으므로 변경 불가능
let post = {
    title: "제목",
    content: "내용",
    author: "이은석",
    createdAt: new Date(),
    updatedAt: new Date(),
};
const len = post.author?.length; // 오류 발생 -> author가 undefined일 수 있음
const len2 = post.author.length; // 오류 발생 안함 -> author가 null이 아님을 단언
export {};
