const qnaList = [
  {
    q: "1. 랜덤 플레이리스트를 듣다가 좋은 음악을 발견했을 때 나는",
    a: [
      { answer: "a. 단톡방에 공유해서 주변 사람들에게 널리 알림", value: "I" },
      { answer: "b. 조용히 프로필 뮤직을 해 놓거나 나만 듣는다", value: "E" },
    ],
  },
  {
    q: "2. 댄스 음악을 들으면서 나는",
    a: [
      { answer: 'a. 무대 위 메인 댄서가 된 나를 상상', value: "S" },
      { answer: 'b. 흥얼흥얼 거리며 음악을 즐긴다', value: "N" },
    ],
  },
  {
    q: "3. 내가 정말 좋아하는 노래를 지인에게 추천해줬는데 별로라고 한다",
    a: [
      { answer: "a. 아 그래..? 그럼 이건 어때 → 다른 거 추천해준다", value: "T" },
      { answer: "b. 다신 너한테 음악 추천 안 해준다", value: "F" },
    ],
  },
  {
    q: "4. 좋아하는 아티스트의 음악을 즐길 때 ",
    a: [
      {
        answer: "a. 멜로디와 가사에 집중하며 작사가의 의도나 작곡 비하인드를 찾아본다",
        value: "J",
      },
      {
        answer: "b. 팬덤문화를 즐기고 콘서트를 예매해 사람들과 떼창한다",
        value: "P",
      },
    ],
  },
  {
    q: "5. 음악을 좋아하게 되는 이유는 보통 ",
    a: [
      {
        answer: "a. 듣자마자 꽂히는 멜로디와 공감할 수 있는 가사",
        value: "",
      },
      { answer: "b. 그 음악에서만 느껴지는 분위기와 독특한 사운드", value: "" },
    ],
  },
  {
    q: "6. 음악을 들을 때 나는 ",
    a: [
      {
        answer: "a. 때에 따라 듣는 플레이리스트를 자주 정리한다",
        value: "",
      },
      { answer: "b. 이거 다음엔 뭐듣지.. 그냥 생각나는 거 듣는다", value: "" },
    ],
  },
  {
    q: "7. 5분 짜리 노래가 다 끝날 때까지 샤워를 끝마치지 못했다. ",
    a: [
      {
        answer: "a. 그게 뭐가 문제?",
        value: "",
      },
      { answer: "b. 크흑…분하다..", value: "" },
    ],
  },
  {
    q: "8. 예술작품을 접하고 나서(영화 드라마 책) ",
    a: [
      {
        answer: "a. 관련 ost나 소설에 어울리는 음악을 찾아 들으며 과몰입 중증에 걸려 헤어나오지 못함",
        value: "",
      },
      { answer: "b. 재밌었다 이제 할 일을 하자", value: "" },
    ],
  },
  {
    q: "9. 기분이 울적할 때 슬픈음악을 ",
    a: [
      {
        answer: "a. 들으면서 운다",
        value: "",
      },
      { answer: "b. 오히려 더 멀리한다", value: "" },
    ],
  },
  {
    q: "10. 학창시절 수학여행 버스에서 나는 ",
    a: [
      {
        answer: "a. 혼자 이어폰을 끼고 창밖을 바라보는 게 좋다.",
        value: "",
      },
      { answer: "b. 인기차트 뮤비를 틀어놓고 노래를 다같이 듣는게 좋다", value: "" },
    ],
  },
  {
    q: "11. 노래방에서 친구가 내가 가장 좋아하는 노래를 예약했다 ",
    a: [
      {
        answer: "a. 나도 이 노래 좋아핵!!!!!!!!!! 나가서 노래를 크게 따라부르며 나도 모르게 숙지한 안무를 뽐낸다.",
        value: "",
      },
      { answer: "b. 나도 아는 노래라고 속으로 생각하며 앉아서 박수치고 호응한다.", value: "" },
    ],
  },
  {
    q: "12. 친구의 프로필뮤직이 죄다 어두운 음악 뿐이다.",
    a: [
      {
        answer: "a. 너 무슨일 있는거 아니지?라며 안부를 묻는다",
        value: "",
      },
      { answer: "b. 어두운 노래가 취향인가..하고 넘긴다", value: "" },
    ],
  },
];


const infoList = [
  {
    type: "ISTJ",
    name: "청렴결백한 논리주의자",
    img: "img/istj.png",
    desc: "클래식 음악, 재즈, 블루스, 팝 뮤직 등 전통적인 음악 스타일을 선호합니다. 또한, 가사보다는 멜로디와 악기 소리에 집중하는 경향이 있습니다.",
    songs: [
      {img: "img/song_example.png", artist: "BTS", songtitle: "Butter", link: "https://www.youtube.com/" },
      {img: "img/song_example.png", artist: "BTS", songtitle: "Dynamite", link: "https://www.youtube.com/"},
      {img: "img/song_example.png", artist: "2NE1", songtitle: "내가 제일 잘나가", link: "https://www.youtube.com/"}]
  },
  {
    type: "ISFJ",
    name: "용감한 수호자",
    img: "img/isfj.png",
    desc: "연인과 함께 듣기 좋은 러브송, 발라드, 뉴에이지, 클래식 등 차분하고 감성적인 음악을 선호합니다. 가사에 담긴 이야기에 공감하는 경향이 있습니다.",
    songs: [
      '"Don\'t Wanna Cry" - SEVENTEEN',
      '"Fancy" - TWICE',
      '"Love Shot" - EXO',
    ],
  },
  {
    type: "INFJ",
    name: "선의의 옹호자",
    img: "img/infj.png",
    desc: "감성적이며 의미있는 가사를 선호합니다. 독특하며 몽환적인 사운드의 멜로디에 꽂히는 경향이 있습니다.",
    songs: [
      '"Spring Day" - BTS',
      '"Butterfly" - BTS',
      '"Bad Boy" - Red Velvet',
    ],
  },
  {
    type: "INTJ",
    name: "용의주도한 전략가",
    img: "img/intj.png",
    desc: "어쿠스틱, 포크, 인디 등 조용하고 차분한 분위기의 음악을 선호합니다. 감성적인 가사와 음악으로 자신의 감정을 표현하는 것을 좋아합니다",
    songs: [
      '"MIC Drop" - BTS feat. Steve Aoki',
      '"Not Today" - BTS',
      '"Kill This Love" - BLACKPINK',
    ],
  },
  {
    type: "ISTP",
    name: "만능 재주꾼",
    img: "img/istp.png",
    desc: "록, 메탈, 클래식 등 고성능의 음악을 선호합니다. 멜로디와 가사 모두에 대해 분석적으로 접근하며, 자신의 이야기를 담은 곡을 선호합니다.",
    songs: [
      '"Adore U" - SEVENTEEN',
      '"Pied Piper" - BTS',
      '"LALALILALA" - APRIL',
    ],
  },
  {
    type: "ISFP",
    name: "호기심 많은 예술가",
    img: "img/isfp.png",
    desc: "포크, 팝, 발라드 등 감성적이고 노래 가사에 이야기가 있는 음악을 선호합니다. 음악을 듣으면서 자신의 감정을 잘 표현할 수 있습니다.",
    songs: ['"Siren" - Sunmi', '"Love Myself" - BTS', '"Aya" - MAMAMOO'],
  },
  {
    type: "INFP",
    name: "열정적인 중재자",
    img: "img/infp.png",
    desc: "인디, 포크, 어쿠스틱 등 조용하고 차분한 분위기의 음악을 선호합니다. 감성적인 가사와 음악으로 자신의 감정을 표현하는 것을 좋아합니다.",
    songs: [
      '"Psycho" - Red Velvet',
      '"Spring Again" - Yerin Baek',
      '"Stay Beautiful" - BTS',
    ],
  },
  {
    type: "INTP",
    name: "논리적인 사색가",
    img: "img/intp.png",
    desc: "재즈, 클래식, 인디 등 심도있는 음악을 선호합니다. 혼자 있는 시간을 즐기며, 음악을 통해 자신만의 세계를 창조합니다.",
    songs: ['"TT" - TWICE', '"Fake Love" - BTS', '"Love Whisper" - GFRIEND'],
  },
  {
    type: "ESTP",
    name: "모험을 즐기는 사업가",
    img: "img/estp.png",
    desc: "힙합, 댄스 뮤직, 록 등 다양한 장르의 흥겨운 음악을 선호합니다. 공연이나 파티 등 활발한 분위기를 좋아하며, 리듬에 맞춰 춤을 추는 것을 좋아합니다.",
    songs: [
      '"Black Mamba" - aespa',
      '"Naughty" - Red Velvet - Irene & Seulgi',
      '"PUMA" - TXT',
    ],
  },
  {
    type: "ESFP",
    name: "자유로운 영혼의 연예인",
    img: "img/esfp.png",
    desc: "댄스 뮤직, 일렉트로닉, 클럽 음악 등 파티와 춤을 즐기는 음악을 선호합니다. 높은 음량과 리듬감 있는 음악을 좋아하며, 다른 사람들과 함께 즐기는 것을 좋아합니다.",
    songs: [
      '"Dolphin" - Oh My Girl',
      '"Dynamite" - BTS',
      '"Forever Young" - BLACKPINK',
    ],
  },
  {
    type: "ENFP",
    name: "재기발랄한 활동가",
    img: "img/enfp.png",
    desc: "인디, 어쿠스틱, 팝 뮤직 등 감성적이면서도 자유로운 분위기의 음악을 선호합니다. 다양한 장르의 음악을 즐기며, 자신의 감정을 표현하는 것을 좋아합니다.",
    songs: [
      '"Don\'t Stop Me Now" - SF9',
      '"So What" - LOONA',
      '"Alligator" - MONSTA X',
    ],
  },
  {
    type: "ENTP",
    name: "뜨거운 논쟁을 즐기는 변론가",
    img: "img/entp.png",
    desc: "힙합, 일렉트로닉, 인디 등 혁신적이면서도 강렬한 음악을 선호합니다. 다양한 음악을 시도해보며, 가사에 담긴 이야기보다는 음악 자체에 집중합니다.",
    songs: [
      '"Fire Truck" - NCT 127',
      '"Love Talk" - WayV',
      '"New Rules" - TXT',
    ],
  },
  {
    type: "ESTJ",
    name: "엄격한 관리자",
    img: "img/estj.png",
    desc: " 뮤직, 힙합, 록 등 판타지풀하고 무거운 음악을 선호합니다. 가사보다는 멜로디와 리듬에 집중하는 경향이 있습니다.",
    songs: [
      '"Bon Bon Chocolat" - EVERGLOW',
      '"BOOMBAYAH" - BLACKPINK',
      '"Kick It" - NCT 127',
    ],
  },
  {
    type: "ESFJ",
    name: "사교적인 외교관",
    img: "img/esfj.png",
    desc: "댄스 뮤직, R&B, 발라드 등 열정적이고 흥겨운 음악을 선호합니다. 다른 사람들과 함께 음악을 즐기며, 가사에 담긴 이야기를 좋아합니다.",
    songs: [
      '"Ice Cream" - BLACKPINK & Selena Gomez',
      '"Peek-A-Boo" - Red Velvet',
      '"The 7th Sense" - NCT U',
    ],
  },
  {
    type: "ENFJ",
    name: "정의로운 사회운동가",
    img: "img/enfj.png",
    desc: "팝 뮤직, R&B, 발라드 등 감성적이면서도 화려한 음악을 선호합니다. 자신의 감정을 노래로 표현하는 것을 좋아합니다.",
    songs: [
      '"A.D.T.O.Y." - 2PM',
      '"Blood Sweat & Tears" - BTS',
      '"Not Alone" - NCT 127',
    ],
  },
  {
    type: "ENTJ",
    name: "대담한 통솔자",
    img: "img/entj.png",
    desc: "록, 힙합, 인디 등 자신의 성격과 일치하는 음악을 선호합니다. 경쾌하고 활기찬 음악을 좋아하며, 가사에 담긴 내용보다는 멜로디와 리듬에 집중합니다.",
    songs: ['"Growl" - EXO', '"No More Dream" - BTS', '"Regular" - NCT 127'],
  },
];
