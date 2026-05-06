// 1. 강아지 데이터 정의
const dogs = [
  {
    id: 1,
    name: "호두",
    gender: "M",
    age: 2,
    weight: 2.3,
    tags: ["활발해요", "사람좋아"],
    image:
      "",
  },
  {
    id: 2,
    name: "여름이",
    gender: "M",
    age: 3,
    weight: 3.5,
    tags: ["영리해요", "장난꾸러기"],
    image:
      "",
  },
  {
    id: 3,
    name: "햇님이",
    gender: "F",
    age: 4,
    weight: 3.2,
    tags: ["조용해요", "애교많아요"],
    image:
      "",
  },
  {
    id: 4,
    name: "쭈쭈",
    gender: "M",
    age: 5,
    weight: 4.8,
    tags: ["용감해요", "충성스러워요"],
    image:
      "",
  },
  {
    id: 5,
    name: "마마",
    gender: "F",
    age: 6,
    weight: 5.1,
    tags: ["온순해요", "사람좋아"],
    image:
      "",
  },
  {
    id: 6,
    name: "알밤",
    gender: "M",
    age: 4,
    weight: 4.0,
    tags: ["밝아요", "식탐있어요"],
    image:
      "",
  },
  {
    id: 7,
    name: "장군이",
    gender: "F",
    age: 3,
    weight: 2.7,
    tags: ["소심해요", "따뜻해요"],
    image:
      "",
  },
  {
    id: 8,
    name: "순돌이",
    gender: "M",
    age: 5,
    weight: 6.0,
    tags: ["똑똑해요", "활발해요"],
    image:
      "",
  },
  {
    id: 9,
    name: "탄밤",
    gender: "F",
    age: 4,
    weight: 3.6,
    tags: ["애교많아요", "장난꾸러기"],
    image:
      "",
  },
  {
    id: 10,
    name: "달님이",
    gender: "F",
    age: 7,
    weight: 5.4,
    tags: ["조용해요", "차분해요"],
    image:
      "",
  },
  {
    id: 11,
    name: "별이",
    gender: "M",
    age: 3,
    weight: 3.0,
    tags: ["사람좋아", "애교많아요"],
    image:
      "",
  },
];

// 2. 리스트 렌더링 함수
function renderDogCards() {
  const grid = document.getElementById("dogGrid");

  dogs.forEach((dog) => {
    const genderIcon =
      dog.gender === "M"
        ? '<i class="fa-solid fa-mars gender-m"></i>'
        : '<i class="fa-solid fa-venus gender-f"></i>';

    const card = document.createElement("div");
    card.className = "dog-card";
    card.innerHTML = `
            <span class="badge">${dog.id}</span>
            <img src="${dog.image}" alt="${dog.name}">
            <div class="dog-info">
                <div class="dog-name">${dog.name} ${genderIcon}</div>
                <div class="dog-meta">${dog.age}개월 · ${dog.weight}kg</div>
                <div class="tag-container">
                    ${dog.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </div>
            </div>
        `;

    card.onclick = () => openModal(dog);
    grid.appendChild(card);
  });
}

// 3. 모달 기능
const modal = document.getElementById("dogModal");
const closeModal = document.querySelector(".close-modal");

function openModal(dog) {
  const modalBody = document.getElementById("modalBody");
  const genderText = dog.gender === "M" ? "남아" : "여아";

  modalBody.innerHTML = `
        <img src="${dog.image}" class="modal-img">
        <h2 style="margin-bottom:10px">${dog.name} (${genderText})</h2>
        <p style="color:#666; margin-bottom:15px">나이: ${dog.age}개월 | 몸무게: ${dog.weight}kg</p>
        <div class="tag-container">
            ${dog.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <p style="margin-top:20px; font-size:0.9rem; line-height:1.6;">
            이 아이는 매우 ${dog.tags[0]} 성격이며, ${dog.tags[1]} 면이 매력적입니다. 
            현재 새로운 가족의 사랑을 간절히 기다리고 있습니다.
        </p>
    `;
  modal.style.display = "block";
}

// 닫기 버튼 및 외부 클릭 시 닫기
closeModal.onclick = () => (modal.style.display = "none");
window.onclick = (event) => {
  if (event.target == modal) modal.style.display = "none";
};

// 초기화
document.addEventListener("DOMContentLoaded", renderDogCards);
