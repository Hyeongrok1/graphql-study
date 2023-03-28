import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class PostDto {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  text: string;

  @Field(() => Boolean)
  isPublished: boolean;
}

@ObjectType()
export class NewPost {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  text: string;

  @Field(() => Boolean)
  isPublished: boolean;
}
