
import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];		//message propery of string array type.(Initially empty array)
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
