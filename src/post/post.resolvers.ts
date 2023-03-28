import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Post, NewPost, UpdatePost } from 'src/graphql';
import { PostService } from './post.service';
import { PostDto } from './post.entity';

@Resolver('Post')
export class PostResolvers {
  constructor(private readonly PostService: PostService) {}

  @Query((returns) => [PostDto], { name: 'posts' })
  async posts(): Promise<Post[]> {
    return await this.PostService.getAllPosts();
  }

  @Query((returns) => PostDto, { name: 'post' })
  async post(@Args('id') postId: number): Promise<Post> {
    return await this.PostService.getPost(postId);
  }

  @Mutation((returns) => PostDto, { name: 'createPost' })
  async createPost(
    @Args('id') postId: number,
    @Args('title') title: string,
    @Args('text') text: string,
    @Args('isPublished') isPublished: boolean,
  ): Promise<PostDto> {
    return await this.PostService.addPost(postId, title, text, isPublished);
  }

  @Mutation((returns) => PostDto)
  async updatePost(
    @Args('id') postId: number,
    @Args('title') title: string,
  ): Promise<Post> {
    return await this.PostService.update(postId, title);
  }

  @Mutation((returns) => PostDto)
  async deletePost(@Args('id') postId: number): Promise<Post> {
    return await this.PostService.deletePost(postId);
  }
}
