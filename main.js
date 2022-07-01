let hadith = document.querySelector(".hadith");
let resetBtn = document.querySelector(".reset-btn");
let nextBtn = document.querySelector(".next-btn");
let input = document.querySelector(".input");
let form = document.querySelector(".form");

function showHadith(number) {
  fetch("https://ahadith-api.herokuapp.com/api/ahadith/all/ar-tashkeel")
  .then(res => res.json())
  .then(result => {
    console.log(result);
    if (number >= result.AllChapters.length) {
      hadith.innerHTML = "لا يوجد حديث بهذا الرقم";
    } else {
      hadith.innerHTML = result.AllChapters[number].Ar_Text;
    }
  });
};

let number = 0;

window.onload = () => {
  hadith.innerHTML = "تحميل...";
  input.value = number + 1;
  showHadith(number);
};

nextBtn.addEventListener("click", () => {
  hadith.innerHTML = "تحميل...";
  number++;
  input.value = number + 1;
  showHadith(number);
});

resetBtn.addEventListener("click", () => {
  hadith.innerHTML = "تحميل...";
  number = 0;
  input.value = number + 1;
  showHadith(number);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  hadith.innerHTML = "تحميل...";
  number = input.value - 1;
  showHadith(number);
});
