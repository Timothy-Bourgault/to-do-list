//business logic
function Task(listItem, listDetails) {
  this.listItem = listItem;
  this.listDetails = listDetails;
}
Task.prototype.listData = function() {
  return this.listItem + " " + this.listDetails;
}
// user interface logic
$(document).ready(function() {
  $("form#new-entry").submit(function(event) {
    event.preventDefault();

    var inputtedListItem = $("input#new-list-item").val();
    var inputtedListDetails = $("input#new-list-detail").val();

    var newData = new Task(inputtedListItem, inputtedListDetails);

    $("ul#tasks").append("<li><span class='task'>" + newData.listData() + "</span></li>");

    $(".task").last().click(function() {
    $("#show-tasks").show();
    $("#show-tasks h2").text(newData.listItem);
    $(".list-item").text(newData.listItem);
    $(".list-details").text(newData.listDetails);
  });

  $("button#taskRemove").click(function(){

  $("button#taskRemove").remove();
    $("ul#tasks").children("li").last().addClass("done");
  });

  $("button#taskUncheck").click(function(){

  $("button#taskUncheck").remove();
    $("ul#tasks").children("li").last().removeClass("done");
  });

  $("input#new-list-item").val("");
  $("input#new-list-detail").val("");
  });
});
