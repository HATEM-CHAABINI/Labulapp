import Service from './Service';
import ServiceType from './ServiceType';

export default class NeedService extends Service {
  constructor(user, organName, title, date, coverImage, location, subType, price) {
    super(user, ServiceType.NEED, date, location, coverImage);
    this.title = title;
    this.subType = subType;
    this.organName = organName;
    this.price = price;
  }
}
