const qna = document.querySelector("#qna");
const main = document.querySelector("#main");
const result = document.querySelector("#result");
//const songs = document.querySelectorAll('.song');
const progressValueEl = document.querySelector(".progress .value");
const countNumber = document.querySelector(".num");
const qBoxImg = document.getElementById("qImg");
const resultType = document.getElementById("resultType");
const resultInfo = document.getElementById("resultInfo");
const resultImg = document.getElementById("resultImg");
const resultDesc = document.querySelector(".resultDesc");
const songImgs = document.querySelectorAll(".song-img");
const songTitles = document.querySelectorAll(".songTitle");
const artists = document.querySelectorAll(".artist");
const songLinks = document.querySelectorAll(".songLink");
const endPoint = 12; //문제 갯수
const clientId = 'bd9ffb61b98e43339b8f2ea830f0ad8d';
const clientSecret = 'ef6cf33eac6b4b8092a3412d0d8a36f5';

let qIdx = 0;
let anserResult = "";
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
  countNumber.innerHTML = qIdx + 1 + " / 12";
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qnaList[qIdx].a[i].value);
  }
  progressValueEl.style.width = (qIdx + 1) * 8.33 + "%";

  for (let n = 0; n < endPoint; n++) {
    if (qIdx == n) {
      qBoxImg.src = "img/q_" + (n + 1) + ".png";
    }
  }
}

function addAnswer(answerText, value) {
  var a = document.querySelector(".answerBox");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  a.append(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click",
    function () {    
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

/*MBTI별 추천 플레이리스트를 가져오는 함수(Spotify API)*/
let playlist_id = ""; //플레이리스트 아이디
let playList = [];

async function fetchPlaylist() {
  try {
    const accessToken = await requestAccessToken(
      clientId,
      clientSecret
    );
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlist_id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const data = await response.json();
    console.log(data.tracks);
    return data.tracks.items;
  } catch (error) {
    console.error(error);
  }
}

function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

async function goResult() {
  let mbti = ""; //최종결과 MBTI
  countOccurrences(anserResult, "E") > 1 ? (mbti += "E") : (mbti += "I");
  countOccurrences(anserResult, "N") > 1 ? (mbti += "N") : (mbti += "S");
  countOccurrences(anserResult, "F") > 1 ? (mbti += "F") : (mbti += "T");
  countOccurrences(anserResult, "P") > 1 ? (mbti += "P") : (mbti += "J");
  let number;
  number = infoList.findIndex((x) => x.type === mbti);

  resultType.innerHTML = infoList[number].type;
  resultInfo.innerHTML = infoList[number].name;
  resultImg.src = infoList[number].img;
  resultDesc.innerHTML = infoList[number].desc;

  let playlistUrl = infoList[number].playlistId;
  const pattern = /playlist\/(.+)\?/;

  const matchResult = playlistUrl.match(pattern);

  if (matchResult) {
    playlist_id = matchResult[1];
    console.log(playlist_id);
  } else {
    console.log("No match found");
  }
  const playList = await fetchPlaylist(); //결과값 조회

  if (playList !== null) {
    qna.style.display = "none";
    result.style.display = "grid";
    for (const [index, item] of playList.entries()) {
      songImgs[index].src = item.track.album.images[0].url;
      songTitles[index].innerHTML = item.track.name;
      artists[index].innerHTML = item.track.album.artists[0].name;
      songLinks[index].setAttribute("data", item.track.preview_url);
      // songLinks[index].setAttribute("href", infoList[number].songs[index].link);
      // songLinks[index].setAttribute("target", "_blank");
    }
  }
}

function reGame() {
  anserResult = "";
  qIdx = 0;
  result.style.display = "none";
  main.style.display = "grid";
  //음악중지
  currentAudio.pause();
  currentAudio = null;
}

// 공유 관련 소스
const btnEl = document.querySelector(".share-or-copy");

// 각 지원 기능 확인!
const isSupportedShare = !!navigator?.share;
const isSupportedClipboard = !!navigator?.clipboard;
const isSupportedClipboardCommand = document.queryCommandSupported?.("copy");

// 공유 및 복사 기능 상태 체크!
const healthEl = document.createElement("div");
healthEl.style.display = "none";
healthEl.innerHTML = `s: ${isSupportedShare}, c: ${isSupportedClipboard}, cc: ${isSupportedClipboardCommand}`;
document.body.append(healthEl);

// 모바일 브라우저 내장 공유 기능!
async function startNativeShare() {
  await navigator.share({
    title: "나에게 맞는 플레이 리스트는?",
    text: "누구나 좋아하는 노래가있어요, 어떤노래일까요",
    url: location.href, // 현재 페이지 주소!
  });
}

// 주소 복사 기능!
async function copyToClipboard() {
  // 레거시 우선!
  if (isSupportedClipboardCommand) {
    const textarea = document.createElement("textarea");
    textarea.style.position = "fixed";
    textarea.style.top = 0;
    textarea.style.left = 0;
    textarea.value = location.href;

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("링크를 복사했어요 ><");
    return;
  }
  if (isSupportedClipboard) {
    await navigator.clipboard.writeText(location.href);
    alert("링크를 복사했어요 ><");
  }
}

// 모든 기능이 없는 경우 공유 버튼 제거!
if (
  !isSupportedShare &&
  !isSupportedClipboard &&
  !isSupportedClipboardCommand
) {
  btnEl.style.display = "none";
}

// 공유 버튼을 클릭했을 떄!
btnEl?.addEventListener("click", async function () {
  if (isSupportedShare) {
    await startNativeShare();
    return;
  }
  if (isSupportedClipboard || isSupportedClipboardCommand) {
    await copyToClipboard();
  }
});


//spotify access_token요청 함수 - spotify api Devleoper 계정 사용중
function requestAccessToken(clientId, clientSecret) {
  const url = "https://accounts.spotify.com/api/token";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  };

  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Access token request failed");
      }
      return response.json();
    })
    .then((data) => data.access_token)
    .catch((error) => {
      console.error(error);
    });
}

//음악 관련 기능
let currentAudio = null;


function playMusic(index){
  var preview_url = document.querySelectorAll( '.songLink' )[index].getAttribute( 'data' );
  if (currentAudio !== null) {
    currentAudio.pause();
    currentAudio = null;
  }
  currentAudio = new Audio(preview_url);
  currentAudio.play();
}

//play<->pause button change
const playBtn = document.querySelectorAll('i');
songLinks.forEach(function(data, index){
    data.addEventListener('click',function(){
      playBtn[index].classList.toggle("fa-circle-play");
      playBtn[index].classList.toggle("fa-circle-pause");
    });
});


function countVisit() {
  const cookieName = "visitCount";
  let visitCount = parseInt(getCookie(cookieName)); // 현재 방문 횟수를 가져옵니다.
  if (isNaN(visitCount)) {
    visitCount = 0;
  }
  visitCount++; // 방문 횟수를 증가시킵니다.
  setCookie(cookieName, visitCount, 365); // 방문 횟수를 쿠키에 저장합니다.
  console.log("방문 횟수: " + visitCount); // 방문 횟수를 콘솔에 출력합니다.
  document.getElementById('visitCount').innerHTML = visitCount;
}

function setCookie(cookieName, cookieValue, expireDays) {
  const d = new Date();
  d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}