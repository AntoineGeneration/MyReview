
const commentaire = require('../models/Comments').Commentaire;




const AddComment = async (comment) => {
    try {
        await comment.save();
        console.log("Product saved successfully!");
    } catch (error) {
        console.error(error);
    }
};


const getComment = async (id) => {

    try {

        const comment = await commentaire.findById(id);
        return comment;
    } catch (error) {
        throw new Error(`Error retrieving comment with id ${id}: ${error}`);
    }
};



const getAllComments = async () => {
    try {
        const comment = await commentaire.find({});
        return comment;
    } catch (error) {
        throw new Error(`Error retrieving all comments: ${error}`);
    }
};

const deleteComment = async (id) => {
    try {
        const comment = await commentaire.findByIdAndRemove(id);
        return comment;
    } catch (error) {
        throw new Error(`Error deleting comment with id ${id}: ${error}`);
    }
};

const updateComment = async (id, update) => {
    try {
        const comment = await commentaire.findByIdAndUpdate(id, update, { new: true });
        return comment;
    } catch (error) {
        throw new Error(`Error updating comment with id ${id}: ${error}`);
    }
};



module.exports = {
    AddComment,
    getComment,
    getAllComments,
    deleteComment,
    updateComment
};