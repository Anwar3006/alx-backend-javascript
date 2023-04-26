export interface Teacher {
    //readonly - properties should only be modifiable when an object is first created
    readonly firstName: string;  
    readonly lastName: string;
    yearsOfExperience?: number;
    fullTimeEmployee: boolean;
    location: string;
    [propName: string]: any; 

}

export interface Director extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string ): string;
}

export function printTeacher(firstName: string, lastName: string) {
    return `${firstName[0]}. ${lastName}`
}

export interface IStudentClass {
    workOnHomework(): string;
    displayName(): string;
}

export interface IStudentConstructor {
    new(fn: string, ln: string): IStudentClass;
}

export class StudentClass implements IStudentClass{
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this._firstName;
    }
}
