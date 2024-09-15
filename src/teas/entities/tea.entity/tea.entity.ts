import { ObjectType } from '@nestjs/graphql';
import { Drink } from 'src/common/interfaces/drink.interface';
import { Entity } from 'typeorm';

@Entity()
@ObjectType({ implements: () => Drink })
export class Tea implements Drink {
  name: string;
}
