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

function init() {

    document.getElementById('NumberOfQuestions').innerHTML = questions.length;
    
    showQuestion();

}

function showQuestion() {
    let question = questions[currentQuestion];


    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];


}

function answer(selection){
    let question = questions[currentQuestion];
    console.log(`Selected answer is`, selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log(`selectedQuestionNumber is`, selectedQuestionNumber);
    console.log(`Current question is `, question['right_answer']);


    let idOfRightAnswer = 'answer_3';

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        document.getElementById(selection).innerHTML = 'RICHTIG';
        document.getElementById('quizImg').innerHTML = /*html*/`<img src="img/thumb.jpg">`;
        
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;

}
