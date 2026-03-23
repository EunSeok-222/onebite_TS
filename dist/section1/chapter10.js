// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입을 말함.
function login(user) {
    switch (user.tag) {
        case "admin":
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        case "member":
            console.log(`${user.name}님 현재까지 ${user.point}포인트 적립되었습니다.`);
            break;
        case "guest":
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
            break;
    }
}
// 로딩중 -> 콘솔에 로딩중 출력
// 실패 -> 콘솔에 실패와 에러메세지 출력
// 성공 -> 콘솔에 성공과 데이터를 출력
function processResult(task) {
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
const loading = {
    state: "loading",
};
const success = {
    state: "success",
    response: {
        data: "성공",
    },
};
const failed = {
    state: "failed",
    error: {
        code: 500,
        message: "서버 오류",
    },
};
processResult(loading);
processResult(success);
processResult(failed);
export {};
