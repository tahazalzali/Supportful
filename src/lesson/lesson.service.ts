import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import {v4 as uuid }from 'uuid';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>
    ) {
    }        
    createLesson(name: string, startDate: string, endDate: string) {
        const lesson = this.lessonRepository.create({
            name: 'Math Class',
            strtDate: (new Date()).toISOString(),
            endDate: (new Date()).toISOString(),
            id: uuid().toString()
        });
        return this.lessonRepository.save(lesson);
    }
}
