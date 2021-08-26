/*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
$(document).ready(function() {

  //window and animation items
  var animation_elements = $.find('.scroll-element');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');

});


//for the projects pagetitle
// var arr = [1,2,3,4];
// $.each(arr, function(index, value)){
//   $("#proj-button-"+value).click(function() {
//     console.log("that worked "+value);
//     $("#proj-content-"+value).toggle("slow");
// };

 $("#proj-button-1").click(function() {
   $("#proj-content-1").toggle("slow");
   //hide unselected projects
   $("#proj-content-2").hide();
   $("#proj-content-3").hide();
   $("#proj-content-4").hide();
 });
 $("#proj-button-2").click(function() {
   $("#proj-content-2").toggle("slow");
   //hide unselected projects
   $("#proj-content-1").hide();
   $("#proj-content-3").hide();
   $("#proj-content-4").hide();
 });

 $("#proj-button-3").click(function() {
   $("#proj-content-3").toggle("slow");
   //hide unselected projects
   $("#proj-content-1").hide();
   $("#proj-content-2").hide();
   $("#proj-content-4").hide();
 });

 $("#proj-button-4").click(function() {
   $("#proj-content-4").toggle("slow");
   //hide unselected projects
   $("#proj-content-1").hide();
   $("#proj-content-2").hide();
   $("#proj-content-3").hide(); });


//for the education page
$("#masters-button").click(function() {
  $("#masters-text").toggle("slow");
});
$("#mooc-button").click(function() {
  $("#mooc-text").toggle("slow");
});
$("#bs-button").click(function() {
  $("#bs-text").toggle("slow");
});


// for the about page
// uses jquery to select objects and toggle visbility
//
$("#background-button").click(function(){
  $("#background-text").toggle("slow");
});
//
$("#teaching-button").click(function(){
  $("#teaching-career-text").toggle("slow");
});
$("#human-button").click(function(){
  $("#some-human-text").toggle("slow");
});
$("#why-switch-button").click(function(){
  $("#why-the-switch").toggle("slow");
});
