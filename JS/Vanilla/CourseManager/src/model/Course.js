/* ===================
    Course Model
=====================*/

function Course(details){
  this.courseCode = details.code;
  this.courseName = details.name;
  this.language = details.language;
  this.duration = details.duration;
  this.timestamp = genTimestamp();
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
  return true;
};

/**
* Retrieve all books held in current instance.
* @effect : Populate Course instances object
*/
Course.loadCourses = function(){
  var courseEntity = "",
      keys = [],
      courseString = "",
      courses = {},
      result = {};
  try{
    if(localStorage["books"]){
      courseString = localStorage['books'];
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
* Delete course from
* @param : Course row
* @return : Course object
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
