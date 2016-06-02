import { Template } from 'meteor/templating'; //import meteor Template object functionality
import { Tasks } from '../api/tasks.js'; //import our "Tasks" Database

import './task.js';
import './body.html';

//This Sends "data"(content) to our body template
Template.body.helpers({
    tasks() { //returns a collection of tasks. this is the entire content of the task list
        return Tasks.find({}, {sort: {createdAt: -1 } }); //Sort the collection of tasks by most recent date created
    },
    count() { //return the number of "Active" tasks (unchecked)
        return Tasks.find({checked: { $ne: true} }).count();
    },
});

//Event "handlers" related to the Body template
Template.body.events({
    //On Submit new Task, write it to the Database
    'submit .new-task'(event){
        event.preventDefault(); //prevent default behavior

        const target = event.target; //Event Target is the DOM element that triggered the event. In this case the "new task" textfield
        const text = target.text.value; //Define the value of the "new task"

        //Insert the new task into the database
        Tasks.insert({
            text,
            createdAt: new Date(),
        });

        target.text.value = ''; //Change the "new task" text field back to "nothing".
    },
    'click .deleteAll'() { //Delete All "Completed Tasks" button
        const toDelete = Tasks.find({checked: true}); //Return collection of "checked" tasks.
        toDelete.forEach(function(task){ //Database removal can only be done per _id (for safety)...
            Tasks.remove({"_id": task._id}); //...so we have to iterate through the collection of tasks to delete
        })
    },
});