import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return {
      name: 'agentic-portfolio-api',
      status: 'ok',
    };
  }

  getHealth() {
    return {
      status: 'ok',
    };
  }
}
