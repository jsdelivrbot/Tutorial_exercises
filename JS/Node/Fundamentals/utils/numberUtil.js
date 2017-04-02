class UtilNumber {

  // Convert decimal number to hexidecimal base
  static calculateHex(decimal){
    const BASE = 16;
    const BASE16 = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexiConvert = [];
    var decimalNumber = decimal;
    do{
      var rem = decimalNumber % BASE;
      decimalNumber = Math.trunc(decimalNumber/BASE);
      hexiConvert.unshift(BASE16[rem]);
    } while(rem !== 0);

    return hexiConvert.slice(1, hexiConvert.length).join('');
  }

  //
  static base10to16(arg){
    if(typeof arg == 'object'){
      return arg.map((num) => {
        UtilNumber.calculateHex(num);
      })}
    else{
      return UtilNumber.calculateHex(arg);
    }
  }

}//end of class

module.exports = UtilNumber
