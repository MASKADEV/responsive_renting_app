var user_name = document.querySelector('.user_name');
var user_email = document.querySelector('.user_email');
var user_subject = document.querySelector('.user_subject');
var submit_btn = document.querySelector('.send-btn');


submit_btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (user_name.value == '') {
        alert('Please Enter your name');
    } else if (user_email.value == '') {
        alert('Enter Email Please');
    } else if (user_subject.value == '') {
        alert('Please Enter Your Subject');
    } else {
        alert(`User name: ${user_name.value}\nUser email: ${user_email.value}\nUser Subject: ${user_subject.value}`);
    }

})