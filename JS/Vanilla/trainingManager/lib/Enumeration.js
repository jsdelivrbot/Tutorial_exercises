/**
* Enumeration object
* @param -> Array or Object
* @return -> Enumeration Object
*/

function Enumeration(args){

  var i = 0,
  lbl = "",
  LBL = "";

  //If arguments are of type Array
  if(Array.isArray(args))
  {
    if(!arg.every(function(n){
      return (typeof(n) === 'string'); })){
        throw new OtherConstraintViolation("List of labels must be a string");
      }
      this.labels = args;
      this.enumLitNames = this.labels;
      this.codeList = null;
  }
  //If arguments are of type Object
  else if(typeof(args) === 'object' && Object.keys(args).length > 0 )
  {
    if(!Object.keys(args).every(function(code){
      return (typeof(args[code]) === 'string'); })){
        throw new OtherConstraintViolation("All values of the map must be a string");
      }
      this.codeList = args;
      this.enumLitNames = Object.keys(this.codeList);
      this.labels = this.enumLitNames.map(function(ch){
        return args[ch] + "(" + ch + ")";
      });
  }
  else
  {
    throw new OtherConstraintViolation("Invalid Enumeration constructor arguements");
  }

  /*Create ENUM object from Array String values removing \w, - and transforming
    to uppercase */
  this.MAX = this.enumLitNames.length;
  for(i = 1; i < this.enumLitNames.length; i++){
    lbl = this.enumLitNames[i-1].replace(/( |-)/g, "_");
    LBL = lbl.split("_").map(function(lblpart){
      return lblpart.toUpperCase();
    }).join("_");
    this[LBL] = i;
  }
  Object.freeze(this);
}
