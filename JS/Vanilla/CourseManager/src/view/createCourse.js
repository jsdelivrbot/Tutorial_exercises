courseLib.view.createCourse = {

  /*
  * Attach btn event handlers and window event handlers'
  */
  setupInterface: function(){

    //Setup varibles
    var saveBtn = document.forms['course'].commit;

    //Load courses from local storage
    Course.loadCourses();

    //Generate course time stamp
    courseLib.view.createCourse.generateTimeStamp();

    //Attach window and btn event handler
    saveBtn.addEventListener("click", courseLib.view.createCourse.handleSaveEvent);
    window.addEventListener("beforeunload", function(){
      console.log('beforeunload attached to the window event');
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
      lang: form.lang.value,
      duration: form.duration.value
    };
    Course.add(courseDetails);
    form.reset();
  },

  /*
  * Set the timestamp for course creation
  */
  generateTimeStamp: function(){
    var timeEl = document.getElementById("time");
    var today = new Date();
    timeEl.textContent = today.toLocaleString();
    timeEl.setAttribute("datetime", today.toISOString());
  }

};
