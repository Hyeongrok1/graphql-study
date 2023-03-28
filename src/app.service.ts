import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(`Server ready at http://localhost:3000`);
    return 'Hello World!';
  }
}
