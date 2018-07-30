$(function() {
  let countCar = 0;
  let checkCar = 0;

  let intervalCar = setInterval(function() {
    $.ajax({
      type: "GET",
      url: "http://ecourse.cpe.ku.ac.th/exceed/api/larmpalm_car/view/",
      success: function(response) {
        console.log(response);
        if (response == 9) {
          $("#park-text").html('<h2 class="text-space">' + 0 + "</h2>");
        } else {
          $("#park-text").html('<h2 class="text-space">' + 1 + "</h2>");
        }
      }
    });
  }, 1000);

  setInterval(function() {
    $.ajax({
      type: "GET",
      url: "http://ecourse.cpe.ku.ac.th/exceed/api/larmpalm_light/view/",
      success: function(response) {
        console.log("Light status : " + response);
        if (response == 0) {
          $("#light-text").html(
            '<h2 class="text-l" id="light-text" style="color: red">OFF</h2>'
          );
          $("#light-image").html(
            '<img src="./images/light-off.png" width="400" height="100%">'
          );
        } else if (response == 1) {
          $("#light-text").html(
            '<h2 class="text-l" id="light-text" style="color: GREEN">ON</h2>'
          );
          $("#light-image").html(
            '<img src="./images/light-on.png" width="400" height="100%">'
          );
        }
      }
    });
  }, 1000);

  setInterval(function() {
    $.ajax({
      type: "GET",
      url: "http://ecourse.cpe.ku.ac.th/exceed/api/larmpalm_count/view/",
      success: function(response) {
        console.log("Count cars : " + response);
        $("#cartext").html('<h2 class="text-car">' + response + "</h2>");
      }
    });
  }, 1000);
});
