/*jshint esversion: 6 */


$(() => { // start of onload
    const buttonsArray = ['#button1', '#button2', '#button3', '#button4'];
    $('#romance').on('click', (event) => {
        theNoteBook();
    });

    // making a button array so that when the buttons are generated the answers can be randomly assigned to a class (button i). Then we can access a random class by doing Math.floor(Math.random * buttonsArray.length)




    const theNoteBook = () => {
        $.ajax({
            url: 'http://www.omdbapi.com/?t=the+notebook&apikey=361efa89',
        }).then (
            (data) => {
                // console.log(data);
                //call function() to generate a random question
                $('#movietitle').text(data.Title + ' ' + '('+ data.Year +')');
            });
                const $value = Math.floor(Math.random() * 3);
                console.log($value);
                $('#question').text(notebookQuestions[$value].question);
                const $assignRandomButton = (Math.floor(Math.random() * 4));
                $('#button' + ($assignRandomButton + 1)).text((notebookQuestions[$value].correctAnswer));

                buttonsArray.splice($assignRandomButton, 1);
                //make a function to assign the rest
                console.log(buttonsArray);
                console.log(buttonsArray[0]);
                for (let num = 1; num < 4; num++) {
                    $( "'" +buttonsArray[num]+ "'").text('hi');
                    $('#button1').text('hi');

}
                // const assignRandom = () => {
                    // for (let num = 0; num <= 2; num++) {
                    //     $( "'" +buttonsArray[num]+ "'").text('hi');
                        // buttonsArray.splice(0, 1);


                // }
                //


                 //when a button is assigned text it takes the class out of the buttonsArray

            };




const notebookQuestions = [
    {question:
        "What is the name of the town Allie and Noah meet in and later go back to at the end of the movie?",
    correctAnswer: "Seabrook",
    wrongAnswers: ["Seaway", "Seaside", "Sealane"]
    },
    {question:  "A year after Allie went away, where did Noah and Fin move to?",
    correctAnswer: "Atlanta, Georgia",
    wrongAnswers: ["Seaway", "Seaside", "Sealane"]
    },
    {question: "How long did Noah send Allie letters?",
    correctAnswer: "one year",
    wrongAnswers: ["Seaway", "Seaside", "Sealane"]
    }
];

const $romanceMovies = () => {
    return [theNoteBook()
];


};
}); //end of onload
