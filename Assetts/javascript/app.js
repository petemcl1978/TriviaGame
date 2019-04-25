var animationSetup = false;

function animationPipeline() {

  
    /* Variables */
    var self = this, 
    w = window.innerWidth,
    h = window.innerHeight,
    stage = document.getElementById('stage'),
    startButton = document.getElementById('startButton'),
    title = document.getElementById('title'),
    questionTitle = document.getElementByClassName("questions"),
    score = document.getElementByClassName("score"),
    scoreSpan = score[0].getElementByTagName('span'),
    timer= document.getElementsByClassname("timer"),
    timerSpan =timer[0].getElementsbyTagName('span'),
    gameChoices = document.getElementById('gameChoices'),
    gameHeader = document.getElementById('gameHeader'),
    buttonOne = document.getElementById('buttonOne'),
    buttonTwo = document.getElementById("buttonTwo"),
    buttonThree = document.getElememtById('buttonThree'),
    buttonFour = document.getElementById('buttonFour'),
    buttonArray = [buttonOne, buttonTwo, buttonThree, buttonFour],
    modal_window = document.getElementById('modal_window'),
    startAnimation =new TimelineMax({repeat:0}),
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
        "This pair of Boston Comedy legends appear in 'There's Something About Mary' as a Police officer and FireFighter"
        'A Boston stand up who played a gang member with a very distinct voice turned Police officer in the Police Acadamy movies?',
        "Former Newton resident turned stand up comic wrote and directed 'Pootie Tang' and had his own show on FX.",
        "Which Late Night host and Boston Comic legend are cousins?",
    ]
}