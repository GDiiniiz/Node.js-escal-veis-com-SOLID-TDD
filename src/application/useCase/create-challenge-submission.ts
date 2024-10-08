import { Submission } from '../../domain/entities/submission';
import { ChallengeRepository } from '../repositories/ChallengeRepository';
import { StudentRepository } from '../repositories/StudentsRepository';

type CreateChallengeSubmissionRequest = {
  studentId: string;
  challengeId: string; 
}

export class CreateChallengeSubmission {

  constructor(
    private studentRepository: StudentRepository,
    private challengeRepository: ChallengeRepository
  ){}

  async execute({ studentId, challengeId }: CreateChallengeSubmissionRequest){

    const student = await this.studentRepository.findById(studentId)
    if(!student){
      throw new Error('Students does not exists.')
    }

    const challenge = await this.challengeRepository.findById(challengeId)
    if (!challenge){
      throw new Error('Challenge does not exists.')
    }
    
    const submission = Submission.create({
      studentId,
      challengeId,
      createdAt: new Date()
    })

    return submission

  }
}