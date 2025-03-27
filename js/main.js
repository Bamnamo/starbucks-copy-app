fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;

    // ✅ header.html이 로드된 후 실행
    const searchEl = document.querySelector(".search");
    const searchInputEl = searchEl.querySelector("input");

    console.log(searchEl); // ✅ 이제 null이 아님

    searchEl.addEventListener("click", function () {
      searchInputEl.focus();
    });

    searchInputEl.addEventListener("focus", function () {
      searchEl.classList.add("focused");
      searchInputEl.setAttribute("placeholder", "통합검색");
    });

    searchInputEl.addEventListener("blur", function () {
      searchEl.classList.remove("focused");
      searchInputEl.setAttribute("placeholder", "");
    });

    const badgeEl = document.querySelector("header .badges");
    const toTopEl = document.querySelector("#to-top");

    toTopEl.addEventListener("click", function () {
      gsap.to(window, 0.7, {
        scrollTo: 0,
      });
    });

    window.addEventListener(
      "scroll",
      _.throttle(function () {
        console.log(window.scrollY);
        if (window.scrollY > 500) {
          // 배지 숨기기
          // badgeEl.style.display = "none";
          gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: "none",
          });
          // 버튼보이기
          gsap.to(toTopEl, 0.2, {
            x: 0,
          });
        } else {
          // 배지 보이기
          // badgeEl.style.display = "block";
          gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: "block",
          });
          //버튼 숨기기
          gsap.to(toTopEl, 0.2, {
            x: 100,
          });
        }
      }, 300)
    );
  });

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper", {
  direction: "vertical",
  // autoplay: true,
  // loop: true,
});

// new Swiper(선택자, 옵션)
new Swiper(".promotion .swiper", {
  direction: "horizontal",
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  pagination: {
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper", {
  direction: "horizontal",
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add("hide");
  } else {
    // 보임 처리!
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// /**
//  * 요소가 화면에 보여짐 여부에 따른 요소 관리
//  */
// // 관리할 요소들 검색!
// const spyEls = document.querySelectorAll("section.scroll-spy");
// // 요소들 반복 처리!
// spyEls.forEach(function (spyEl) {
//   new ScrollMagic.Scene({
//     // 감시할 장면(Scene)을 추가
//     triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
//     triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부 감시
//   })
//     .setClassToggle(spyEl, "show") // 요소가 화면에 보이면 show 클래스 추가
//     .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
// });

// 요소 선택
const spyEls = document.querySelectorAll("section.scroll-spy");

// 요소 반복 처리
spyEls.forEach((spyEl) => {
  gsap.to(spyEl, {
    scrollTrigger: {
      trigger: spyEl, // 트리거 요소
      start: "top 80%", // 요소의 top이 뷰포트의 80% 지점에 도달할 때 시작
      toggleClass: "show", // 클래스 토글
      once: true, // 한 번만 작동 (원하면 false로 변경)
    },
  });
});

const thisYearv = document.querySelector(".this-year");
thisYearv.textContent = new Date().getFullYear();
