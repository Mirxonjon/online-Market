import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch()
export class ErrorHandle implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.log(exception, 'ichida');
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception?.status;
    if (exception instanceof HttpException) {
      response.status(status).json(exception);
    } else {
      response.status(500).json({
        status: 500,
        message: 'Internal server error',
      });
    }
  }
}
