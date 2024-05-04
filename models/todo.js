/* Todo model definition */
export const mongoose = require('mongoose');
export const Schema = mongoose.Schema;
export const TodoSchema = new Schema(
    { text: String, completed: Boolean }
);
export const Todo = mongoose.model('Todo', TodoSchema);