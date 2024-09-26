import { Entity } from "../../core/domain/Entity";

type CorretionProps = {
  challengeId: string;
  studentId: string;
  createdAt: Date;
}

export class Submission extends Entity<CorretionProps> {
  private constructor(props: CorretionProps, id?: string) {
    super(props, id)
  }

  static create(props: CorretionProps, id?: string) {
    const submission = new Submission({
      ...props,
      createdAt: props?.createdAt ?? new Date()
     }, id);

    return submission
  }
}