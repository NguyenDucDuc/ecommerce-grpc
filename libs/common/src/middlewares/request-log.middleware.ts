import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ResponseTimeMiddleware implements NestMiddleware {
  private logger = new Logger('RequestTime');
  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - start;
      this.logger.debug(
        `${req.method} ${req.url} - Response time: ${duration}ms`,
      );
    });

    next();
  }
}
