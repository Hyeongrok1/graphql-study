import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PostResolvers } from './post.resolvers';

@Module({
  providers: [PostResolvers, PostService],
  imports: [PrismaModule],
})
export class PostModule {}
