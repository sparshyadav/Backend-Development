const Post = require("../model/post");

module.exports.getAllPost = async (req, res) => {
    let allPost = await Post.find({});
    res.json(allPost);
}

module.exports.postAddPost = async (req, res) => {
    const { postName, imageUrl, caption } = req.body;
    let newPost = new Post({
        postName: postName,
        imageUrl: imageUrl,
        caption: caption
    });

    await newPost.save();
    res.send("Post Added");
}

module.exports.getOnePost = (req, res) => {
    const id = req.params;

    let post = Post.find({ _id: id });

    res.json(post[0]);
}

module.exports.deleteOnePost = (req, res) => {

}

module.exports.putUpdatePost = (req, res) => {

}