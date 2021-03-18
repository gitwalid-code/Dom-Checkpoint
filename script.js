const start = () => {
  const icons = [
    "fa-otter",
    "fa-otter",
    "fa-horse",
    "fa-horse",
    "fa-kiwi-bird",
    "fa-kiwi-bird",
    "fa-hippo",
    "fa-hippo",
    "fa-dragon",
  ];
  let j;
  let selectedCard = "";
  let matchedCards = 0;

  for (let i = icons.length - 1; i > 0; i--) {
    j = parseInt(Math.random() * (i + 1));
    [icons[i], icons[j]] = [icons[j], icons[i]];
  }

  let b = document.querySelectorAll(".card_front i");

  for (let i = 0; i < b.length; i++) {
    b[i].classList.add(icons[i]);
  }
  let cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add("visible");
  }
  setTimeout(function () {
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove("visible");
    }
  }, 2000);

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
      if (!cards[i].classList.contains("visible")) {
        cards[i].classList.add("visible");
        if (matchedCards == 8) {
          cards[i].classList.add("matched");
          setTimeout(function () {
            for (let i = 0; i < cards.length; i++) {
              cards[i].classList.remove("visible");
              cards[i].classList.remove("matched");
            }
          }, 2000);
        }
        setTimeout(function () {
          if (selectedCard == "") {
            selectedCard = cards[i];
          } else {
            let icone1 = cards[i].querySelector(".card_front i");
            let icone2 = selectedCard.querySelector(".card_front i");
            if (icone1.classList.value === icone2.classList.value) {
              cards[i].classList.add("matched");
              selectedCard.classList.add("matched");
              matchedCards += 2;
              selectedCard = "";
            } else {
              cards[i].classList.remove("visible");
              selectedCard.classList.remove("visible");
              selectedCard = "";
            }
          }
        }, 1000);
      }
    });
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}

//let b = document.querySelectorAll(".card_front i");

//console.log(b);

/*function addclass() {
  for (i = 0; i < b.length; i++) {
    b[i].classList.add(icons[i]);
  }
}
document.addEventListener("click", addclass);*/
