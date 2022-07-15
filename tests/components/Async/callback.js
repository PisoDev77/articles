/*
    콜백은
    함수의 사용권 위임
*/
export default function callbackFunc(){


     /*
    console.log("첫 번째 실행");

    function two (callbackEx){
        setTimeout(()=>{
            console.log("2초 뒤에 두 번째 실행");
            callbackEx("세 번째 실행 콜백");
        },2000);
    }


    two(function(third){
        console.log(third);
    });
    */

    // 콜백지옥
    /*  
        만약 Z까지 출력한다면 상당히 복잡할 콜백 지옥.
    */
   /*
    setTimeout(function(){
        console.log("A");
    
        setTimeout(function(){
            console.log("B");
            setTimeout(function(){
                console.log("C");
                setTimeout(function(){
                    console.log("D");
                    setTimeout(function(){
                        console.log("E");
                        setTimeout(function(){
                            console.log("F");
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        },1000);
    
    },1000);
    */
    
    //코딩 패턴으로 해결

    let alpha = 65;
    function nextAlpha() {
        
        console.log(String.fromCharCode(alpha++))
        if(alpha < 90){
            setTimeout(nextAlpha, 10);
        }   
    }

    setTimeout(nextAlpha, 10);


}
