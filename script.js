//JavaScript for Phishing Pop-up
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {

    // Prevent the default form submission
    event.preventDefault();
    
    // Check if form validation passes
    if (validateForm()) {
        modal.classList.add("open");
    }
    
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}

function validateName() {
    const name = document.getElementById('name').value;
    const namePattern = /^[a-zA-Z\s]+$/;

    if (!namePattern.test(name) || name.trim() === '') {
        alert('Please enter a valid name (only letters and spaces).');
        return false;
    }
    return true;
}

function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phone_number').value;
    const phonePattern = /^[\d]{3}[-\s]?\d{3}[-\s]?\d{4}$/;

    if (!phonePattern.test(phoneNumber)) {
        alert('Please enter a valid phone number (e.g., 123-456-7890 or (123) 456-7890).');
        return false;
    }
    return true;
}


function validateNumber() {
    const quantity = document.getElementById('gtid_number').value;

    if (isNaN(quantity) || quantity === '') {
      alert('Please enter a valid GTID number.');
      return false;
    }
    return true;
}

function validateNumber1() {
    const phoneNumber = document.getElementById('ssn').value;
    const phonePattern = /^\d{7}$/;

    if (!phonePattern.test(phoneNumber)) {
        alert('Please enter a valid Social Security number (must be 7 digits).');
        return false;
    }
    return true;
}

function validateTextEntered() {
    const text = document.getElementById('description').value;

    if (text.trim() === '') {
        alert('Please provide a description of the issue.');
        return false;
    }
    return true;
}


// Combined validation function
function validateForm() {
    return validateEmail() && validateName() && validatePhoneNumber() && validateNumber() && validateNumber1() && validateTextEntered();
}