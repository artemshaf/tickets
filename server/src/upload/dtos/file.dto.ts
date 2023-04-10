import { IsNumber, IsString } from 'class-validator';

export class CreateFileDto {
  @IsNumber()
  id: number;

  @IsString()
  mimetype: string;

  buffer: Buffer;

  @IsString()
  originalname: string;
}
