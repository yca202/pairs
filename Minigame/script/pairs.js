// ========================================
// Game logic functions
// ========================================

// A function that is activated when the user clicks on a card
function flipCard({ target: clickedCard }) {
  // Check if the card is already flipped or if the deck is disabled
  if (!disableDeck && !Array.from(clickedCard.classList).includes("flip")) {
    // Add the flip class to the card to flip it
    clickedCard.classList.add("flip");
    // Add the card to the flipped cards array
    flippedCards.push(clickedCard);
    // Check if the flipped cards are matched
    const flippedCardImgs = flippedCards.map((card) =>
      getCardImageSource(card.querySelectorAll(".back-view img"))
    );
    attempts++;
    if (flippedCards.length >= 2) {
      // If the cards does not match then disable the deck flip them back
      if (!isMatch(flippedCardImgs)) {
        disableDeck = true;
        flipBackCards();

        // If the cards match then disable the deck and check if all the cards are matched
      } else if (flippedCards.length === pairAmount) {
        disableDeck = true;
        isAllMatched();
      }
    }
  }
}

// A function that returns a string of the image source of the card
function getCardImageSource(imgs) {
  const skinImg = Array.from(imgs).find((img) =>
    img.classList.contains("skin")
  );
  const eyesImg = Array.from(imgs).find((img) =>
    img.classList.contains("eyes")
  );
  const mouthImg = Array.from(imgs).find((img) =>
    img.classList.contains("mouth")
  );
  return {
    skin: skinImg.src,
    eyes: eyesImg.src,
    mouth: mouthImg.src,
  };
}

// A function that is called when all the cards are matched
function isAllMatched() {
  matched++;
  if (matched >= numPairs) {
    levelEnd();
    setTimeout(shuffleCard, 1000);
  }

  flippedCards.forEach((card) => card.removeEventListener("click", flipCard));
  resetFlippedCards();
}
function isMatch(flippedCardImgs) {
  // Check if the flipped cards are matched for each card
  return flippedCardImgs.every(
    (img, i, arr) =>
      i === 0 || JSON.stringify(img) === JSON.stringify(arr[i - 1])
  );
}

// A function that flips the cards back if they are not matched
function flipBackCards() {
  setTimeout(() => {
    // Shake the cards
    flippedCards.forEach((card) => card.classList.add("shake"));
  }, 400);
  setTimeout(() => {
    // Remove the flip class to flip the cards back
    flippedCards.forEach((card) => card.classList.remove("shake", "flip"));
    resetFlippedCards();
  }, 1200);
}

// A function that resets the flipped cards
function resetFlippedCards() {
  flippedCards = [];
  disableDeck = false;
}

// ========================================
// Level setting functions
// ========================================

// A function that fills the board with number of cards in the game
function setNumber() {
  return new Promise((resolve) => {
    const cardTemplate = document.querySelector(".cardTemplate .card");
    const cardbox = document.querySelector(".cards");
    cardTemplate.style.opacity = 0;
    const cardsContainer = document.querySelector(".cards");
    cardsContainer.innerHTML = "";

    for (let i = 0; i < numcards; i++) {
      let y = (i / numcards) * 10;
      const clonedCard = cardTemplate.cloneNode(true);
      cardsContainer.appendChild(clonedCard);
      setTimeout(() => {
        changeBox();
        clonedCard.classList.add("appear");
      }, y * 300);
    }

    // Resolve the promise after the last card has appeared
    setTimeout(() => {
      resolve();
    }, 11 * 300);
  });
}

// Function to generate a list of random numbers
async function shuffleCard() {
  levelStart(); //start the level
  loadingTimerDynamic(); // start the loading timer display
  updateDisplayStatic(); // update the static display timer
  loading = true; // set the loading to true to prevent the user from skipping level
  await setNumber(); //set the number of cards
  loading = false; // set the loading to false to allow the user to skip level
  stopLoadingTimerDynamic(); // stop the dynamic loading timer
  const cards = document.querySelectorAll(".cards .card"); // Get all the cards
  matched = 0; // Reset the matched cards
  disableDeck = false; // Enable the deck
  cardOne = cardTwo = ""; // Reset the cardOne and cardTwo
  list = generateList(numPairs, pairAmount); // Generate a list of random numbers for cards
  // Start the timer interval
  timerId = setInterval(updateTimer, 1000); // Start the timer interval
  cards.forEach((card, i) => {
    card.classList.remove("appear"); // Remove the appear class because add the cards have appeared
    card.style.opacity = 1; // Set the opacity to 1 because the cards have appeared and the opacity is set to 0 originally
    let eyeImgTag = card.querySelector(".eyes"); // Get the eye image tag
    eyeImgTag.src = `images/eyes-${list[i][2]}.png`; // Set the eye image source
    let mouthImgTag = card.querySelector(".mouth"); // Get the mouth image tag
    mouthImgTag.src = `images/mouth-${list[i][1]}.png`; // Set the mouth image source
    let skinImgTag = card.querySelector(".skin"); // Get the skin image tag
    skinImgTag.src = `images/skin-${list[i][0]}.png`; // Set the skin image source
    card.addEventListener("click", flipCard); // Add the flipCard function to the card
    addEffect(card); // Add the effect to the card
  });
}

//================================================
// Timer functions
//================================================

// A function that updates the timer display (called every second)
function loadingTimerDynamic() {
  let timerSpan = document.getElementById("timer-dynamic");
  timerSpan.innerHTML = "";
  let timerSpanloading = document.getElementById("timer-loading");
  timerSpanloading.classList.add("flash-text");

  if (levelNum === 3) {
    timerSpanloading.innerHTML = "The pair amount is changed to 3<br>";
  } else if (levelNum === 5) {
    timerSpanloading.innerHTML = "The pair amount is changed to 4<br>";
  } else {
    timerSpanloading.innerHTML = "Loading...<br>";
  }
}

// A function that remove the loading display (called when setNumber() is resolved)
function stopLoadingTimerDynamic() {
  let timerSpanloading = document.getElementById("timer-loading");
  timerSpanloading.classList.remove("flash-text");
  timerSpanloading.innerHTML = "";
}

// Called every second to update the remaining time and check if the time has run out
function updateTimer() {
  timeLeft--;
  updateDisplayDynamic();
  // changeBox();
  if (timeLeft == 0) {
    // Stop the timer interval if the time has run out
    clearInterval(timerId);
    // Call the gameEnd() function to end the level
    gameEnd();
  }
  if (attempts >= levelAttempt) {
    gameEnd();
  }
}

// JavaScript code to update the timer display every secound
function updateDisplayDynamic() {
  let timerSpan = document.getElementById("timer-dynamic");
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  // Update the timer display
  timerSpan.innerHTML = `
  <span class="left">Flips: ${levelAttempt - attempts}</span>
  <span class="separator">|</span>
  <span class="right">${minutes}:${seconds.toString().padStart(2, "0")}</span>`;
}

// JavaScript code to update the timer display on the start of the game
function updateDisplayStatic() {
  let timerSpan = document.getElementById("timer-static");

  // Update the timer display
  timerSpan.innerHTML = `
  <span class="timer-item">
      <span class="left">Pairs: ${pairAmount}</span>
      <span class="separator">|</span>
      <span class="right">level: ${levelNum}</span>
  </span>
  <span class="timer-item">
      <span class="left">Score: ${totalPoints}</span>
      <span class="separator">|</span>
      <span class="right"><button class="material-button" onclick="gameEnd()">Surrender</button></span>
  </span>`;
}

//================================================
// Level value functions
//================================================

// Called when the player starts a new level to set the level values
function levelStart() {
  levelNum++;
  attempts = 0;
  levelPoints = 0;

  if (levelNum === 3) {
    pairAmount = 3;
    numPairs = 7;
  }

  if (levelNum === 5) {
    pairAmount = 4;
    numPairs = 6;
  }

  if (levelNum > 5) {
    pairAmount = 4;
  }
  numPairs += 1;

  numcards = numPairs * pairAmount; //total number of cards

  // Calculate the time limit based on the number of cards
  let timeLimit = 60 + Math.ceil(numcards / 4) * 20;

  levelAttempt = Math.floor(numPairs * pairAmount ** 2 * 1.5);
  // Reset the time left to the new time limit
  timeLeft = timeLimit;
}

// Called when the player completes the level to record their performance
function levelEnd() {
  // Stop the timer interval
  clearInterval(timerId);
  // Calculate the number of points earned based on the time left and attempts
  let points = Math.round(Math.round(timeLeft + (numcards * 50) / attempts));
  // Add the points to the total and level points
  totalPoints += points;
  levelPoints += points;
  levelPointsList[levelNum - 1] = points;
  if (isset("highestscore_" + username)) {
    if (getCookie("highestscore_" + username) < totalPoints && !hasHighScore) {
      const wrapper = document.querySelector(".cards-wrapper");
      wrapper.classList.add("glow");
      hasHighScore = true;
    } else {
      const wrapper = document.querySelector(".cards-wrapper");
      wrapper.classList.remove("glow");
    }
  }
}

// Called when the player completes the game or lost the game to record their performance
function gameEnd() {
  // Stop the timer interval
  clearInterval(timerId);
  if (
    isset("name") &&
    isset("eyeValue") &&
    isset("itemValue") &&
    isset("mouthValue")
  ) {
    // show the alert box and wait for the user's choice
    (async function () {
      var value = await Alert.render(
        "Game over<br>Your Score : " + totalPoints,
        "Submit Score",
        "Play again and abandon score"
      );

      // if the user wants to submit the score
      if (value === true) {
        let cookieData;
        if (isset("level_" + username)) {
          // if the cookie is set, use the cookie to compare the levelPointsList
          try {
            cookieArray = getCookie("level_" + username);
            cookieArray = JSON.parse(decodeURIComponent(cookieArray));
            var largestValuesCookie = getLargestValues(
              cookieArray,
              levelPointsList
            );

            // if the cookie is corrupted, use the levelPointsList
          } catch (error) {
            largestValuesCookie = levelPointsList;
          }

          // if the cookie is not set, use the levelPointsList
        } else {
          largestValuesCookie = levelPointsList;
        }

        if (isset("highestscore_" + username)) {
          try {
            // if the score is highter than the cookie, use the totalPoints
            if (getCookie("highestscore_" + username) < totalPoints) {
              cookieData = {
                level: JSON.stringify(largestValuesCookie),
                highestScore: totalPoints,
              };

              // if the score is lower than the cookie, use the cookies
            } else {
              cookieData = {
                level: JSON.stringify(largestValuesCookie),
                highestScore: getCookie("highestscore_" + username),
              };
            }

            //  if the cookie is corrupted, use the totalPoints
          } catch (error) {
            cookieData = {
              level: JSON.stringify(largestValuesCookie),
              highestScore: totalPoints,
            };
          }

          // if the cookie is not set, use the totalPoints
        } else {
          cookieData = {
            level: JSON.stringify(largestValuesCookie),
            highestScore: totalPoints,
          };
        }

        // Send a POST request to score_inc.php with the cookieData and username
        fetch("include/score_inc.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            cookieData: cookieData,
          }),
        })
          .then((response) => {
            if (response.ok) {
              console.log(cookieData);
              window.location.href = "leaderboard.php";
            } else {
              throw new Error("Network response was not ok");
            }
          })
          .catch((error) => {
            console.error(
              "There was a problem with the fetch operation:",
              error
            );
          });

        // if the user wants to play again
      } else {
        location.reload();
      }
    })();

    // if the user is not logged in
  } else {
    location.reload();
  }
}

// ========================================
// List setting functions
// ========================================

// Function to generate a list of a sublist of 3 random numbers between 1 and the maximum value
function generateList(numPairs, pairAmount) {
  // Define the maximum values for each index
  const maxValues = [3, 6, 6];

  // Create an array to store the sublists
  const list = [];

  // Generate the sublists
  for (let i = 0; i < numPairs; i++) {
    // Create an empty array to represent the current sublist
    const sublist = [];
    // Generate random numbers and add them to the sublist
    for (let j = 0; j < maxValues.length; j++) {
      const maxValue = maxValues[j];
      const randomValue = Math.floor(Math.random() * maxValue + 1);
      sublist.push(randomValue);
    }

    // Add the sublist to the list
    list.push(sublist);
  }
  let listDuplicated = [];
  for (let i = 0; i < pairAmount; i++) {
    listDuplicated = [...listDuplicated, ...list];
  }
  return shuffle(listDuplicated);
}

// Function to get the largest value for each index in two lists
function getLargestValues(list1, list2) {
  const maxLength = Math.max(list1.length, list2.length);
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    const value1 = list1[i] || 0;
    const value2 = list2[i] || 0;

    result.push(Math.max(value1, value2));
  }

  return result;
}

// Function to shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ========================================
// Cookies setting functions
// ========================================

// Function to get the value of a cookie
function getCookie(cookiename) {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === cookiename) {
      return value;
    }
  }
  return null; // Return null if the cookie is not found
}

// Function to check if a cookie exists
function isset(cookieName) {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.startsWith(cookieName + "=")) {
      return true;
    }
  }
  return false;
}

// ========================================
// Function to change the window size
// ========================================
let prevWindowWidth = window.innerWidth;
let prevWindowHeight = window.innerHeight;

// A function that check if the window size has changed
function hasWindowChanged() {
  const currentWindowWidth = window.innerWidth;
  const currentWindowHeight = window.innerHeight;

  if (
    currentWindowWidth !== prevWindowWidth ||
    currentWindowHeight !== prevWindowHeight
  ) {
    prevWindowWidth = currentWindowWidth;
    prevWindowHeight = currentWindowHeight;
    return true;
  }
  return false;
}

// Add an event listener to the window to change the box when the window size changes
window.addEventListener("resize", () => {
  if (hasWindowChanged()) {
    changeBox();
  }
});

// A function that change the box size
function changeBox() {
  // Get the ul element
  let cardbox = document.querySelector(".cards");
  const cards = document.querySelectorAll(".cards .card"); //Get all the cards
  // Set the maximum width and height
  let maxWidth = window.innerWidth * 0.8;
  const maxHeight = window.innerHeight * 0.7;

  // Check if the window width is less than 500px
  if (window.innerWidth <= 500) {
    wrapper = document.querySelector(".cards-wrapper");
    cards.forEach((card, i) => {
      card.style.width = "22.75vw";
      card.style.height = "22.75vw ";
      card.style.margin = "1vw";

      wrapper.style.width = "100vw";
      cardbox.style.width = `${100 - 1}vw`;
      cardbox.style.height = `${((100 - 1) / 4) * Math.ceil(numcards / 4)}vw`;
      wrapper.style.padding = "0.5vw 0.5vw 3vw 0.5vw";
    });
  } else {
    wrapper = document.querySelector(".cards-wrapper");
    cards.forEach((card, i) => {
      card.style.width = "";
      card.style.height = "";
      card.style.margin = "";

      wrapper.style = "";
      cardbox.style = "";
    });
    // Calculate the number of columns and rows
    let numCols = Math.ceil(Math.sqrt(numcards));
    let numRows = Math.ceil(numcards / numCols);
    // Calculate the width and height
    let cardWidth = 100; // The width of each card is 90px with a margin of 5px
    let cardHeight = 100; // The height of each card is 90px with a margin of 5px
    let containerWidth = numCols * cardWidth;
    let containerHeight = numRows * cardHeight;

    // Adjust the number of columns and rows if the height exceeds the client's viewport height
    if (containerWidth < maxWidth) {
      numRows = Math.ceil(numcards / numCols);
      containerWidth = numCols * cardWidth;
      containerHeight = numRows * cardHeight;
    } else {
      numCols = Math.ceil(maxWidth / cardWidth);
      numRows = Math.ceil(numcards / numCols);
      containerWidth = numCols * cardWidth;
      containerHeight = numRows * cardHeight;
    }

    // Set the width and height of the ul element
    cardbox.style.width = `${containerWidth}px`;
    cardbox.style.height = `${containerHeight}px`;
  }
}

// ========================================
// Functions to add 3D effect to a card on hover
// ========================================

function addEffect(card) {
  let bounds;

  function rotateToMouse(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    card.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    card.querySelectorAll(".glow").forEach((side) => {
      side.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
    });
  }

  card.addEventListener("mouseenter", () => {
    bounds = card.getBoundingClientRect();
    document.addEventListener("mousemove", rotateToMouse);
    card.style.boxShadow = "0 5px 20px 5px #00000044;";
  });

  card.addEventListener("mouseleave", () => {
    document.removeEventListener("mousemove", rotateToMouse);
    card.style.transform = "";
    card.style.background = "";
    card.style.boxShadow = "";
  });
}

// ========================================
// Developer functions
// ========================================

// Function to skip to the next level
function skipLevel() {
  if (!loading) {
    attempts = Math.floor((Math.random() * numcards) / pairAmount) + 1;
    levelEnd();
    shuffleCard();
  }
}

// Function to get the number of attempts
function getLevelPoints() {
  console.log(document.cookie);
}

// Function to flip the cards
function hoverToggle() {
  const cards = document.querySelectorAll(".cards .card"); //Get all the cards

  setTimeout(() => {
    cards.forEach((card) => card.classList.add("reaval"));
  }, 400);
  setTimeout(() => {
    cards.forEach((card) => card.classList.remove("reaval"));
  }, 1200);
}

// ========================================
// Variables and Constants
// ========================================

// Level constants
let numPairs = 8;
numPairs -= 1;
let pairAmount = 2;
let levelNum = 1; // Current level number
levelNum -= 1;
let levelAttempt = 0; //Number of attempts available for the player
let timerId; // ID of the timer interval
let numcards = numPairs * pairAmount; // Total number of cards
let disableDeck = false; // A disable deck function to check if the deck is disabled
let hasHighScore = false; // A variable to check if the player has already achieved a high score

// Player constants
let attempts = 0; // Number of attempts made by the player
let totalPoints = 0; // Total number of points earned by the player
let levelPoints = 0; // Number of points earned in the current level
let timeLimit = 90; // Time limit for the initial level in seconds
let timeLeft = timeLimit; // Time left in the current level in seconds
let flippedCards = []; // Cards flipped by player
let levelPointsList = []; // Points earn by player in each level
let matched = 0; // Initiate the number of matched cards
let loading = false; // Loading status to prevent developer functions from being used while the game is loading

// ========================================
// Game initialization
// ========================================

// See if the page is refreshed to prevent the user from cheating
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    window.location.reload();
  }
});

// Pop up the start game alert box
var Alert = new customAlert();

// If user is logged in then get his username
if (
  isset("name") &&
  isset("eyeValue") &&
  isset("itemValue") &&
  isset("mouthValue")
) {
  var username = getCookie("name");
  (async function () {
    // Ask the user if they wants to start the game
    await Alert.render("Start the game?", "Start the game");
    shuffleCard();
  })();
} else {
  // If user is not logged in remind him that the score won't be recorded
  (async function () {
    // Ask the user if they wants to start the game
    await Alert.render(
      "Start the game?<br>Score Won't be recorded",
      "Start the game"
    );
    shuffleCard();
  })();
}
