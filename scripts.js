window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
});


window.addEventListener("load", function () {
    function sendData() {
        var XHR = new XMLHttpRequest();

        // Bind the FormData object and the form element
        var FD = new FormData(form);

        // Define what happens on successful data submission
        XHR.addEventListener("load", function (event) {
            show();

            // alert(event.target.responseText);
        });

        //  Define what happens in case of error
        XHR.addEventListener("error", function (event) {
            alert('Oops! Something went wrong.');
        });

        // Set up our request
        XHR.open("POST", "https://hooks.zapier.com/hooks/catch/3124592/kng7pd");

        // The data sent is what the user provided in the form
        XHR.send(FD);
    };

 // Access the form element...
    var form = document.getElementById("guestName");

    // ...and take over its submit event.
    form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();
  });
});


var welcomeForm = document.getElementById("welcome-form")
var confirmation = document.getElementById("confirmation")

function show() {
    var form = document.getElementById("first-name");
    welcomeForm.classList.add("hide");
    confirmation.classList.remove("hide"); 
    setTimeout(function () {
        form.value = '';
        welcomeForm.classList.remove("hide");
        confirmation.classList.add("hide"); document.activeElement.blur();},5000);
}

