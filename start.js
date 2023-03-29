const qna = document.querySelector("#qna");
const main = document.querySelector("#main");
const result = document.querySelector("#result");
const songs = document.querySelectorAll('.song');
const progressValueEl = document.querySelector('.progress .value');
const countNumber = document.querySelector('.num');
const qBoxImg = document.getElementById('qImg');
const endPoint = 12; //문제 갯수

let qIdx = 0;
let anserResult = '';
function begin() {
  console.log("main", main.style.display);
  main.style.display = "none";
  qna.style.display = "grid";
  console.log(qIdx);
  goNext(qIdx);
}

function goNext(qIdx) {
  if (qIdx === endPoint) {
    goResult();
    return;
  }
  const q = document.querySelector(".qBox");
  countNumber.innerHTML = qIdx + 1 +' / 12';
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qnaList[qIdx].a[i].value);
  }
  progressValueEl.style.width = (qIdx + 1) * 8.33 + '%';

  for(let n=0; n<endPoint; n++){
    if(qIdx == n){
      qBoxImg.src = "img/q_"+ (n+1) + ".png";
    }
  }
}




function addAnswer(answerText, value) {
  var a = document.querySelector(".answerBox");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  a.append(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click",function () {
      anserResult += value;
      console.log(result);
      var children = document.querySelectorAll(".answerList");
      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.display = "none";
      }
      goNext(++qIdx);
    },
    false
  );
}

function goResult() {
  qna.style.display = "none";
  result.style.display = "grid";

  const resultType = document.getElementById("resultType");
  const resultInfo = document.getElementById("resultInfo");
  const resultImg = document.getElementById("resultImg");
  const resultDesc = document.querySelector(".resultDesc");

  console.log(anserResult);
  let number = "";
  number = infoList.findIndex((x) => x.type === anserResult);
  console.log(number);
  console.log(infoList[number].name);
  resultType.innerHTML = infoList[number].type;
  resultInfo.innerHTML = infoList[number].name;
  resultImg.src = infoList[number].img;
  resultDesc.innerHTML = infoList[number].desc;

  songs.forEach(function (song, index) {
    song.innerHTML = infoList[number].songs[index]
  })
}

function reGame() {
  anserResult = "";
  qIdx = 0;
  result.style.display = "none";
  main.style.display = "grid";
}



// 공유 관련 소스
const btnEl = document.querySelector('.share-or-copy')

// 각 지원 기능 확인!
const isSupportedShare = !!navigator?.share
const isSupportedClipboard = !!navigator?.clipboard
const isSupportedClipboardCommand = document.queryCommandSupported?.('copy')

// 공유 및 복사 기능 상태 체크!
const healthEl = document.createElement('div')
healthEl.style.display = 'none'
healthEl.innerHTML = `s: ${isSupportedShare}, c: ${isSupportedClipboard}, cc: ${isSupportedClipboardCommand}`
document.body.append(healthEl)

// 모바일 브라우저 내장 공유 기능!
async function startNativeShare() {
  await navigator.share({
    title: '나에게 맞는 플레이 리스트는?',
    text: '누구나 좋아하는 노래가있어요, 어떤노래일까요',
    url: location.href // 현재 페이지 주소!
  })
}

// 주소 복사 기능!
async function copyToClipboard() {
  // 레거시 우선!
  if (isSupportedClipboardCommand) {
    const textarea = document.createElement('textarea')
    textarea.style.position = 'fixed'
    textarea.style.top = 0
    textarea.style.left = 0
    textarea.value = location.href

    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()

    document.execCommand('copy')
    document.body.removeChild(textarea)
    alert('링크를 복사했어요 ><')
    return
  }
  if (isSupportedClipboard) {
    await navigator.clipboard.writeText(location.href)
    alert('링크를 복사했어요 ><')
  }
}

// 모든 기능이 없는 경우 공유 버튼 제거!
if (!isSupportedShare && !isSupportedClipboard && !isSupportedClipboardCommand) {
  btnEl.style.display = 'none'
}

// 공유 버튼을 클릭했을 떄!
btnEl?.addEventListener('click', async function () {
  if (isSupportedShare) {
    await startNativeShare()
    return
  }
  if (isSupportedClipboard || isSupportedClipboardCommand) {
    await copyToClipboard()
  }
})