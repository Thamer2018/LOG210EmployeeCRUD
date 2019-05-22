import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const ContactSchema = new Schema({
Prénom: {
type: String,
required: 'Enter a first name'
},
Nom: {
type: String,
required: 'Enter a last name'
},
role: {
type: String
},
organisme: {
type: String
},
phone: {
    type:Array
},
diplome: {
    type:Array
    },

created_date: {
    type: Date,
    default: Date.now
    }

    
    });
    