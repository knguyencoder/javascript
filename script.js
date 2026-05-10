// Custom JavaScript function
function setWelcomeName() {
    const welcomeName = document.getElementById("welcomeName");

    if (welcomeName) {
        welcomeName.textContent = "friend";
        console.log("Welcome name has been set.");
    }
}

$(document).ready(function () {
    setWelcomeName();

    $("#welcomeName").hover(
        function () {
            $(this).fadeOut("normal", "linear", function () {
                $(this).text("Hand Picked Just for You").fadeIn("slow", "swing");
            });
        },

        function () {
            $(this).fadeOut("fast", "swing", function () {
                $(this).text("friend").fadeIn("slow", "linear");
            });
        }
    );
});