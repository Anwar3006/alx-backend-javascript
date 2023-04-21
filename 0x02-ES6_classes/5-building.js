export default class Building {
    constructor(sqft){
        this._sqft = sqft;

        /**
         * abstract method
         */
        
        if( this.constructor !== Building ) {
            if( typeof(this.evacuationWarningMessage) !== 'function' ) {
                throw new Error( "Class extending Building must override evacuationWarningMessage" )
            }
        }
    }

    
    get sqft() { return this._sqft }

    set sqft(value) {
        if( value instanceof Number )
        {
            this._sqft = value;
        }else if ( value === '' ) {
            throw new Error( "Value must be given" )
        }else {
            throw new TypeError( "Value must be a number" )
        }
    }
}
