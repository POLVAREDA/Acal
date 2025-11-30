// [설정] 12월 1일 ~ 12월 10일용 데이터 정의
const daysData = [
  {
    day: 1,
    message: "1일의 메시지",
    image: "https://placehold.co/300x200/png?text=Dec+1",
    quiz: "배우 조풍래의 출생 연도는 언제인가요?",
    answer: "1983",
  },
  {
    day: 2,
    message: "2일의 메시지",
    image: "https://placehold.co/300x200/png?text=Dec+2",
    quiz: "조풍래 배우가 '이수자'로 등록되어 있는 전통 예술은 무엇인가요?",
    answer: "봉산탈춤",
  },
  {
    day: 3,
    message: "3일의 메시지",
    image: "https://placehold.co/300x200/png?text=Dec+3",
    quiz: "뮤지컬 '레드북'에서 조풍래 배우가 맡았던 배역은 무엇인가요?",
    answer: "로렐라이",
  },
  {
    day: 4,
    message: "4일의 메시지",
    image: "https://placehold.co/300x200/png?text=Dec+4",
    quiz: "조풍래 배우의 출연작 중, '에드몬드' 역을 맡은 뮤지컬은 무엇인가요?",
    answer: "플레임즈",
  },
  {
    day: 5,
    message: "5일의 메시지",
    image: "https://placehold.co/300x200/png?text=Dec+5",
    quiz: "나무위키에 기재된 조풍래 배우의 MBTI 유형은 무엇인가요?(대문자)",
    answer: "ISFJ",
  },
  {
    day: 6,
    message: "6일의 메시지",
    image: "https://placehold.co/300x200/png?text=Dec+6",
    quiz: "조풍래 배우가 2010년 입단하여 활동했던 극단 이름은 무엇인가요?",
    answer: "서울예술단",
  },
  {
    day: 7,
    message: "7일의 메시지",
    image: "https://placehold.co/300x200/png?text=Dec+7",
    quiz: "조풍래 배우가 개인적으로 가장 약하다고 알려진 게임은 무엇인가요?",
    answer: "가위바위보",
  },
  {
    day: 8,
    message: "8일의 메시지",
    image: "https://placehold.co/300x200/png?text=Dec+8",
    quiz: "조풍래 배우의 팬카페의 클짱은 누구인가요?",
    answer: "조풍래",
  },
  {
    day: 9,
    message: "9일의 메시지",
    image: "https://placehold.co/300x200/png?text=Dec+9",
    quiz: "조풍래가 응원하는 야구 팀은 어디인가요?",
    answer: "롯데",
  },
  {
    day: 10,
    message: "10일의 메시지",
    image: "https://placehold.co/300x200/png?text=Dec+10",
    quiz: "조풍래 배우가 '대학로에서 가장 웃긴 사람 TOP3'에 든다고 주장하는 주체는 누구인가요?",
    answer: "본인",
  },
];

// DOM 요소 선택
const calendarContainer = document.getElementById("calendar");
const modal = document.getElementById("modal");
const modalDate = document.getElementById("modal-date");
const modalImage = document.getElementById("modal-image");
const modalMessage = document.getElementById("modal-message");
const closeBtn = document.querySelector(".close-btn");

// 현재 날짜 정보 가져오기
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;
const currentDay = today.getDate();

const isDebugMode = false; // 테스트 시 true로 변경
let openedDays = JSON.parse(localStorage.getItem("openedDays_Dec")) || [];
const targetMonth = 12;

// --- [추가] LottiUI 클래스 정의 ---
class LottiUI {
  constructor(x, y) {
    const div = document.createElement("dotlottie-player");
    div.setAttribute(
        "src",
        "https://lottie.host/824cb754-a11a-4458-bba0-1f5129c3ed76/NuLW5jGi8g.lottie"
    );
    div.setAttribute("background", "transparent");
    div.setAttribute("speed", "1");
    div.setAttribute("loop", "false"); // 폭죽은 한 번만 터지게 false 설정
    div.setAttribute("autoplay", "true");

    // CSS에서 position: fixed와 transform을 잡고 있으므로 top, left만 지정
    // (CSS에 dotlottie-player 스타일이 없으면 style.cssText에 position:fixed 등 추가 필요)
    div.style.left = x + "px";
    div.style.top = y + "px";

    document.body.append(div);

    // 3초 후 제거
    setTimeout(() => {
      div.remove();
    }, 3000);
  }
}

// [함수] 문을 여는 공통 로직
function openDoor(data, doorElement) {
  // 1. 시각적 열림 처리
  doorElement.classList.add("open");

  // 2. missed 클래스가 있다면 제거
  doorElement.classList.remove("missed");

  // 3. localStorage 저장
  if (!openedDays.includes(data.day)) {
    openedDays.push(data.day);
    localStorage.setItem("openedDays_Dec", JSON.stringify(openedDays));
  }

  // 4. 모달 띄우기
  showModal(data);
}

// --- 메인 로직 ---
daysData.forEach((data) => {
  const door = document.createElement("div");
  door.classList.add("door");

  const isOpened = openedDays.includes(data.day);
  let isPast = false;

  if (currentMonth > targetMonth) {
    isPast = true;
  } else if (currentMonth === targetMonth && currentDay > data.day) {
    isPast = true;
  }

  // 초기 상태 설정
  if (isOpened) {
    door.classList.add("open");
  } else if (isPast && !isDebugMode) {
    door.classList.add("missed");
  }

  door.innerHTML = `
      <div class="door-inner">
          <div class="door-front">${data.day}</div>
          <div class="door-back">
              <img src="${data.image}" alt="Day ${data.day}">
              <p>${data.message}</p>
          </div>
      </div>
  `;

  // 클릭 이벤트
  door.addEventListener("click", () => {
    // 1. 이미 열린 문
    if (openedDays.includes(data.day)) {
      showModal(data);
      return;
    }

    // 2. 지난 날짜 (퀴즈)
    if (isPast && !isDebugMode) {
      const userAnswer = prompt(
          `[퀴즈] ${data.quiz}\n정답을 입력하면 문이 열려요!`
      );
      if (userAnswer && userAnswer.trim() === data.answer) {
        alert("정답입니다! 문이 열립니다 🎉");
        openDoor(data, door);
      } else if (userAnswer !== null) {
        alert("틀렸습니다. 다시 시도해보세요 😢");
      }
      return;
    }

    // 3. 미래의 문
    if (
        currentMonth < targetMonth ||
        (currentMonth === targetMonth && currentDay < data.day)
    ) {
      if (!isDebugMode) {
        alert(`아직 12월 ${data.day}일이 되지 않았어요! 조금만 기다려주세요.`);
        return;
      }
    }

    // 4. 정상 오픈
    openDoor(data, door);
  });

  calendarContainer.appendChild(door);
});

// --- 모달 관련 함수 ---
function showModal(data) {
  modalDate.textContent = `12월 ${data.day}일`;
  modalImage.src = data.image;
  modalMessage.textContent = data.message;
  modal.classList.add("active");

  // ★ 팝업이 열릴 때 화면 중앙에서 컨패티 터트리기 ★
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  new LottiUI(centerX, centerY);
}

function closeModal() {
  modal.classList.remove("active");
}

closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});