import { Entity } from "../../core/domain/Entity";

type CorretionProps = {
  grade: number;
  submissionId: string;
  createdAt: Date;

}

class Correction extends Entity<CorretionProps> {
  private constructor(props: CorretionProps, id?: string){
    super(props, id)
  }

  public crate(props: CorretionProps, id: string){
    if(props.grade < 0 || props.grade > 10){
      throw new Error('')
    }
    const correction = new Correction(props, id);

    return correction
  }
}