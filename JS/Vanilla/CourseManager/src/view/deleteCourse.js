courseLib.view.deleteCourse = {

  setupInterface: function(){

    //Declare interface variables
    var delBtn = document.forms['delete_course'].commit,
        selectEl = document.forms['delete_course'].selectCourse,
        key = "",
        keys = [],
        course = null,
        option = null;

      //Load courses from local stoarge into instances object
      Course.loadCourses();

      //Iterate over instances key and populate <select> element
      keys = Object.keys(Course.instances);
      for(var i = 0 ; i < keys.length; i++){
        key = keys[i];
        course = Course.instances[key];
        option = document.createElement('option');
        option.text = course.name;
        option.value = course.code;
        selectEl.add(option,null);
      }

      //Add button and window event listeners
      delBtn.addEventListener('click', courseLib.view.deleteCourse.handleDelete);
      window.addEventListener('beforeunload', function(){
        Course.saveAll();
      });

  },

  //Delete course from instances object if valid course code
  handleDelete: function(){
    var selectEl = document.forms['delete_course'].selectCourse;
    var code = selectEl.value;
    if(code){
      if( Course.destroy(code) ){
          selectEl.remove(selectEl.selectedIndex);
      }
      else{
        return false;
      }
    }
  }

};
