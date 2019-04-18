window.onload = function () {
    let regButton = document.querySelector("main > button");
    regButton.onclick = registerStudent;
};
function registerStudent() {
    let nextStudent = getStudent();
    displayStudent(nextStudent);
}
function getStudent() {
    let newStu = new Student();
    newStu.firstName = document.getElementById("first-name").value;
    newStu.lastName = document.getElementById("last-name").value;
    return newStu;
}
function displayStudent(currStudent) {
    alert(currStudent.firstName + " " + currStudent.lastName);
}
class Student {
}
let testStu = new Student();
testStu.firstName = "Kelsey";
testStu.lastName = "Bonnicksen";
testStu.dateOfBirth = new Date(1995, 2, 6);
