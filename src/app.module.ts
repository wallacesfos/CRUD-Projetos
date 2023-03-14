import { Module } from '@nestjs/common';
import { ProjectsModule } from './modules/projects/projects.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, ProjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
