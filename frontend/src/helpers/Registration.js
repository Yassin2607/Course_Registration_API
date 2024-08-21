export class Registration {

    id;
    name;
    age;
    course;
    email;
    tel;

    constructor(id, name, age, course, email, tel) {
        this.id = id;
        this.name = name;
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
                "Maths",
                "child" + i + "@example.com",
                "1234567" + i
            );
            registrations.push(registration);
        }

        return registrations;
    }

    static copyConstructor(registration) {
        return new Registration(
            registration.id,
            registration.name,
            registration.age,
            registration.course,
            registration.email,
            registration.tel
        );
    }

    static createEmptyRegistration() {
        return new Registration(null, null, null, null, null, null);
    }


}