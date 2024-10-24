document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("feedbackForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Feedback submitted successfully!");
    });
});
