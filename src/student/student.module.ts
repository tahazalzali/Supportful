import { Module } from '@nestjs/common';
import { StudentService } from './StudentService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentResolver } from './student.resolver';

@Module({
  imports :[
    TypeOrmModule.forFeature([Student])
  ],
  providers: [StudentService,StudentResolver]
})
export class StudentModule {}
