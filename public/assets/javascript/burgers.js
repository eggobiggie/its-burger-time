$(function() {
    $(".devourButton").on("click", function(event) {
        var id = $(this).data("id");
        // var newDevour = $(this).data("newdevoured");

        var newDevourState = {
            devoured: true
        };

        $.ajax("/api/burgers/:" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("Changed devoured to true");
                location.reload();
            }
        )
    });
    $("#addButton").on("click", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#textarea1").val().trim()
        };
        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Created new burger");
                location.reload();
            }
        );
    });
});