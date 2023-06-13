import { UsersDTO } from "../../users/dto/users.dto";
import { CommentDTO } from "./comment";
import { TagDTO } from "./tags";

export class PostsDTO {
  id;
  title;
  content;
  createAt;
  user;

  constructor(props) {
    this.id = props.id;
    this.title = props.title;
    this.content = props.content;
    this.createAt = props.createAt;
    this.user = new UsersDTO(props.user);
  }
}