import { Mongo } from 'meteor/mongo'; //Import Mongo Database Object from Meteor

export const Tasks = new Mongo.Collection('tasks'); //Export a constant "Tasks" (mongo collection) for use by the rest of our app