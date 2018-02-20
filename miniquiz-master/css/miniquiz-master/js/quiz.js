var app = {
    getQuiz: function() {
        var url = "https://opentdb.com/api.php?amount=10&type=multiple";
        $.getJSON(url, function(data) {

            var fetchQuestion = function(question) {
                $("#question").html("???");
                var correctOption = 1;
                for (i = 0; i < 4; i++) {
                    if (correctOption == i) {
                        $("#option" + i).html("This is the right answer");
                    } else {
                        $("#option" + i).html("This is a wrong answer");                    
                    }
                }
                highlightOption(-1); // Clears selection
            };

            var selectedAnswer = -1;

            var highlightOption = function(selectedIndex) {
                for (i = 0; i < 4; i++) {
                    $("#option" + i).removeClass("selected");
                }
                if (selectedIndex >= 0) {
                    selectedAnswer = selectedIndex;
                    $("#option" + selectedIndex).addClass("selected");
                    $("#checkAnswer").show();
                } else {
                    selectedAnswer = -1;
                    $("#checkAnswer").hide();
                }
            };

            $("#option0").click(function() {
                highlightOption(0);
            });
            $("#option1").click(function() {
                highlightOption(1);
            });
            $("#option2").click(function() {
                highlightOption(2);
            });
            $("#option3").click(function() {
                highlightOption(3);
            });

            var currentQuestion = 0;
            fetchQuestion(data.results[currentQuestion]);
            $("#nextQuestion").hide();
            $("#scorecard").html("Not sure what the score is");

            var score = 0;

            $("#checkAnswer").click(function() {
                if (data.results[currentQuestion].correct_answer === $("#option" + selectedAnswer).html()) {
                    score++;
                    $("#scorecard").html("Potato " + score);
                } else {
                    $("#scorecard").html("Tomato " + score);
                }
                $("#nextQuestion").show();
                $("#checkAnswer").hide();
            })

            $("#nextQuestion").click(function() {
                currentQuestion++;
                if (currentQuestion >= 10) {
                    $("#scorecard").html("There's a message here?");
                } else {
                    fetchQuestion(data.results[currentQuestion]);
                    $("#scorecard").html(`${score} / 10`);
                }
                $("#nextQuestion").hide();
            });

        }); 
    },

    refresh: function() {
        $("#quiz").html("");
        this.getQuiz();
    }
};

app.getQuiz();