import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';

@Module({
  imports:[TypeOrmModule.forFeature([User ])],
  controllers: [ControllerController],
  providers: [UsersService]
})
export class UsersModule {}
