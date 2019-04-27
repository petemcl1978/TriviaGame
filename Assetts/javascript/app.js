var animationSetup = false;

function animationPipeline() {

  
    /* Variables */
    var self = this, 
    w = window.innerWidth,
    h = window.innerHeight,
    stage = document.getElementById('stage'),
    startButton = document.getElementById('startButton'),
    title = document.getElementById('title'),
    questionTitle = document.getElementsByClassName("questions"),
    score = document.getElementsByClassName("score"),
    scoreSpan = score[0].getElementsByTagName('span'),
    timer= document.getElementsByClassName("timer"),
    timerSpan =timer[0].getElementsByTagName('span'),
    gameChoices = document.getElementById('gameChoices'),
    gameHeader = document.getElementById('gameHeader'),
    buttonOne = document.getElementById('buttonOne'),
    buttonTwo = document.getElementById("buttonTwo"),
    buttonThree = document.getElementById('buttonThree'),
    buttonFour = document.getElementById('buttonFour'),
    buttonArray = [buttonOne, buttonTwo, buttonThree, buttonFour],
    modal_window = document.getElementById('modal_window')
    startAnimation = new TimeLineMax({repeat:0}),
    gameIndex = 0,
    actualScore = 0,
    timerIndex = 8,
    runningGameAgain = false,
    timerObject = undefinded,
    gameQuestions = [],

    questions=[
        "This Boston comic is the producer and voices characters on F is for Fmaily.",
        "Martha's Vineyard is the final resting place for which SNL Alum",
        "This Late Night host was a writer on SNL and also won a writing Emmy for The Simpsons episode Marge versus The MomoRail.",
        "Boston comedian known for his roles is Canadian Bacon, Mad About You, and most noteably as 'The Guy on the couch' in Half Baked.",
        "This pair of Boston Comedy legends appear in 'There's Something About Mary' as a Police officer and FireFighter",
        "A Boston stand up who played a gang member with a very distinct voice turned Police officer in the Police Acadamy movies?",
        "Former Newton resident turned stand up comic wrote and directed 'Pootie Tang' and had his own show on FX.",
        "Which Late Night host and Boston Comic legend are cousins?",
    ],

    answers = [
        ['Kevin Meany','Louis CK','Paula Poundstone','Bill Burr'],
        ['Bill Murray','Gilda Radner','John Belushi','Phil Hartmann'],
        ['Jay Leno','Dave Letterman','Conan Obrien','Jimmy Kimmel'],
        ['John Candy','Lenny Clark','Tony V','Stephen Wright'],
        ['Burns and Allen','Ace and Gary','Lenny Clark and Steve Sweeney','Jimmy Tingle and Lamont Price'],
        ['Steve Guttenburg','Bobcat Goldwaith','Dennis Leary','Thomas Wilson'],
        ['Steve Carrell','John Cena','Dane Cook','Louis C.K.'],
        ['Jay Leno and Joan Rivers','Conan OBrien and Dennis Leary','Lenny Clark and Jimmy Kimmel','John Stewart and Steve Sweeney'],
    ],
    correctAnswers = [3,2,2,3,2,1,3,1],
    gameAnswers = [];
    /** 
     * setup styles and events
     **/
    self._initialize = function (){

        self.windowWasResized();
        //Add click listener to start buttton
        startButton.addEventListener('click',self.anwerClicked,false);

    }
};

/**
 * called everytime the window resizes to calculate new dimensions
 **/
self.windowWasResized = function(){
    stage.style.height = (h - 20) +'px';
    stage.style.width = (w - 20) + 'px';
};
/**
 * setup the stage and fire of the stage animations
 **/
self.startGamePlay = function(){
    //get the game indexes
    self.generateGameIndexes();

    // add data to the interface
    self.setupUserInterfaceWithData();
    //set the score to zero
    scoreSpan[0].textContent = actualScore;
    timerSpan[0]. textContent = timerIndex;

    startAnimation.to([startButton, title], 1, {alpha:0});
    startAnimation.to([startButton, title], 0.1, {css:{display:'none'}});
    startAnimation.to([gameHeader,gameChoices], 0.1, {css:{display:'block'}, onComplete:self.fireOffGameLogic});

};

/** 
 * Callback function from the startAnimation timeline above
 * this function starts the timer
 **/
self.fireOffGameLogic = function() {
    self.runTimer();
}

/**
 * this function rebuilds the UI with a new question and answer
 **/
self.stepupUserInterfaceWithData = function() {
//add questions to buttons
var ques = questions[gameQuestions[gameIndex]];
var t = questionTitle[0].getElementsByTagName('span');
t[0].innerHTML= ques;
//add answers to buttons
var and = answers[gameQuestions[gameIndex]];
for (var i = 0; i<ans.length; i++){
    var a =ans[i];
    buttonArray[i].textContent = a;
}
};
/**
 * called to start a gameplay timer that runs every second
 **/
self.runtTimer = function() {
    timerObject = window.setInterval(self.updateClock, 1000);
    };
    /**
     * Callback function for the gameplay timer
     **/
self.updateClock = function(){
    timerIndex--;
    if(timerIndex == -1){
        timerIndex =8;
        gameIndex++;
    }

    if (gameIndex == gameQuestions.length) {
        clearTimeout(timerObject);
        //end the game
        self.runEndOfGame();
        return;
    } else if (timerIndex == 8){
        self.setupUserInterfaceWithData();
    }
    //Display updated time
    timerSpan[0].textContent = timerIndex;
};

/**
 * determines if an answer is correct or incorrect
 * displays a messasge to user 
 **/
self.anwerClicked = function(e) {

    clearTimeout(timerObject);
    //Get the answer index
    var answerIndex = Number(e.target.getAttribute('data-index'));
    //get the actual answer index
    var actualCorrectAnswerIndex = gameAnswers[gameIndex];

    //correct answer
    if (actualCorrectAnswerIndex == answerIndex){
        rightAnswer.play();
        actualyScore += 10;
        scoreSpan[0].textContent = actualScore;
        cancelButtons = true;
        self.dispatch_modal('YOUR ANSWER IS: <span class="correct">CORRECT!</span>',1000);
        // Incorrect Answer
     }  else {
        wronganswer.play();
        cancelButtons = true;
        self.dispatch_modal('YOUR ANSWER IS:<span class="incorrect")>Incorrect!</span>', 1000);
    }
};

    
/**
 * This function generates rando indexes to be used for our game logic
 * the indexes are used to assign questions and correct answers
 **/
self.generateGameIndexs = function() {
    var breakFlag = false;
    while (!breakFlag) {
        var randomNumber = Math.floor(Math.random() * 9);
        if (gameQuestions.indexOf(randomNumber) == -1) {
            gaeQuestions.push(randomNumber);
            gameAnswers.push(correctAnswers[randomNumber]);
        }
        if (gameQuestions.length == 5) {
            breakFlag = true;
        }
    }
};
/**
 *  Dispatches a modal winddow with a message to user
 */
self.dispatch_modal = function(message, time) {
    window_width = window.innerWidth|| document.documentElement.clientWidth
                    || document.body.clientwidth;

modal_window.getElementsByTagName('p')[0].innerHTML = message;
modal_window.style.left =((window_width / 2) - 150)+ 'px';

self.fade_in(time, modal_window, true);{
    var opacity = 0, interval = 50,
    gap = interval / time, self = this;

    Element.style.display = 'block';
    Element.style.opactity = opacity;

    function func() {
    opacity += gap;
    Elem.style.opacity = opacity;

    if(opacity >= 1){
        window.clearInterval(fading);
        //now detect if we need to call fade out 
        if(flag) {
            setTimeout(function() {
                self.fade_out(time.elem);
        },1500);
    }
}
}

    var fading = window.setInterval(func,interval);
};

self.fade_out - function(time, elem) {
    
    function func(){
        opacity -= gap;
        elem.style.opacity = opacity;

        if (opacity <= 0) {
            window.clearInterval(fading);
            elem.style.display = 'none';
            gameIndex++;
            //determine if nned to run another game loop
            if(gameIndex != gameQuestions.length) {
                timerIndex = 8;
                timerSpan[0],textContent = timerIndexself.setupUserInterfaceWithData();
                self.runTimer();
            }   else {
                self.runEndOfGame();
            }
        }
    }
        var fading = window.setInterval(func, interval);
};

/** 
 * runs when games the game ends
 * displays a modal window to play again
 **/

self.runEndOfGame = Function() 

    window_width = window.innerWidth|| document.documentElement.clientWidth
                    || document.body.clientWidth;
                    
                    var playAgainButton = '<button id="playAgain" class="left" onClick="self.resetGame()">PLAY AGAIN</button>';
                    var actualScoreHeader = '<h2>CONGRATS, YOUR FINAL SCORE IS:'+ actualscore +',/h2>';
                    mosal_window.getElementsByTagName('div')[0].innerHTML = insertedHTML;
                    modal_window.style.left =((window_width /2) - 150)+ 'px';

                    self.fade_in(1000,modal_window, false);
                    };
            // this function resets the game and starts it all over again

            self.resetGame = function() {
                modal_window.style.opacity = 0.0;
                modal_window.innerHTML = '<div class= "modal_message"><p></p></div>';

                window.clearTimeout(timerObject);
                timerObject = undefined;
                gameIndex = 0;
                gameAnswers = [];
                actualScore = 0;
                timerIndex = 8;
                gameQuestions = [];
                //get the game indexes

                self.generateGameIndexes();

                //add data to the interface 
                self.setupUserInterfaceWithData();
                //set the score to zero
                scoreSpan[0].textContent = actualScore;
                timerSpan[0].textContent = timerIndex;
                self.runTimer();
            };

            /**
             * loggin Function 
             **/
            self.l = function(message) {
                console.log(message);
            };
            
            //initalize the functionality of the controller
           // self._initilize();
         //end of animationPipeline

        //used to call the animation pipeline function
        var interval = setInterval(function() {if(document.readyState === 'complete'){
            clearInterval(interval);
            var pipe = animationPipeline();
            window.onresize = function(event) {
                var pipe = animationPipeline()
            };
        }
    },100);



 
 