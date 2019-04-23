
window.onload = function(){
    let regButton:HTMLButtonElement = document.querySelector("main > button");
    regButton.onclick = registerStudent;
}

function registerStudent(){
    let nextStudent:Student = getStudent();
    displayStudent(nextStudent);
}

/**
 * Gets user input from the form and wraps it in a student object
 */
function getStudent():Student{
    let newStu = new Student();
    newStu.firstName = (<HTMLInputElement>document.getElementById("first-name")).value;
    newStu.lastName = (<HTMLInputElement>document.getElementById("last-name")).value;

    return newStu;
}

function displayStudent(currStudent:Student){
    let studentLi:HTMLLIElement = document.createElement("li");
    studentLi.innerText = currStudent.firstName + " " + currStudent.lastName;
    //remove an student from register when you click on them?
    studentLi.onclick = function(){
        let agree = confirm("Are you sure you want to delete?");
        if(agree){
            let currItem = <HTMLLIElement>this;
            currItem.remove();
        }
        
    }
    //Getting u.list and appending the new li
    document.querySelector("#roster > ul").appendChild(studentLi);
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