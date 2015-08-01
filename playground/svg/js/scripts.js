$(function() {
    var today = new Date();
    var timeOfDay = CH3.getTimeOfDay(today);
    CH3.paintTimeOfDay(timeOfDay);

    $("#infoBtn").click(function() {
      var isActive = $(this).hasClass("active");

      if (isActive) {
        $(this).removeClass("active");
        $("#infoScreen").attr("class", "inactive");
      } else {
        $(this).addClass("active");
        $("#infoScreen").attr("class", "active");
      }
    });

    $("#simDay").click(function() {
      CH3.paintDayTime();
    });

    $("#simNight").click(function() {
      CH3.paintNightTime();
    });
});

var CH3 = {
  getTimeOfDay: function(date) {
    var hours = date.getHours();

    if (hours >= 6 && hours <= 18) {
      return "day";
    } else {
      return "night";
    }
  },
  paintTimeOfDay: function(timeOfDay) {
    if (timeOfDay === "day") {
      CH3.paintDayTime();
    } else {
      CH3.paintNightTime();
    }
  },
  paintDayTime: function() {
    CH3.resetTimeOfDay();
    $("body").attr("class", "daytime");

    var sunImg = $("<img>", { class: "sun", src: "img/sun.svg" });
    var cloudImg1 = $("<img>", { class: "cloud", src: "img/cloud.svg", css : { right: "5%", top: "3%" } });
    var cloudImg2 = $("<img>", { class: "cloud", src: "img/cloud.svg", css : { width: "5%", right: "50%", top: "10%" } });
    $("#timeOfDay").append(sunImg).append(cloudImg1).append(cloudImg2);
  },
  paintNightTime: function() {
    CH3.resetTimeOfDay();
    $("body").attr("class", "nighttime");

    var moonImg = $("<img>", { class: "moon", src: "img/moon.svg" });
    $("#timeOfDay").append(moonImg);

    for (var i = 0; i < 30; i++) {
      $("#timeOfDay").append(CH3.getRandomStar());
    }
  },
  getRandomStar: function() {
    var boundsX = $(document).innerWidth();
    var boundsY = $(document).innerHeight() - ($("#hills").height());

    var randomX = Math.random();
    var randomY = Math.random();
    var randomSize = Math.random();

    var top = parseInt(randomY * boundsY, 10);
    var left = parseInt(randomX * boundsX, 10);
    var size = parseInt(randomSize * 20, 10);
    console.log(left + ":" + top + ":" + size);

    var starImg = $("<img>", { class: "star", src: "img/star.svg", css: { "margin-top": top + "px", "margin-left" : left + "px", width: size + "px" } });
    return starImg;
  },
  resetTimeOfDay: function() {
    $("#timeOfDay").html("");
  }
};
