import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Coffee } from './entities/coffee.entity';
import { ParseIntPipe } from '@nestjs/common';

@Resolver()
export class CoffeesResolver {
  @Query(() => [Coffee], { name: 'coffees', description: 'Show All coffees' })
  async coffees() {
    return [];
  }

  @Query(() => Coffee, {
    name: 'coffee',
    description: 'Find coffee by ID',
    nullable: true,
  })
  async findOne(
    @Args(
      'id',
      {
        type: () => ID,
        description: 'ID of coffee that you are looking for',
      },
      ParseIntPipe,
    )
    id: string,
  ) {
    return null;
  }
}
