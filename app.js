/*jshint esversion: 6 */


$(() => { // start of onload
    const $reset = () => {
        $('.Q').hide();
        $('#question').hide();
        $('.answers').hide();
        $('#movietitle').hide();
        $('#img').hide();
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

    const theNoteBook = () => {
        $.ajax({
            url: 'http://www.omdbapi.com/?t=the+notebook&apikey=361efa89',
        }).then (
            (data) => {
                $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
                $('#img').prepend($('<img>',{id:'image',src:data.Poster}));
            });
        $('.Q').text('Question');
        const value = Math.floor(Math.random() * 3);
        $('#question').text(notebookQuestions[value].question);
        $makeButtons();
        const correctAnswerValue = Math.floor(Math.random() * 4);
        console.log(correctAnswerValue);
        console.log(buttonsArray[correctAnswerValue]);
        const string = buttonsArray[correctAnswerValue];
        console.log(string);
        $(string).text(notebookQuestions[value].correctAnswer);
        buttonsArray.splice(correctAnswerValue, 1);
        console.log(buttonsArray);
        for (let num = 0; num <= 2; num++) {
            $(buttonsArray[0]).text((notebookQuestions[value].wrongAnswers[num]));
            buttonsArray.splice(0, 1);
        }
        $('.button').on('click', (event) => {
            if (event.target.innerHTML == notebookQuestions[value].correctAnswer) {
                $(string).css('background-color', '#17e800');
                // $reset();
            }
            else { $(event.target).css('background-color', '#f22c00');
        }
        });
    };

    const notebookQuestions = [
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
    const value = Math.floor(Math.random() * 3);
    $('#question').text(aboutTimeQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    console.log(correctAnswerValue);
    console.log(buttonsArray[correctAnswerValue]);
    const string = buttonsArray[correctAnswerValue];
    console.log(string);
    $(string).text(aboutTimeQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    console.log(buttonsArray);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((aboutTimeQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').on('click', (event) => {
        if (event.target.innerHTML == aboutTimeQuestions[value].correctAnswer) {
            $(string).css('background-color', '#17e800');
            // $reset();
        }
        else { $(event.target).css('background-color', '#f22c00');
    }
    });
};

    const aboutTimeQuestions = [
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
    const value = Math.floor(Math.random() * 3);
    $('#question').text(justGoWithItQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    console.log(correctAnswerValue);
    console.log(buttonsArray[correctAnswerValue]);
    const string = buttonsArray[correctAnswerValue];
    console.log(string);
    $(string).text(justGoWithItQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    console.log(buttonsArray);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((justGoWithItQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').on('click', (event) => {
        if (event.target.innerHTML == justGoWithItQuestions[value].correctAnswer) {
            $(string).css('background-color', '#17e800');
            // $reset();
        }
        else { $(event.target).css('background-color', '#f22c00');
    }
    });
};

    const justGoWithItQuestions = [
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
    const value = Math.floor(Math.random() * 3);
    $('#question').text(lalaLandQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    console.log(correctAnswerValue);
    console.log(buttonsArray[correctAnswerValue]);
    const string = buttonsArray[correctAnswerValue];
    console.log(string);
    $(string).text(lalaLandQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    console.log(buttonsArray);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((lalaLandQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').on('click', (event) => {
        if (event.target.innerHTML == lalaLandQuestions[value].correctAnswer) {
            $(string).css('background-color', '#17e800');
            // $reset();
        }
        else { $(event.target).css('background-color', '#f22c00');
    }
    });
    };

    const lalaLandQuestions = [
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
    const value = Math.floor(Math.random() * 3);
    $('#question').text(noStringAttachedQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    console.log(correctAnswerValue);
    console.log(buttonsArray[correctAnswerValue]);
    const string = buttonsArray[correctAnswerValue];
    console.log(string);
    $(string).text(noStringAttachedQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    console.log(buttonsArray);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((noStringAttachedQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').on('click', (event) => {
        if (event.target.innerHTML == noStringAttachedQuestions[value].correctAnswer) {
            $(string).css('background-color', '#17e800');
            // $reset();
        }
        else { $(event.target).css('background-color', '#f22c00');
    }
    });
    };

    const noStringAttachedQuestions = [
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
    const value = Math.floor(Math.random() * 3);
    $('#question').text(loveActuallyQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    console.log(correctAnswerValue);
    console.log(buttonsArray[correctAnswerValue]);
    const string = buttonsArray[correctAnswerValue];
    console.log(string);
    $(string).text(loveActuallyQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    console.log(buttonsArray);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((loveActuallyQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').on('click', (event) => {
        if (event.target.innerHTML == loveActuallyQuestions[value].correctAnswer) {
            $(string).css('background-color', '#17e800');
            // $reset();
        }
        else { $(event.target).css('background-color', '#f22c00');
    }
    });
    };

    const loveActuallyQuestions = [
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
    const value = Math.floor(Math.random() * 3);
    $('#question').text(aStarIsBornQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    console.log(correctAnswerValue);
    console.log(buttonsArray[correctAnswerValue]);
    const string = buttonsArray[correctAnswerValue];
    console.log(string);
    $(string).text(aStarIsBornQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    console.log(buttonsArray);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((aStarIsBornQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').on('click', (event) => {
        if (event.target.innerHTML == aStarIsBornQuestions[value].correctAnswer) {
            $(string).css('background-color', '#17e800');
            // $reset();
        }
        else { $(event.target).css('background-color', '#f22c00');
    }
    });
    };

    const aStarIsBornQuestions = [
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
    const value = Math.floor(Math.random() * 3);
    $('#question').text(theSpectacularNowQuestions[value].question);
    $makeButtons();
    const correctAnswerValue = Math.floor(Math.random() * 4);
    console.log(correctAnswerValue);
    console.log(buttonsArray[correctAnswerValue]);
    const string = buttonsArray[correctAnswerValue];
    console.log(string);
    $(string).text(theSpectacularNowQuestions[value].correctAnswer);
    buttonsArray.splice(correctAnswerValue, 1);
    console.log(buttonsArray);
    for (let num = 0; num <= 2; num++) {
        $(buttonsArray[0]).text((theSpectacularNowQuestions[value].wrongAnswers[num]));
        buttonsArray.splice(0, 1);
    }
    $('.button').on('click', (event) => {
        if (event.target.innerHTML == theSpectacularNowQuestions[value].correctAnswer) {
            $(string).css('background-color', '#17e800');
            // $reset();
        }
        else { $(event.target).css('background-color', '#f22c00');
    }
    });
    };

    const theSpectacularNowQuestions = [
    {question:
        "At the beginning of the movie, who is Sutter Keely writing a letter to??",
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



    const $romanceMovies = () => {
        //make an array of romance movies so that when the user clicks on the romance button it generates a random number for the array
        return [theNoteBook()
        ];
    };



$('#romance').on('click', (event) => {
    theSpectacularNow();
    console.log(event.target.innerHTML);
});

$('#action').on('click', (event) => {
    alert('hi');
});


}); //end of onload
