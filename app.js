/*jshint esversion: 6 */


$(() => { // start of onload
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

const $romanceMovies = () => {
    return [theNoteBook()
];
};

$('#romance').on('click', (event) => {
    theNoteBook();
    reset();
});

$('#action').on('click', (event) => {
    alert('hi');
});


}); //end of onload
