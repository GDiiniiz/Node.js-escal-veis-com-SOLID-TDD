import { InMemoryChallengeChallengesRepository } from '../../../test/repositories/in-memory-challenge-repository'
import { InMemoryChallengeStudentsRepository } from '../../../test/repositories/in-memory-students-repository'
import { CreateChallengeSubmission } from './create-challenge-submission'

describe('Create chanllege submission', () => {
  it('should be able to create a new chanllege submission', async () => {
    const studentRepository = new InMemoryChallengeStudentsRepository()
    const challengeRepository = new InMemoryChallengeChallengesRepository()

    const sut = new CreateChallengeSubmission(
      studentRepository,
      challengeRepository
    )

    const response = await sut.execute({
      studentId: 'fake-student-id',
      challengeId: 'fake-chanllenge-id'
    })
    expect(response).toBeTruthy()

  })
})