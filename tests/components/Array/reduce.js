import utils from "./utils.js";

// Array.prototype.reduce
const arr = [0,1,2,3,4];
const SUBJECT = "Array.prototype.reduce";

const res = arr.reduce((acc, cur, idx, array)=>{
    console.log(acc, cur, idx, array);  
    return acc + cur;
});

const setContent = $content =>{
    const sum = document.createElement("div");
    sum.appendChild(utils.setHeader("배열의 합산을 구할 수 있다.", "h5"));

    const $code = document.createElement("pre");
    $code.classList.add("codeJS");
    $code.innerText = `
    const arr = [0,1,2,3,4];

    const res = arr.reduce((prev, curr)=>{
        console.log(prev, curr, arr);  
        return prev+curr;
    });
    `;

    const resCon = document.createElement("div");
    resCon.innerText = "> " + res;

    sum.appendChild($code);
    sum.appendChild(resCon);

    $content.appendChild(sum);
}

const reduce = () => {

    const $reduce = document.createElement("details");
    $reduce.id = "array-reduce";

    const summary = document.createElement("summary");
    summary.innerText = SUBJECT;
    $reduce.appendChild(summary);
   
    // 제목 
    $reduce.appendChild(utils.setHeader(SUBJECT, "h3"));

    //내용
    const $content = document.createElement("section");
    setContent($content);
    $reduce.appendChild($content);    


    return $reduce;

}
export default reduce;