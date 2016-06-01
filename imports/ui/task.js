import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.html';

Template.task.events({
    'click .toggle-checked'() {
        Tasks.update(this.task._id, {
            $set: { checked: ! this.task.checked },
        });
    },
    'click .delete'() {
        Tasks.remove(this.task._id);
    },
});