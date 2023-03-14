import { Module } from '@nestjs/common';
import { ProjectsModule } from './modules/projects/projects.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, ProjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
