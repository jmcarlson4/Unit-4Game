var RandomNumber = [Math.floor(Math.random() * 101)];
        $("#number-to-guess").text(RandomNumber);
        var counter = 0;
        var NumberOptions = [5, 1, 20, 34];
        for (var i = 0; i < NumberOptions.length; i++) {
            var imageCrystal = $("<img>");
            imageCrystal.addClass("diamond-image");
            imageCrystal.attr("src", "https://cdn.pixabay.com/photo/2016/02/14/09/45/precious-1199183__340.jpg");
            imageCrystal.attr("data-diamondvalue", NumberOptions[i]);
            $("#diamond").append(imageCrystal);
        }

        $(".diamond-image").on("click", function () {
            var diamondValue = ($(this).attr("data-diamondvalue"));
            diamondValue = parseInt(diamondValue);

            counter += diamondValue;
            alert("Your score: " + counter);
            if (counter === RandomNumber) {
                alert("You WIN!");
            }
            else if (counter > RandomNumber) {
                alert("You Lose!");
                confirm("Would you like to play again?");
            }
        }
        );