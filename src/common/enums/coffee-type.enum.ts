import { registerEnumType } from '@nestjs/graphql';

export enum CoffeeType {
  ARABICA = 'Arabica',
  ROBUSTA = 'Robusta',
}

registerEnumType(CoffeeType, {
  name: 'CoffeeType',
  description: 'Coffee Type Enum',
});
