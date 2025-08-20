function syncBtn() {
    mywindow = window.open("assignment3_index_DS.html", "mywindow", "location=1, status=1, scrollbars=1, width=600, height=700");
    mywindow.moveTo(0, 0);
}

function exploBtn() {
    mywindow = window.open("assignment3_syncBtn_DS.html", "mywindow", "location=1, status=1, scrollbars=1, width=600, height=700");
    mywindow.moveTo(0, 0);
}

function login() {
    mywindow = window.open("assignment3_login_DS.html", "mywindow", "location=1, status=1, scrollbars=1, width=600, height=700");
    mywindow.moveTo(0, 0);
}

function evaluateBtn() {
    mywindow = window.open("assignment3_evaluateBtn_DS.html", "mywindow", "location=1, status=1, scrollbars=1, width=600, height=700");
    mywindow.moveTo(0, 0);
}

function reportAd() {
    mywindow = window.open("assignment3_reportAd_DS.html", "mywindow", "location=1, status=1, scrollbars=1, width=600, height=700");
    mywindow.moveTo(0, 0);
}

function classifyDream() {
    mywindow = window.open("assignment3_classifyDream_DS.html", "mywindow", "location=1, status=1, scrollbars=1, width=600, height=700");
    mywindow.moveTo(0, 0);
}

function playAudio() {

    var container = document.getElementById("AudioContainer");
    if (!container) return;  

    var audio = container.querySelector("audio");

    if (!audio) {
    var y = document.createElement("audio");
    y.src = "sound/audio2.mp3";
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

document.addEventListener('DOMContentLoaded', function () {
  const grid = document.querySelector('.color-grid');
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      const cell = document.createElement('div');
      cell.className = 'color-cell';
      cell.style.background = getColorByPosition(row, col);


      cell.addEventListener('mouseover', function () {
        cell.style.transition = 'transform 0.5s';
        cell.style.transform = 'rotate(360deg)';
      });
      cell.addEventListener('mouseout', function () {
        cell.style.transform = 'rotate(0deg)';
      });

      grid.appendChild(cell);
    }
  }
});

function getColorByPosition(row, col) {
    const hue = 210;  
    const lightness = 80 - row * 10;  
    const saturation = 70;            
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function acceptPurge() {
  ["title", "p1", "p2", "p3", "b1", "b2"].forEach(id => {
    document.getElementById(id).style.display = "none";
  });

  const floatingDiv = document.getElementById("Floating");
  floatingDiv.style.display = "block";
  floatingDiv.style.color = "black";
  floatingDiv.style.position = "relative"; 
  floatingDiv.style.overflow = "hidden";    

  floatingDiv.innerHTML = '<span class="scroll-text">Thank you for your submission.</span>';


  const scrollSpan = floatingDiv.querySelector(".scroll-text");
  scrollSpan.style.animation = "none";  
  void scrollSpan.offsetWidth;         
  scrollSpan.style.animation = "scrollLeft 5s linear infinite";
}

function rejectPurge() {
  ["title", "p1", "p2", "p3", "b1", "b2"].forEach(id => {
    document.getElementById(id).style.display = "none";
  });

  const errorDiv = document.getElementById("errorFloating");
  errorDiv.style.display = "block";
  errorDiv.style.color = "red";
  errorDiv.style.position = "relative"; 
  errorDiv.style.overflow = "hidden";    

  errorDiv.innerHTML = '<span class="scroll-text">ERROR: Purge rejected! System warning!</span>';


  const scrollSpan = errorDiv.querySelector(".scroll-text");
  scrollSpan.style.animation = "none";  
  void scrollSpan.offsetWidth;         
  scrollSpan.style.animation = "scrollLeft 5s linear infinite";
}

window.onload = function() {
  const maxLevel = 5;

  const row = Math.floor(Math.random() * maxLevel) + 1;      
  const col = Math.floor(Math.random() * row) + 1;           

  const emotions = ["Stable", "Calm", "Excited", "Anxious", "Overwhelmed"];
  const emotionStatus = emotions[Math.floor(Math.random() * emotions.length)];

  const rows = document.querySelectorAll("#classifyDream .row");
  const targetCol = rows[row - 1].querySelectorAll(".col")[col - 1];
  targetCol.classList.add("selected");

  const statusDiv = document.getElementById("status");
  statusDiv.textContent = `Your level is Row ${row}, Column ${col} | Status: ${emotionStatus}`;
};
