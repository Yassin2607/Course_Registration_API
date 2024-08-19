export class Registration {

    id;
    childName;
    age;
    course;
    email;
    tel;

    constructor(id, childName, age, course, email, tel) {
        this.id = id;
        this.childName = childName;
        this.age = age;
        this.course = course;
        this.email = email;
        this.tel = tel;
    }

    static createSampleRegistrations() {

        let registrations = [];

        for (let i = 0; i < 10; i++) {
            let registration = new Registration(
                i + 1,
                "Child " + i,
                10 + i,
                "Course " + i,
                "child" + i + "@example.com",
                "1234567" + i
            );
            registrations.push(registration);
        }

        return registrations;
    }


}