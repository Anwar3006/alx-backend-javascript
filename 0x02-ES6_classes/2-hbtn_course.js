export default class HolbertonCourse {
    constructor( name, length, students ) {
        this._name = name,
        this._length = length,
        this._students = students
    }

    get name() { return this._name };

    set name(new_name) {
        if( typeof(new_name) === 'string' )
        {
            this._name = new_name;
        }
        else {
            throw new TypeError( "Name must be a string" )
        }
    };

    get length(){ return this._length };

    set length(new_length) {
        if( typeof(new_length) === 'number' )
        {
            this._name = new_length;
        }
        else if( new_length === '' ){
            throw ( "Length can not be empty" )
        }
        else {
            throw new TypeError( "Length must be a number" )
        }
    }

    get students() { return this._students };

    set students(new_students) {
        
        if( typeof(new_students) === 'object' )
        {
            this._students = new_students;
        }
        else if( new_students === '' ){
            throw ( "Array can not be empty" )
        }
        else {
            throw new TypeError( "Entry must be a string array" )
        }
    }
}
