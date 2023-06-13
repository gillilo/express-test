import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

export class RegisterDTO {
  name;
  email;
  phoneNumber;
  password;
  discription;

  constructor(props) {
    this.name = props.name;
    this.email = props.email;
    this.phoneNumber = props.phoneNumber;
    this.password = props.password;
    this.discription = props.discription;
  }

  async hashPassword() {
    const hashedPassword = await bcrypt.hash(
      this.password,
      Number(process.env.PASSWORD_SALT),
    );

    return hashedPassword;
  }
}