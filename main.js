let hadith = document.querySelector(".hadith");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let input = document.querySelector(".input");
let form = document.querySelector(".form");

function showHadith(number) {
  fetch("https://ahadith-api.herokuapp.com/api/ahadith/all/ar-tashkeel")
  .then(res => res.json())
  .then(result => {
    if (number >= result.AllChapters.length || number < 0) {
      hadith.innerHTML = "لا يوجد حديث بهذا الرقم";
    } else {
      hadith.innerHTML = result.AllChapters[number].Ar_Text;
    }
  });
};

let number = 0;

window.onload = () => {
  if (localStorage.getItem("data")) {
    hadith.innerHTML = "تحميل...";
    number = localStorage.getItem("data");
    input.value = parseInt(number) + 1;
    showHadith(number);
  } else {
    hadith.innerHTML = "تحميل...";
    input.value = number + 1;
    showHadith(number);
  }
};

nextBtn.addEventListener("click", () => {
  hadith.innerHTML = "تحميل...";
  number++;
  input.value = number + 1;
  localStorage.setItem("data", number);
  showHadith(number);
});

prevBtn.addEventListener("click", () => {
  hadith.innerHTML = "تحميل...";
  input.value--;
  number = input.value - 1;
  showHadith(number);
  localStorage.setItem("data", number);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  hadith.innerHTML = "تحميل...";
  number = input.value - 1;
  showHadith(number);
  localStorage.setItem("data", number);
});
