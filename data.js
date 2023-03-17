export const qnaList = [
  {
    q: "1. 어떤 음악을 듣고 있을 때 가장 먼저 떠오르는 감정은 무엇인가요?",
    a: [
      { answer: "a. 노래 가사의 내용에 공감하는 감정", value: "E" },
      { answer: "b. 멜로디와 비트에 빠져드는 감정", value: "I" },
    ],
  },
  {
    q: "2. 좋아하는 노래의 분위기는 어떤 것인가요?",
    a: [
      { answer: 'a. 슬픈 감정이나 그리움을 담은 분위기" ', value: "N" },
      { answer: 'b. 즐거움과 흥분을 느낄 수 있는 분위기" ', value: "S" },
    ],
  },
  {
    q: "3. 가장 좋아하는 악기는 무엇인가요?",
    a: [
      { answer: "a. 기타", value: "T" },
      { answer: "b. 피아노", value: "F" },
    ],
  },
  {
    q: "4. 좋아하는 아티스트는 어떤 스타일인가요?. ",
    a: [
      {
        answer: "a. 민감하고 감성적인 스타일",
        value: "P",
      },
      {
        answer: "b.활기찬 무대 퍼포먼스와 유쾌한 분위기가 있는 스타일",
        value: "J",
      },
    ],
  },
  {
    q: "5. 노래 가사 중에서 어떤 내용을 선호하나요? ",
    a: [
      {
        answer: "a. 사랑 이야기나 이별 이야기",
        value: "",
      },
      { answer: "b. 희망적이고 긍정적인 내용", value: "" },
    ],
  },
  {
    q: "6. 어떤 시간에 음악을 가장 많이 듣나요? ",
    a: [
      {
        answer: "a. 밤 늦은 시간",
        value: "",
      },
      { answer: "b. 오후 또는 저녁", value: "" },
    ],
  },
  {
    q: "7. 음악을 들으면서 어떤 활동을 가장 좋아하나요? ",
    a: [
      {
        answer: "a. 집중해서 일하거나 공부하는 활동",
        value: "",
      },
      { answer: "b. 운동이나 춤추기 같은 활동", value: "" },
    ],
  },
  {
    q: "8. 가장 좋아하는 노래를 들을 때 나는 어떤 감정을 느끼나요?. ",
    a: [
      {
        answer: "a. 감동적인 감정",
        value: "",
      },
      { answer: "b. 흥분된 감정", value: "" },
    ],
  },
];

const infoList = [
  {
    type: "ISTJ",
    name: "ISTJ - 청렴결백한 논리주의자",
    desc: "클래식 음악, 재즈, 블루스, 팝 뮤직 등 전통적인 음악 스타일을 선호합니다. 또한, 가사보다는 멜로디와 악기 소리에 집중하는 경향이 있습니다.",
    
    songs: ["Butter - BTS", "Dynamite - BTS", "I Am the Best - 2NE1"],
  },
  {
    type: "ISFJ",
    name: "ISFJ - 용감한 수호자",
    desc: "연인과 함께 듣기 좋은 러브송, 발라드, 뉴에이지, 클래식 등 차분하고 감성적인 음악을 선호합니다. 가사에 담긴 이야기에 공감하는 경향이 있습니다.",
    songs: [
      '"Don\'t Wanna Cry" - SEVENTEEN',
      '"Fancy" - TWICE',
      '"Love Shot" - EXO',
    ],
  },
  {
    type: "INFJ",
    name: "INFJ - 선의의 옹호자",
    desc: "",
    songs: [
      '"Spring Day" - BTS',
      '"Butterfly" - BTS',
      '"Bad Boy" - Red Velvet',
    ],
  },
  {
    type: "INTJ",
    name: "INTJ - 용의주도한 전략가",
    desc: "어쿠스틱, 포크, 인디 등 조용하고 차분한 분위기의 음악을 선호합니다. 감성적인 가사와 음악으로 자신의 감정을 표현하는 것을 좋아합니다",
    songs: [
      '"MIC Drop" - BTS feat. Steve Aoki',
      '"Not Today" - BTS',
      '"Kill This Love" - BLACKPINK',
    ],
  },
  {
    type: "ISTP",
    name: "ISTP - 만능 재주꾼",
    desc: "록, 메탈, 클래식 등 고성능의 음악을 선호합니다. 멜로디와 가사 모두에 대해 분석적으로 접근하며, 자신의 이야기를 담은 곡을 선호합니다.",
    songs: [
      '"Adore U" - SEVENTEEN',
      '"Pied Piper" - BTS',
      '"LALALILALA" - APRIL',
    ],
  },
  {
    type: "ISFP",
    name: "ISFP - 호기심 많은 예술가",
    desc: "포크, 팝, 발라드 등 감성적이고 노래 가사에 이야기가 있는 음악을 선호합니다. 음악을 듣으면서 자신의 감정을 잘 표현할 수 있습니다.",
    songs: ['"Siren" - Sunmi', '"Love Myself" - BTS', '"Aya" - MAMAMOO'],
  },
  {
    type: "INFP",
    name: "INFP - 열정적인 중재자",
    desc: "인디, 포크, 어쿠스틱 등 조용하고 차분한 분위기의 음악을 선호합니다. 감성적인 가사와 음악으로 자신의 감정을 표현하는 것을 좋아합니다.",
    songs: [
      '"Psycho" - Red Velvet',
      '"Spring Again" - Yerin Baek',
      '"Stay Beautiful" - BTS',
    ],
  },
  {
    type: "INTP",
    name: "INTP - 논리적인 사색가",
    desc: "재즈, 클래식, 인디 등 심도있는 음악을 선호합니다. 혼자 있는 시간을 즐기며, 음악을 통해 자신만의 세계를 창조합니다.",
    songs: ['"TT" - TWICE', '"Fake Love" - BTS', '"Love Whisper" - GFRIEND'],
  },
  {
    type: "ESTP",
    name: "ESTP - 모험을 즐기는 사업가",
    desc: "힙합, 댄스 뮤직, 록 등 다양한 장르의 흥겨운 음악을 선호합니다. 공연이나 파티 등 활발한 분위기를 좋아하며, 리듬에 맞춰 춤을 추는 것을 좋아합니다.",
    songs: [
      '"Black Mamba" - aespa',
      '"Naughty" - Red Velvet - Irene & Seulgi',
      '"PUMA" - TXT',
    ],
  },
  {
    type: "ESFP",
    name: "ESFP - 자유로운 영혼의 연예인",
    desc: "댄스 뮤직, 일렉트로닉, 클럽 음악 등 파티와 춤을 즐기는 음악을 선호합니다. 높은 음량과 리듬감 있는 음악을 좋아하며, 다른 사람들과 함께 즐기는 것을 좋아합니다.",
    songs: [
      '"Dolphin" - Oh My Girl',
      '"Dynamite" - BTS',
      '"Forever Young" - BLACKPINK',
    ],
  },
  {
    type: "ENFP",
    name: "ENFP - 재기발랄한 활동가",
    desc: "인디, 어쿠스틱, 팝 뮤직 등 감성적이면서도 자유로운 분위기의 음악을 선호합니다. 다양한 장르의 음악을 즐기며, 자신의 감정을 표현하는 것을 좋아합니다.",
    songs: [
      '"Don\'t Stop Me Now" - SF9',
      '"So What" - LOONA',
      '"Alligator" - MONSTA X',
    ],
  },
  {
    type: "ENTP",
    name: "ENTP - 뜨거운 논쟁을 즐기는 변론가",
    desc: "힙합, 일렉트로닉, 인디 등 혁신적이면서도 강렬한 음악을 선호합니다. 다양한 음악을 시도해보며, 가사에 담긴 이야기보다는 음악 자체에 집중합니다.",
    songs: [
      '"Fire Truck" - NCT 127',
      '"Love Talk" - WayV',
      '"New Rules" - TXT',
    ],
  },
  {
    type: "ESTJ",
    name: "ESTJ - 엄격한 관리자",
    desc: " 뮤직, 힙합, 록 등 판타지풀하고 무거운 음악을 선호합니다. 가사보다는 멜로디와 리듬에 집중하는 경향이 있습니다.",
    songs: [
      '"Bon Bon Chocolat" - EVERGLOW',
      '"BOOMBAYAH" - BLACKPINK',
      '"Kick It" - NCT 127',
    ],
  },
  {
    type: "ESFJ",
    name: "ESFJ - 사교적인 외교관",
    desc: "댄스 뮤직, R&B, 발라드 등 열정적이고 흥겨운 음악을 선호합니다. 다른 사람들과 함께 음악을 즐기며, 가사에 담긴 이야기를 좋아합니다.",
    songs: [
      '"Ice Cream" - BLACKPINK & Selena Gomez',
      '"Peek-A-Boo" - Red Velvet',
      '"The 7th Sense" - NCT U',
    ],
  },
  {
    type: "ENFJ",
    name: "ENFJ - 정의로운 사회운동가",
    desc: "팝 뮤직, R&B, 발라드 등 감성적이면서도 화려한 음악을 선호합니다. 자신의 감정을 노래로 표현하는 것을 좋아합니다.",
    songs: [
      '"A.D.T.O.Y." - 2PM',
      '"Blood Sweat & Tears" - BTS',
      '"Not Alone" - NCT 127',
    ],
  },
  {
    type: "ENTJ",
    name: "ENTJ - 대담한 통솔자",
    desc: "록, 힙합, 인디 등 자신의 성격과 일치하는 음악을 선호합니다. 경쾌하고 활기찬 음악을 좋아하며, 가사에 담긴 내용보다는 멜로디와 리듬에 집중합니다.",
    songs: ['"Growl" - EXO', '"No More Dream" - BTS', '"Regular" - NCT 127'],
  },
];
