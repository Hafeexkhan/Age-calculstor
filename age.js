let currDate = document.getElementById("current_date");
let Dob = document.getElementById("DOB");
let agebtn = document.getElementById("calcage");
let displayAge = document.querySelector(".displayAge");
let ageBox = document.getElementById("age");

// Current date
let today = new Date();

// Display present date 
currDate.innerHTML = `Today’s Date is: ${today.toLocaleDateString()}`;

// Button click event
agebtn.addEventListener('click', () => {

    if (!Dob.value) {
        ageBox.innerHTML = "Please select your Date of Birth!";
        displayAge.style.visibility = "visible";
        return;
    }

    // Convert DD/MM/YY to real Date
    let parts = Dob.value.split("/");
    if (parts.length !== 3) {
        ageBox.innerHTML = "Invalid format! Use DD/MM/YYYY";
        displayAge.style.visibility = "visible";
        return;
    }

    let day = parseInt(parts[0]);
    let month = parseInt(parts[1]) - 1;
    let year = parseInt(parts[2].length === 2 ? "19" + parts[2] : parts[2]);

    let birthdate = new Date(year, month, day);

    if (isNaN(birthdate)) {
        ageBox.innerHTML = "Invalid Date!";
        displayAge.style.visibility = "visible";
        return;
    }

    let calcAge = today.getFullYear() - birthdate.getFullYear();
    let m = today.getMonth() - birthdate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        calcAge--;
    }

    displayAge.style.visibility = "visible";
    ageBox.innerHTML = `You are ${calcAge} years old`;
});
