const usersData = [
  {
    id: 0,
    user: "Tanya Sinclair",
    testimonial:
      "“" +
      "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future." +
      "”",
    jobTitle: "UX Engineer",
    imgURL: "images/image-tanya.jpg",
    imgAlt: "Tanya Sinclair profile picture",
  },
  {
    id: 1,
    user: "John Tarkpor",
    testimonial:
      "“" +
      "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer." +
      "”",
    jobTitle: "Junior Front-end Developer",
    imgURL: "images/image-john.jpg",
    imgAlt: "John Tarkpor profile picture",
  },
];

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const pText = document.querySelector("p");
const nameText = document.querySelector(".name");
const jobTitle = document.querySelector(".job-title");
const pic = document.querySelector(".pic");
let curId = Number(nameText.dataset.id);

function updateUserData(curId) {
  pText.textContent = usersData[curId]["testimonial"];
  nameText.textContent = usersData[curId]["user"];
  jobTitle.textContent = usersData[curId]["jobTitle"];
  nameText.dataset.id = curId;
  pic.src = usersData[curId]["imgURL"];
  pic.alt = usersData[curId]["imgAlt"];
}

prevBtn.addEventListener("click", function () {
  console.log("prev button is clicked!");

  if (curId == 1) {
    curId -= 1;
    updateUserData(curId);
  }
});

nextBtn.addEventListener("click", function () {
  console.log("next button is clicked!");

  if (curId == 0) {
    curId += 1;
    updateUserData(curId);
  }
});
