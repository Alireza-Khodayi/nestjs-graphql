import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { CoffeesModule } from './coffees/coffees.module';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';
import { Tea } from './teas/entities/tea.entity/tea.entity';
import { DrinksResolver } from './drinks/drinks.resolver';
import { PubSubModule } from './pub-sub/pub-sub.module';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Code First Approach Needs This
      buildSchemaOptions: {
        // numberScalarMode: 'integer',
        orphanedTypes: [Tea],
      },
      installSubscriptionHandlers: true,
    }),
    CoffeesModule,
    CommonModule,
    PubSubModule,
  ],
  controllers: [AppController],
  providers: [AppService, DrinksResolver],
})
export class AppModule {}
