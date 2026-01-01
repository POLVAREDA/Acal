const daysData = [
  {
    day: 1,
    coverImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767178046/ic-1_g8znii.svg",
    puzzleImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767045796/G-puzzle_hwtgap.svg",
    contentImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767001377/year01_aru1od.png",
    message: "고깔모자 풍과 퍼즐 한 조각",
    quiz: "뮤지컬 배우 중, 1983년 1월 10일에 태어난 사람은?",
    answer: "조풍래",
    decoImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767042654/_%EB%A0%88%EC%9D%B4%EC%96%B4_2_prhn0y.svg",
  },
  {
    day: 2,
    coverImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767178046/ic-2_temwtc.svg",
    puzzleImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767045796/G-puzzle_hwtgap.svg",
    contentImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767001377/year02_uctqqs.png",
    message: "풍놀장!-선글라스풍과 퍼즐 한 조각",
    quiz: '칸쵸에 본인 이름이 "당연히 없다"는 발언에 긁힌 배우는?',
    answer: "조풍래",
    decoImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767042826/_%EB%A0%88%EC%9D%B4%EC%96%B4_3_plrck6.svg",
  },
  {
    day: 3,
    coverImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767178046/ic-3_ic7gaf.svg",
    puzzleImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767045796/G-puzzle_hwtgap.svg",
    contentImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767001378/year03_wtxyog.png",
    message: "유메토모풍과 퍼즐 한 조각",
    quiz: "목동에서 코인노래방 갔다가 트위터리안에게 들킨 배우는?",
    answer: "조풍래",
    decoImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767199686/Group_404_a6ts1l.svg",
  },
  {
    day: 4,
    coverImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767178046/ic-4_x5aas1.svg",
    puzzleImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767045796/G-puzzle_hwtgap.svg",
    contentImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767001378/year04_nrkhpp.png",
    message: "풍더그와 퍼즐 한 조각",
    quiz: "라이브 방송에서 평소에 여러분 보고 싶은 것을 제일 참는다고 한 배우는?",
    answer: "조풍래",
    decoImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767199686/Group_414_pdxuol.svg",
  },
  {
    day: 5,
    coverImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767178046/ic-5_z79fce.svg",
    puzzleImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767045796/G-puzzle_hwtgap.svg",
    contentImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767001378/year05_kbvzl7.png",
    message: "풍드몬드와 퍼즐 한 조각",
    quiz: "자신의 패션을 끝내준다고 한 사람은?",
    answer: "조풍래",
    decoImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767202497/Frame_58_sqjj4d.svg",
  },
  {
    day: 6,
    coverImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767178047/ic-6_z1hl65.svg",
    puzzleImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767045796/G-puzzle_hwtgap.svg",
    contentImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767001378/year06_mrk9py.png",
    message: "풍렐라이와 퍼즐 한 조각",
    quiz: "배우 기세중이 살면서 걸러야 하는 성씨 1위로 태그한 사람은?",
    answer: "조풍래",
    decoImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767199687/Group_415_gkswuc.svg",
  },
  {
    day: 7,
    coverImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767178046/ic-7_fgyfnb.svg",
    puzzleImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767045796/G-puzzle_hwtgap.svg",
    contentImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767001378/year07_rsivuj.png",
    message: "풍빅과 퍼즐 한 조각",
    quiz: "팬에게 자신이 뭉툭하게 생겼다고 해서 어이없게 만든 배우는?",
    answer: "조풍래",
    decoImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767202876/Group_381_1_f6mxcc.svg",
  },
  {
    day: 8,
    coverImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767178047/ic-8_ctbnfe.svg",
    puzzleImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767045796/G-puzzle_hwtgap.svg",
    contentImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767001378/year08_okburr.png",
    message: "토니-리딩풍과 퍼즐 한 조각",
    quiz: "풍라이와 놀장~!의 클짱은?",
    answer: "조풍래",
    decoImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767203155/Frame_61_1_gpuel7.svg",
  },
  {
    day: 9,
    coverImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767178047/ic-9_nter2m.svg",
    puzzleImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767045796/G-puzzle_hwtgap.svg",
    contentImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767001379/year09_iptilo.png",
    message: "YKA풍과 퍼즐 한 조각",
    quiz: "배우 조풍래를 대학로에서 가장 웃긴 사람 TOP3에 든다고 한 사람은?",
    answer: "조풍래",
    decoImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767199685/Group_372_fj7jun.svg",
  },
  {
    day: 10,
    coverImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767178048/ic-10_yuob7y.svg",
    puzzleImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767045796/Group_281_zmshqv.svg",
    contentImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767003389/year_qotw6w.png",
    message: "연력 포스터",
    quiz: "‘YKA FESTA’에서 뮤지컬 부문에서 수상한 사람은?",
    answer: "조풍래",
    decoImage:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767199685/Group_403_nvxfag.svg",
  },
];

const calendarContainer = document.getElementById("calendar");
const modal = document.getElementById("modal");
const alertOverlay = document.getElementById("custom-alert-overlay");
const alertInput = document.getElementById("alert-input");
const alertIcon = document.getElementById("alert-icon");

const today = new Date();
today.setHours(0, 0, 0, 0);
const startDate = new Date(2026, 0, 1);
const isDebugMode = false;

// [수정 포인트] 로컬 스토리지 키를 'openedDays_Live'로 통일
let openedDays = JSON.parse(localStorage.getItem("openedDays_Live")) || [];
let currentImageUrl = "";

// 상황별 아이콘 설정
const ICONS = {
  quiz: "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767115408/%EC%97%B4%EC%87%A0_auczcb.svg",
  success:
    "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767115408/Group_366_ltgvug.svg",
  error:
    "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767115408/Frame_93_g5lgvw.svg",
  warning:
    "https://res.cloudinary.com/dkqqxjsek/image/upload/v1767186212/%EB%AC%BC%EC%9D%8C%ED%91%9C_lofu9p.svg",
};

/* --- 순수 알럿 함수 (버튼 애니메이션 추가) --- */
function showMyAlert({
  title,
  text,
  iconType = "success",
  input = false,
  cancel = false,
}) {
  return new Promise((resolve) => {
    document.getElementById("alert-title").textContent = title;
    document.getElementById("alert-text").textContent = text;
    alertIcon.src = ICONS[iconType] || ICONS.success;
    alertInput.style.display = input ? "block" : "none";
    alertInput.value = "";
    const cancelBtn = document.getElementById("alert-cancel");
    cancelBtn.style.display = cancel ? "block" : "none";
    alertOverlay.style.display = "flex";

    const confirmBtn = document.getElementById("alert-confirm");

    const onConfirm = () => {
      confirmBtn.classList.add("animate-bounce");
      setTimeout(() => {
        confirmBtn.classList.remove("animate-bounce");
        alertOverlay.style.display = "none";
        confirmBtn.removeEventListener("click", onConfirm);
        cancelBtn.removeEventListener("click", onCancel);
        resolve({ isConfirmed: true, value: alertInput.value });
      }, 400);
    };

    const onCancel = () => {
      cancelBtn.classList.add("animate-bounce");
      setTimeout(() => {
        cancelBtn.classList.remove("animate-bounce");
        alertOverlay.style.display = "none";
        confirmBtn.removeEventListener("click", onConfirm);
        cancelBtn.removeEventListener("click", onCancel);
        resolve({ isConfirmed: false });
      }, 400);
    };

    confirmBtn.addEventListener("click", onConfirm);
    if (cancel) cancelBtn.addEventListener("click", onCancel);
  });
}

class LottiUI {
  constructor(x, y) {
    const div = document.createElement("dotlottie-player");
    div.setAttribute(
      "src",
      "https://lottie.host/dcb52f92-c4c4-413f-b932-8ae17a2b2970/I4W37TF2zG.lottie"
    );
    div.setAttribute("background", "transparent");
    div.setAttribute("speed", "1");
    div.setAttribute("loop", "false");
    div.setAttribute("autoplay", "true");
    div.style.left = x + "px";
    div.style.top = y + "px";
    document.body.append(div);
    setTimeout(() => div.remove(), 3000);
  }
}

function openDoor(data, doorElement) {
  doorElement.classList.add("open");
  doorElement.classList.remove("missed", "is-today");
  if (!openedDays.includes(data.day)) {
    openedDays.push(data.day);
    // [수정 포인트] 저장할 때도 'openedDays_Live' 키를 사용
    localStorage.setItem("openedDays_Live", JSON.stringify(openedDays));
  }
  showModal(data);
}

daysData.forEach((data) => {
  const door = document.createElement("div");
  door.classList.add("door");
  const doorDate = new Date(startDate);
  doorDate.setDate(startDate.getDate() + (data.day - 1));
  const isPast = today > doorDate;
  const isFuture = today < doorDate;
  const isToday = today.getTime() === doorDate.getTime();
  const isOpened = openedDays.includes(data.day);

  if (isToday && !isOpened) door.classList.add("is-today");
  if (isOpened) door.classList.add("open");
  else if (isPast && !isDebugMode) door.classList.add("missed");

  let starHTML_front =
    data.day === 10
      ? `<div class="door-num-10-wrapper"><img src="https://res.cloudinary.com/dkqqxjsek/image/upload/v1767045800/Star_1_wwryei.svg" class="star-icon"><span>10</span></div>`
      : `<span class="door-num">${data.day}</span>`;
  let starHTML_back =
    data.day === 10
      ? `<div class="door-num-10-wrapper"><img src="https://res.cloudinary.com/dkqqxjsek/image/upload/v1767045799/Star_1_1_l9m5ho.svg" class="star-icon"><span>10</span></div>`
      : `<span class="door-num">${data.day}</span>`;

  door.innerHTML = `
          <div class="door-inner">
            <div class="door-front">
              ${starHTML_front}
              <img src="${data.coverImage}" class="cover-image">
              ${
                isPast && !isOpened && !isDebugMode
                  ? `<img src="https://res.cloudinary.com/dkqqxjsek/image/upload/v1767045797/Group_295_tzz6bu.svg" class="lock-overlay">`
                  : ""
              }
            </div>
            <div class="door-back">
              ${starHTML_back}
              <img src="${data.puzzleImage}" class="puzzle-image">
            </div>
          </div>`;

  door.addEventListener("click", async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (openedDays.includes(data.day)) {
      showModal(data);
      return;
    }

    if (isPast && !isDebugMode) {
      const res = await showMyAlert({
        title: "",
        text: `Q. ${data.quiz}`,
        iconType: "quiz",
        input: true,
        cancel: true,
      });
      if (res.isConfirmed) {
        if (res.value && res.value.trim() === data.answer) {
          await showMyAlert({
            title: "정답입니다!",
            text: "캘린더를 열람할 수 있어요.",
            iconType: "success",
          });
          openDoor(data, door);
        } else {
          await showMyAlert({
            title: "땡!",
            text: "다시 시도해 보세요.",
            iconType: "error",
          });
        }
      }
      return;
    }
    if (isFuture && !isDebugMode) {
      showMyAlert({
        title: "아직 오픈되지 않았어요!",
        text: `오픈 예정일: ${
          doorDate.getMonth() + 1
        }월 ${doorDate.getDate()}일`,
        iconType: "warning",
      });
      return;
    }
    openDoor(data, door);
  });
  calendarContainer.appendChild(door);
});

function showModal(data) {
  const modalDayTitle = document.getElementById("modal-day-title");
  const modalImage = document.getElementById("modal-image");
  modalDayTitle.textContent = `${data.day}일차`;
  document.getElementById("modal-subtext").textContent = data.message;
  modalImage.src = data.contentImage;
  document.getElementById("modal-header-icon").src = data.coverImage;
  const deco = document.getElementById("modal-top-deco");
  deco.src = data.decoImage || "";

  // [수정 포인트] 날짜별 개별 클래스 부여 로직 삽입
  deco.className = "modal-top-deco";
  if (data.day) {
    deco.classList.add(`deco-day-${data.day}`);
  }

  deco.style.display = data.decoImage ? "block" : "none";
  currentImageUrl = data.contentImage;
  modal.classList.add("active");
  new LottiUI(window.innerWidth / 2, window.innerHeight / 2);
  const saveBtn = document.getElementById("save-btn");
  if (data.day === 10) {
    saveBtn.textContent = "연력 받기";
    modalImage.classList.add("vertical");
  } else {
    saveBtn.textContent = "저장하기";
    modalImage.classList.remove("vertical");
  }
}

function downloadImage() {
  if (!currentImageUrl) return;
  const link = document.createElement("a");
  link.href = currentImageUrl;
  link.download = `Day_Image`;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const closeModal = () => {
  modal.classList.add("closing");
  setTimeout(() => {
    modal.classList.remove("active", "closing");
  }, 300);
};

document.getElementById("close-modal-btn").addEventListener("click", () => {
  const btn = document.getElementById("close-modal-btn");
  btn.classList.add("animate-bounce");
  setTimeout(() => {
    btn.classList.remove("animate-bounce");
    closeModal();
  }, 400);
});

document.getElementById("save-btn").addEventListener("click", () => {
  const btn = document.getElementById("save-btn");
  btn.classList.add("animate-bounce");
  setTimeout(() => {
    btn.classList.remove("animate-bounce");
    if (document.getElementById("modal-day-title").textContent === "10일차")
      window.open("https://twitter.com/OnceUponA4ever", "_blank");
    else downloadImage();
  }, 400);
});

document.getElementById("help-icon").addEventListener("click", () => {
  document.getElementById("help-modal").classList.add("active");
});

document.getElementById("help-close-btn").addEventListener("click", () => {
  const btn = document.getElementById("help-close-btn");
  btn.classList.add("animate-bounce");
  setTimeout(() => {
    btn.classList.remove("animate-bounce");
    document.getElementById("help-modal").classList.remove("active");
  }, 400);
});

document.getElementById("share-icon").addEventListener("click", () => {
  navigator.clipboard.writeText(window.location.href);
  showMyAlert({
    title: "주소가 복사되었습니다!",
    text: "친구들에게 공유해보세요!",
    iconType: "success",
  });
});

// [추가 포인트] 정답 입력창 엔터 키 새로고침 방지 로직
alertInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("alert-confirm").click();
  }
});

window.onclick = (e) => {
  if (e.target === modal) closeModal();
  if (e.target === document.getElementById("help-modal"))
    document.getElementById("help-modal").classList.remove("active");
};
