courseLib.view.listCourses = {

  setupInterface: function(){

    //Setup function variables
    var tableBody = document.querySelector('table#courses>tbody'),
        keys = [],
        key = "",
        row = {};

    //Load data
    Course.loadCourses();

    //Read through returned course objects and insert into HTML
    keys = Object.keys(Course.instances);
    for(i = 0; i < keys.length; i++){
      key = keys[i];
      row = tableBody.insertRow();
      row.insertCell(-1).textContent = Course.instances[key].name;
      row.insertCell(-1).textContent = Course.instances[key].code;
      row.insertCell(-1).textContent = Course.instances[key].lang;
      row.insertCell(-1).textContent = Course.instances[key].duration;
    }
  }

};
