import { Template } from 'meteor/templating'; //import meteor template functionality

import { Tasks } from '../api/tasks.js'; //import Tasks database

import './task.html'; //import our task "view"

//Event Handlers related to the "Task" template
Template.task.events({
    //Toggle's the "checked" property for individual Tasks (in the database)
    'click .toggle-checked'() {
        Tasks.update(this.task._id, {
            $set: { checked: ! this.task.checked }, //Toggle If not checked: "check", else: "uncheck"
        });
    },
    'click .delete'() {
        Tasks.remove(this.task._id); //Delete button deletes individual task from database
    },
    'blur .wide-text-edit'(event) { //When we click on a Task (in the task list) and then click away, we can edit the value in the database
        var text = event.target.value; //Get the new text field value
        Tasks.update(this.task._id, { //Update the Task text to the new value
            $set: { text: text }, //Set the value
        });
    },
});