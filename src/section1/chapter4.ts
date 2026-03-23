// 타입 별칭
type User = {
  id: number;
  name: string;
  age: number;
};

let user: User = { id: 1, name: "이은석", age: 30 };
let user2: User = { id: 2, name: "홍길동", age: 20 };

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  korea: "KR",
  usa: "US",
  japan: "JP",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCode: CountryNumberCodes = {
  korea: 410,
  usa: 840,
  japan: 392,
};
