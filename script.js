let questions = [
    {
        "question": "Wieviele Banküberfälle in Deutschland werden aufgeklärt?",
        "answer_1": "50%",
        "answer_2": "40%",
        "answer_3": "70%",
        "answer_4": "90%",
        "right_answer": 3
    },
    {
        "question": "Wie lange wartest du durchschnittlich an einem Supermarktkasse in Deutschland?",
        "answer_1": "2 Minuten",
        "answer_2": "5 Minuten",
        "answer_3": "7 Minuten",
        "answer_4": "10 Minuten",
        "right_answer": 3
    },
    {
        "question": "Wie groß ist die größte Brezel der Welt gewesen?",
        "answer_1": "100 kg",
        "answer_2": "200kg",
        "answer_3": "650 kg",
        "answer_4": "780 kg",
        "right_answer": 4
    },
    {
        "question": "Wer hat den Flummi erfunden?",
        "answer_1": "Die Römer",
        "answer_2": "Die Indianer",
        "answer_3": "Die Vikinger",
        "answer_4": "Die Azteken",
        "right_answer": 4
    },
    {
        "question": "Wie lang ist der Strich mit einem einzigen Bleistift?",
        "answer_1": "56 km",
        "answer_2": "82 km",
        "answer_3": "24 km",
        "answer_4": "12 km",
        "right_answer": 2
    },
    {
        "question": "Was ist das stärkste Tier der Welt?",
        "answer_1": "Ameise",
        "answer_2": "Blauwal",
        "answer_3": "Rhinozeroskäfer",
        "answer_4": "Gorilla",
        "right_answer": 3
    },
    {
        "question": "Wieviele Regenschirme werden in der Londoner U-Bahn jährlich vergessen?",
        "answer_1": "20 000",
        "answer_2": "44 000",
        "answer_3": "75 000",
        "answer_4": "92 000",
        "right_answer": 2
    },
];

let currentQuestion = 0;
let rightQuestions = 0;

let AUDIO_SUCCESS = new Audio('sounds/success.mp3');
let AUDIO_FAIL = new Audio('sounds/wrong.mp3');



function init() {

    showQuestion();

}

function showQuestion() {


    if (gameIsOver()) {                                 // Wenn die letzte Frage erreicht wurde soll der Endscreen eingeblendet werden
        showEndScreen();
    } else { // Show question
        updateProgressBar();
        updateToNextQuestion();
    }
}


function gameIsOver() {
    return currentQuestion >= questions.length
}


function answer(selection) {                                          // Funktion für Antwortselektion onclick funktion. Übergeben wird der jeweilige Answer button und die Variable selection
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);             // von dem String answer_1 wird die letzte Stelle genommen also 1

    let idOfRightAnswer = 'answer_3';

    if (selectedQuestionNumber == question['right_answer']) {             // richtige Frage beantwortet   letzte Stelle des Strings wird mit dem Wert der richtigen Antwort abgeglichen
        document.getElementById(selection).parentNode.classList.add('bg-success'); // Falls Antwort richtig Button grün anzeigen
        document.getElementById(selection).innerHTML = 'RICHTIG'; // Es wirt das Wort "RICHTIG" angeszeigt in der richtigen Antwort
        AUDIO_SUCCESS.play();                                       // spielt Sound ab wenn richtige Antwort gegeben wurde --> Sound wurde in globale Variable oben gepackt

        rightQuestions++;                                       // Counter für richtig beantwortete Fragen

    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();                                  // spielt Sound ab wenn falsche Antwort gegeben wurde --> Sound wurde in globale Variable oben gepackt
    }
    document.getElementById('next-button').disabled = false;

}



function nextQuestion(selection) {
    currentQuestion++;                                      // zum Beispiel von 0 auf 1
    document.getElementById('next-button').disabled = true;   // der Button wird deaktiiert und nur aktiviert wenn eine Antwort angeklicjt wurde
    resetAnswerButtons()
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');   // Alle verfärbungen der Buttons werden entfernt
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function restartGame() {

    document.getElementById('quizImg').src = 'img/maze.png'; // Ursprüngliches Bild wieder anziegen

    document.getElementById('cardBody').style = '';   // cardbody wieder anzeigen
    document.getElementById('endscreen').style = 'display: none;';  // Endscreen ausblenden

    currentQuestion = 0; // aktuelle Frage wieder auf Anfang setzen     
    rightQuestions = 0; // Counter für richtige Frage wieder auf 0 setzen
    init();  // Wieder von vorne starten


}

function showEndScreen() {

    document.getElementById('endscreen').style = '';                                // Endscreen erst einmal leeren
    document.getElementById('cardBody').style = 'display: none;';                   // Fragen und Antworte beim Endscreen ausblenden

    document.getElementById('AmountOfQuestions').innerHTML = questions.length;            // Anzahl der gesamten Fragen auf dem Endscreen anzeigen
    document.getElementById('number-of-correct-answers').innerHTML = rightQuestions;         // Anzahl der richtig beantworteren Fragen anzeigen

    document.getElementById('quizImg').src = 'img/thumb.jpg';                       // Bild tauschen für den Endscreen
}

function updateToNextQuestion() {





    let question = questions[currentQuestion]; // Aktuelle Frage aus dem Array an der Stelle 0

    document.getElementById('NumberOfQuestions').innerHTML = questions.length;  // Anzahl der gesamten Fragen auf dem Endscreen anzeigen
    document.getElementById('currentQuestion').innerHTML = currentQuestion + 1; // Nummer der aktuellen Frage anzeigen mit der global definierten Variable current Question

    document.getElementById('questionText').innerHTML = question['question'];  // Frage wird angeziegt bzw. aus dem Array gezogen
    document.getElementById('answer_1').innerHTML = question['answer_1'];      // Antworten werden angezeigt bzw. aus dem Array gezogen
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];


}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;  // progressbar: Prozent ausrechnen Frage duch alle Fragen gleich fortschritt
    percent = Math.round(percent * 100); // Zahlen runden und auf prozent Format bringen

    document.getElementById('progress-bar').innerHTML = `${percent}%`; // 
    document.getElementById('progress-bar').style = `width:${percent}%`

}

