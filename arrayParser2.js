//const str = "['1a3',[null,false,['11',[112233],112],55, '99'],33, true]"
const str = "['1a3',null,33,[dd,[dfsdf,2,3],ww,ff], '99', true]"

const arr = str.split("");

const makeArr = (arr) => {
    if (arr[0] === "["){
        answer = [];
        arr.shift()
        arr.pop()
        arr.push(",") //배열 재구성
    }
    //return answer
}

const makeQue = (arr) => {
    let i = 0;
    let Que = [];
    let word = "";
    let bracketStack = [];
    while(i<= arr.length-1){
        // 띄어쓰기
        if (arr[0] ===" "){
            arr.shift()
        }
        // 배열
        else if (arr[0] === "["){
            word = ""
            while(i<= arr.length-1){ // 마지막 ']' 까지 돌기
                if(arr[i] === "["){
                    bracketStack.push(arr[i]);
                }
                word = word+ arr[i];
                arr.shift()
                if(arr[i] === "]"){
                    bracketStack.shift();
                    word = word+ arr[i];
                    arr.shift()
                }
                if(bracketStack[0] === undefined){
                    break;
                }
            }
            arr.shift()
            Que.push(word);
        }
        // string
        else if (arr[0] ==="'"){
            arr.shift() // string 시작 "'" 제거
            word = ""
            while(i<= arr.indexOf(',')){
                if(arr[i] === "'"){
                    arr.shift() // string 마지막 "'" 제거
                }else{
                    word = word+ arr[i];
                    arr.shift()
                } 
                if(arr.indexOf(',') === 0) { // word 단위
                    break
                }
            }
            Que.push(word)
            arr.shift()
        }
        // not string, array => number, boolean, null
        else{
            word = ""
            // word 형성
            while(i<= arr.indexOf(',')){
                word = word+ arr[i];
                arr.shift()
                if(arr.indexOf(',') === 0) { // word 단위
                    break
                }
            }
            // boolean or null or Number check
            if(word === "true" || word === "false"){
                word = Boolean(word)
            }else if(word === "null"){
                word = null;
            }else if(typeof(Number(word))==="number"){
                word = Number(word)
            }
            // word push
            arr.shift()
            Que.push(word);
        }
    }
    return Que
}

makeArr(arr)
console.log(makeQue(arr))
//console.log(arr)