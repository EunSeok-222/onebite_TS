// 배열
let numArr1: number[] = [1, 2, 3];
let strArr2: string[] = ["hello", "world" ,"im"];
let boolArr3: Array<boolean> = [true, false, true];
let boolArr4: boolean[] = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = ["hello", 123];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [[1, 2, 3], [4, 5, 6]];

// 튜플 -> 고정된 개수와 순서
let tuple1: [number, number] = [1,3];
let tuple2: [number, string, boolean] = [1,"hello",true];

const users: [string, number, boolean][] = [
  ["이은석", 30, false],
  ["이신지", 30, true],
  ["김영철", 33, false],
  ["송수빈", 28, false],
  // 튜플은 순서가 바뀌면 타입이 달라짐
  // [30, "이은석", false], // error
];