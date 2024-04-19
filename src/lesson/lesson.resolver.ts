import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query((returns) => LessonType)
  lesson(
    
    @Args('id') id: string

) {
    return this.lessonService.getLesson(id);
  }

  @Query( retuns=>[LessonType])
  lessons(){
    return this.lessonService.getLessons();
  }
  @Mutation((returns) => LessonType)
  createLesson(
    @Args('createLessonInputDTO') createLessonInputDTO:CreateLessonInput 
  ) {
    return this.lessonService.createLesson(createLessonInputDTO);
  }
  @Mutation (returns=>LessonType)
  assignStudentsToLessons (
    @Args('assingStudentsToLessonInput') assignStudentsToLessonInput:AssignStudentsToLessonInput
  ){
    const {lessonId,studentIds}=assignStudentsToLessonInput;
    
    return this.lessonService.assignStudentsToLesson(lessonId,studentIds)

  }
}
