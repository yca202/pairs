// ==========================
// Eyes
// ==========================

let eyeImgs = [1, 2, 3, 4, 5, 6]; // each eye has 6 images
let currentEyeIndex = 0; // current eye image index
let eyeBox0 = document.getElementById("eyeBox0");
let eyeBox1 = document.getElementById("eyeBox1");
let eyeBox2 = document.getElementById("eyeBox2");
let eyeBox3 = document.getElementById("eyeBox3");
let eyeBox4 = document.getElementById("eyeBox4");
let eyeloading = false; // prevent double click

// function to update the eye images and values to the current eye index
function updateEyeValues() {
  eye0ImgNumber = eyeImgs[(currentEyeIndex + 4) % 6]; // previous previous eye
  eye1ImgNumber = eyeImgs[(currentEyeIndex + 5) % 6]; // previous eye
  eye2ImgNumber = eyeImgs[(currentEyeIndex + 0) % 6]; // current eye
  eye3ImgNumber = eyeImgs[(currentEyeIndex + 1) % 6]; // next eye
  eye4ImgNumber = eyeImgs[(currentEyeIndex + 2) % 6]; // next next eye

  // update the eye images
  eyeBox0.innerHTML = `<span class='facebox'><img class='avatar-image' src='images/skin-3.png'></span>
        <span class='facebox'><img class='avatar-image' src='images/eyes-${eye0ImgNumber}.png'></span>`;
  eyeBox1.innerHTML = `<span class='facebox'><img class='avatar-image' src='images/skin-3.png'></span>
    <span class='facebox'><img class='avatar-image' src='images/eyes-${eye1ImgNumber}.png'></span>`;
  eyeBox2.innerHTML = `<span class='facebox'><img class='avatar-image' src='images/skin-3.png'></span>
    <span class='facebox'><img class='avatar-image' src='images/eyes-${eye2ImgNumber}.png'></span>`;
  eyeBox3.innerHTML = `<span class='facebox'><img class='avatar-image' src='images/skin-3.png'></span>
    <span class='facebox'><img class='avatar-image' src='images/eyes-${eye3ImgNumber}.png'></span>`;
  eyeBox4.innerHTML = `<span class='facebox'><img class='avatar-image' src='images/skin-3.png'></span>
    <span class='facebox'><img class='avatar-image' src='images/eyes-${eye4ImgNumber}.png'></span>`;

  // remove all the move classes
  const boxes = document.querySelectorAll(".eye.selection-box");
  boxes.forEach((box, i) => {
    box.className = `eye selection-box i${i}`;
  });

  // update the preview image
  preview = document.querySelectorAll("#preview .emoji-avatar img")[1];
  preview.src = `images/eyes-${currentEyeIndex + 1}.png`;

  // update the select option
  const selectOptions = document.querySelector("#eye-options");
  selectOptions.value = currentEyeIndex + 1;
}

// function to scroll the eye selector to the left
function scrollLeftSelectorEye() {
  // if the eye selector is already scrolling, return
  if (eyeloading) return;

  // set the loading to true
  eyeloading = true;

  // add the move animation classes
  eyeBox0.classList.add("move-left");
  eyeBox1.classList.add("move-left");
  eyeBox2.classList.add("move-left-and-shrink-down");
  eyeBox3.classList.add("move-left-and-shrink-up");
  eyeBox4.classList.add("move-left");

  // after the animation is done, update the eye values and set the loading to false
  setTimeout(() => {
    currentEyeIndex = (currentEyeIndex + 1) % 6;
    updateEyeValues();
    eyeloading = false;
  }, 300);
}

// function to scroll the eye selector to the right
function scrollRightSelectorEye() {
  // if the eye selector is already scrolling, return
  if (eyeloading) return;

  // set the loading to true
  eyeloading = true;

  // add the move animation classes
  eyeBox0.classList.add("move-right");
  eyeBox1.classList.add("move-right-and-shrink-up");
  eyeBox2.classList.add("move-right-and-shrink-down");
  eyeBox3.classList.add("move-right");
  eyeBox4.classList.add("move-right");

  // after the animation is done, update the eye values and set the loading to false
  setTimeout(() => {
    currentEyeIndex = (currentEyeIndex - 1 + 6) % 6;
    updateEyeValues();
    eyeloading = false;
  }, 300);
}

updateEyeValues();

// ==========================
// Mouth
// ==========================

let mouthImgs = [1, 2, 3, 4, 5, 6]; // each mouth has 6 images
let currentMouthIndex = 0; // current mouth image index
let mouthBox0 = document.getElementById("mouthBox0");
let mouthBox1 = document.getElementById("mouthBox1");
let mouthBox2 = document.getElementById("mouthBox2");
let mouthBox3 = document.getElementById("mouthBox3");
let mouthBox4 = document.getElementById("mouthBox4");
let mouthloading = false; // prevent double click

// function to update the mouth images and values to the current mouth index
function updateMouthValues() {
  mouth0ImgNumber = mouthImgs[(currentMouthIndex + 4) % 6]; // previous previous mouth
  mouth1ImgNumber = mouthImgs[(currentMouthIndex + 5) % 6]; // previous mouth
  mouth2ImgNumber = mouthImgs[(currentMouthIndex + 0) % 6]; // current mouth
  mouth3ImgNumber = mouthImgs[(currentMouthIndex + 1) % 6]; // next mouth
  mouth4ImgNumber = mouthImgs[(currentMouthIndex + 2) % 6]; // next next mouth

  // update the mouth images
  mouthBox0.innerHTML = `<span class='facebox'><img class='avatar-image' src='images/skin-3.png'></span>
        <span class='facebox'><img class='avatar-image' src='images/mouth-${mouth0ImgNumber}.png'></span>`;
  mouthBox1.innerHTML = `<span class='facebox'><img class='avatar-image' src='images/skin-3.png'></span>
    <span class='facebox'><img class='avatar-image' src='images/mouth-${mouth1ImgNumber}.png'></span>`;
  mouthBox2.innerHTML = `<span class='facebox'><img class='avatar-image' src='images/skin-3.png'></span>
    <span class='facebox'><img class='avatar-image' src='images/mouth-${mouth2ImgNumber}.png'></span>`;
  mouthBox3.innerHTML = `<span class='facebox'><img class='avatar-image' src='images/skin-3.png'></span>
    <span class='facebox'><img class='avatar-image' src='images/mouth-${mouth3ImgNumber}.png'></span>`;
  mouthBox4.innerHTML = `<span class='facebox'><img class='avatar-image' src='images/skin-3.png'></span>
    <span class='facebox'><img class='avatar-image' src='images/mouth-${mouth4ImgNumber}.png'></span>`;

  // remove all the move classes
  const boxes = document.querySelectorAll(".mouth.selection-box");
  boxes.forEach((box, i) => {
    box.className = `mouth selection-box i${i}`;
  });

  // update the preview image
  preview = document.querySelectorAll("#preview .emoji-avatar img")[2];
  preview.src = `images/mouth-${currentMouthIndex + 1}.png`;

  // update the select option
  const selectOptions = document.querySelector("#mouth-options");
  selectOptions.value = currentMouthIndex + 1;
}

// function to scroll the mouth selector to the left
function scrollLeftSelectorMouth() {
  // if the mouth selector is already scrolling, return
  if (mouthloading) return;

  // set the loading to true
  mouthloading = true;

  // add the move animation classes
  mouthBox0.classList.add("move-left");
  mouthBox1.classList.add("move-left");
  mouthBox2.classList.add("move-left-and-shrink-down");
  mouthBox3.classList.add("move-left-and-shrink-up");
  mouthBox4.classList.add("move-left");

  // after the animation is done, update the mouth values and set the loading to false
  setTimeout(() => {
    currentMouthIndex = (currentMouthIndex + 1) % 6;
    updateMouthValues();
    mouthloading = false;
  }, 300);
}

// function to scroll the mouth selector to the right
function scrollRightSelectorMouth() {
  // if the mouth selector is already scrolling, return
  if (mouthloading) return;

  // set the loading to true
  mouthloading = true;

  // add the move animation classes
  mouthBox0.classList.add("move-right");
  mouthBox1.classList.add("move-right-and-shrink-up");
  mouthBox2.classList.add("move-right-and-shrink-down");
  mouthBox3.classList.add("move-right");
  mouthBox4.classList.add("move-right");

  // after the animation is done, update the mouth values and set the loading to false
  setTimeout(() => {
    currentMouthIndex = (currentMouthIndex - 1 + 6) % 6;
    updateMouthValues();
    mouthloading = false;
  }, 300);
}

updateMouthValues();

// ==========================
// item
// ==========================

// itemImgs is an object that maps the unicode to the item name
let itemImgs = {
  "&#8986": "accessory",
  "&#127918": "accessory",
  "&#127913": "hat",
  "&#129506": "hat",
  "&#128077": "accessory",
  "&#127922": "accessory",
};

let currentItemIndex = 0; // current item image index
let itemBox0 = document.getElementById("itemBox0");
let itemBox1 = document.getElementById("itemBox1");
let itemBox2 = document.getElementById("itemBox2");
let itemBox3 = document.getElementById("itemBox3");
let itemBox4 = document.getElementById("itemBox4");
let itemloading = false; // prevent double click

// function to update the item images and values to the current item index
function updateItemValues() {
  itemBox0.innerHTML = Object.keys(itemImgs)[(currentItemIndex + 4) % 6]; // previous previous item
  itemBox1.innerHTML = Object.keys(itemImgs)[(currentItemIndex + 5) % 6]; // previous item
  itemBox2.innerHTML = Object.keys(itemImgs)[(currentItemIndex + 0) % 6]; // current item
  itemBox3.innerHTML = Object.keys(itemImgs)[(currentItemIndex + 1) % 6]; // next item
  itemBox4.innerHTML = Object.keys(itemImgs)[(currentItemIndex + 2) % 6]; // next next item

  // remove all the move classes
  const boxes = document.querySelectorAll(".item.selection-box");
  boxes.forEach((box, i) => {
    box.className = `item selection-box i${i}`;
  });

  // update the preview image
  preview = document.querySelectorAll("#preview .emoji-avatar span")[3];
  preview.className = Object.values(itemImgs)[currentItemIndex];
  preview.innerHTML = Object.keys(itemImgs)[currentItemIndex];

  // update the select option in the form
  const selectOptions = document.querySelector("#item-options");
  selectOptions.value = currentItemIndex + 1;
}

// function to scroll the item selector to the left
function scrollLeftSelectorItem() {
  // if the item selector is already scrolling, return
  if (itemloading) return;
  itemloading = true;

  // add the move animation classes
  itemBox0.classList.add("move-left");
  itemBox1.classList.add("move-left");
  itemBox2.classList.add("move-left-and-shrink-down");
  itemBox3.classList.add("move-left-and-shrink-up");
  itemBox4.classList.add("move-left");

  // after the animation is done, update the item values and set the loading to false
  setTimeout(() => {
    currentItemIndex = (currentItemIndex + 1) % 6;
    updateItemValues();
    itemloading = false;
  }, 300);
}

// function to scroll the item selector to the right
function scrollRightSelectorItem() {
  // if the item selector is already scrolling, return
  if (itemloading) return;
  itemloading = true;

  // add the move animation classes
  itemBox0.classList.add("move-right");
  itemBox1.classList.add("move-right-and-shrink-up");
  itemBox2.classList.add("move-right-and-shrink-down");
  itemBox3.classList.add("move-right");
  itemBox4.classList.add("move-right");

  // after the animation is done, update the item values and set the loading to false
  setTimeout(() => {
    currentItemIndex = (currentItemIndex - 1 + 6) % 6;
    updateItemValues();
    itemloading = false;
  }, 300);
}

updateItemValues();

// ==========================
// touch feedback
// ==========================

// function to handle the touch feedback
function handleTouchEvent(element, onSwipeLeft, onSwipeRight) {
  let touchStartX = null;
  let touchStartY = null;

  function handleStart(event) {
    const firstTouch = event.touches[0];
    touchStartX = firstTouch.clientX;
    touchStartY = firstTouch.clientY;
  }

  function handleMove(event) {
    if (!touchStartX || !touchStartY) {
      return;
    }
    const firstTouch = event.touches[0];
    const touchEndX = firstTouch.clientX;
    const touchEndY = firstTouch.clientY;

    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        onSwipeLeft();
      } else {
        onSwipeRight();
      }
    }
    touchStartX = null;
    touchStartY = null;
  }

  element.addEventListener("touchstart", handleStart, { passive: true });
  element.addEventListener("touchmove", handleMove, { passive: true });
}

// Add the touch feedback to the selectors
const eyeSelector = document.querySelector(".selector #eye");
handleTouchEvent(eyeSelector, scrollLeftSelectorEye, scrollRightSelectorEye);

const mouthSelector = document.querySelector(".selector #mouth");
handleTouchEvent(
  mouthSelector,
  scrollLeftSelectorMouth,
  scrollRightSelectorMouth
);

const itemSelector = document.querySelector(".selector #item");
handleTouchEvent(itemSelector, scrollLeftSelectorItem, scrollRightSelectorItem);
