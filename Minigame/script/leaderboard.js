// Get the cookie string from the document
const cookieString = document.cookie;

// Create an empty dictionary to store scores by level
const scoreByLevel = {};

// Split the cookie string into individual cookies
const cookies = cookieString.split(";");

// Iterate over each cookie and extract the username and scores
for (let i = 0; i < cookies.length; i++) {
  const cookie = cookies[i].trim();

  try {
    // Check if the cookie contains level information
    if (cookie.startsWith("level_")) {
      // Extract the username and scores from the cookie
      const encodedUsername = cookie.substring(6, cookie.indexOf("="));
      const username = decodeURIComponent(encodedUsername);

      const scoresString = cookie.substring(cookie.indexOf("=") + 1);
      const scores = JSON.parse(decodeURIComponent(scoresString));

      // Store the scores in the scoreByLevel dictionary
      scoreByLevel[username] = scores;
    }
  } catch (e) {
    // Ignore errors parsing cookies
  }
}

// Create an empty dictionary to store overall scores
scoreOverall = {};

// Iterate over each cookie and extract the username and overall scores
for (let i = 0; i < cookies.length; i++) {
  const cookie = cookies[i].trim();

  try {
    // Check if the cookie contains overall score information
    if (cookie.startsWith("highestscore_")) {
      // Extract the username and overall score from the cookie
      const encodedUsername = cookie.substring(13, cookie.indexOf("="));
      const username = decodeURIComponent(encodedUsername);
      const scoresString = cookie.substring(cookie.indexOf("="));

      // Store the overall score in the scoreOverall dictionary
      scoreOverall[username] = scoresString.replace("=", "");
    }
  } catch (e) {
    // Ignore errors parsing cookies
  }
}

usericon = {};

// Iterate over each cookie and extract the username and icon
for (let i = 0; i < cookies.length; i++) {
  const cookie = cookies[i].trim();

  try {
    // Check if the cookie contains icon information
    if (cookie.startsWith("icon_")) {
      // Extract the username and icon from the cookie
      const encodedUsername = cookie.substring(5, cookie.indexOf("="));
      const username = decodeURIComponent(encodedUsername);
      const iconString = cookie.substring(cookie.indexOf("=")).replace("=", "");
      decodedIconString = JSON.parse(decodeURIComponent(iconString));

      // Store the icon in the usericon dictionary
      usericon[username] = decodedIconString;
    }
  } catch (e) {
    // Ignore errors parsing cookies
  }
}

// Function to generate leaderboard navigation
function generateLeaderboard() {
  const listbody = document.getElementById("leaderboard");

  // Add "Best Overall" option to the leaderboard
  const list = `<li onclick="showScores()"><a>Best Total</a></li>`;
  listbody.insertAdjacentHTML("beforeend", list);

  // Add individual level options to the leaderboard
  for (let i = 1; i <= max; i++) {
    const list = `<li onclick="showScoresForLevel(${i})"><a>Level - ${i}</a></li>`;
    listbody.insertAdjacentHTML("beforeend", list);
  }
}

// Function to display scores for a specific level
function showScoresForLevel(level) {
  const tableBody = document.getElementById("leaderboard-table");

  // Clear the table first
  tableBody.innerHTML = "";

  // Create header row with level title
  const headerRow = document.createElement("tr");
  const headerCell = document.createElement("th");
  headerCell.setAttribute("colspan", "3");
  headerCell.innerText = `Best Score - Level ${level}`;
  headerRow.appendChild(headerCell);
  tableBody.appendChild(headerRow);

  const sortedScoreByLevel = sortObjectByArrayIndex(scoreByLevel, level - 1);

  // Iterate over each user and add their score for the selected level to the table
  sortedScoreByLevel.forEach(([user, scores]) => {
    const userScore = scores[level - 1];
    if (userScore !== undefined) {
      const userRow = document.createElement("tr");

      // Add the user's icon to the row
      const iconCell = document.createElement("td");
      if (usericon[user] !== undefined) {
        iconCell.innerHTML = `<div class="imageRow">
                                <img src="images/mouth-${usericon[user][1]}.png" alt=" " style="position:absolute">
                                <img src="images/eyes-${usericon[user][0]}.png" alt=" " style="position:absolute">
                                <img src="images/skin-3.png" alt=" ">
                              </div>`;
      } else {
        iconCell.innerHTML = `<div class="imageRow">
                                <img src="images/mouth-1.png" alt=" " style="position:absolute">
                                <img src="images/eyes-1.png" alt=" " style="position:absolute">
                                <img src="images/skin-3.png" alt=" ">
                              </div>`;
      }
      userRow.appendChild(iconCell);

      // Add the user's name to the row
      const nameCell = document.createElement("td");
      const name = document.createElement("div");
      name.innerText = user.replace(/\+/g, " ");
      name.className = "nameRow";
      nameCell.appendChild(name);
      userRow.appendChild(nameCell);

      // Add the user's score for the selected level to the row
      const levelScoreCell = document.createElement("td");
      levelScoreCell.style.width = "80px";
      levelScoreCell.innerText = userScore;
      userRow.appendChild(levelScoreCell);

      tableBody.appendChild(userRow);
    }
  });
}

// Function to display overall scores
function showScores() {
  const tableBody = document.getElementById("leaderboard-table");

  // Clear the table first
  tableBody.innerHTML = "";

  // Create header row with overall score title
  const headerRow = document.createElement("tr");
  const headerCell = document.createElement("th");
  headerCell.setAttribute("colspan", "3");
  headerCell.innerText = `Best Score - Total`;
  headerRow.appendChild(headerCell);
  tableBody.appendChild(headerRow);

  const sortedScoreOverall = sortObjectByValue(scoreOverall);

  // Iterate over each user and add their overall score to the table
  sortedScoreOverall.forEach(([user, userScore]) => {
    if (userScore !== undefined) {
      const userRow = document.createElement("tr");

      // Add the user's icon to the row
      const iconCell = document.createElement("td");
      if (usericon[user] !== undefined) {
        iconCell.innerHTML = `<div class="imageRow">
                                <img src="images/mouth-${usericon[user][1]}.png" alt=" " style="position:absolute">
                                <img src="images/eyes-${usericon[user][0]}.png" alt=" " style="position:absolute">
                                <img src="images/skin-3.png" alt=" ">
                              </div>`;
      } else {
        iconCell.innerHTML = `<div class="imageRow">
                                <img src="images/mouth-1.png" alt=" " style="position:absolute">
                                <img src="images/eyes-1.png" alt=" " style="position:absolute">
                                <img src="images/skin-3.png" alt=" ">
                              </div>`;
      }
      userRow.appendChild(iconCell);

      // Add the user's name to the row
      const nameCell = document.createElement("td");
      const name = document.createElement("div");
      name.innerText = user.replace(/\+/g, " ");
      name.className = "nameRow";
      nameCell.appendChild(name);
      userRow.appendChild(nameCell);

      // Add the user's overall score to the row
      const levelScoreCell = document.createElement("td");
      levelScoreCell.style.width = "80px";
      levelScoreCell.innerText = userScore;
      userRow.appendChild(levelScoreCell);

      tableBody.appendChild(userRow);
    }
  });
}

// Function to get the maximum level from scoreByLevel dictionary
function getMaxlevel() {
  var max = 0;
  Object.keys(scoreByLevel).forEach((user) => {
    var list = scoreByLevel[user];
    if (list.length > max) {
      max = list.length;
    }
  });
  return max;
}

function sortObjectByArrayIndex(obj, index) {
  const filteredEntries = Object.entries(obj).filter(
    ([key, value]) => value[index] !== undefined
  );

  const sortedEntries = filteredEntries.sort(
    (a, b) => b[1][index] - a[1][index]
  );

  return sortedEntries;
}

function sortObjectByValue(obj) {
  const sortedEntries = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  return sortedEntries;
}

// Get the maximum level and generate the leaderboard
let max = getMaxlevel();
generateLeaderboard();

// Show overall scores by default
showScores();
