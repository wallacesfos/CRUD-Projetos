/* eslint-disable prettier/prettier */
import { HttpException } from '@nestjs/common';

export class MissingParametersException extends HttpException {
  constructor(mensagem: string) {
    super(mensagem, 400);
  }
}
