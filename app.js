// [설정] 12월 1일 ~ 12월 10일용 데이터
const daysData = [
  {
    day: 1,
    message: "1",
    image: "https://placehold.co/300x200/png?text=Dec+1",
  },
  {
    day: 2,
    message: "2",
    image: "https://placehold.co/300x200/png?text=Dec+2",
  },
  {
    day: 3,
    message: "3",
    image: "https://placehold.co/300x200/png?text=Dec+3",
  },
  {
    day: 4,
    message: "4",
    image: "https://placehold.co/300x200/png?text=Dec+4",
  },
  {
    day: 5,
    message: "5",
    image: "https://placehold.co/300x200/png?text=Dec+5",
  },
  {
    day: 6,
    message: "6",
    image: "https://placehold.co/300x200/png?text=Dec+6",
  },
  {
    day: 7,
    message: "7",
    image: "https://placehold.co/300x200/png?text=Dec+7",
  },
  {
    day: 8,
    message: "8",
    image: "https://placehold.co/300x200/png?text=Dec+8",
  },
  {
    day: 9,
    message: "9",
    image: "https://placehold.co/300x200/png?text=Dec+9",
  },
  {
    day: 10,
    message: "10",
    image: "https://placehold.co/300x200/png?text=Dec+10",
  },
];

const calendarContainer = document.getElementById("calendar");
const modal = document.getElementById("modal");
const modalDate = document.getElementById("modal-date");
const modalImage = document.getElementById("modal-image");
const modalMessage = document.getElementById("modal-message");
const closeBtn = document.querySelector(".close-btn");

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1; // 0부터 시작하므로 +1 (12월은 12)
const currentDay = today.getDate();

// 날짜 제한 엄격 모드 (테스트 시 false로 하면 날짜 상관없이 동작)
const isDebugMode = false;

// 저장된 데이터 가져오기
let openedDays = JSON.parse(localStorage.getItem("openedDays_Dec")) || []; // 키값 변경(충돌 방지)

// [중요] 목표 월 설정 (12월)
const targetMonth = 12;

daysData.forEach((data) => {
  const door = document.createElement("div");
  door.classList.add("door");

  // 상태 판단 로직
  const isOpened = openedDays.includes(data.day);

  // 12월이고 날짜가 지났으면 Past
  // (올해 12월이 지나고 내년 1월이 되면 모든 날짜가 Past가 됨)
  let isPast = false;
  if (currentMonth > targetMonth) {
    isPast = true; // 1월 등 미래의 달이 되면 12월은 과거
  } else if (currentMonth === targetMonth && currentDay > data.day) {
    isPast = true; // 같은 12월인데 날짜가 지남
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

  door.addEventListener("click", () => {
    // 1. 이미 열린 문
    if (openedDays.includes(data.day)) {
      showModal(data);
      return;
    }

    // 2. 놓친 문 (과거)
    if (isPast && !isDebugMode) {
      alert(`아쉽지만 12월 ${data.day}일은 지나가 버렸어요. 다음 기회에! 🎄`);
      return;
    }

    // 3. 미래의 문 (아직 날짜 안 됨)
    // 현재 월이 12월보다 작거나 (11월 등), 12월인데 날짜가 아직 안 된 경우
    if (
      currentMonth < targetMonth ||
      (currentMonth === targetMonth && currentDay < data.day)
    ) {
      if (!isDebugMode) {
        alert(`아직 12월 ${data.day}일이 되지 않았어요! 조금만 기다려주세요.`);
        return;
      }
    }

    // 4. 열기 성공
    door.classList.add("open");

    if (!openedDays.includes(data.day)) {
      openedDays.push(data.day);
      localStorage.setItem("openedDays_Dec", JSON.stringify(openedDays));
    }
    showModal(data);
  });

  calendarContainer.appendChild(door);
});

function showModal(data) {
  modalDate.textContent = `12월 ${data.day}일`;
  modalImage.src = data.image;
  modalMessage.textContent = data.message;
  modal.classList.add("active");
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
