const students = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

const result = {};

for (let student in students) {
    let scores = Object.values(students[student]);
    let average = Math.floor(scores.reduce((sum, score) => sum + score, 0) / scores.length);
    result[student] = { average };
}

console.log(result);
