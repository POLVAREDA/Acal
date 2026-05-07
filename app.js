// 1. 강아지 데이터 정의 (상세 설명 문구 desc 추가)
const dogs = [
  {
    id: 1,
    name: "호두",
    gender: "M",
    age: 5,
    weight: 25,
    tags: ["활발해요", "사람좋아"],
    desc: "에너지가 넘치는 호두는 처음 보는 사람에게도 꼬리를 흔들며 다가가는 사교성 끝판왕이에요.",
    image:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1778076935/Gemini_Generated_Image_m591hlm591hlm591_gaadio.png",
  },
  {
    id: 2,
    name: "여름",
    gender: "F",
    age: 2,
    weight: 18,
    tags: ["순해요", "애교많아요"],
    desc: "순하고 애교많아서 친구들에게 양보도 잘하는 천사표! 겁이 많아 첫 만남은 경계해요.",
    image:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1778076935/Gemini_Generated_Image_m591hlm591hlm591_gaadio.png",
  },
  {
    id: 3,
    name: "햇님",
    gender: "F",
    age: 2,
    weight: 18,
    tags: ["호기심이 많아요", "겁이 있어요"],
    desc: "엉뚱하고 호기심이 왕성해요. 겁은 조금 있지만, 마음을 열면 애교가 무척 많은 아이예요.",
    image:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1778076935/Gemini_Generated_Image_m591hlm591hlm591_gaadio.png",
  },
  {
    id: 4,
    name: "쭈쭈",
    gender: "M",
    age: 5,
    weight: 20,
    tags: ["순해요", "고집있어요"],
    desc: "듬직한 체구와 달리 성격이 점잖고 온순해요. 사람만 바라보는 해바라기 같은 아이.",
    image:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1778076935/Gemini_Generated_Image_m591hlm591hlm591_gaadio.png",
  },
  {
    id: 5,
    name: "마마",
    gender: "F",
    age: 6,
    weight: 5.1,
    tags: ["온순해요", "사람좋아"],
    desc: "공격성이 전혀 없는 온순한 성격의 마마는 어린 아이가 있는 가정에도 아주 잘 어울려요.",
    image:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1778076935/Gemini_Generated_Image_m591hlm591hlm591_gaadio.png",
  },
  {
    id: 6,
    name: "알밤",
    gender: "M",
    age: 3,
    weight: 20,
    tags: ["낯가림 있어요", "순해요"],
    desc: "낯가림은 있지만 애교 많고 순해요.",
    image:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1778076935/Gemini_Generated_Image_m591hlm591hlm591_gaadio.png",
  },
  {
    id: 7,
    name: "장군이",
    gender: "M",
    age: 0,
    weight: 26,
    tags: ["겁이 많아요", "토실 뚱땅이"],
    desc: "사람이 무서운 아이예요. 천천히 마음을 열고 있는 중이라 오래 본 사람에게 손을 허락한답니다.",
    image:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1778076935/Gemini_Generated_Image_m591hlm591hlm591_gaadio.png",
  },
  {
    id: 8,
    name: "순돌이",
    gender: "M",
    age: 5,
    weight: 18,
    tags: ["겁이 많아요", "강아지 인싸"],
    desc: "사람에게는 겁이 많지만, 친구들과 놀 땐 한없이 천진난만!",
    image:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1778076935/Gemini_Generated_Image_m591hlm591hlm591_gaadio.png",
  },
  {
    id: 9,
    name: "탄밤",
    gender: "M",
    age: 3,
    weight: 20,
    tags: ["애교많아요", "장난꾸러기"],
    desc: "중력 거부 용수철, 활어견. 애교가 많고 에너지가 넘쳐요. 개보다는 사람을 좋아해요.",
    image:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1778076935/Gemini_Generated_Image_m591hlm591hlm591_gaadio.png",
  },
  {
    id: 10,
    name: "달님이",
    gender: "F",
    age: 2,
    weight: 18,
    tags: ["영리해요", "간식을 좋아해요"],
    desc: "영리하고 눈치가 빠른 달님이는 마음을 연 사람에게만 애교를 허락하는 도도하고 특별한 아이.",
    image:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1778076935/Gemini_Generated_Image_m591hlm591hlm591_gaadio.png",
  },
  {
    id: 11,
    name: "별이",
    gender: "F",
    age: 2,
    weight: 18,
    tags: ["사람좋아", "애교많아요"],
    desc: "유별난 매력, 말썽도 곧잘 부리지만 낯가림이 전혀 없어 처음 본 사람에게도 장난감을 물어다 줄만큼 활기차요.",
    image:
      "https://res.cloudinary.com/dkqqxjsek/image/upload/v1778076935/Gemini_Generated_Image_m591hlm591hlm591_gaadio.png",
  },
];

// 2. 리스트 렌더링 함수
function renderDogCards() {
  const grid = document.getElementById("dogGrid");
  if (!grid) return;

  dogs.forEach((dog) => {
    const genderIcon =
      dog.gender === "M"
        ? '<i class="fa-solid fa-mars gender-m"></i>'
        : '<i class="fa-solid fa-venus gender-f"></i>';

    const card = document.createElement("div");
    card.className = "dog-card";
    card.innerHTML = `
            <span class="badge">${dog.id}</span>
            <img src="${dog.image}" alt="${dog.name}" onerror="this.src='https://via.placeholder.com/300?text=No+Image'">
            <div class="dog-info">
                <div class="dog-name">${dog.name} ${genderIcon}</div>
                <div class="dog-meta">${dog.age}살 · 약 ${dog.weight}kg</div>
                <div class="tag-container">
                    ${dog.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </div>
            </div>
        `;

    card.onclick = () => openModal(dog);
    grid.appendChild(card);
  });
}

// ... 상단 dogs 데이터 및 renderDogCards 함수는 동일 ...

// 3. 모달 기능
const modal = document.getElementById("dogModal");
const closeModal = document.querySelector(".close-modal");

function openModal(dog) {
  const modalBody = document.getElementById("modalBody");
  const genderText = dog.gender === "M" ? "남아" : "여아";

  modalBody.innerHTML = `
        <img src="${dog.image}" class="modal-img" onerror="this.src='https://via.placeholder.com/300?text=No+Image'">
        <h2 style="margin-bottom:10px">${dog.name} (${genderText})</h2>
        <p style="color:#666; margin-bottom:15px">나이: ${dog.age}살 | 몸무게: 약 ${dog.weight}kg</p>
        <div class="tag-container" style="display:flex; gap:5px; flex-wrap:wrap;">
            ${dog.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="modal-desc" style="margin-top:20px; padding:15px; background:#f9f9f9; border-radius:10px;">
            <p style="font-size:0.95rem; line-height:1.6; color:#333; font-weight:500;">
                "${dog.desc}"
            </p>
            <p style="margin-top:10px; font-size:0.85rem; color:#666;">
                현재 새로운 가족의 따뜻한 사랑을 기다리고 있습니다.
            </p>
            <!-- 스크롤 테스트를 위한 긴 텍스트 (필요시 삭제) -->
            <p style="margin-top:10px; font-size:0.85rem; color:#999; line-height:1.6;">
                입양은 한 생명을 끝까지 책임지는 소중한 약속입니다. 아이의 성격과 특징을 잘 살펴주시고, 
                신중한 결정을 부탁드립니다. 궁금한 점은 언제든 문의해 주세요.
            </p>
        </div>
    `;

  // [수정] 모달 표시 및 배경 스크롤 방지
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // 메인 페이지 스크롤 방지

  // [추가] 모달 내부 스크롤을 항상 맨 위로 초기화
  const modalContent = document.querySelector(".modal-content");
  if (modalContent) modalContent.scrollTop = 0;
}

// [수정] 닫기 기능을 함수로 통합
function closeModalWindow() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // 메인 페이지 스크롤 다시 허용
}

if (closeModal) {
  closeModal.onclick = closeModalWindow;
}

window.onclick = (event) => {
  if (event.target == modal) {
    closeModalWindow();
  }
};

// 초기화
document.addEventListener("DOMContentLoaded", renderDogCards);
