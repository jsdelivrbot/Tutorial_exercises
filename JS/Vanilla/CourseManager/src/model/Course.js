/* ===================
    Course Model
=====================*/

function Course(details){
  this.courseCode = details.code;
  this.courseName = details.name;
  this.language = details.language;
  this.duration = details.duration;
  //this.timestamp = genTimestamp();
}

Course.instances = {};

Course.prototype.genTimestamp = function(){
  return new Date();
};

/**
* Add New course object to instance
* @param : Course details heldin object
* @return : boolean based on success
*/
Course.add = function(details){
  var course = new Course(details);
  Course.instances[details.code] = course;
  console.log(Course.instances);
  return true;
};

/**
* Retrieve all books held local storage and hold in Course instance object.
* @effect : Populate Course instances object
*/
Course.loadCourses = function(){
  var courseEntity = "",
      keys = [],
      courseString = "",
      courses = {},
      result = {};
  try{
    if(localStorage["courses"]){
      courseString = localStorage['courses'];
    }
  }
  catch(e){
    result.error = "Could not read from the local storage";
    return;
  }
  if(courseString){
    courses = JSON.parse(courseString);
    keys = Object.keys(courses);
    var i;
    for(i = 0; i < keys.length; i++){
      courseEntity = keys[i];
      Course.instances[courseEntity] = Course.convertToObject(courses[key]);
    }
  }
};

/**
* Convert course row into a book object
* @param : Course row
* @return : Course object
*/
Course.convertToObject = function(row){
  var course = new Course(row);
  return course;
};

/**
* Edit course name --> Need to add more functionality
* @param : Course row
* @return : Course object
*/
Course.update = function(courseEntity){
  var course = Course.instances[courseEntity.code];
  if(courseEntity.name != course.name){
    course.name = courseEntity.name;
  }
};

/**
* Delete course from storage
* @param : Unique course code
* @return : Boolean based on success
*/
Course.destroy = function(code){
  if(Course.instances[code]){
    delete Course.instances[code];
    return true;
  }
  else{
    return false;
  }
};

/**
* Save all courses held in the memory instance to local storage
*/
Course.saveAll = function(){
  var courseString = "",
      error = {
        status: false
      },
      courseCount = Object.keys(Course.instances).length;
  try{
    courseString = JSON.stringify(Book.instances);
    localStorage['courses'] = courseString;
  }
  catch(e){
    error.message = "Could not save data to the local storage";
    console.log("Error saving to DB - " + e);
  }
};

Course.clearData = function(){
  if(confirm("Are you sure you want to clear all data?")){
    localStorage['courses'] = {};
  }
};
