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

//Regular expression object holder
RegEx = {
  ISBN: /\b\d{9}(\d|X)/
};

// Temproary Book object holder
Book.instances = {};

/**
* Check constraints of ISBN
* @param ISBN number
* @return false | constraint violation
*/
Book.checkIsbn = function(id){
  if(!id){
    return new NoConstraintViolation();
  }
  else if(typeof(id) != "string" || id.trim() === ""){
    return new RangeConstraintViolation(
      "ISBN cannot be an empty string!");
  }
  else if( !RegEx.ISBN.test(id) ){
    return new PatternConstraintValidation(
      " ISBN format incorrect");
  }
  else{
    return new NoConstraintViolation();
  }
};

/**
* Return constraint violation based on property or unique ISBN failure
* @param false | constraint violation object
* @return constraint violation
*/
Book.checkIsbnAsId = function (id) {
  var constraintViolation = Book.checkIsbn( id);
  if ((constraintViolation instanceof NoConstraintViolation))
  {
    if (!id) {
      constraintViolation = new MandatoryValueConstraintViolation(
          "A value for the ISBN must be provided!");
    } else if (Book.instances[id]) {
      constraintViolation = new UniquenessConstraintViolation(
          "There is already a book record with this ISBN!");
    } else {
      constraintViolation = new NoConstraintViolation();
    }
  }
  return constraintViolation;
};

/*
*
*/
Book.prototype.setIsbn = function(id){
  var validationResult = Book.checkIsbnAsId(id);
  if (validationResult instanceof NoConstraintViolation) {
  this.isbn = id;
} else {
  throw validationResult;
}
};

/*
* Overide tostring function
*/
Book.prototype.toString = function () {
  return "Book{ ISBN:" + this.isbn + ", title:" +
      this.title + ", year:" + this.year +"}";
};
