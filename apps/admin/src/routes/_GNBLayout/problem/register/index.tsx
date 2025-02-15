import { postProblems } from '@apis';
import { Button, Header, ProblemEssentialInput } from '@components';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { ExamType, ProblemTypeType } from '@types';
import { useState } from 'react';

export const Route = createFileRoute('/_GNBLayout/problem/register/')({
  component: RouteComponent,
});

function RouteComponent() {
  const [problemType, setProblemType] = useState<ProblemTypeType>('GICHUL_PROBLEM');
  const [practiceTest, setPracticeTest] = useState<ExamType | null>(null);
  const [practiceTestNumber, setPracticeTestNumber] = useState<number>();

  const { navigate } = useRouter();

  const { mutate } = postProblems();

  const handleChangeType = (type: ProblemTypeType) => {
    setProblemType(type);
  };

  const handlePracticeTest = (exam: ExamType | null) => {
    setPracticeTest(exam);
  };

  const handleChangeNumber = (num: number) => {
    setPracticeTestNumber(num);
  };

  const handleClickRegister = () => {
    const requestBody =
      problemType === 'CREATION_PROBLEM'
        ? { problemType, practiceTestId: 0, number: 0 }
        : { problemType, practiceTestId: practiceTest?.id, number: practiceTestNumber };

    mutate(
      {
        body: requestBody,
      },
      {
        // onSuccess: (data) => {
        //   const { problemId } = data;
        //   navigate({ to: `/problem/${problemId}` });
        // },
      }
    );

    return;
  };
  return (
    <>
      <Header title='문항 등록' />
      <ProblemEssentialInput
        problemType={problemType}
        practiceTest={practiceTest}
        practiceTestNumber={practiceTestNumber}
        handleChangeType={handleChangeType}
        handlePracticeTest={handlePracticeTest}
        handleChangeNumber={handleChangeNumber}
      />
      <div className='mt-[2.4rem] flex w-full items-center justify-end'>
        <Button type='button' sizeType='long' variant='dark' onClick={handleClickRegister}>
          완료
        </Button>
      </div>
    </>
  );
}
