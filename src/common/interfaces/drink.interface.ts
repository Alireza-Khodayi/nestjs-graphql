import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType({ description: 'Abstract Drink Interface' })
export abstract class Drink {
  @Field()
  name: string;
}
