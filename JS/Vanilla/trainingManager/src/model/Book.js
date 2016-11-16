/* Book -  Models
================*/


/**
* Book Model
* @param Object containing book details
* @return
*/
function Book ( details ) {
  this.isbn = "";
  this.title = "";
  this.description = "";
  this.pages = 0;
  this.currentPage = 0;

  if(arguments.length > 0 ){
    this.setDescription( details.description );
    this.setTitle( details.title );
    this.setPages( details.pages );
    this.setIsbn( details.isbn );
  }

}

RegEx = {
  ISBN: /\b\d{9}(\d|X)/
};

Book.instances = {};

Book.checkIsbn = function(id){
  if(!id){
    return new NoConstraintViolation();
  }
  else if(typeof(id) != "string" || id.trim() === ""){
    return new RangeConstraintViolation(
      "ISBN cannot be an empty string!");
  }
  else if( !RegEx.ISBN.test(id) ){
    return new 
  }
};
