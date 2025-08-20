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
  
var i = 0; 
var time = 2000; 
var timeoutId = null;

var images = [
  "image/2037.png",
  "image/2041.png",
  "image/2043.png",
  "image/2044.png",
  "image/2046.png",
  "image/2048.png"
];

var words = [
  "Father died in a fire",
  "Labeled as antisocial because of dream patterns",
  "Failed attempt to seal a memory",
  "Heard my mother’s voice used in a public screen advertisement",
  "Lost insurance and job opportunities",
  "Joined the Free Dreamers"
];

function changeImg() {
  var imgEl = document.getElementById("slide1");
  var textEl = document.getElementById("text1");

  if (i >= images.length) {
    i = images.length - 1;  
    imgEl.src = images[i];
    imgEl.alt = words[i];
    textEl.innerHTML = words[i];

    clearTimeout(timeoutId); 
    document.getElementById("playButton").style.opacity = "1"; 
    var audio = document.getElementById("AudioSlide1");
    audio.pause();
    audio.currentTime = 0;

    return;
  }

  imgEl.src = images[i];
  imgEl.alt = words[i];
  textEl.innerHTML = words[i];

  i++;

  timeoutId = setTimeout(changeImg, time);
}

function startSlideShow() {
  document.getElementById("playButton").style.opacity = "0";
  var audio = document.getElementById("AudioSlide1");
  audio.play();

  i = 0; 
  changeImg(); 
}

document.getElementById("slide1").addEventListener("click", function() {
  startSlideShow();
});

document.addEventListener("DOMContentLoaded", function() {
  var text = document.getElementById("text2037");
  if (!text) {
    console.error("text2037 not found");
    return;
  }
  text.addEventListener("click", function() {
    this.classList.toggle("visible");
    console.log("click toggled:", this.classList.contains("visible"));
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const glitchText = document.querySelector(".glitch-text");

  glitchText.setAttribute("data-text", glitchText.textContent);

  glitchText.addEventListener("click", function () {
    glitchText.classList.add("glitch");

    setTimeout(() => {
      glitchText.classList.remove("glitch");
    }, 1000);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const textEl = document.getElementById('text2046');
  const canvas = document.createElement('canvas');
  canvas.id = 'eraserCanvas';
  textEl.style.position = 'relative';
  textEl.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    const rect = textEl.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.position = 'absolute';
    canvas.style.pointerEvents = 'auto';
    canvas.style.zIndex = 10;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function fillCanvas() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  fillCanvas();

  let isDrawing = false;
  const eraserRadius = 30;

  function erase(x, y) {
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, eraserRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  let restoreTimeout;

  function updateMask() {
    const dataUrl = canvas.toDataURL();
    textEl.style.webkitMaskImage = `url(${dataUrl})`;
    textEl.style.maskImage = `url(${dataUrl})`;
    textEl.style.webkitMaskRepeat = 'no-repeat';
    textEl.style.maskRepeat = 'no-repeat';
    textEl.style.webkitMaskSize = '100% 100%';
    textEl.style.maskSize = '100% 100%';
  }

  function restoreMask() {
    fillCanvas();
    updateMask();
  }

  function resetRestoreTimer() {
    if (restoreTimeout) clearTimeout(restoreTimeout);
    restoreTimeout = setTimeout(() => {
      restoreMask();
    }, 5000);
  }

  canvas.addEventListener('mousedown', e => {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    erase(x, y);
    updateMask();
    resetRestoreTimer();
  });

  canvas.addEventListener('mousemove', e => {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    erase(x, y);
    updateMask();
    resetRestoreTimer();
  });

  window.addEventListener('mouseup', () => {
    isDrawing = false;
  });

  canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
  });

  updateMask();
});

document.getElementById('text2041').addEventListener('click', () => {
  const audio3 = document.getElementById('audio3');
  audio3.currentTime = 0;
  audio3.play();
});

document.addEventListener('DOMContentLoaded', () => { 
  const text = document.getElementById('text2043');

  text.addEventListener('click', () => {
    text.classList.remove('animate'); 
    void text.offsetWidth; 
    text.classList.add('animate'); 
  });
});

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.getElementById('text2048');
  const fullText = textElement.textContent.trim();
  let index = 0;
  let typing = false;

  textElement.textContent = '';

  textElement.addEventListener('click', () => {
    if (typing) return; 
    typing = true;
    index = 0;
    textElement.textContent = '';

    function typeChar() {
      if (index < fullText.length) {
        textElement.textContent += fullText.charAt(index);
        index++;
        setTimeout(typeChar, 30); 
      }
    }

    typeChar();
  });
});
