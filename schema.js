import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: String
    username: String
  }
  type Post {
    id: String
    title: String
    content: String
    user: User
    at: String
  }
  type Comment {
    id: String
    user: User
    at: String
  }
  input PostInput {
    title: String
    content: String
  }
  type Query {
    getPosts: [Post]
    getPost(id: String): Post
  }
  type Mutation {
    createPost(input: PostInput): Post
    updatePost(id: String, input: PostInput): Post
    deletePost(id: String): Boolean
    createComment(comment: String): Comment
  }
`;

export default typeDefs;
