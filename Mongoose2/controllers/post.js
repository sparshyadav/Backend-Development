const Post=require("../model/post");

module.exports.getAllPost=(req, res)=>{
    let allPost=Post.find({});
    res.json(allPost);
}

module.exports.postAddPost=(req, res)=>{

}

module.exports.getOnePost=(req, res)=>{

}

module.exports.deleteOnePost=(req, res)=>{

}

module.exports.putUpdatePost=(req, res)=>{

}