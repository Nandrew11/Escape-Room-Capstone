let studentCounter = 0;
const students = [];

function addStudent() {
    const nameInput = document.getElementById("name");
    const gpaInput = document.getElementById("gpa");

    const name = nameInput.value.trim();
    const gpa = parseFloat(gpaInput.value);

    if (name !== "" && !isNaN(gpa) && gpa >= 0 && gpa <= 4.0) {
        const student = { name, gpa };
        students.push(student);
        nameInput.value = "";
        gpaInput.value = "";
        displayStudents();
        calculateAverageGPA(); // Calculate and display average GPA
    } else {
        alert("Invalid input. Please enter a valid name and GPA.");
    }
}

function removeLastStudent() {
    if (students.length > 0) {
        students.pop();
        displayStudents();
        calculateAverageGPA(); // Calculate and display average GPA
    } else {
        alert("There are no students to remove.");
    }
}

function removeAStudent() {
    const indexInput = document.getElementById("indexToRemove");
    const index = parseInt(indexInput.value);

    if (!isNaN(index) && index >= 1 && index <= students.length) {
        students.splice(index - 1, 1);
        displayStudents();
        calculateAverageGPA(); // Calculate and display average GPA
        indexInput.value = "";
    } else {
        alert("Invalid index. Please enter a valid index to remove a student.");
    }
}

function calculateAverageGPA() {
    if (students.length > 0) {
        const totalGPA = students.reduce((sum, student) => sum + student.gpa, 0);
        const average = totalGPA / students.length;
        document.getElementById("average-gpa").textContent = `Average GPA: ${average.toFixed(2)}`;
    } else {
        document.getElementById("average-gpa").textContent = "Average GPA: N/A";
    }
}

function displayStudents() {
    const studentList = document.getElementById("student-list");
    studentList.innerHTML = "";

    students.forEach((student, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${student.name} (GPA: ${student.gpa.toFixed(2)})`;
        studentList.appendChild(listItem);
    });
}
