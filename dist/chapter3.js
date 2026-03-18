// object 객체
let user = {
    id: 1,
    name: "이은석",
    age: 30,
};
user = { name: "홍길동", age: 20 };
let dog = { name: "토리", color: "white" };
let config = { apiKey: "MY API KEY" }; // readonly 하면 읽기 전용
export {};
// config.apiKey = "987654321"; // error
