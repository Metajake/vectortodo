import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tasks } from '../api/tasks.js';

import './task.js';
import './body.html';

Template.body.onCreated(function bodyOnCreated(){
    this.state = new ReactiveDict();
});

Template.body.helpers({
    tasks() {
        const instance = Template.instance();
        if(instance.state.get('hideCompleted')){
            return Tasks.find({checked: { $ne: true} }, {sort: {createdAt: -1 } });
        }
        return Tasks.find({}, {sort: {createdAt: -1 } });
    },
    count() {
        return Tasks.find({checked: { $ne: true} }).count();
    },
});

Template.body.events({
    'submit .new-task'(event){
        event.preventDefault();

        const target = event.target;
        const text = target.text.value;

        Tasks.insert({
            text,
            createdAt: new Date(),
        });

        target.text.value = '';
    },
    'click .deleteAll'() {
        const toDelete = Tasks.find({checked: true});
        toDelete.forEach(function(task){
            Tasks.remove({"_id": task._id})
        })
    },
});