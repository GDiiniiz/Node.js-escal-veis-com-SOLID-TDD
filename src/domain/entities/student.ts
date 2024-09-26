import { Entity } from "../../core/domain/Entity";

type CorretionProps = {
  name: string;
  email: string;
}

export class Student extends Entity<CorretionProps> {
  private constructor(props: CorretionProps, id?: string) {
    super(props, id)
  }

  public crate(props: CorretionProps, id: string) {
    const student = new Student(props, id);

    return Student
  }
}