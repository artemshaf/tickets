import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ReadStream } from 'fs';
import { editFileName } from './helpers';
import { File, IFileCreationAttrbs } from './models/file.model';

@Injectable()
export class UploadService {
  constructor(@InjectModel(File) private readonly fileRepo: typeof File) {}

  async uploadFile(file: Express.Multer.File) {
    file.originalname = editFileName(file);
    const { buffer, mimetype, originalname } = file;
    const bufferData = new Blob([new Uint8Array(buffer)]);
    const uploadData: IFileCreationAttrbs = {
      buffer: bufferData,
      mimetype,
      originalname,
    };
    const uploadFile = await this.fileRepo.create(uploadData);
    return uploadFile;
  }

  async getFileByName(filename: string) {
    return this.fileRepo.findOne({ where: { originalname: filename } });
  }
}
