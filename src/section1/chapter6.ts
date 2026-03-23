// any
// 특정 변수의 타입을 우리가 확실히 모를때
let anyLet: any = 10;
anyLet = "hello";
anyLet = true;
anyLet = null;
anyLet = undefined;
anyLet = {};
anyLet = [];
anyLet = function () {};

let num: number = 10;
num = anyLet;

// any 타입은 타입 검사를 하지 않기 때문에 에러가 발생하지 않음
anyLet.push(1);
anyLet.push("hello");
anyLet.push(true);
anyLet.push(null);
anyLet.push(undefined);
anyLet.push({});
anyLet.push([]);
anyLet.push(function () {});

// unknown
// any와 비슷하지만 타입 검사를 함
let unknownLet: unknown = 10;
unknownLet = "hello";
unknownLet = true;
unknownLet = null;
unknownLet = undefined;
unknownLet = {};
unknownLet = [];
unknownLet = function () {};

let num2: number = 10;
num2 = unknownLet; // error

// unknown 타입은 타입 검사를 하기 때문에 에러가 발생함
unknownLet.push(1);
unknownLet.push("hello");
unknownLet.push(true);
unknownLet.push(null);
unknownLet.push(undefined);
unknownLet.push({});
unknownLet.push([]);
unknownLet.push(function () {});
