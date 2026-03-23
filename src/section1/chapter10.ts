// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입을 말함.

type Admin = {
  tag: "admin";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "member";
  name: string;
  point: number;
};

type Guest = {
  tag: "guest";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  switch (user.tag) {
    case "admin":
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    case "member":
      console.log(
        `${user.name}님 현재까지 ${user.point}포인트 적립되었습니다.`,
      );
      break;
    case "guest":
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
      break;
  }
}

//복습 겸 사례
//비동기 작업의 결과를 처리하는 객체

type Loading = {
  state: "loading";
};

type Success = {
  state: "success";
  response: { data: string };
};

type Failed = {
  state: "failed";
  error: { code: number; message: string };
};

type AsyncTask = Loading | Success | Failed;

// 로딩중 -> 콘솔에 로딩중 출력
// 실패 -> 콘솔에 실패와 에러메세지 출력
// 성공 -> 콘솔에 성공과 데이터를 출력

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "loading":
      console.log("로딩중");
      break;
    case "failed":
      console.log(`실패: ${task.error.message}`);
      break;
    case "success":
      console.log(`성공: ${task.response.data}`);
      break;
  }
}
const loading: AsyncTask = {
  state: "loading",
};

const success: AsyncTask = {
  state: "success",
  response: {
    data: "성공",
  },
};

const failed: AsyncTask = {
  state: "failed",
  error: {
    code: 500,
    message: "서버 오류",
  },
};

processResult(loading);
processResult(success);
processResult(failed);
