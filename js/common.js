// header.html 로드 및 처리
fetch("../header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;

    // header.html이 로드된 후 실행되는 코드
    const searchEl = document.querySelector(".search");
    const searchInputEl = searchEl.querySelector("input");

    console.log(searchEl); // 이제 null이 아님

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
  })
  .catch((error) => console.error("Error loading header:", error));

// footer.html 로드 및 처리
fetch("../footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;

    const thisYearv = document.querySelector(".this-year");
    thisYearv.textContent = new Date().getFullYear();
  })
  .catch((error) => console.error("Error loading footer:", error));
