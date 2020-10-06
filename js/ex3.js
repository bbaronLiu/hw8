/* Tutorial 4
Example 2 JavaScript code
*/
console.log("Baron's Output from Tutorial 4 Example 3");


const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },

const cStudents = [];
for (const id of students) {
    var x = id.lastName
     if (x.charAt(0) === "C") {
        let gradesSum = 0;
        var score = id.scores;
        var max = score.reduce(function(a, b) {
            return Math.max(a, b);
        });
        var min = score.reduce(function(a, b){
            return Math.min(a, b);
        });
            for (const grade of id.grades) {
                gradesSum += grade;
            }
        const averageGrade = gradesSum / id.grades.length;
        cStudents.push({
        firstName: id.firstName,
        lastName: id.lastName,
        max: max,
        min: min,
        avgGrade: averageGrade,

        });
    }
}

console.log(cStudents)
    