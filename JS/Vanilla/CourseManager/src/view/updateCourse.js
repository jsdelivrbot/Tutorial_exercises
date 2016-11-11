courseLib.view.updateCourse = {

  setupInterface: function(){

    var form = document.forms["update_course_form"],
        saveBtn = form.commit,
        courseSelect = form.select_course,
        key = "",
        keys = [],
        course = null,
        option = null;

        //Load courses into Course.instances object
        Course.loadCourses();

        //Populate selection data with held courses
        keys = Object.keys(Course.instances);
        for(var i = 0; i < keys.length; i++){
          key = keys[i];
          course = Course.instances[key];
          option = document.createElement("option");
          option.text = course.name;
          option.value = course.code;
          courseSelect.add(option,null);
        }

        //Attach event listener to select to populate fields with course data
        courseSelect.addEventListener("change", function(){
          var course = null,
              key = courseSelect.value;
              console.log('course select value is ' + key);
          if(key){
            course = Course.instances[key];
            form.c_code.value = course.code;
            form.name.value = course.name;
            form.lang.value = course.lang;
            form.duration.value = course.duration;
          }
          else{
            form.reset();
          }
        });

        //Attach event listener to save button
        saveBtn.addEventListener("click", courseLib.view.updateCourse.clickHandler);
        window.addEventListener("beforeunload", function(){
          Course.saveAll();
        });
  },

  //Save updated changes to local storage
  clickHandler: function(e){
    e.preventDefault();
    var form = document.forms['update_course_form'],
        details = {
          code: form.c_code.value,
          name: form.name.value,
          lang: form.lang.value,
          duration: form.duration.value
        };
        console.log(details);
        Course.update(details);
        form.reset();

  }

};
