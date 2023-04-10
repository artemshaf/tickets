import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage, memoryStorage } from 'multer';
import { editFileName, imageFileFilter } from './helpers';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('db/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
      fileFilter: imageFileFilter,
    }),
  )
  uploadFileToDB(
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    const upload = this.uploadService.uploadFile(file);
    return upload;
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        filename(_, file, callback) {
          file.originalname = editFileName(file);

          return callback(null, file.originalname);
        },
        destination: './upload',
      }),
      fileFilter: imageFileFilter,
    }),
  )
  uploadFileToStorage(
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    return file;
  }

  @Get(':path')
  getFileByNameFromStorage(@Param('path') path, @Res() res) {
    return res.sendFile(path, { root: './upload' });
  }

  @Get('/db/:filename')
  getFileByNameFromDB(@Param('filename') filename) {
    return this.uploadService.getFileByName(filename);
  }
}
