$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    // class is select by . and id by #

    // A cool way to get more information about why this returns a node list
    // needed to add [0] because it returned a collection of nodes
    // console.log(document.getElementsByClassName("add"))
    // working:
    // document.getElementsByClassName("add")[0].addEventListener("click", function(e) {
    //   console.log("clicked on add_todo")
    // })
    $('.add').on( "click", function() {
      var todoName = $('.toolbox .todo').val()
      add_todo(todoName)
    })
  }

  //Create functions to add, remove and complete todos
  function add_todo(todoName) {
    $('.todo_list').append(buildTodo( todoName ))
  }


  function buildTodo(todoName) {
    // Creates a jQueryDOMElement from the todoTemplate.
    var $todo = $('#todo_template .todo');
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);

    // console.log(todo.find('h2').text(todoName));
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }


  bindEvents();
});
