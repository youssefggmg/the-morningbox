import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/createuser.dto';
import { UsersService } from '../services/users/users.service';

@Controller('user')
export class ControllerController {
    constructor(private userService:UsersService){}
    @Post()
    createUser(@Body() createUserDto:CreateUserDto){
        // this.userService.
    }
}
