(function () {
'use strict';

angular.module('ToDoListApp', [])
.controller('ToDoListController', ToDoListController)
.controller('DoneListController', DoneListController)
.service('ToDoListService', ToDoListService)

//ToDo list
ToDoListController.$inject = ['ToDoListService'];
function ToDoListController(ToDoListService) {
  var todo = this;

  todo.tasks = ToDoListService.getToDoTasks();
  todo.taskName = "";
  todo.taskDate = "";

  todo.addTask = function () {
    ToDoListService.addTask(todo.taskName, todo.taskDate);
  };

  todo.completeTask = function (taskIndex) {
    ToDoListService.completeTask(taskIndex);
  };
}

//Done List
DoneListController.$inject = ['ToDoListService'];
function DoneListController(ToDoListService) {
  var done = this;

  done.tasks = ToDoListService.getDoneTasks();
  done.taskName = "";
  done.taskDate = "";

}

function ToDoListService() {
  var service = this;

  var todoTasks = [];
  var doneTasks = [];

  service.addTask = function (taskName, taskDate) {
    var task = {
      name: taskName,
      date: taskDate
    };
    todoTasks.push(task);
  };

  service.completeTask = function (taskIndex) {
    doneTasks.push(todoTasks[taskIndex]);
    console.log("Task Index" + taskIndex)
    todoTasks.splice(taskIndex, 1);
  };

  service.getToDoTasks = function () {
    return todoTasks;
  };

  service.getDoneTasks = function () {
    return doneTasks;
  };
}


})();
