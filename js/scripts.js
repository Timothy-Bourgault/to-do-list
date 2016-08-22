//business logic
function Task(listItem, listDetails) {
  this.listItem = item;
  this.listDetails = details;
}
Task.prototype.listData = function() {
  return this.listItem + " " + this.listDetails;
}
// user interface logic
$(document).ready(function() {
  $("form#new-listItem").submit(function(event) {
    event.preventDefault();

    var inputtedListItem = $("input#new-list-item").val();
    var inputtedListDetails = $("input#new-list-detail").val();

    var newData = new Task(inputtedListItem, inputtedListDetails);

    $("ul#tasks").append("<li><span class='task'>" + newTask.listData() + "</span></li>");

    $(".task").last().click(function() {
    $("#show-tasks").show();
    $("#show-tasks h2").text(newTask.listItem);
    $(".list-item").text(newTask.listItem);
    $(".list-details").text(newTask.listDetails);
  });

  $("input#new-list-item").val("");
  $("input#new-list-detail").val("");
  });
});
