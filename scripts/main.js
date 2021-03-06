window.onload = function () {
    var regButton = document.querySelector("main > button");
    regButton.onclick = registerStudent;
};
function registerStudent() {
    if (isValid()) {
        var nextStudent = getStudent();
        displayStudent(nextStudent);
    }
}
function isValid() {
    var reqElems = document.querySelectorAll("main input[data-required]");
    var valid = true;
    for (var i = 0; i < reqElems.length; i++) {
        var currInput = reqElems[i];
        if (currInput.value.trim() == "") {
            var span = currInput.nextElementSibling;
            var msg = span.getAttribute("data-msg");
            span.innerHTML = msg;
            valid = false;
        }
    }
    return valid;
}
function getStudent() {
    var newStu = new Student();
    newStu.firstName = document.getElementById("first-name").value;
    newStu.lastName = document.getElementById("last-name").value;
    return newStu;
}
function displayStudent(currStudent) {
    var studentLi = document.createElement("li");
    studentLi.innerText = currStudent.firstName + " " + currStudent.lastName;
    studentLi.onclick = function () {
        var agree = confirm("Are you sure you want to delete?");
        if (agree) {
            var currItem = this;
            currItem.remove();
        }
    };
    document.querySelector("#roster > ul").appendChild(studentLi);
}
var Student = (function () {
    function Student() {
    }
    return Student;
}());
var testStu = new Student();
testStu.firstName = "Kelsey";
testStu.lastName = "Bonnicksen";
testStu.dateOfBirth = new Date(1995, 2, 6);
