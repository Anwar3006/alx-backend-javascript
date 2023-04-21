export default class Currency {
    constructor( code, name ) {
        this._code = code,
        this._name = name
    };

    get code() { return this._code }

    set code(new_code) {
        if( typeof(new_code) !== 'string' )
        {
            this._code = new_code
        }
        else if( new_code === '' ){
            throw "Code can not be empty"
        }
        else {
            throw new TypeError( "Code must be a string" )
        }
    }

    get name() { return this._name };

    set name(new_name) {
        if( typeof(new_name) !== 'string' )
        {
            this._code = new_name
        }
        else if( new_name === '' ){
            throw "Name can not be empty"
        }
        else {
            throw new TypeError( "Name must be a string" )
        }
    }

    displayFullCurrency() {
        return `${this.name} (${this.code})`
    }
}
