function playAudio() {

    var container = document.getElementById("AudioContainer");
    if (!container) return;  

    var audio = container.querySelector("audio");

    if (!audio) {
    var y = document.createElement("audio");
    y.src = "sound/audio1.m4a";
    y.controls = true;
    y.autoplay = true;
    y.loop = true;
    y.style.width = "100%"; 
    y.style.display = "block";
    y.style.margin = "40px auto";

    document.getElementById("AudioContainer").appendChild(y);

    return;
    }

    if (audio.paused) {
        audio.play();
        audio.volume = 1;
    } else {
        audio.pause();
    }
}

function createVideo() {

    var container = document.getElementById("VideoContainer");
    if (!container) return;

    if (container.querySelector("video")) {
        return;
    }

    var x = document.createElement("video");
    x.src = "video/video1.mp4";
    x.controls = true;
    x.autoplay = true;
    x.loop = true;
    x.style.width = "100%"; 
    x.style.display = "block";
    x.style.margin = "40px auto";

    document.getElementById("VideoContainer").appendChild(x);
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('memoryGrid');
  const submitBtn = document.querySelector('button[onclick="MemorySeal()"]');

  for (let i = 1; i <= 15; i++) {
    const cell = document.createElement('div');
    cell.classList.add('memory-cell');
    cell.title = `Memory Fragment #${i}`;
    
    cell.addEventListener('click', () => {
      cell.classList.toggle('selected');
    });

    grid.appendChild(cell);
  }

  window.MemorySeal = function () {
    const selectedCells = document.querySelectorAll('.memory-cell.selected');
    if (selectedCells.length === 0) {
      alert('Please select at least one memory fragment first.');
      return;
    }
    if (confirm(`Are you sure you want to seal ${selectedCells.length} memory fragment(s)?`)) {
      selectedCells.forEach(cell => cell.remove());
      alert('Memory fragments have been successfully sealed.');
    }
  }
});

function performDream() {
    const statusEl = document.getElementById('status');
    statusEl.textContent = "Uploading...";

    setTimeout(() => {
        statusEl.textContent = "Upload successful!";
    }, 3000);
}
  