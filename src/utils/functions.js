export const showDecimalNumber = (str) =>{
    return str.substring(0, str.length - 2) + '.' + str.substring(str.length - 2, str.length);
}