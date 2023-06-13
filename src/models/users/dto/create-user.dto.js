export class CreateUserDTO {
  name;
  phoneNumber;
  email;
  password;
  discription;

  constructor(user) {
    this.name = user.name
    this.phoneNumber = user.phoneNumber
    this.email = user.email
    this.password = user.password
    this.discription = user.discription
  }
}