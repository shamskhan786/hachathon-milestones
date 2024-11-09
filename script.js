var buttonSkills = document.getElementById("button-skills");
var skills = document.getElementById("skills");
buttonSkills.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else
        (skills.style.display = "none");
});
