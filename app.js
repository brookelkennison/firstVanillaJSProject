/*jshint esversion: 6 */
window.scrollTo( 0, 0);

$(() => { // start of onload

    const $reset = () => {
        $('.Q').empty('Question');
        $('#movietitle').empty();
        $('#img').empty();
        $('#question').empty();
        $('.answers').empty();
        $('.backnext').empty();
    };

    const $resetAll = () => {
        $('.Q').empty('Question');
        $('#movietitle').empty();
        $('#img').empty();
        $('#question').empty();
        $('.answers').empty();
        $('.backnext').empty();
        $('.categoryh1').show();
        $('#action').show();
        $('#comedy').show();
        $('#family').show();
        $('#romance').show();
        $('.game').css('background', 'none');
        window.scrollTo(0, 0);
    };

    var numQuestionsRight = 0;

    const correctCount = () => {
         $('.correctCount').text("QUESTIONS CORRECT: " + numQuestionsRight);
    };

    const $closeBtn = $('.close');

    const closeModal = () => {
        $('.modal').css('display', 'none');
    };

    $closeBtn.on('click', closeModal);

    const pickdifferentCategory = () => {
        $('.modal').css('display', 'none');
        $resetAll();
    };

    const $pickdifferentCategory = $('.pickdifferentCategory');

    $pickdifferentCategory.on('click', pickdifferentCategory);

    const modal10 = () => {
        $('#tenthAchievement').css('display', 'block');
    };

    const modal9 = () => {
        $('#ninthAchievement').css('display', 'block');
    };

    const modal8 = () => {
        $('#eigthAchievement').css('display', 'block');
    };

    const modal7 = () => {
        $('#seventhAchievement').css('display', 'block');
    };

    const modal6 = () => {
        $('#sixthAchievement').css('display', 'block');
    };

    const modal5 = () => {
        $('#fifthAchievement').css('display', 'block');
    };

    const modal4 = () => {
        $('#fourthAchievement').css('display', 'block');
    };

    const modal3 = () => {
        $('#thirdAchievement').css('display', 'block');
    };

    const modal2 = () => {
        $('#secondAchievement').css('display', 'block');
    };

    const modal1 = () => {
        $('#firstAchievement').css('display', 'block');
    };

    const noQuestionsLeft = () => {
            $('#noQuestionsLeft').css('display', 'block');
    };

    const checkCount = () => {
        if (numQuestionsRight == 30) {
            modal10();
        } else if (numQuestionsRight == 27) {
            modal9();
        } else if (numQuestionsRight == 24) {
            modal8();
        } else if (numQuestionsRight == 21) {
            modal7();
        } else if (numQuestionsRight == 18) {
            modal6();
        } else if (numQuestionsRight == 15) {
            modal5();
        } else if (numQuestionsRight == 12) {
            modal4();
        } else if (numQuestionsRight == 9) {
            modal3();
        } else if (numQuestionsRight == 6) {
            modal2();
        } else if (numQuestionsRight == 3) {
            modal1();
        }
    };

    const buttonsArray = [];

    const $makeButtons = () => {
        for (let i = 1; i <= 4; i++) {
            const $newButton = ($('<button>').addClass('button').attr('id', ('button' + i)));
            $('.answers').append($newButton);
            buttonsArray.push('button' + i);
        }
        buttonsArray[0] = "#button1";
        buttonsArray[1] = "#button2";
        buttonsArray[2] = "#button3";
        buttonsArray[3] = "#button4";
    };

    const $makeNextButton = () => {
        const $nextButton = ($('<button>NEXT</button>').attr('id', ('nextbutton')));
        const $backButton = ($('<button>PICK DIFFERENT CATEGORY</button>').addClass('pickdifferentCategory'));
        $('.backnext').append($backButton);
        $('.backnext').append($nextButton);
    };

    const romanceNext = () => {
        $reset();
        romanceMovies();
    };

    const actionNext = () => {
        $reset();
        actionmovies();
    };

    const comedyNext = () => {
        $reset();
        comedymovies();
    };

    const familyNext = () => {
        $reset();
        familymovies();
    };

    const theNoteBook = () => {
        $.ajax({
            url: 'http://www.omdbapi.com/?t=the+notebook&apikey=361efa89',
        }).then (
            (data) => {
                $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
                $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
            });
        $('.Q').text('Question');
        const value = Math.floor(Math.random() * notebookQuestions.length);
        $('#question').text(notebookQuestions[value].question);
        $makeButtons();
        const correctAnswerValue = Math.floor(Math.random() * 4);
        const string = buttonsArray[correctAnswerValue];
        $(string).text(notebookQuestions[value].correctAnswer);
        buttonsArray.splice(correctAnswerValue, 1);
        for (let num = 0; num <= 2; num++) {
            $(buttonsArray[0]).text((notebookQuestions[value].wrongAnswers[num]));
            buttonsArray.splice(0, 1);
        }
        $('.button').one('click', (event) => {
            if (event.target.innerHTML == notebookQuestions[value].correctAnswer) {
                $makeNextButton();
                $(string).css('background-color', '#b1d94e');
                notebookQuestions.splice(value, 1);
                numQuestionsRight += 1;
                correctCount();
                $('.pickdifferentCategory').on('click', $resetAll);
                $('#nextbutton').on('click', romanceNext);
                checkCount();
                }
            else {
                $makeNextButton();
                $(event.target).css('background-color', '#e67410');
                $(string).css('background-color', '#b1d94e');
                notebookQuestions.splice(value, 1);
                $('.pickdifferentCategory').on('click', $resetAll);
                $('#nextbutton').on('click', romanceNext);
        }
        });
    };

    var notebookQuestions = [
    {question:
        "What is the name of the town Allie and Noah meet in and later go back to at the end of the movie?",
    correctAnswer: "Seabrook",
    wrongAnswers: ["Seaway", "Seaside", "Sealane"]
    },
    {question:  "A year after Allie went away, where did Noah and Fin move to?",
    correctAnswer: "Atlanta, Georgia",
    wrongAnswers: ["Charlotte, South Carolina", "Batton Rouge, Louisiana", "Memphis, Tennessee"]
    },
    {question: "How long did Noah send Allie letters?",
    correctAnswer: "One year",
    wrongAnswers: ["Three years", "Two years", "6 months"]
    }
];

    const aboutTime = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=about+time&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * aboutTimeQuestions.length);
    $('#question').text(aboutTimeQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(aboutTimeQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((aboutTimeQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == aboutTimeQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            aboutTimeQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', romanceNext);
            checkCount();

        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            aboutTimeQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', romanceNext);
    }
    });
};

    var aboutTimeQuestions = [
    {question:
        "Who plays the main character, Mary?",
    correctAnswer: "Rachel McAdams",
    wrongAnswers: ["Elizabeth Banks", "Amanda Seyfried", "Julia Roberts"]
    },
    {question:  "Where is the movie based?",
    correctAnswer: "London",
    wrongAnswers: ["Edinburgh", "Cambridge", "New York"]
    },
    {question: "The actress who plays Mary also plays in two other time travel movies. What are they?",
    correctAnswer: "The Time Traveler’s Wife and Midnight in Paris",
    wrongAnswers: ["In time and The Time Traveler’s Wife", "The Lake House and In Time", "Midnight in Paris and 13 Going on 30"]
    }
];

    const justGoWithIt = () => {
        $.ajax({
            url: 'http://www.omdbapi.com/?t=just+go+with+it&apikey=361efa89',
        }).then (
            (data) => {
                $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
                $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
            });
        $('.Q').text('Question');
        const value = Math.floor(Math.random() * justGoWithItQuestions.length);
        $('#question').text(justGoWithItQuestions[value].question);
        $makeButtons();
        const correctAnswerValue = Math.floor(Math.random() * 4);
        const string = buttonsArray[correctAnswerValue];
        $(string).text(justGoWithItQuestions[value].correctAnswer);
        buttonsArray.splice(correctAnswerValue, 1);
        for (let num = 0; num <= 2; num++) {
            $(buttonsArray[0]).text(justGoWithItQuestions[value].wrongAnswers[num]);
            buttonsArray.splice(0, 1);
        }
        $('.button').one('click', (event) => {
            if (event.target.innerHTML == justGoWithItQuestions[value].correctAnswer) {
                $makeNextButton();
                $(string).css('background-color', '#b1d94e');
                justGoWithItQuestions.splice(value, 1);
                numQuestionsRight += 1;
                correctCount();
                $('.pickdifferentCategory').on('click', $resetAll);
                $('#nextbutton').on('click', romanceNext);
                checkCount();
            }
            else {
                $makeNextButton();
                $(event.target).css('background-color', '#e67410');
                $(string).css('background-color', '#b1d94e');
                justGoWithItQuestions.splice(value, 1);
                $('.pickdifferentCategory').on('click', $resetAll);
                $('#nextbutton').on('click', romanceNext);
        }
        });
    };

    var justGoWithItQuestions = [
{question:
    "What’s wrong with the first woman at the clinic?",
correctAnswer: "She had bad plastic surgery and one of her eyebrows was way too high",
wrongAnswers: ["Her lips got so big from botox that she couldn’t talk", "She fell and broke her nose", "She had a bad lazy eye"]
},
{question:  "Which character says “soon to be, single to be?",
correctAnswer: "Devlin",
wrongAnswers: ["Danny", "Eddie", "Palmer"]
},
{question: "Which store are they in when Kathrine’s shopping the expensive shoes?",
correctAnswer: "Barneys",
wrongAnswers: ["Gucci", "Chanel", "Bloomingdales"]
}
];

    const lalaLand = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=la+la+land&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * lalaLandQuestions.length);
    $('#question').text(lalaLandQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(lalaLandQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((lalaLandQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == lalaLandQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            lalaLandQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', romanceNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            lalaLandQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', romanceNext);
        }
    });
    };

    var lalaLandQuestions = [
    {question:
        "What made Sebastian miss Emma Stone’s character’s play?",
    correctAnswer: "He was having a photoshoot",
    wrongAnswers: ["He was going on tour with his band", "He was having a concert", "He had simply forgotten"]
    },
    {question:  "When did the two characters first see each other?",
    correctAnswer: "In traffic",
    wrongAnswers: ["Hollywood Hills", "The coffee shop", "At a show"]
    },
    {question: "What was Emma Stone’s character’s name?",
    correctAnswer: "Mia",
    wrongAnswers: ["Emma", "Linda", "Olivia"]
    }
    ];

    const noStringAttached = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=no+strings+attached&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * noStringAttachedQuestions.length);
    $('#question').text(noStringAttachedQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(noStringAttachedQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((noStringAttachedQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == noStringAttachedQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            noStringAttachedQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', romanceNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            noStringAttachedQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', romanceNext);
        }
        });
    };

    var noStringAttachedQuestions = [
    {question:
        "The film starts out with Emma and Adam meeting 15 years earlier. Where do they meet?",
    correctAnswer: "At summer camp",
    wrongAnswers: ["At a friends birthday party", "At the mall", "At an amusement park"]
    },
    {question:  "Adam is startled to learn that his father is seeing..",
    correctAnswer: "Adams ex girlfriend",
    wrongAnswers: ["Emma’s mother", "Emma’s sister", "His birth mother"]
    },
    {question: "Where does Adam take Emma on their first date?",
    correctAnswer: "Miniature golf",
    wrongAnswers: ["Bowling", "A basketball game", "A baseball game"]
    }
    ];

    const loveActually = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=love+actually&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * loveActuallyQuestions.length);
    $('#question').text(loveActuallyQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(loveActuallyQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((loveActuallyQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == loveActuallyQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            loveActuallyQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', romanceNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            loveActuallyQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', romanceNext);
        }
        });
    };

    var loveActuallyQuestions = [
    {question:
        "The film “Love Actually” opens with a voice over from which character?",
    correctAnswer: "David",
    wrongAnswers: ["Joe", "Billy Mack", "George"]
    },
    {question:  "Which actor played the character David in the movie?",
    correctAnswer: "Hugh Grant",
    wrongAnswers: ["Colin Firth", "Bill Nighy", "Liam Neeson"]
    },
    {question: "Which holiday serves as a backdrop of the film “Love Actually?",
    correctAnswer: "Christmas",
    wrongAnswers: ["Thanksgiving", "Easter", "Valentines Day"]
    }
    ];

    const aStarIsBorn = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=a+star+is+born&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * aStarIsBornQuestions.length);
    $('#question').text(aStarIsBornQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(aStarIsBornQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((aStarIsBornQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == aStarIsBornQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            aStarIsBornQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', romanceNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            aStarIsBornQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', romanceNext);
        }
        });
    };

    var aStarIsBornQuestions = [
    {question:
        "How many “A Star Is Born” movies have there been?",
    correctAnswer: "Four",
    wrongAnswers: ["One", "Three", "Two"]
    },
    {question:  "Who wrote the song “Shallow” for the movie?",
    correctAnswer: "Lady Gaga",
    wrongAnswers: ["Miley Cyrus", "Ariana Grande", "Beyonce"]
    },
    {question: "What is the dog’s name?",
    correctAnswer: "Charlie",
    wrongAnswers: ["Jack", "Max", "Buddy"]
    }
    ];

    const theSpectacularNow = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=the+spectacular+now&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * theSpectacularNowQuestions.length);
    $('#question').text(theSpectacularNowQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(theSpectacularNowQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((theSpectacularNowQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == theSpectacularNowQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            theSpectacularNowQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', romanceNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            theSpectacularNowQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', romanceNext);
        }
        });
    };

    var theSpectacularNowQuestions = [
    {question:
        "At the beginning of the movie, who is Sutter Keely writing a letter to?",
    correctAnswer: "A dean of admissions",
    wrongAnswers: ["His father", "A guidance counselor", "His future self"]
    },
    {question:  "Having just met, Sutter and Aimee bond over her early-morning job of..",
    correctAnswer: "Delivering newspapers",
    wrongAnswers: ["Working at a donut shop", "Landscaping neighbors’ yards", "Feeding animals at a zoo"]
    },
    {question: "Aimee gets admitted into a college in what city?",
    correctAnswer: "Philadelphia",
    wrongAnswers: ["Denver", "Portland, Maine", "Charlotte"]
    }
    ];

    var movies = [
    theNoteBook,
    aboutTime,
    justGoWithIt,
    lalaLand,
    noStringAttached,
    loveActually,
    aStarIsBorn,
    theSpectacularNow];

    const romanceMovies = () => {
        checkMovies();
        if (movies.length == 0) {
            noQuestionsLeft();
        }
        else {
            for (let i = 0; i < movies.length; i++) {
                if ((notebookQuestions.length <= 0) && (notebookQuestions != 'yes')) {
                    movies.splice(movies.indexOf(theNoteBook), 1);
                    notebookQuestions = 'yes';
                } else if ((aboutTimeQuestions.length <= 0) && (aboutTimeQuestions != 'yes')) {
                    movies.splice(movies.indexOf(aboutTime), 1);
                    aboutTimeQuestions = 'yes';
                } else if ((justGoWithItQuestions.length <= 0) && (justGoWithItQuestions != 'yes')) {
                    movies.splice(movies.indexOf(justGoWithIt), 1);
                    justGoWithItQuestions = 'yes';
                } else if ((lalaLandQuestions.length <= 0) && (lalaLandQuestions != 'yes')) {
                    movies.splice(movies.indexOf(lalaLand), 1);
                    lalaLandQuestions = 'yes';
                } else if ((noStringAttachedQuestions.length <= 0) && (noStringAttachedQuestions != 'yes')) {
                    movies.splice(movies.indexOf(noStringAttached), 1);
                    noStringAttachedQuestions = 'yes';
                } else if ((loveActuallyQuestions.length <= 0) && (loveActuallyQuestions != 'yes')) {
                    movies.splice(movies.indexOf(loveActually), 1);
                    loveActuallyQuestions = 'yes';
                } else if ((aStarIsBornQuestions.length <= 0) && (aStarIsBornQuestions != 'yes')) {
                    movies.splice(movies.indexOf(aStarIsBorn), 1);
                    aStarIsBornQuestions = 'yes';
                } else if ((theSpectacularNowQuestions.length <= 0) && (theSpectacularNowQuestions != 'yes')) {
                    movies.splice(movies.indexOf(theSpectacularNow), 1);
                    theSpectacularNowQuestions = 'yes';
                }
            }
    }
        return movies[Math.floor(Math.random() * movies.length)]();
};

    const bourneUltimatum = () => {
        $.ajax({
            url: 'http://www.omdbapi.com/?t=bourne+ultimatum&apikey=361efa89',
        }).then (
            (data) => {
                $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
                $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
            });
        $('.Q').text('Question');
        const value = Math.floor(Math.random() * bourneUltimatumQuestions.length);
        $('#question').text(bourneUltimatumQuestions[value].question);
        $makeButtons();
        const correctAnswerValue = Math.floor(Math.random() * 4);
        const string = buttonsArray[correctAnswerValue];
        $(string).text(bourneUltimatumQuestions[value].correctAnswer);
        buttonsArray.splice(correctAnswerValue, 1);
        for (let num = 0; num <= 2; num++) {
            $(buttonsArray[0]).text((bourneUltimatumQuestions[value].wrongAnswers[num]));
            buttonsArray.splice(0, 1);
        }
        $('.button').one('click', (event) => {
            if (event.target.innerHTML == bourneUltimatumQuestions[value].correctAnswer) {
                $makeNextButton();
                $(string).css('background-color', '#b1d94e');
                bourneUltimatumQuestions.splice(value, 1);
                numQuestionsRight += 1;
                correctCount();
                $('.pickdifferentCategory').on('click', $resetAll);
                $('#nextbutton').on('click', actionNext);
                checkCount();

                }
            else {
                $makeNextButton();
                $(event.target).css('background-color', '#e67410');
                $(string).css('background-color', '#b1d94e');
                bourneUltimatumQuestions.splice(value, 1);
                $('.pickdifferentCategory').on('click', $resetAll);
                $('#nextbutton').on('click', actionNext);
        }
        });
    };

    var bourneUltimatumQuestions = [
    {question:
        "Who is the lead actor?",
    correctAnswer: "Matt Damon",
    wrongAnswers: ["Edgar Ramierz", "Joan Allen", "Chris Cooper"]
    },
    {question:  "Which installment of the Bourne film series movies is Ultimatum?",
    correctAnswer: "3rd Movie",
    wrongAnswers: ["1st Movie", "4th Movie", "2nd Movie"]
    },
    {question: "In Bourne Ultimatum, which Operation is targeting Jason Bourne?",
    correctAnswer: "Blackbriar",
    wrongAnswers: ["Nighthawk", "Blackbear", "Blackhawk"]
    }
    ];

    const johnWick = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=john+wick&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * johnWickQuestions.length);
    $('#question').text(johnWickQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(johnWickQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((johnWickQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == aboutTimeQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            johnWickQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', actionNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            johnWickQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', actionNext);
    }
    });
    };

    var johnWickQuestions = [
    {question:
        "Who directed John Wick?",
    correctAnswer: "Chad Stahelski",
    wrongAnswers: ["Harrison Ford", "George Lucas", "J.J. Abrams"]
    },
    {question:  "What is the name of John’s wife?",
    correctAnswer: "Helen",
    wrongAnswers: ["Jessica", "Margaret", "Lindsey"]
    },
    {question: "What kind of care does John drive?",
    correctAnswer: "Ford Mustang Mach 1",
    wrongAnswers: ["Chevy Charger", "Nissan Ultima", "Porsche 911"]
    }
    ];

    const theDarkKnight = () => {
        $.ajax({
            url: 'http://www.omdbapi.com/?t=the+dark+knight&apikey=361efa89',
        }).then (
            (data) => {
                $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
                $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
            });
        $('.Q').text('Question');
        const value = Math.floor(Math.random() * theDarkKnightQuestions.length);
        $('#question').text(theDarkKnightQuestions[value].question);
        $makeButtons();
        const correctAnswerValue = Math.floor(Math.random() * 4);
        const string = buttonsArray[correctAnswerValue];
        $(string).text(theDarkKnightQuestions[value].correctAnswer);
        buttonsArray.splice(correctAnswerValue, 1);
        for (let num = 0; num <= 2; num++) {
            $(buttonsArray[0]).text(theDarkKnightQuestions[value].wrongAnswers[num]);
            buttonsArray.splice(0, 1);
        }
        $('.button').one('click', (event) => {
            if (event.target.innerHTML == theDarkKnightQuestions[value].correctAnswer) {
                $makeNextButton();
                $(string).css('background-color', '#b1d94e');
                theDarkKnightQuestions.splice(value, 1);
                numQuestionsRight += 1;
                correctCount();
                $('.pickdifferentCategory').on('click', $resetAll);
                $('#nextbutton').on('click', actionNext);
                checkCount();
            }
            else {
                $makeNextButton();
                $(event.target).css('background-color', '#e67410');
                $(string).css('background-color', '#b1d94e');
                theDarkKnightQuestions.splice(value, 1);
                $('.pickdifferentCategory').on('click', $resetAll);
                $('#nextbutton').on('click', actionNext);
        }
        });
    };

    var theDarkKnightQuestions = [
    {question:
    "Who is the main villain in the Dark Knight?",
    correctAnswer: "The Joker",
    wrongAnswers: ["Harley Quinn", "Penguin", "Baine"]
    },
    {question:  "What is the character’s name played by Morgan Freeman?",
    correctAnswer: "Lucious Fox",
    wrongAnswers: ["Alfred", "The Joker", "Harvey Dent"]
    },
    {question: "What is Batman’s super power?",
    correctAnswer: "He has no super powers",
    wrongAnswers: ["Flying", "Super Strength", "Invisibility"]
    }
    ];

    const theEqualizer = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=the+equalizer&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * theEqualizerQuestions.length);
    $('#question').text(theEqualizerQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(theEqualizerQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((theEqualizerQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == theEqualizerQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            theEqualizerQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', actionNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            theEqualizerQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', actionNext);
        }
    });
    };

    var theEqualizerQuestions = [
    {question:
        "Who wrote the book, The Equalizer, on which the film is based?",
    correctAnswer: "Michael Sloan",
    wrongAnswers: ["J.K. Rowling", "Sam Hunt", "John Richards"]
    },
    {question:  "What city does Robert McCall live in where he works at a local hardware store?",
    correctAnswer: "Boston",
    wrongAnswers: ["Brooklyn", "Chicago", "Austin"]
    },
    {question: "What year was the film released in theaters?",
    correctAnswer: "2014",
    wrongAnswers: ["2015", "2013", "2012"]
    }
    ];

    const captainAmerica = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=captain+america&y=2016&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * captainAmericaQuestions.length);
    $('#question').text(captainAmericaQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(captainAmericaQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((captainAmericaQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == captainAmericaQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            captainAmericaQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', actionNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            captainAmericaQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', actionNext);
        }
        });
    };

    var captainAmericaQuestions = [
    {question:
        "In Captain America: Civil War, who are the two main opposing heroes?",
    correctAnswer: "Captain America and Iron Man",
    wrongAnswers: ["Captain America and Ant-Man", "Captain America and Hulk", "Captain America and Thor"]
    },
    {question:  "Which of the following characters sides with Iron Man?",
    correctAnswer: "Ant-Man",
    wrongAnswers: ["War Machine", "Hawk Eye", "Scarlet Witch"]
    },
    {question: "During the battle between Iron Man and Captain America’s team, which hero is severely injured at the end of the battle?",
    correctAnswer: "War Machine",
    wrongAnswers: ["Ant-Man", "Spider-Man", "Bucky Barnes"]
    }
    ];

    const readyPlayerOne = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=ready+player+one&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * readyPlayerOneQuestions.length);
    $('#question').text(readyPlayerOneQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(readyPlayerOneQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((readyPlayerOneQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == readyPlayerOneQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            readyPlayerOneQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', actionNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            readyPlayerOneQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', actionNext);
        }
        });
    };

    var readyPlayerOneQuestions = [
    {question:
        "Who is the director of Ready Play One?",
    correctAnswer: "Steven Spielberg",
    wrongAnswers: ["J.J. Abrams", "James Gunn", "George Lucas"]
    },
    {question:  "In what year does Ready Player One take place?",
    correctAnswer: "2045",
    wrongAnswers: ["2055", "2100", "2442"]
    },
    {question: "What does IOI stand for in Ready Player One?",
    correctAnswer: "Innovative Online Industries",
    wrongAnswers: ["Integrity Over Intuition", "Items of Importance", "Individual Operating Industries"]
    }
    ];

    const missionImpossible = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=mission+impossible&y=2011&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * missionImpossibleQuestions.length);
    $('#question').text(missionImpossibleQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(missionImpossibleQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((missionImpossibleQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == missionImpossibleQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            missionImpossibleQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', actionNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            missionImpossibleQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', actionNext);
        }
        });
    };

    var missionImpossibleQuestions = [
    {question:
        "Which film number in the Impossible film series is Ghost Protocol?",
    correctAnswer: "Four",
    wrongAnswers: ["One", "Three", "Two"]
    },
    {question:  "What structure is bombed in the film Ghost Protocol and subsequently blamed on Ethan and IMF?",
    correctAnswer: "The Kremlin",
    wrongAnswers: ["The White House", "The Great Wall of China", "Big Ben"]
    },
    {question: "Which city has a single missile fired at it by a Russian submarine?",
    correctAnswer: "San Francisco",
    wrongAnswers: ["Washington", "San Diego", "Miami"]
    }
    ];

    const fury = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=fury&y=2014&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * furyQuestions.length);
    $('#question').text(furyQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(furyQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((furyQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == furyQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            furyQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', actionNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            furyQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', actionNext);
        }
        });
    };

    var furyQuestions = [
    {question:
        "What kind of tank is used by Staff Sergeant Collier?",
    correctAnswer: "M4 Sherman",
    wrongAnswers: ["Abrahams", "M24 Chaffee", "M46 Patton"]
    },
    {question:  "What is Staff Sergeant Collier’s nickname?",
    correctAnswer: "Wardaddy",
    wrongAnswers: ["Boss", "Sarge", "Tank"]
    },
    {question: "Who replaces “Red” after he is KIA?",
    correctAnswer: "Norman",
    wrongAnswers: ["John", "Kevin", "Leonard"]
    }
    ];

    const planetOfTheApes = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=dawn+of+the+planet+of+the+apes&y=2014&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * planetOfTheApesQuestions.length);
    $('#question').text(planetOfTheApesQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(planetOfTheApesQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((planetOfTheApesQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == planetOfTheApesQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            planetOfTheApesQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', actionNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            planetOfTheApesQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', actionNext);
        }
        });
    };

    var planetOfTheApesQuestions = [
    {question:
        "What is the name of the flu that wipes out about 90% of the human population in the film?",
    correctAnswer: "Simian Flu",
    wrongAnswers: ["Swine Flu", "Ape Flu", "Monkey Flu"]
    },
    {question:  "Near what city is Caesar’s apes located?",
    correctAnswer: "San Francisco",
    wrongAnswers: ["Seattle", "New Mexico", "Boston"]
    },
    {question: "What is the name of the human male who is a friend of Caesar?",
    correctAnswer: "Malcolm",
    wrongAnswers: ["Michael", "Mark", "Marty"]
    }
    ];

    const theAcountant = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=the+accountant&y=2016&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * theAcountantQuestions.length);
    $('#question').text(theAcountantQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(theAcountantQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((theAcountantQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == theAcountantQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            theAcountantQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', actionNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            theAcountantQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', actionNext);
        }
        });
    };

    var theAcountantQuestions = [
    {question:
        "What type of weapon does the Accountant use to protect the farmers?",
    correctAnswer: "Sniper Rifle",
    wrongAnswers: ["Machine Gun", "Knife", "Bare Hands"]
    },
    {question:  "What medical condition does Christian Wolff have in the film?",
    correctAnswer: "Autism",
    wrongAnswers: ["Tuberculosis", "HIV", "Cystic Fibrosis"]
    },
    {question: "Christian has an accounting office inside a strip mall located in what city??",
    correctAnswer: "Plainfield, IL",
    wrongAnswers: ["Speedway, IN", "Topeka, KS", "Austin, TX"]
    }
    ];

    var movies2 = [
    bourneUltimatum,
    johnWick,
    theDarkKnight,
    theEqualizer,
    captainAmerica,
    readyPlayerOne,
    missionImpossible,
    fury,
    planetOfTheApes,
    theAcountant
    ];

    const actionmovies = () => {
        checkMovies();
        if (movies2.length == 0) {
            noQuestionsLeft();
        } else {
        for (let i = 0; i < movies2.length; i++) {
            if ((bourneUltimatumQuestions.length <= 0) && (bourneUltimatumQuestions != 'yes')) {
                movies2.splice(movies2.indexOf(bourneUltimatum), 1);
                bourneUltimatumQuestions = 'yes';
            } else if ((johnWickQuestions.length <= 0) && (johnWickQuestions != 'yes')) {
                movies2.splice(movies2.indexOf(johnWick), 1);
                johnWickQuestions = 'yes';
            } else if ((theDarkKnightQuestions.length <= 0) && (theDarkKnightQuestions != 'yes')) {
                movies2.splice(movies2.indexOf(theDarkKnight), 1);
                theDarkKnightQuestions = 'yes';
            } else if ((theEqualizerQuestions.length <= 0) && (theEqualizerQuestions != 'yes')) {
                movies2.splice(movies2.indexOf(theEqualizer), 1);
                theEqualizerQuestions = 'yes';
            } else if ((captainAmericaQuestions.length <= 0) && (captainAmericaQuestions != 'yes')) {
                movies2.splice(movies2.indexOf(captainAmerica), 1);
                captainAmericaQuestions = 'yes';
            } else if ((readyPlayerOneQuestions.length <= 0) && (readyPlayerOneQuestions != 'yes')) {
                movies2.splice(movies2.indexOf(readyPlayerOne), 1);
                readyPlayerOneQuestions = 'yes';
            } else if ((missionImpossibleQuestions.length <= 0) && (missionImpossibleQuestions != 'yes')) {
                movies2.splice(movies2.indexOf(missionImpossible), 1);
                missionImpossibleQuestions = 'yes';
            } else if ((furyQuestions.length <= 0) && (furyQuestions != 'yes')) {
                movies2.splice(movies2.indexOf(fury), 1);
                furyQuestions = 'yes';
            } else if ((planetOfTheApesQuestions.length <= 0) && (planetOfTheApesQuestions != 'yes')) {
                movies2.splice(movies2.indexOf(planetOfTheApes), 1);
                planetOfTheApesQuestions = 'yes';
            } else if ((theAcountantQuestions.length <= 0) && (theAcountantQuestions != 'yes')) {
                movies2.splice(movies2.indexOf(theAcountant), 1);
                theAcountantQuestions = 'yes';
            }
        }
    }
        return movies2[Math.floor(Math.random() * movies2.length)]();
    };

    const wonder = () => {
        $.ajax({
            url: 'http://www.omdbapi.com/?t=wonder&y=2017&apikey=361efa89',
        }).then (
            (data) => {
                $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
                $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
            });
        $('.Q').text('Question');
        const value = Math.floor(Math.random() * wonderQuestions.length);
        $('#question').text(wonderQuestions[value].question);
        $makeButtons();
        const correctAnswerValue = Math.floor(Math.random() * 4);
        const string = buttonsArray[correctAnswerValue];
        $(string).text(wonderQuestions[value].correctAnswer);
        buttonsArray.splice(correctAnswerValue, 1);
        for (let num = 0; num <= 2; num++) {
            $(buttonsArray[0]).text((wonderQuestions[value].wrongAnswers[num]));
            buttonsArray.splice(0, 1);
        }
        $('.button').one('click', (event) => {
            if (event.target.innerHTML == wonderQuestions[value].correctAnswer) {
                $makeNextButton();
                $(string).css('background-color', '#b1d94e');
                wonderQuestions.splice(value, 1);
                numQuestionsRight += 1;
                correctCount();
                $('.pickdifferentCategory').on('click', $resetAll);
                $('#nextbutton').on('click', familyNext);
                checkCount();
                }
            else {
                $makeNextButton();
                $(event.target).css('background-color', '#e67410');
                $(string).css('background-color', '#b1d94e');
                wonderQuestions.splice(value, 1);
                $('.pickdifferentCategory').on('click', $resetAll);
                $('#nextbutton').on('click', familyNext);
        }
        });
    };

    var wonderQuestions = [
    {question:
        "After Auggie’s Boba Fett costume is ruined what does he dress up as for Halloween?",
    correctAnswer: "Ghostface",
    wrongAnswers: ["Obi-Wan Kenobi", "Darth Maul", "Aladdin"]
    },
    {question:  "In the ending line of the movie, Isabel tell Auggie, “You really are a _____, Auggie”.",
    correctAnswer: "Wonder",
    wrongAnswers: ["Joy", "Friend", "Hero"]
    },
    {question: "What does Auggie wear on his head to hide his face whenever he is upset or afraid?",
    correctAnswer: "Astronaut Helmet",
    wrongAnswers: ["Fireman Helmet", "Army Helmet", "Nothing"]
    }
    ];

    const jungleBook = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=the+jungle+book&y=2016&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * jungleBookQuestions.length);
    $('#question').text(jungleBookQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(jungleBookQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((jungleBookQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == aboutTimeQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            jungleBookQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', familyNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            jungleBookQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', familyNext);
    }
    });
    };

    var jungleBookQuestions = [
    {question:
        "In the Jungle Book what do the animals call the fire created by humans?",
    correctAnswer: "Red Flower",
    wrongAnswers: ["Hot Glow", "Red Wave", "Red Tornado"]
    },
    {question:  "What kind of bear is Baloo in the film?",
    correctAnswer: "Sloth Bear",
    wrongAnswers: ["Honey Bear", "Black Bear", "Jungle Bear"]
    },
    {question: "Who killed Mowgli’s father in The Jungle Book?",
    correctAnswer: "Shere Khan",
    wrongAnswers: ["Bagheera", "King Louie", "John Cena"]
    }
    ];

    const insideOut = () => {
        $.ajax({
            url: 'http://www.omdbapi.com/?t=inside+out&y=2015&apikey=361efa89',
        }).then (
            (data) => {
                $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
                $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
            });
        $('.Q').text('Question');
        const value = Math.floor(Math.random() * insideOutQuestions.length);
        $('#question').text(insideOutQuestions[value].question);
        $makeButtons();
        const correctAnswerValue = Math.floor(Math.random() * 4);
        const string = buttonsArray[correctAnswerValue];
        $(string).text(insideOutQuestions[value].correctAnswer);
        buttonsArray.splice(correctAnswerValue, 1);
        for (let num = 0; num <= 2; num++) {
            $(buttonsArray[0]).text(insideOutQuestions[value].wrongAnswers[num]);
            buttonsArray.splice(0, 1);
        }
        $('.button').one('click', (event) => {
            if (event.target.innerHTML == insideOutQuestions[value].correctAnswer) {
                $makeNextButton();
                $(string).css('background-color', '#b1d94e');
                insideOutQuestions.splice(value, 1);
                numQuestionsRight += 1;
                correctCount();
                $('.pickdifferentCategory').on('click', $resetAll);
                $('#nextbutton').on('click', familyNext);
                checkCount();
            }
            else {
                $makeNextButton();
                $(event.target).css('background-color', '#e67410');
                $(string).css('background-color', '#b1d94e');
                insideOutQuestions.splice(value, 1);
                $('.pickdifferentCategory').on('click', $resetAll);
                $('#nextbutton').on('click', familyNext);
        }
        });
    };

    var insideOutQuestions = [
    {question:
    "Which of the following is not an emotion portrayed by a character in the movie Inside Out?",
    correctAnswer: "Love",
    wrongAnswers: ["Joy", "Sadness", "Anger"]
    },
    {question: "Which of the emotions is the leader of the group of emotional characters?",
    correctAnswer: "Joy",
    wrongAnswers: ["Disgust", "Sadness", "Anger"]
    },
    {question: "Why does the family move to San Francisco during the film, Inside Out?",
    correctAnswer: "Riley’s dad starts a new job",
    wrongAnswers: ["Riley changes schools", "Riley’s grandmother has become very sick", "They don’t move during the film"]
    }
    ];

    const secretariat = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=secretariat&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * secretariatQuestions.length);
    $('#question').text(secretariatQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(secretariatQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((secretariatQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == secretariatQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            secretariatQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', familyNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            secretariatQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', familyNext);
        }
    });
    };

    var secretariatQuestions = [
    {question:
        "In the film Secretariat what sport/hobby was the horse trainer, Lucien Laurin, doing before deciding to train Secretariat?",
    correctAnswer: "Golf",
    wrongAnswers: ["Tennis", "Shuffleboard", "Checkers"]
    },
    {question:  "Which race did Secretariat win by approximately 31 lengths?",
    correctAnswer: "The Belmont Stakes",
    wrongAnswers: ["The Kentucky Derby", "The Preakness Stakes", "The Triple Crown"]
    },
    {question: "Secretariat became one of few horses to win the triple crown. How many years had it been since a horse had last won the triple crown?",
    correctAnswer: "25 years",
    wrongAnswers: ["10 years", "50 years", "35 years"]
    }
    ];

    const christopherRobin = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=christopher+robin&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * christopherRobinQuestions.length);
    $('#question').text(christopherRobinQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(christopherRobinQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((christopherRobinQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == christopherRobinQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            christopherRobinQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', familyNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            christopherRobinQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', familyNext);
        }
        });
    };

    var christopherRobinQuestions = [
    {question:
        "Why did Christopher Robin have to leave the Hundred Acre Woods in the beginning of the film, Christopher Robin?",
    correctAnswer: "To attend boarding school",
    wrongAnswers: ["To visit his grandmother", "To gather honey for Pooh", "He never left"]
    },
    {question:  "What game does Winnie the Pooh play on the train with Christopher Robin?",
    correctAnswer: "Say What You See",
    wrongAnswers: ["I Spy", "Chess", "Guess Who"]
    },
    {question: "As an adult at his job, Christopher Robin has to find a way to sell more of what?",
    correctAnswer: "Luggage",
    wrongAnswers: ["Hats", "Insurance", "Cars"]
    }
    ];

    const maleficent = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=maleficent&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * maleficientQuestions.length);
    $('#question').text(maleficientQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(maleficientQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((maleficientQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == maleficientQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            maleficientQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', familyNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            maleficientQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', familyNext);
        }
        });
    };

    var maleficientQuestions = [
    {question:
        "Who’s gives true love’s kiss to Aurora in the film?",
    correctAnswer: "Maleficent",
    wrongAnswers: ["The Prince", "The Fairies", "Her Mother"]
    },
    {question:  "What is the name of the location that Maleficent lives?",
    correctAnswer: "The Moors",
    wrongAnswers: ["The Enchanted Forest", "The Shire", "New York"]
    },
    {question: "What substance causes Maleficent’s skin to burn?",
    correctAnswer: "Iron",
    wrongAnswers: ["Stone", "Silk", "Wood"]
    }
    ];

    const howToTrainYourDragon = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=how+to+train+your+dragon&y=2019&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * howToTrainYourDragonQuestions.length);
    $('#question').text(howToTrainYourDragonQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(howToTrainYourDragonQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((howToTrainYourDragonQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == howToTrainYourDragonQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            howToTrainYourDragonQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', familyNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            howToTrainYourDragonQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', familyNext);
        }
        });
    };

    var howToTrainYourDragonQuestions = [
    {question:
        "What is the main character’s name in How to Train Your Dragon: The Hidden World?",
    correctAnswer: "Hiccup",
    wrongAnswers: ["Trip", "Astrid", "Grimmel"]
    },
    {question:  "What is the name of the dragon that Toothless falls in love with?",
    correctAnswer: "Light Fury",
    wrongAnswers: ["White Fury", "White Dragon", "Night Fury"]
    },
    {question: "Where doe the Dragons go at the end of the film, How to Train Your Dragon: The Hidden World?",
    correctAnswer: "The Hidden World",
    wrongAnswers: ["Berk", "Valhalla", "Stormheim"]
    }
    ];

    const incredibles = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=incredibles+2&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * incrediblesQuestions.length);
    $('#question').text(incrediblesQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(incrediblesQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((incrediblesQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == incrediblesQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            incrediblesQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', familyNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            incrediblesQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', familyNext);
        }
        });
    };

    var incrediblesQuestions = [
    {question:
        "Who or what does Jack-Jack encounter when his many super powers are revealed in the movie Incredible 2?",
    correctAnswer: "A Raccoon",
    wrongAnswers: ["A Squirrel", "Frozone", "The Underminer"]
    },
    {question:  "What is the name of the boy that Violet is interested in?",
    correctAnswer: "Tony",
    wrongAnswers: ["Mark", "David", "Scott"]
    },
    {question: "Who is the ultimate villain in the Incredible 2?",
    correctAnswer: "Evelyn",
    wrongAnswers: ["The Underminer", "Winston", "The Raccoon"]
    }
    ];

    const elf = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=elf&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * elfQuestions.length);
    $('#question').text(elfQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(elfQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((elfQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == elfQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            elfQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', familyNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            elfQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', familyNext);
        }
        });
    };

    var elfQuestions = [
    {question:
        "What does buddy the elf like to add to his spaghetti in the film, Elf?",
    correctAnswer: "Maple Syrup",
    wrongAnswers: ["Ketchup", "Tomato Sauce", "Mustard"]
    },
    {question:  "What does Buddy’s real dad do in New York?",
    correctAnswer: "Works at a publishing company",
    wrongAnswers: ["He works in sales", "Works at the salvation army", "He’s a Santa Claus imposter"]
    },
    {question: "Who plays Buddy in the movie, Elf?",
    correctAnswer: "Will Ferrell",
    wrongAnswers: ["Steve Carrel", "Matt Damon", "Hayden Christensen"]
    }
    ];

    var movies3 = [
    wonder,
    jungleBook,
    insideOut,
    secretariat,
    christopherRobin,
    maleficent,
    howToTrainYourDragon,
    incredibles,
    elf
    ];

    const familymovies = () => {
        checkMovies();
        if (movies3.length == 0) {
            noQuestionsLeft();
        } else {for (let i = 0; i < movies3.length; i++) {
                if ((wonderQuestions.length <= 0) && (wonderQuestions != 'yes')) {
                    movies3.splice(movies3.indexOf(wonder), 1);
                    wonderQuestions = 'yes';
                } else if ((jungleBookQuestions.length <= 0) && (jungleBookQuestions != 'yes')) {
                    movies3.splice(movies3.indexOf(jungleBook), 1);
                    jungleBookQuestions = 'yes';
                } else if ((insideOutQuestions.length <= 0) && (insideOutQuestions != 'yes')) {
                    movies3.splice(movies3.indexOf(insideOut), 1);
                    insideOutQuestions = 'yes';
                } else if ((secretariatQuestions.length <= 0) && (secretariatQuestions != 'yes')) {
                    movies3.splice(movies3.indexOf(secretariat), 1);
                    secretariatQuestions = 'yes';
                } else if ((christopherRobinQuestions.length <= 0) && (christopherRobinQuestions != 'yes')) {
                    movies3.splice(movies3.indexOf(christopherRobin), 1);
                    christopherRobinQuestions = 'yes';
                } else if ((maleficientQuestions.length <= 0) && (maleficientQuestions != 'yes')) {
                    movies3.splice(movies3.indexOf(maleficent), 1);
                    maleficientQuestions = 'yes';
                } else if ((howToTrainYourDragonQuestions.length <= 0) && (howToTrainYourDragonQuestions != 'yes')) {
                    movies3.splice(movies3.indexOf(howToTrainYourDragon), 1);
                    howToTrainYourDragonQuestions = 'yes';
                } else if ((incrediblesQuestions.length <= 0) && (incrediblesQuestions != 'yes')) {
                    movies3.splice(movies3.indexOf(incredibles), 1);
                    incrediblesQuestions = 'yes';
                } else if ((elfQuestions.length <= 0) && (elfQuestions != 'yes')) {
                    movies3.splice(movies3.indexOf(elf), 1);
                    elfQuestions = 'yes';
                }
            }
        }
        return movies3[Math.floor(Math.random() * movies3.length)]();
    };

    const wereTheMillers = () => {
        $.ajax({
            url: 'http://www.omdbapi.com/?t=we%27re+the+millers&apikey=361efa89',
        }).then (
            (data) => {
                $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
                $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
            });
        $('.Q').text('Question');
        const value = Math.floor(Math.random() * wereTheMillersQuestions.length);
        $('#question').text(wereTheMillersQuestions[value].question);
        $makeButtons();
        const correctAnswerValue = Math.floor(Math.random() * 4);
        const string = buttonsArray[correctAnswerValue];
        $(string).text(wereTheMillersQuestions[value].correctAnswer);
        buttonsArray.splice(correctAnswerValue, 1);
        for (let num = 0; num <= 2; num++) {
            $(buttonsArray[0]).text((wereTheMillersQuestions[value].wrongAnswers[num]));
            buttonsArray.splice(0, 1);
        }
        $('.button').one('click', (event) => {
            if (event.target.innerHTML == wereTheMillersQuestions[value].correctAnswer) {
                $makeNextButton();
                $(string).css('background-color', '#b1d94e');
                wereTheMillersQuestions.splice(value, 1);
                numQuestionsRight += 1;
                correctCount();
                $('.pickdifferentCategory').on('click', $resetAll);
                $('#nextbutton').on('click', comedyNext);
                checkCount();
                }
            else {
                $makeNextButton();
                $(event.target).css('background-color', '#e67410');
                $(string).css('background-color', '#b1d94e');
                wereTheMillersQuestions.splice(value, 1);
                $('.pickdifferentCategory').on('click', $resetAll);
                $('#nextbutton').on('click', comedyNext);
        }
        });
    };

    var wereTheMillersQuestions = [
    {question:
        "Where do the Millers have to transport illict drugs?",
    correctAnswer: "Mexico",
    wrongAnswers: ["China", "Cuba", "Canada"]
    },
    {question:  "What vehicle does the “Miller Family” use to transport illicit drugs?",
    correctAnswer: "RV",
    wrongAnswers: ["Private Jet", "Yacht", "VW Beetle"]
    },
    {question: "What creature bites Kenny?",
    correctAnswer: "Tarantula",
    wrongAnswers: ["Pig", "Horse", "Armadillo"]
    }
    ];

    const theHangover = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=the+hangover&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * theHangoverQuestions.length);
    $('#question').text(theHangoverQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(theHangoverQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((theHangoverQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == aboutTimeQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            theHangoverQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', comedyNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            theHangoverQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', comedyNext);
    }
    });
    };

    var theHangoverQuestions = [
    {question:
        "Where do Doug, Phil, Stu, and Alan travel to in the Hangover?",
    correctAnswer: "Las Vegas",
    wrongAnswers: ["Chicago", "Atlanta", "Miami"]
    },
    {question:  "Whose tiger is stolen in the Hangover?",
    correctAnswer: "Mike Tyson",
    wrongAnswers: ["Halle Berry", "Connor McGregor", "Floyd Mayweather"]
    },
    {question: "Where did Doug, Phil, and Stu find Doug after returning to the hotel before leaving for home?",
    correctAnswer: "On the roof of the hotel",
    wrongAnswers: ["Under the bed in the hotel room", "In the hotel casino", "At the breakfast bar in the hotel"]
    }
    ];

    const stepBrothers = () => {
        $.ajax({
            url: 'http://www.omdbapi.com/?t=step+brothers&apikey=361efa89',
        }).then (
            (data) => {
                $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
                $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
            });
        $('.Q').text('Question');
        const value = Math.floor(Math.random() * stepBrothersQuestions.length);
        $('#question').text(stepBrothersQuestions[value].question);
        $makeButtons();
        const correctAnswerValue = Math.floor(Math.random() * 4);
        const string = buttonsArray[correctAnswerValue];
        $(string).text(stepBrothersQuestions[value].correctAnswer);
        buttonsArray.splice(correctAnswerValue, 1);
        for (let num = 0; num <= 2; num++) {
            $(buttonsArray[0]).text(stepBrothersQuestions[value].wrongAnswers[num]);
            buttonsArray.splice(0, 1);
        }
        $('.button').one('click', (event) => {
            if (event.target.innerHTML == stepBrothersQuestions[value].correctAnswer) {
                $makeNextButton();
                $(string).css('background-color', '#b1d94e');
                stepBrothersQuestions.splice(value, 1);
                numQuestionsRight += 1;
                correctCount();
                $('.pickdifferentCategory').on('click', $resetAll);
                $('#nextbutton').on('click', comedyNext);
                checkCount();
            }
            else {
                $makeNextButton();
                $(event.target).css('background-color', '#e67410');
                $(string).css('background-color', '#b1d94e');
                stepBrothersQuestions.splice(value, 1);
                $('.pickdifferentCategory').on('click', $resetAll);
                $('#nextbutton').on('click', comedyNext);
        }
        });
    };

    var stepBrothersQuestions = [
    {question:
    "What matching masks do the brothers receive at the end of Step Brothers?",
    correctAnswer: "Chewbacca masks",
    wrongAnswers: ["Storm Trooper Masks", "Jason Masks", "Darth Vader Helmets"]
    },
    {question: "What hard rock song does Derek’s Family sing in the car together?",
    correctAnswer: "Sweet Child O’ Mine",
    wrongAnswers: ["Don’t Stop Believin’", "Free Bird", "Baby Shark"]
    },
    {question: "Finish this classic line from Step Brothers. Don’t touch my ____ set.",
    correctAnswer: "Drum",
    wrongAnswers: ["Book", "Tool", "Tea"]
    }
    ];

    const dirtyGrandpa = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=dirty+grandpa&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * dirtyGrandpaQuestions.length);
    $('#question').text(dirtyGrandpaQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(dirtyGrandpaQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((dirtyGrandpaQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == dirtyGrandpaQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            dirtyGrandpaQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', comedyNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            dirtyGrandpaQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', comedyNext);
        }
    });
    };

    var dirtyGrandpaQuestions = [
    {question:
        "Whose funeral does Jason (Zac Effron) attend early in the movie?",
    correctAnswer: "His Grandmother’s",
    wrongAnswers: ["His Brother’s", "His Father’s", "His Best Friend’s"]
    },
    {question:  "Where does Jason go with his grandpa after the funeral?",
    correctAnswer: "Florida",
    wrongAnswers: ["California", "Texas", "New York"]
    },
    {question: "During their trip together, Jason’s grandpa convinces him not to marry his fiancée. What is her name in the film?",
    correctAnswer: "Meredith",
    wrongAnswers: ["Morgan", "Mary", "Megan"]
    }
    ];

    const theCampaign = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=the+campaign&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * theCampaignQuestions.length);
    $('#question').text(theCampaignQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(theCampaignQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((theCampaignQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == theCampaignQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            theCampaignQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', comedyNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            theCampaignQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', comedyNext);
        }
        });
    };

    var theCampaignQuestions = [
    {question:
        "The Campaign is an American comedy featuring two candidates running for Congress. Who are the actors playing these candidates?",
    correctAnswer: "Will Ferrell and Zach Galifianakis",
    wrongAnswers: ["Will Ferrell and Jason Bateman", "Zach Galifianakis and Steve Carell", "Zach Galifianakis and Liam Hemsworth"]
    },
    {question:  "What job does Marty Huggins have before he runs for congressman?",
    correctAnswer: "Tourism Director",
    wrongAnswers: ["Bar Tender", "Fashion Designer", "Medical Doctor"]
    },
    {question: "What does Marty ask his opponent Cam Brady to do in order to expose him as a fake Christian?",
    correctAnswer: "Say the Lord’s Prayer",
    wrongAnswers: ["Go to Church", "Recite the 10 commandments", "Show him his bible"]
    }
    ];

    const bridesmaids = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=bridesmaids&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * bridesmaidsQuestions.length);
    $('#question').text(bridesmaidsQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(bridesmaidsQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((bridesmaidsQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == bridesmaidsQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            bridesmaidsQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', comedyNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            bridesmaidsQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', comedyNext);
        }
        });
    };

    var bridesmaidsQuestions = [
    {question:
        "Which of the bridesmaids NOT get food poisoning during the dress fitting?",
    correctAnswer: "Megan",
    wrongAnswers: ["Rita", "Helen", "Annie"]
    },
    {question:  "What business did Annie own before the recession caused her to close?",
    correctAnswer: "Baking Shop",
    wrongAnswers: ["Jewelry Store", "Hot Dog Stand", "Hair Salon"]
    },
    {question: "What does Annie's Canadian romance do for a living?",
    correctAnswer: "Police Officer",
    wrongAnswers: ["Firefighter", "Hockey Player", "Singer"]
    }
    ];

    const whiteChicks = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=white+chicks&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * whiteChicksQuestions.length);
    $('#question').text(whiteChicksQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(whiteChicksQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((whiteChicksQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == whiteChicksQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            whiteChicksQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', comedyNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            whiteChicksQuestions.splice(value, 1);
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', comedyNext);
        }
        });
    };

    var whiteChicksQuestions = [
    {question:
        "Where does a majority of the movie take place?",
    correctAnswer: "The Hamptons",
    wrongAnswers: ["New York City", "Kansas City", "Los Angeles"]
    },
    {question:  "In the Film, White Chicks, Kevin and Marcus Copeland go undercover as two women but are really what?",
    correctAnswer: "FBI agents",
    wrongAnswers: ["Police officers", "Private Investigators", "CIA agents"]
    },
    {question: "What causes Marcus and Kevin Copeland to be assigned to protect the Wilson sisters?",
    correctAnswer: "A failed drug bust",
    wrongAnswers: ["Being late to work several times", "Accidently shooting their boss", "Stealing from their office"]
    }
    ];

    const grownUps = () => {
    $.ajax({
        url: 'http://www.omdbapi.com/?t=grown+ups&apikey=361efa89',
    }).then (
        (data) => {
            $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
        });
    $('.Q').text('Question');
    const value = Math.floor(Math.random() * grownUpsQuestions.length);
    $('#question').text(grownUpsQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    const string = buttonsArray[correctAnswerValue];
    $(string).text(grownUpsQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((grownUpsQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').one('click', (event) => {
        if (event.target.innerHTML == grownUpsQuestions[value].correctAnswer) {
            $makeNextButton();
            $(string).css('background-color', '#b1d94e');
            grownUpsQuestions.splice(value, 1);
            numQuestionsRight += 1;
            correctCount();
            $('.pickdifferentCategory').on('click', $resetAll);
            $('#nextbutton').on('click', comedyNext);
            checkCount();
        }
        else {
            $makeNextButton();
            $(event.target).css('background-color', '#e67410');
            $(string).css('background-color', '#b1d94e');
            grownUpsQuestions.splice(value, 1);

        }
        });
    };

    var grownUpsQuestions = [
    {question:
        "On what weekend do the five friends rent a lake house together again?",
    correctAnswer: "July 4th",
    wrongAnswers: ["Thanksgiving", "Memorial Weekend", "Labor Day Weekend"]
    },
    {question:  "The death of who brings the friends back together in their hometown?",
    correctAnswer: "Coach Buzzer",
    wrongAnswers: ["Eric’s Mom", "Rob’s Wife", "Kurt’s Dad"]
    },
    {question: "During a trip to the water park, one of the five friends ignores a warning that urinating in the water will cause the water to turn what color?",
    correctAnswer: "Blue",
    wrongAnswers: ["Red", "Orange", "Green"]
    }
    ];

    var movies4 = [
    wereTheMillers,
    theHangover,
    stepBrothers,
    dirtyGrandpa,
    theCampaign,
    bridesmaids,
    whiteChicks,
    grownUps,
    ];

    const comedymovies = () => {
        checkMovies();
        if (movies4.length == 0) {
            noQuestionsLeft();
        } else {
            for (let i = 0; i < movies4.length; i++) {
                if ((wereTheMillersQuestions.length <= 0) && (wereTheMillersQuestions != 'yes')) {
                    movies4.splice(movies4.indexOf(wereTheMillers), 1);
                    wereTheMillersQuestions = 'yes';
                } else if ((theHangoverQuestions.length <= 0) && (theHangoverQuestions != 'yes')) {
                    movies4.splice(movies4.indexOf(theHangover), 1);
                    theHangoverQuestions = 'yes';
                } else if ((stepBrothersQuestions.length <= 0) && (stepBrothersQuestions != 'yes')) {
                    movies4.splice(movies4.indexOf(stepBrothers), 1);
                    stepBrothersQuestions = 'yes';
                } else if ((dirtyGrandpaQuestions.length <= 0) && (dirtyGrandpaQuestions != 'yes')) {
                    movies4.splice(movies4.indexOf(dirtyGrandpa), 1);
                    dirtyGrandpaQuestions = 'yes';
                } else if ((theCampaignQuestions.length <= 0) && (theCampaignQuestions != 'yes')) {
                    movies4.splice(movies4.indexOf(theCampaign), 1);
                    theCampaignQuestions = 'yes';
                } else if ((bridesmaidsQuestions.length <= 0) && (bridesmaidsQuestions != 'yes')) {
                    movies4.splice(movies4.indexOf(bridesmaids), 1);
                    bridesmaidsQuestions = 'yes';
                } else if ((whiteChicksQuestions.length <= 0) && (whiteChicksQuestions != 'yes')) {
                    movies4.splice(movies4.indexOf(whiteChicks), 1);
                    whiteChicksQuestions = 'yes';
                } else if ((grownUpsQuestions.length <= 0) && (grownUpsQuestions != 'yes')) {
                    movies4.splice(movies4.indexOf(grownUps), 1);
                    grownUpsQuestions = 'yes';
                }
            }
        }
        return movies4[Math.floor(Math.random() * movies4.length)]();
    };

    // const closeandrestart = () => {
    //     $('.modal').css('display', 'none');
    // };

    const $closeandrestart = $('.closeandrestart');

    $closeandrestart.on('click', location.reload);
    //might need to change reload to assign(url)

    const checkMovies = () => {
        if ((movies.length == 0) && (movies2.length == 0) && (movies3.length == 0) && (movies4.length == 0)) {
            $('#youLost').css('display', 'block');
        }
    };


    $('#romance').on('click', (event) => {
        $reset();
        romanceMovies();
        $('.categoryh1').hide();
        $('#action').hide();
        $('#comedy').hide();
        $('#family').hide();
        $('.game').css('background-color', 'white');
        $('.pickCategory').css('padding', '0px');
        $('.game').css('margin-top', '50px');
        window.scrollTo( 0, screen.height/2 );
    });

    $('#action').on('click', (event) => {
        $reset();
        actionmovies();
        $('.categoryh1').hide();
        $('#romance').hide();
        $('#comedy').hide();
        $('#family').hide();
        $('.game').css('background-color', 'white');
        $('.pickCategory').css('padding', '0px');
        $('.game').css('margin-top', '50px');
        window.scrollTo( 0, screen.height/2 );
    });

    $('#comedy').on('click', (event) => {
        $reset();
        comedymovies();
        $('.categoryh1').hide();
        $('#action').hide();
        $('#romance').hide();
        $('#family').hide();
        $('.game').css('background-color', 'white');
        $('.pickCategory').css('padding', '0px');
        $('.game').css('margin-top', '50px');
        window.scrollTo( 0, screen.height/2 );
    });

    $('#family').on('click', (event) => {
        $reset();
        familymovies();
        $('.categoryh1').hide();
        $('#action').hide();
        $('#comedy').hide();
        $('#romance').hide();
        $('.game').css('background-color', 'white');
        $('.pickCategory').css('padding', '0px');
        $('.game').css('margin-top', '50px');
        window.scrollTo( 0, screen.height/2 );
    });

    $('.title').on('click', (event) => {
        $resetAll();
    });

    $('.letsgobtn').on('click', (event) => {
        $('#welcomescreen').hide();
        $('.body').css('display', 'block');
    });

}); //end of onload
