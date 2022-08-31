const collapseContent = document.querySelector(".collapsible__content");
const collapseButton = document.querySelector(".collapsible__button");
const hiddenText = document.querySelector(".collapsible__action--hidden");
const openText = document.querySelector(".collapsible__action--visible");
let isOpen = false;
openText.style.display = "none";
collapseContent.style.display = "none";
const animationActions = {
  duration: 1000,
  iterations: 1,
  easing: "ease-in-out",
};

let appearAnimation = collapseContent.animate(
  [{ opacity: "0" }, { opacity: "1" }],
  animationActions
);
let disappearAnimation = collapseContent.animate(
  [{ opacity: "1" }, { opacity: "0" }],
  animationActions
);

collapseButton.onclick = function () {
  collapseButton.disabled = true;
  if (isOpen) {
    disappearAnimation.play();
    disappearAnimation.finished.then(() => {
      collapseContent.style.display = "none";
      collapseButton.disabled = false;
    });
    hiddenText.style.display = "block";
    openText.style.display = "none";
    isOpen = !isOpen;
  } else {
    appearAnimation.play();
    disappearAnimation.finished.then(() => {
      collapseContent.style.display = "block";
      collapseButton.disabled = false;
    });
    isOpen = !isOpen;
    openText.style.display = "block";
    hiddenText.style.display = "none";
  }
};
