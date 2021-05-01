import Service from './Service';
import ServiceType from './ServiceType';

export default class GiveService extends Service {
  constructor(user, title, organName, date, coverImage, location, subType) {
    super(user, ServiceType.GIVE, date, location, coverImage);
    this.title = title;
    this.subType = subType;
    this.organName = organName;
  }
}
