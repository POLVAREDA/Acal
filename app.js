// 1. 강아지 데이터 정의 (상세 설명 문구 desc 추가)
const dogs = [
    {
        id: 1,
        name: "호두",
        gender: "M",
        age: 2,
        weight: 2.3,
        tags: ["활발해요", "사람좋아"],
        desc: "에너지가 넘치는 호두는 처음 보는 사람에게도 꼬리를 흔들며 다가가는 사교성 끝판왕이에요.",
        image: "https://images.unsplash.com/photo-1591160674255-fc8b858cf5ad?q=80&w=300",
    },
    {
        id: 2,
        name: "여름이",
        gender: "M",
        age: 3,
        weight: 3.5,
        tags: ["영리해요", "장난꾸러기"],
        desc: "여름이는 상황 판단이 빠르고 영리해서 금방 새로운 환경에 적응할 준비가 되어 있답니다.",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=300",
    },
    {
        id: 3,
        name: "햇님이",
        gender: "F",
        age: 4,
        weight: 3.2,
        tags: ["조용해요", "애교많아요"],
        desc: "차분하게 곁을 지켜주는 햇님이는 은근한 애교로 집안의 분위기를 따뜻하게 만들어줄 거예요.",
        image: "https://res.cloudinary.com/dkqqxjsek/image/upload/v1778076935/Gemini_Generated_Image_m591hlm591hlm591_gaadio.png",
    },
    {
        id: 4,
        name: "쭈쭈",
        gender: "M",
        age: 5,
        weight: 4.8,
        tags: ["용감해요", "충성스러워요"],
        desc: "든든한 수호천사 쭈쭈! 주인만을 바라보는 일편단심 충성심을 가진 용감한 친구입니다.",
        image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=300",
    },
    {
        id: 5,
        name: "마마",
        gender: "F",
        age: 6,
        weight: 5.1,
        tags: ["온순해요", "사람좋아"],
        desc: "공격성이 전혀 없는 온순한 성격의 마마는 어린 아이가 있는 가정에도 아주 잘 어울려요.",
        image: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=300",
    },
    {
        id: 6,
        name: "알밤",
        gender: "M",
        age: 4,
        weight: 4.0,
        tags: ["밝아요", "식탐있어요"],
        desc: "먹는 것만큼이나 뛰어노는 것도 좋아하는 알밤이는 긍정적인 에너지를 전파하는 활력소예요.",
        image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=300",
    },
    {
        id: 7,
        name: "장군이",
        gender: "F",
        age: 3,
        weight: 2.7,
        tags: ["소심해요", "따뜻해요"],
        desc: "장군이는 처음엔 낯을 가릴 수 있지만, 한 번 마음을 열면 누구보다 깊은 애정을 주는 아이입니다.",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=300",
    },
    {
        id: 8,
        name: "순돌이",
        gender: "M",
        age: 5,
        weight: 6.0,
        tags: ["똑똑해요", "활발해요"],
        desc: "훈련 습득 능력이 뛰어난 똑똑이 순돌이와 함께라면 즐거운 산책과 놀이 시간이 보장됩니다.",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=300",
    },
    {
        id: 9,
        name: "탄밤",
        gender: "F",
        age: 4,
        weight: 3.6,
        tags: ["애교많아요", "장난꾸러기"],
        desc: "탄밤이는 애교 섞인 장난으로 웃음을 주는 타입이에요. 심심할 틈이 없는 일상을 선물할게요.",
        image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=300",
    },
    {
        id: 10,
        name: "달님이",
        gender: "F",
        age: 7,
        weight: 5.4,
        tags: ["조용해요", "차분해요"],
        desc: "우아하고 차분한 달님이는 조용한 환경을 좋아하며 집사님 옆에서 평온하게 쉬는 걸 즐겨요.",
        image: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?q=80&w=300",
    },
    {
        id: 11,
        name: "별이",
        gender: "M",
        age: 3,
        weight: 3.0,
        tags: ["사람좋아", "애교많아요"],
        desc: "별이는 눈만 마주쳐도 배를 뒤집는 애교쟁이예요. 사랑을 줄 수록 더 밝게 빛나는 아이랍니다.",
        image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=300",
    },
];

// 2. 리스트 렌더링 함수
function renderDogCards() {
    const grid = document.getElementById("dogGrid");
    if(!grid) return;

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
        <p style="color:#666; margin-bottom:15px">나이: ${dog.age}개월 | 몸무게: ${dog.weight}kg</p>
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

if(closeModal) {
    closeModal.onclick = closeModalWindow;
}

window.onclick = (event) => {
    if (event.target == modal) {
        closeModalWindow();
    }
};

// 초기화
document.addEventListener("DOMContentLoaded", renderDogCards);