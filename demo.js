// script.js

// document.addEventListener("DOMContentLoaded", function () 
  // Get elements from the page
  const heartCountEl = document.getElementById("heart-count");
  const coinCountEl = document.getElementById("coin-count");
  const copyCountEl = document.getElementById("copy-count");
  const historyList = document.getElementById("history-list");
  const clearHistoryBtn = document.getElementById("clear-history");

  // Set initial values
  let heartCount = 0;
  let coinCount = 100;
  let copyCount = 0;

  // ----------------------------------------
  // ❤️ Heart icon click
  // ----------------------------------------
  const heartButtons = document.querySelectorAll(".img-icon .fa-heart");
  heartButtons.forEach(function (heartBtn) {
    heartBtn.addEventListener("click", function () {
      heartCount = heartCount + 1; // increase by 1
      heartCountEl.textContent = heartCount;
    });
  });

  // ----------------------------------------
  // 📋 Copy button click
  // ----------------------------------------
  const copyButtons = document.querySelectorAll(".copy-btn2");
  copyButtons.forEach(function (copyBtn) {
    copyBtn.addEventListener("click", function (event) {
      const card = event.target.closest(".cards-section");
      const number = card.querySelector(".call-nbr").textContent;

      // Copy to clipboard
      navigator.clipboard.writeText(number).then(function () {
        alert("Hotline number " + number + " copied!");
        copyCount = copyCount + 1;
        copyCountEl.textContent = copyCount;
      });
    });
  });

  // ----------------------------------------
  // 📞 Call button click
  // ----------------------------------------
  const callButtons = document.querySelectorAll(".call-btn");
  callButtons.forEach(function (callBtn) {
    callBtn.addEventListener("click", function (event) {
      const card = event.target.closest(".cards-section");
      const serviceName = card.querySelector(".card-title").textContent;
      const serviceNumber = card.querySelector(".call-nbr").textContent;

      // Check if enough coins
      if (coinCount < 20) {
        alert("Not enough coins! Each call needs 20 coins.");
        return;
      }

      // Deduct coins
      coinCount = coinCount - 20;
      coinCountEl.textContent = coinCount;

      // Show alert
      alert("Calling " + serviceName + " at " + serviceNumber);

      // Save time
      const now = new Date();
      const timeString = now.toLocaleString();

      // Add to history list
      const li = document.createElement("li");
      li.innerHTML = "<span><strong>" + serviceName + "</strong> - " + serviceNumber + "</span> <span>" + timeString + "</span>";
      historyList.appendChild(li);
    });
  });

  // ----------------------------------------
  // 🗑️ Clear history button
  // ----------------------------------------
  clearHistoryBtn.addEventListener("click", function () {
    const confirmClear = confirm("Do you want to clear call history?");
    if (confirmClear) {
      historyList.innerHTML = "";
    }
  });
