export class Registration{

    childName;
    age;
    course;
    email;
    tel;

    constructor(childName, age, course, email, tel) {
        this._childName = childName;
        this._age = age;
        this._course = course;
        this._email = email;
        this._tel = tel;
    }


    get childName() {
        return this._childName;
    }

    set childName(value) {
        this._childName = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get course() {
        return this._course;
    }

    set course(value) {
        this._course = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get tel() {
        return this._tel;
    }

    set tel(value) {
        this._tel = value;
    }
}