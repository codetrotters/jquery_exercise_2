//this is where you define your functions

// this is the syntax for defining a function:
function functionName(parameters) {
  //logic goes inside here
}

function runTodos(list, dom) {
  $("ul.todo-list").empty();
  for (var j = 0; j < list.length; j++) {
    var todoItemDom = "<li class=\"todoItem\">" + list[j] + "</li>";
    dom.append(todoItemDom);
  }
}

$(document).ready(function() {
  // this is where you put your event listeners
  var links = ["ABOUT US", "TRAINING", "CONTACT"];
  var linksDom = [];
  var i = 0
  var navBar = $("ul.nav-bar");
  var beginLinkDom = '<li><a href="#" class="nav-link">';
  var endLinkDom = '</a></li>';

  while (i < links.length) {
    var fullLinkDom = beginLinkDom + links[i] + endLinkDom;
    navBar.append(fullLinkDom);
    i++;
  }

  var todoList = [];

  var todoListDom = $("ul.todo-list");

  $("input[type=submit]").on("click", function() {
    var newTodo = $("#newTodo").val();
    todoList.push(newTodo);
    console.log(newTodo);
    runTodos(todoList, todoListDom);
  });


});