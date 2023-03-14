import { Inject, Injectable } from '@nestjs/common';
import { MissingParametersException } from 'src/exceptions/custom-exceptions';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @Inject('PROJECTS_REPOSITORY')
    private projectRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    if (!CreateProjectDto.name) {
      throw new MissingParametersException('Missing arguments in the request');
    }

    return this.projectRepository.save(createProjectDto);
  }

  async findAll(actived?: boolean): Promise<Project[]> {
    if (actived !== null || actived !== undefined) {
      return await this.projectRepository.find({
        where: {
          actived: actived,
        },
      });
    } else {
      return await this.projectRepository.find();
    }
  }

  async findOne(id: number) {
    return await this.projectRepository.findOneBy({
      id: id,
    });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.projectRepository.update(id, updateProjectDto);
  }

  remove(id: number) {
    return this.projectRepository.delete(id);
  }
}
