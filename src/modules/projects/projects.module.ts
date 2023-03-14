import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { DatabaseModule } from 'src/database/database.module';
import { projectProviders } from './projects.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProjectsController],
  providers: [...projectProviders, ProjectsService],
})
export class ProjectsModule {}
