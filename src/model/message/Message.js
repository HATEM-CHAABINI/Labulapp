import Service from '../service/Service';

export default class Message {
  constructor(user, title, coverImage, lastText, checked, date) {
    this.id = (Date.now() + parseInt(Math.random() * 100000000)).toString();
    this.user = user;
    this.service = new Service(user, '', '', '', coverImage, title);
    this.lastText = lastText;
    this.checked = checked;
    this.date = date;
  }
}
