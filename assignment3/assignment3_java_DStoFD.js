const sentences = [
    "We are Freedom Dreamer.",
    "A place where your true self can be free.",
    "Where your dreams are respected.",
    "And your emotions understood.",
    "Do you want to join Freedom Dreamer?"
];

let index = 0;
const message = document.getElementById("message");
const buttonContainer = document.getElementById("button_container");
const joinBtn = document.getElementById("joinBtn");
const noJoinBtn = document.getElementById("noJoinBtn");

function showNextSentence() {
    if (index < sentences.length) {
        message.style.opacity = 0;
        setTimeout(() => {
            message.textContent = sentences[index];
            message.style.opacity = 1;
            index++;

            if (index === sentences.length) {
                buttonContainer.style.display = "flex";
                document.body.style.cursor = "default";
                document.body.removeEventListener("click", onClickBody);
            }
        }, 300);
    }
}

function onClickBody() {
    showNextSentence();
}

joinBtn.addEventListener("click", () => {
    window.location.href = "assignment3_signUp_FD.html";
});

noJoinBtn.addEventListener("click", () => {
    window.location.href = "assignment3_index_DS.html";
});

document.body.addEventListener("click", onClickBody);

showNextSentence();
