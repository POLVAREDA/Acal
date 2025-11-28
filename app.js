// [설정] 1월 1일 ~ 1월 10일용 데이터
const daysData = [
  {
    day: 1,
    message: "1월 1일!",
    image: "https://placehold.co/100x100/png?text=Jan+1",
  },
  {
    day: 2,
    message: "1월 2일!",
    image: "https://placehold.co/100x100/png?text=Jan+2",
  },
  {
    day: 3,
    message: "1월 3일!",
    image: "https://placehold.co/100x100/png?text=Jan+3",
  },
  {
    day: 4,
    message: "1월 4일!",
    image: "https://placehold.co/100x100/png?text=Jan+4",
  },
  {
    day: 5,
    message: "1월 5일!",
    image: "https://placehold.co/100x100/png?text=Jan+5",
  },
  {
    day: 6,
    message: "1월 6일!",
    image: "https://placehold.co/100x100/png?text=Jan+6",
  },
  {
    day: 7,
    message: "1월 7일!",
    image: "https://placehold.co/100x100/png?text=Jan+7",
  },
  {
    day: 8,
    message: "1월 8일!",
    image: "https://placehold.co/100x100/png?text=Jan+8",
  },
  {
    day: 9,
    message: "1월 9일!",
    image: "https://placehold.co/100x100/png?text=Jan+9",
  },
  {
    day: 10,
    message: "1월 10일!",
    image: "https://placehold.co/100x100/png?text=Jan+10",
  },
];

const calendarContainer = document.getElementById("calendar");
const today = new Date(); // 현재 날짜
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1; // 1월은 1
const currentDay = today.getDate();

// 팝업 관련 요소 선택
const modal = document.getElementById("modal");
const modalDate = document.getElementById("modal-date");
const modalImage = document.getElementById("modal-image");
const modalMessage = document.getElementById("modal-message");
const closeBtn = document.querySelector(".close-btn");

// [개발용 테스트 코드]
// 날짜 제한 없이 무조건 열리게 하려면 아래 변수를 true로 변경하세요.
const isDebugMode = true;

daysData.forEach((data) => {
  // HTML 요소 생성
  const door = document.createElement("div");
  door.classList.add("door");

  door.innerHTML = `
                <div class="door-inner">
                    <div class="door-front">${data.day}</div>
                    <div class="door-back">
                        <!-- 뒷면 내용은 CSS로 숨기고 팝업으로 보여줍니다 -->
                        <img src="${data.image}" alt="Day ${data.day}">
                        <p>${data.message}</p>
                    </div>
                </div>
            `;

  // 클릭 이벤트 추가
  door.addEventListener("click", () => {
    // 날짜 체크 로직
    const isOpenable =
      (currentMonth === 1 && currentDay >= data.day) || isDebugMode;

    if (isOpenable) {
      // 1. 카드 열기 (뒤집힌 상태 유지)
      door.classList.add("open");

      // 2. 팝업에 데이터 채우기
      modalDate.textContent = `1월 ${data.day}일`;
      modalImage.src = data.image;
      modalMessage.textContent = data.message;

      // 3. 팝업 띄우기
      modal.classList.add("active");
    } else {
      // 날짜가 안 되었을 때 경고창
      alert(
        `아직 ${currentYear}년 1월 ${data.day}일이 되지 않았어요! 조금만 기다려주세요.`
      );
    }
  });

  calendarContainer.appendChild(door);
});

// [팝업 닫기 기능]
function closeModal() {
  modal.classList.remove("active");
}

// X 버튼 클릭 시 닫기
closeBtn.addEventListener("click", closeModal);

// 팝업 외부(어두운 배경) 클릭 시 닫기
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
