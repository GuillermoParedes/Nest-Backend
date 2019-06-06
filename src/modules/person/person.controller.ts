import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from 'dist/modules/person/person.entity';

@Controller('person')
export class PersonController {

  constructor(private personService: PersonService) { }

  @Get()
  index(): Promise<Person[]> {
    return this.personService.findAll();
  }

  @Post('create')
  async create(@Body() personData: Person): Promise<any> {
    return this.personService.create(personData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() personData: Person): Promise<any> {
    personData.id = Number(id);
    return this.personService.update(personData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.personService.delete(id);
  }
}
