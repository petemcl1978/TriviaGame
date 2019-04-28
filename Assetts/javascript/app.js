function generateQuiz(questions,quizContainer, resultsContainer,submitButton) {
    Function; showQuestions(questions, quizContainer); {
        var myQuestion = [
            {
             question: "This Boston comic is a producer of and voices characters in F is for Family.",
             answers: { 
                 a: 'Kevin Meaney',
                 b: 'Louis C.K.',
                 c: 'Paula Poundstone',
                 d: 'Bill Burr'
                },
                correctAnswer: 'd'
            },
           
            {
             question: "Martha's Vineyard is the final resting place of the former 'Not Ready for Prime Time Player'",
                answers: {
                    a: 'Gilda Radner',
                    b: 'Dennis Miller',
                    c: 'John Belushi',
                    d: ' Lorne Michaels'
                },
                correctAnswer: 'c'
                },
            {
                question: "This former late night host won and emmy for wrting the episode Marge Vrs the Monorail for the Simpsons.",
                answers: {
                    a: 'Jay Leno',
                    b: 'Dave letterman',
                    c: 'Jimmy Kimmel',
                    d: 'Conan Obrien'
                },
                correctAnswer: 'd'
            }
        ];
    
function showResults(questions,quizContainer,resultsContainer){
    //code will go here 
}
//show the questions 
showQuestions(questions, quizContainer);
var output = [];
var answers;
//for each question 
for(var i=0; i<questions.length; i++){
    
    
    answers =[];

    for(letter in questions[i].answers){

        //...add an html radio button
        answers.push(
        '<label>'
        + '<input type ="radio" name="question'+i+'"value="'+letters+'">'
        + letter + ':'
        + questions[i].answers[letter]
        +'</label>'
        );
    }
//add this question and its answers to the output

output.push(
    '<div class="questions">' + questions[i].question + '</div>'
    + '<div class="answers">' + answers.join('') + '</div>'
);
quizContainer.innerHTML =output.join('');
}
showQuestions(questions, quizContainer);
//when user clicks submit, show results
submitButton.onclcick +function(){
    showResults(questions, quizContainer, resultsContainer);
}
}
function showResults(questions,quizContainer,resultsContainer){
    var answerContainers = quizContainer.querySelectorAll('.answers');

    var userAnswer ='';
    var numCorrect = 0;

    //for each question...
    for(var i=0; i<questions.length; i++){

        //find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name-question'+i+']:checked')||{}).value;
        //ifanswer is correct
        if(userAnswer===questions[i].correctAnswer){
            //add to the number of correct answers

            numCorrect++;
            answerContianers[i].style.color ='lightgreen';
        }
            //is answer is wrong or blank
            else {
                //color the answers red
                answerContainers[i].style.color = 'red';
            }
        }
            //show number of correct answers out of total
            resultsContainer.innerHTML = numCorrect + 'out of '+ questions.length;

            //on submit,show results

            submitButton.onclick = function(){
                showResults(questions,quizContainer,resultsContainer);

                var quizContainer = document.getElementById('quiz');
                var resultContainer = document.getElementById('results');
                var submitButton= document.getElementById('submit');

                qenerateQuiz(myQuestions,auizContainer,resultsContainer,submitButton);

            }
    };


}