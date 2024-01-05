var level = {
    1: {
        notes: {
            note1: {
                text: "This is a test.",
                video: "video1"
            },
            note2: {
                text: "This is a test.",
                video: "video2"
            },
            note3: {
                text: "This is a test.",
                video: "video3"
            },
        },
        exercise: {
            question1: "Q1 (Level 1)",
            question2: "Q2 (Level 1)",
            question3: "Q3 (Level 1)"
        }
    },
    2: {
        notes: {
            note1: {
                text: "N1 (Level 2)",
                video: "video1"
            },
            note2: {
                text: "N2 (Level 2)",
                video: "video1"
            },
            note3: {
                text: "N3 (Level 2)",
                video: "video1"
            }
        },
        exercise: {
            question1: "Q1 (Level 2)",
            question2: "Q2 (Level 2)",
            question3: "Q3 (Level 2)"
        }
    },
    3: {
        notes: {
            note1: {
                text: "N1 (Level 3)",
                video: "video1"
            },
            note2: {
                text: "N2 (Level 3)",
                video: "video1"
            },
            note3: {
                text: "N3 (Level 3)",
                video: "video1"
            }
        },
        exercise: {
            question1: "Q1 (Level 3)",
            question2: "Q2 (Level 3)",
            question3: "Q3 (Level 3)"
        }
    },
    4: {
        notes: {
            note1: {
                text: "N1 (Level 4)",
                video: "video1"
            },
            note2: {
                text: "N2 (Level 4)",
                video: "video1"
            },
            note3: {
                text: "N3 (Level 4)",
                video: "video1"
            }
        },
        exercise: {
            question1: "Q1 (Level 4)",
            question2: "Q2 (Level 4)",
            question3: "Q3 (Level 4)"
        }
    },
    5: {
        notes: {
            note1: {
                text: "N1 (Level 5)",
                video: "video1"
            },
            note2: {
                text: "N2 (Level 5)",
                video: "video1"
            },
            note3: {
                text: "N3 (Level 5)",
                video: "video1"
            }
        },
        exercise: {
            question1: "Q1 (Level 5)",
            question2: "Q2 (Level 5)",
            question3: "Q3 (Level 5)"
        }
    }

}

var currentLevel = 1;
var currentNoteIndex = 1;
var currentQuestionIndex = 1;

function displayNotes() {
    document.getElementById("noteSection").style.display = "block";
    document.getElementById("questionSection").style.display = "none";
    var noteSection = document.getElementById("noteSection");
    noteSection.innerHTML = `<h2>Level ${currentLevel}</h2>`;
    var currentNote = level[currentLevel].notes[`note${currentNoteIndex}`];
    noteSection.innerHTML += `<p>${currentNote.text}</p>`;
    noteSection.innerHTML += `<p>Video: ${currentNote.video}</p>`;
}

function displayQuestions() {
    document.getElementById("noteSection").style.display = "none";
    document.getElementById("questionSection").style.display = "block";
    var questionSection = document.getElementById("questionSection");
    questionSection.innerHTML = `<h2>Level ${currentLevel}</h2>`;
    questionSection.innerHTML += `<p>${level[currentLevel].exercise[`question${currentQuestionIndex}`]}</p>`;
}

function next() {
    if (currentNoteIndex <= 3) {
        displayNotes();
        currentNoteIndex++;
    } else if (currentQuestionIndex <= 3) {
        displayQuestions();
        currentQuestionIndex++;
    } else if (currentLevel < Object.keys(level).length) {
        // Move to the next level
        currentNoteIndex = 1;
        currentQuestionIndex = 1;
        currentLevel++;
        displayNotes();
    } else {
        alert("Congratulations! You've completed all levels.");
    }
}

// Initial display
displayNotes();

let currentStage = 1
let globalStageLimit = 4
function iterate() {
    currentStage++;
    if (currentStage < globalStageLimit + 1) {
        document.getElementById(`stageSelector-${currentStage}`).disabled = false;
    } else {
        alert('no more stages!')
    }
}

window.addEventListener("load", function () {
    // Reset the form elements on page load
    resetBtn();
});
function resetBtn() {

}
