import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostDto } from './post.entity';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllPosts() {
    return this.prismaService.post.findMany();
  }

  async getPost(postId: number): Promise<PostDto> {
    return this.prismaService.post.findUnique({
      where: {
        id: postId,
      },
    });
  }

  async addPost(
    id: number,
    title: string,
    text: string,
    isPublished: boolean,
  ): Promise<PostDto> {
    return this.prismaService.post.create({
      data: {
        id,
        title,
        text,
        isPublished,
      },
    });
  }

  async update(postId: number, title: string) {
    return this.prismaService.post.update({
      where: {
        id: postId,
      },
      data: {
        title: title,
      },
    });
  }

  async deletePost(postId: number) {
    return this.prismaService.post.delete({
      where: {
        id: postId,
      },
    });
  }
}
