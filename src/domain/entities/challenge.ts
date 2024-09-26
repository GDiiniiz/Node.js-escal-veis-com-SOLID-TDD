import { Entity } from "../../core/domain/Entity";

type CorretionProps = {
  title: string;
  instructionUrl: string;
}

export class Challenge extends Entity<CorretionProps> {
  private constructor(props: CorretionProps, id?: string) {
    super(props, id)
  }

  static crate(props: CorretionProps, id: string) {
   const challenge = new Challenge(props, id);

    return Challenge
  }
}