import {Event} from './event';

export class User {
  id: number;
  name: string;
  email: string;
  company: string;
  events: Event[];
}
