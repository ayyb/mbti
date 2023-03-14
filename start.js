
const qna = document.querySelector("#qna");
const main = document.querySelector("#main");
const result = document.querySelector("#result");
const endPoint = 12;

let qIdx = 0;
function begin(){
    console.log("main",main.style.display)
    main.style.display = 'none';
    qna.style.display = 'block';
    console.log(qIdx)
    goNext(qIdx);
}

function goNext(qIdx){
    if(qIdx+1 === endPoint){
        goResult();
        return;
    }
    const q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer)
    }
}

function addAnswer(answerText){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList')
    a.append(answer)
    answer.innerHTML = answerText;

    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');
        for(let i =0; i<children.length; i++){
            children[i].disabled = true;
            children[i].style.display = 'none';            
        }
        goNext(++qIdx)
    },false)

}

function goResult(){
    qna.style.display="none"
    result.style.display="block"
}