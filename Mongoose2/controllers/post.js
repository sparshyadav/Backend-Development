const Post = require("../model/post");

module.exports.getAllPost = async (req, res) => {
    let allPost = await Post.find({});
    res.json(allPost);
}

module.exports.postAddPost = (req, res) => {

}

module.exports.getOnePost = (req, res) => {

}

module.exports.deleteOnePost = (req, res) => {

}

module.exports.putUpdatePost = (req, res) => {

}