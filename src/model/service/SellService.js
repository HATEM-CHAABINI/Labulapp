import Service from './Service';
import ServiceType from './ServiceType';

export default class SellService extends Service {
  constructor(title, slogan, comment, date, coverImage, location, subType, price,discountPrice, discountInfo) {
    super(null, ServiceType.SELL, date, location, coverImage );
    this.title = title;
    this.slogan = slogan;
    this.comment = comment;
    this.subType = subType;
    this.price = price;
    this.discountPrice = discountPrice;
    this.discountInfo = discountInfo;
  }
}
