import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Coffee } from './entities/coffee.entity';
import { ParseIntPipe } from '@nestjs/common';
import { CreateCoffeeInput } from './dto/create-coffee.input';
import { CoffeesService } from './coffees.service';

@Resolver()
export class CoffeesResolver {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Query(() => [Coffee], { name: 'coffees', description: 'Show All coffees' })
  async coffees() {
    return this.coffeesService.findAll();
  }

  @Query(() => Coffee, {
    name: 'coffee',
    description: 'Find coffee by ID',
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
    id: number,
  ) {
    return this.coffeesService.findOne(id);
  }

  @Mutation(() => Coffee, { name: 'createCoffee' })
  async create(
    @Args('createCoffeeInput') createCoffeeInput: CreateCoffeeInput,
  ) {
    return this.coffeesService.create(createCoffeeInput);
  }
}
