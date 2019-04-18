
window.onload = function(){
    let regButton:HTMLButtonElement = document.querySelector("main > button");
    regButton.onclick = registerStudent;
}

function registerStudent(){
    let nextStudent:Student = getStudent();
    displayStudent(nextStudent);
}

function getStudent():Student{
    let newStu = new Student();
    newStu.firstName = (<HTMLInputElement>document.getElementById("first-name")).value;
    newStu.lastName = (<HTMLInputElement>document.getElementById("last-name")).value;

    return newStu;
}

function displayStudent(currStudent:Student){
    alert(currStudent.firstName + " " + currStudent.lastName);
}

/**
 * Represents a CPTC Student
 */
class Student{
    firstName:String;
    lastName:String;
    dateOfBirth:Date;
}

//test code
let testStu:Student = new Student();
testStu.firstName = "Kelsey";
testStu.lastName = "Bonnicksen";
testStu.dateOfBirth = new Date(1995, 2, 6);