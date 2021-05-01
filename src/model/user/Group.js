import User from './User';
import UserType from './UserType';

export default class Group extends User {
  constructor(type, name, relationship, id, members) {
    super(name, '', relationship);
    this.id = id;
    this.type = type ? UserType.GROUP : null;
    // this.number = number;
    this.members = members;
  }
}
