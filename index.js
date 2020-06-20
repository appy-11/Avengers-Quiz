function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("In the 2012 movie, The Avengers features Captain America. What is his real name?", ["Buck Rogers", "Ted Rogers","Steve Rogers", "Tony Stark"], "Steve Rogers"),
    new Question("Who is the leader of S.H.I.E.L.D?", ["Nick Fury", "Alexander Pierce", "Diana Prince", "Howard Stark"], "Nick Fury"),
    new Question("What's the name of the mysterious blue glowing cube that Loki uses as a weapon?", ["The Orb", "Tesseract","The Force", "Septre"], "Tesseract"),
    new Question("Which US city do the Avengers battle the Chitauri?", ["Los Angeles", "New York City", "Miami", "Chicago"], "New York City"),
    new Question("What weapon does Thor carry?", ["A bow and arroy", "A shield", "A sword", "A hammer"], "A hammer"),
    new Question("What is Clint Barton's superhero name?", ["War Machine", "Black Panther", "Hawkeye", "White Wolf"], "Hawkeye"),
    new Question("What is Spider Man's original name?", ["Peter Benjamin Parker", "Peter Tom Parker", "Peter David Parker", "Peter Daniel Parker"], "Peter Benjamin Parker"),
    new Question("What does S.H.I.E.L.D. stand for?", ["Supreme Headquarterd,International Espionage,Law-Enforcement Divison", "Strategic Homeland Intervention,Enforcement and Logistics Division", "Strategic Hazard Intervention Espionage Logistics Dirrectorate", "Superheroes Help In Exciting Logical Display"], "Strategic Homeland Intervention,Enforcement and Logistics Division"),
    new Question("Which Marvel character has never appeared in The Avengers films?", ["The Wasp", "Iron Man", "Hawkeye", "Thor"], "The Wasp"),
    new Question("What's Agent Coulson's first name?", ["Paul", "Phil", "Colin", "Alan"], "Phil")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();