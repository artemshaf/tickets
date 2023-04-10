import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { File } from './models/file.model';

@Module({
  imports: [SequelizeModule.forFeature([File])],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
