export class GradeSchool {
    classes;
    constructor() {
        this.classes = new Map();
    }
    roster() {
        return JSON.parse(JSON.stringify(Object.fromEntries(this.classes.entries())));
    }
    add(name, grade) {
        for (const key of this.classes.keys()) {
            let values = this.classes.get(key) ?? [];
            if (values.indexOf(name) !== -1) {
                values.splice(0, 1).sort();
            }
        }
        if (this.classes.has(grade)) {
            const students = this.classes.get(grade);
            if (students) {
                students.push(name);
                students.sort();
            }
        }
        else {
            this.classes.set(grade, [name]);
        }
    }
    grade(grade) {
        return JSON.parse(JSON.stringify(this.classes.get(grade)?.sort() || []));
    }
}
let school = new GradeSchool();
school.add("Aimee", 2);
const roster = school.roster();
try {
    roster[2].push("Oops.");
}
catch {
    /* empty */
}
console.log(school.roster());
// console.log(school.grade(1));
