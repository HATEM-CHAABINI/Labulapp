export default class User {
  constructor(
    name,
    photo,
    relationship,
    groupID,
    email,
    availability,
    presentation,
    specs,
    families,
    friends,
    neighbors,
    helps,
    donations,
    events,
    feedback,
    phone,
    location
  ) {
    this.id = (Date.now() + parseInt(Math.random() * 100000000)).toString();
    this.name = name;
    this.photo = photo;
    this.email = email;
    this.groupID = groupID;
    this.relationship = relationship;
    this.availability = availability;
    this.presentation = presentation;
    this.specs = specs;
    this.circles = Object.assign({ families: families, friends: friends, neighbors: neighbors });
    this.needs = Object.assign({ helps: helps, donations: donations, events: events });
    this.feedback = feedback;
    this.phone = phone;
    this.location = location;
  }
}
