import Service from './Service';
import ServiceType from './ServiceType';

export default class OrganizeService extends Service {
  constructor(user, organName, title, date, coverImage, location, subType) {
    super(user, ServiceType.ORGANIZE, date, location, coverImage);
    this.title = title;
    this.subType = subType;
    this.organName = organName;
  }
}
