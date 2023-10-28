let index = 0;
let attempt = 0;
let score = 0;
let wrong = 0;



let questions = quiz.sort(function(){
    return 0.5 - Math.random();
});

let totalQuestion = questions.length;


$(function(){
    //timer code start here

    let totalTime = 200; // 200 secods for timer
    let min = 0;
    let sec = 0;
    let counter =.0;
    
    let timer = setInterval(function(){
        counter++;
        min = Math.floor((totalTime - counter)/60); //calculating min
        sec = totalTime - (min * 60) - counter;

        $(".timerBox span").text(min + ":" + sec);
        
        if (counter == totalTime){

            alert("Time's up!! press of to Show result.");
            result();
            clearInterval(timer);
        }
    },1000); //timer set foe 1 second interval


    //timer code ends here

    //print question
    printQuestion(index);


    
});


//function to print question start


function printQuestion(i){
    

    $(".questionBox").text(questions[i].question);
    $(".optionBox span").eq(0).text(questions[i].option[0]);
    $(".optionBox span").eq(1).text(questions[i].option[1]);
    $(".optionBox span").eq(2).text(questions[i].option[2]);
    $(".optionBox span").eq(3).text(questions[i].option[3]);
}

//function to print question end


//function to check answer start

function checkAnswer(option){
    
    attempt++;
    let optionClicked = $(option).data("opt");
    //console.log(questions[index].answer);

    if(optionClicked == questions[index].answer){
        $(option).addClass("right");
        score++;
    } else{
        $(option).addClass("wrong");
        wrong++;
    }

    $(".scoreBox span").text(score); 

    $(".optionBox span").attr("onclick","");



}


//function to check answer end

//function for next question start

function showNext(){
    
    if(index >= questions.length - 1){
        showResult();
        return;
    }
    
    
    index++;

    $(".optionBox span").removeClass();
    $(".optionBox span").attr("onclick","checkAnswer(this)");

    printQuestion(index); 
}


//function for next question end

//function for rersult start

function showResult(j){


    if(
        j == 1 &&
        index < questions.length - 1 &&
        !confirm("Quiz has not finished yet. Press of to skip quix & get your final result.")
    ){
        return;
    }
    result();
    
}



//function for resukt end


//result function start

function result(){
    $("#questionScreen").hide();
    $("#resultScreen").show();
    $("#totalQuestion").text(totalQuestion);
    $("#attemptQuestion").text(attempt);
    $("#correctAnswers").text(score);
    $("#wrongAnswers").text(wrong);
}

//result function end

