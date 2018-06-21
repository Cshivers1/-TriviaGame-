// My list of Varibles 
let win = 0;
let loss0;
let notClicked = 0;
let resultArray = [];
let correctArray = [];
let answer1=null;
let answer2=null;
let answer3=null;
console.log(answer1);

$(document).ready(function() {

    // .onclick function for our answers
    $('.answer1').on('click', function () {
        answer1;
        answer1 = $(this).text().trim;
        console.log(answer1);
    })

    $('.answer2').on('click', function () {
        answer2;
        answer2 = $(this).text().trim;
        console.log(answer2);
    })

    $('.answer3').on('click', function () {
        answer3;
        answer3 = $(this).text().trim;
        console.log(answer3);
    })
    $('.results').css('display','none');
    // my submit button function

    $('.Submit').on('click', function () {
        resultArray.push(answer1, answer2, answer3);
        console.log(resultArray);
        console.log(correctArray);
        goodforYou();
    })

    function goodforYou() {


        for (let i = 0; i = correctArray.length; i++) {
            if (i === 0) {
                notCLicked++;
            } else if (resultArray[i] === correctArray[i]) {
                win++;
                console.log('wins' + win)
            } else {
                loss--;
                console.log('loss' - loss)
            }
            $('.results').html('Affirmative answers' + win + 'correct answers');
            $('.wins').html('Wins: ' + win);
            $('.loss').html('Losses: ' + loss);
            $('notClicked').html('Not Clicked: ' + notCLicked);
            SVGPathSegMovetoAbs();
        }
    }
    // disap. & appe. function
    function ghost() {
        let ghostQuiz = $('.quiz');
        ghostQuiz.css('display', 'none');
        let ghostResults = $('.results');
        ghostResults.css('display', 'block');
        clearInterval(timer);

    }

    let time = 16;
    let timing = function () {
    time--;
    // Updating count down display 
    $('#timer').html('Hurry up: ' + time);
    console.log(time);

    if(time ===0) {
        resultArray.push(answer1, answer2, answer3);
        console.log(resultArray);
        console.log(correctArray);

        goodforYou();
        clearInterval(timer);
        console.log(goodforYou);

    }
    }
    let timer = setInterval(timing, 1000)

    console.log(timer);
    


    

});