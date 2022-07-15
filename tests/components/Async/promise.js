export default function promiseObject(){
//Promise 객체
    /*
        나도 모르게 썼을지 모르는 객체 fetch등을 할 때
        비동기 작업을 도와준다. 완료 또는 실패로 그 결과 값을 나타낸다.
        Promise 객체는 비동기 연산이 종료된 이후에 결과값과 실패 성공을 알려준다.

        대기 pending    초기 상태   
        이행 fulfilled  성공        then 체이닝으로 이어짐
        거부 rejected   실패        catch 체이닝으로 이어짐

        이후, 
        then . 연산자로 활용하여 이어진다. (then 체이닝)
        Promise((resolve, reject)=>{})
        promise.then(prop1)

        catch. reject로 받을 수 있고  
        throw로 던질 수도 있다.
    */

    /*
    const promiseResolve = Promise.resolve("성공");
    const promiseReject = Promise.reject("실패");

    let idx = 0 ;
    promiseResolve
    .then((resolve) => {
        idx++;
        console.log(`${idx}회 ${resolve}`);
        return promiseResolve;
    }).then((resolve) => {
        idx++;
        console.log(`${idx}회 ${resolve}`);
        return promiseReject;
    }).catch((reject) => {
        idx++;
        console.log(`${idx}회 ${reject}`);
        return promiseResolve;
    }).then((resolve) => {
        idx++;
        console.log(`${idx}회 ${resolve}`);
        return promiseResolve;
    });
    */
}
