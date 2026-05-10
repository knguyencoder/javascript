function showWelcomeMessage() {
    $("#welcomeText").text("Welcome to my About Us page. Thank you for visiting my final website!");
}

$(document).ready(function () {
    $("#skillsPanel").hide();
    $("#welcomeText").hide();

    $("#welcomeBtn").click(function () {
        showWelcomeMessage();
        $("#welcomeText").fadeIn(800);
    });

    $("#toggleSkillsBtn").click(function () {
        $("#skillsPanel").slideToggle(800);
    });

    $("#fadeAssignmentsBtn").click(function () {
        $("#assignmentLinks").fadeOut(600).fadeIn(600);
    });
});