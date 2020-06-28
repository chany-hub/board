import Post from "./Post.json";

const resolvers = {
  Query: {
    getPosts: () => Post,
  },
};

export default resolvers;
