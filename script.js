function playMusic() {
  var audio = document.getElementById("birthdaySong");
  audio.play();
  alert("Lagu ulang tahun sedang diputar!");
}

// Countdown Timer
function countdown() {
  const nextBirthday = new Date(new Date().getFullYear() + 1, 8, 29); // 29 Sept tahun berikutnya
  const now = new Date();
  const diff = nextBirthday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (diff < 0) {
      document.getElementById("timer").innerHTML = "Selamat ulang tahun lagi, Papa!";
  }
}

setInterval(countdown, 1000);
