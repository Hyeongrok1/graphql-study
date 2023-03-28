export class Post {
  id: number;
  title: String;
  text: String;
  isPublished: Boolean;
}

export class AddPostMutationResponse {
  code: String;
  success: Boolean;
  message: String;
  post: Post;
}

export class NewPost {
  id: number;
  title: string;
  text: string;
  isPublished: Boolean;
}

export class UpdatePost {
  id: number;
  title: String;
  text: String;
  isPublished: Boolean;
}

export abstract class IQuery {
  abstract posts(): Nullable<Post[]> | Promise<Nullable<Post[]>>;
  abstract post(postId: number): Nullable<Post> | Promise<Nullable<Post>>;
}

export abstract class IMutation {
  abstract createPost(input: NewPost): Nullable<Post> | Promise<Nullable<Post>>;
  abstract updatePost(
    input: UpdatePost,
  ): Nullable<Post> | Promise<Nullable<Post>>;
  abstract deletePost(postId: number): Nullable<Post> | Promise<Nullable<Post>>;
}
type Nullable<T> = T | null;
