import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './person.entity';

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(Person)
        private personRepository: Repository<Person>,
    ) { }

    async  findAll(): Promise<Person[]> {
        return await this.personRepository.find();
    }

    async  create(person: Person): Promise<Person> {
        return await this.personRepository.save(person);
    }

    async update(person: Person): Promise<UpdateResult> {
        return await this.personRepository.update(person.id, person);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.personRepository.delete(id);
    }
}