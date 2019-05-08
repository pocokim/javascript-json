const typeChecker = {
    isNumber (value) {
        return /^-?[0-9\.]+$/.test(value)
    },
    isNull (value) {
        return value === 'null';
    },
    isUndefined (value) {
        return value === 'undefined';
    },   
    isBoolean (value) {
        return value === 'true' || value === "false";
    }, 
    isValidString (value) {
        if(/.+['"].+/.test(value)) throw new TypeError(`${value}는 올바른 문자열이 아닙니다.`)
        return true; 
    },
    isOpenBraket (value){
        return value === "["
    },
    isCloseBraket(value){
        return value === "]"
    },    
    isString (value) {
        return (/^'.+'$/g.test(value) || /^".+"$/g.test(value)) && this.isValidString(value)
    }
}
module.exports = typeChecker;
