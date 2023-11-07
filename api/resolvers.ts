const { Post } = require("../models/Post.ts");

const resolvers = {
    Query: {
        posts: async () => await Post.find({}),  //(parent, args, contextValue, information)
        post: async (parent, args) => await Post.findById(args.id),
    },
    Mutation: {
        create: async (parent, args) => {
            const { date, title, content, images, tags } = args;
            const newPost = new Post({
                date,
                title,
                content,
                images,
                tags
            });
            await newPost.save();
            return newPost;
        },
        update: async (parent, args) => {
            const { id } = args;
            const result = await Post.findByIdAndUpdate(id, args);
            return result;
        },
        delete: async (parent, args) => {
            const { id } = args;
            const deletedPost = await Post.findByIdAndDelete(id);
            if (!deletedPost) {
                throw new Error(`Post with ID ${id} not found`);
            }
            return deletedPost;
        },
    },
};

module.exports = { resolvers };