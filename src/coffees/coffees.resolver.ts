import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Coffee } from './entities/coffee.entity';
import { ParseIntPipe } from '@nestjs/common';
import { CreateCoffeeInput } from './dto/create-coffee.input';
import { CoffeesService } from './coffees.service';
import { UpdateCoffeeInput } from './dto/update-coffee.input';

//TODO: Set Descriptions
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

  @Mutation(() => Coffee, {
    name: 'createCoffee',
    description: 'Create new coffee',
  })
  async create(
    @Args('createCoffeeInput') createCoffeeInput: CreateCoffeeInput,
  ) {
    return this.coffeesService.create(createCoffeeInput);
  }

  @Mutation(() => Coffee, {
    name: 'updateCoffee',
    description: 'Update coffee by ID',
  })
  async update(
    @Args('id', ParseIntPipe) id: number,
    @Args('updateCoffeeInput') updateCoffeeInput: UpdateCoffeeInput,
  ) {
    return this.coffeesService.update(id, updateCoffeeInput);
  }

  @Mutation(() => Coffee, {
    name: 'removeCoffee',
    description: 'Remove coffee by ID',
  })
  async remove(@Args('id', ParseIntPipe) id: number) {
    return this.coffeesService.remove(id);
  }
}
