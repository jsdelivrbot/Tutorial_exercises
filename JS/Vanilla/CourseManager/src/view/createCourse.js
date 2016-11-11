courseLib.view.createCourse = {

  /*
  * Attach btn event handlers and window event handlers'
  */
  setupInterface: function(){

    //Setup varibles
    var saveBtn = document.forms['course'].commit;

    //Load courses from local storage
    Course.loadCourses();

    //Attach window and btn event handler
    saveBtn.addEventListener("click", courseLib.view.createCourse.handleSaveEvent);
    window.addEventListener("beforeunload", function(){
      Course.saveAll();
    });

  },

  /*
  * Save Course details to newly instansiated course object and reset fields
  */
  handleSaveEvent: function(){

    var form = document.forms['course'];
    var courseDetails = {
      code: form.code.value,
      name: form.c_name.value,
      langauge: form.langauge.value,
      duration: form.duration.value
    };
    Course.add(courseDetails);
    form.reset();
  }

};
