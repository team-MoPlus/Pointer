import {
  AnswerInput,
  Button,
  ComponentWithLabel,
  Header,
  ImageUpload,
  Input,
  LevelSelect,
  PlusButton,
  ProblemEssentialInput,
  SectionCard,
  TagSelect,
  TextArea,
} from '@components';
import { components } from '@schema';
import { createFileRoute } from '@tanstack/react-router';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

export const Route = createFileRoute('/_GNBLayout/problem/$problemId/')({
  component: RouteComponent,
});

type ProblemUpdateRequest = components['schemas']['ProblemUpdateRequest'];

const initialData = {
  problemType: 'GICHUL_PROBLEM',
  practiceTestId: undefined,
  number: 30,
  title: 'title',
  conceptTagIds: [2, 3, 4, 5],
  answerType: 'MULTIPLE_CHOICE',
  answer: 'answer',
  difficulty: 1,
  recommendedMinute: 0,
  recommendedSecond: 0,
  mainProblemImageUrl: '',
  mainAnalysisImageUrl: '',
  mainHandwritingExplanationImageUrl: '',
  memo: 'memo',

  childProblems: [
    {
      conceptTagIds: [0],
      imageUrl: 'string',
      answerType: 'MULTIPLE_CHOICE',
      answer: 'string',
    },
  ],

  readingTipImageUrl: '',
  seniorTipImageUrl: '',
  prescriptionImageUrls: [''],
} as ProblemUpdateRequest;

function RouteComponent() {
  const { problemId } = Route.useParams();

  const { register, handleSubmit, reset, control, watch, setValue } = useForm({
    defaultValues: initialData,
  });

  const problemType = watch('problemType');
  const selectedAnswerType = watch('answerType');
  const selectedAnswer = watch('answer');
  const selectedLevel = watch('difficulty');
  const prescriptionImageUrls = watch('prescriptionImageUrls');
  console.log('selectedLevel', selectedLevel);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'childProblems',
  });

  // const { selectedList, unselectedList, onClickSelectTag, onClickRemoveTag } = useSelectTag();
  // const { problemAnswerType, answer, handleClickProblemAnswerType, handleChangeAnswer } =
  //   useAnswerInput();
  // const [level, setLevel] = useState<LevelType | undefined>();

  const handleAddPrescription = () => {
    const newPrescriptionImageUrls = [...(prescriptionImageUrls || [])];
    newPrescriptionImageUrls.push('');
    setValue('prescriptionImageUrls', newPrescriptionImageUrls);
  };

  const handleChangePrescriptionImageUrl = (imageUrl: string, index: number) => {
    const updatedUrls = [...(prescriptionImageUrls || [])];
    updatedUrls[index] = imageUrl;
    setValue('prescriptionImageUrls', updatedUrls);
  };

  const handleDeletePrescription = (index: number) => {
    const updatedUrls = [...(prescriptionImageUrls || [])];
    updatedUrls.splice(index, 1);
    setValue('prescriptionImageUrls', updatedUrls);
  };

  return (
    <>
      {/* <Button
        onClick={() => {
          append({
            conceptTagIds: [1, 2, 3],
            imageUrl: 'image',
            answerType: 'MULTIPLE_CHOICE',
            answer: 'answer',
          });
        }}>
        더하기
      </Button> */}
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}>
        <Button type='submit'>저장</Button>
        <Header title={`문항 ID : ${problemId}`} />
        <ProblemEssentialInput>
          <Controller
            control={control}
            name='problemType'
            render={({ field }) => (
              <ProblemEssentialInput.ProblemTypeSection
                problemType={field.value}
                handleChangeType={(type) => {
                  if (type === 'CREATION_PROBLEM') {
                    setValue('practiceTestId', undefined);
                    setValue('number', undefined);
                  }
                  field.onChange(type);
                }}
              />
            )}
          />
          {problemType !== 'CREATION_PROBLEM' && (
            <ProblemEssentialInput.PracticeTestSection>
              <Controller
                control={control}
                name='practiceTestId'
                render={({ field }) => (
                  <ProblemEssentialInput.PracticeTest
                    practiceTest={field.value}
                    handlePracticeTest={field.onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name='number'
                render={({ field }) => (
                  <ProblemEssentialInput.PraticeTestNumber
                    practiceTestNumber={field.value}
                    handleChangeNumber={field.onChange}
                  />
                )}
              />
            </ProblemEssentialInput.PracticeTestSection>
          )}
        </ProblemEssentialInput>
        <div className='mt-[4.8rem] flex flex-col gap-[4.8rem]'>
          <SectionCard>
            <div className='flex flex-col gap-[3.2rem]'>
              <ComponentWithLabel label='메인 문항 타이틀 입력' labelWidth='15.4rem'>
                <Input {...register('title')} />
              </ComponentWithLabel>
              {/* <ComponentWithLabel label='메인 문항 개념 태그' labelWidth='15.4rem'>
              <TagSelect
                sizeType='long'
                selectedList={selectedList}
                unselectedList={unselectedList}
                onClickSelectTag={onClickSelectTag}
                onClickRemoveTag={onClickRemoveTag}
              />
            </ComponentWithLabel> */}
              <ComponentWithLabel label='메인 문항 답 입력' labelWidth='15.4rem'>
                <AnswerInput>
                  <AnswerInput.AnswerTypeSection
                    selectedAnswerType={selectedAnswerType}
                    {...register('answerType')}
                  />
                  <AnswerInput.AnswerInputSection
                    selectedAnswerType={selectedAnswerType}
                    selectedAnswer={selectedAnswer}
                    {...register('answer')}
                  />
                </AnswerInput>
              </ComponentWithLabel>
              <div className='flex w-full items-center justify-between'>
                <ComponentWithLabel label='난이도 선택' labelWidth='15.4rem'>
                  <Controller
                    control={control}
                    name='difficulty'
                    render={({ field }) => (
                      <LevelSelect selectedLevel={field.value} onChange={field.onChange} />
                    )}
                  />
                </ComponentWithLabel>
                <div>
                  <ComponentWithLabel label='권장 시간 입력'>
                    <div className='flex gap-[2.4rem]'>
                      <div className='flex items-center gap-[1.6rem]'>
                        <input
                          className='font-bold-18 border-lightgray500 h-[5.6rem] w-[5.6rem] rounded-[16px] border bg-white px-[1.6rem] py-[0.8rem]'
                          {...register('recommendedMinute', {
                            valueAsNumber: true,
                          })}
                        />
                        <span className='font-medium-18 text-black'>분</span>
                      </div>
                      <div className='flex items-center gap-[1.6rem]'>
                        <input
                          className='font-bold-18 border-lightgray500 h-[5.6rem] w-[5.6rem] rounded-[16px] border bg-white px-[1.6rem] py-[0.8rem]'
                          {...register('recommendedSecond', {
                            valueAsNumber: true,
                          })}
                        />
                        <span className='font-medium-18 text-black'>초</span>
                      </div>
                    </div>
                  </ComponentWithLabel>
                </div>
              </div>

              <div className='grid grid-cols-3 gap-x-[4.8rem]'>
                <div>
                  <ComponentWithLabel label='메인 문항 선택' direction='column'>
                    <Controller
                      control={control}
                      name='mainProblemImageUrl'
                      render={({ field }) => (
                        <ImageUpload
                          problemId={problemId}
                          imageType='MAIN_PROBLEM'
                          imageUrl={field.value}
                          handleChangeImageUrl={field.onChange}
                        />
                      )}
                    />
                  </ComponentWithLabel>
                </div>
                <div>
                  <ComponentWithLabel label='메인 문항 분석 선택' direction='column'>
                    <Controller
                      control={control}
                      name='mainAnalysisImageUrl'
                      render={({ field }) => (
                        <ImageUpload
                          problemId={problemId}
                          imageType='MAIN_ANALYSIS'
                          imageUrl={field.value}
                          handleChangeImageUrl={field.onChange}
                        />
                      )}
                    />
                  </ComponentWithLabel>
                </div>
                <div>
                  <ComponentWithLabel label='메인 문항 손해설 선택' direction='column'>
                    <Controller
                      control={control}
                      name='mainHandwritingExplanationImageUrl'
                      render={({ field }) => (
                        <ImageUpload
                          problemId={problemId}
                          imageType='MAIN_HANDWRITING_EXPLANATION'
                          imageUrl={field.value}
                          handleChangeImageUrl={field.onChange}
                        />
                      )}
                    />
                  </ComponentWithLabel>
                </div>
              </div>

              <ComponentWithLabel label='문항 메모' direction='column'>
                <TextArea placeholder={'여기에 메모를 작성해주세요.'} {...register('memo')} />
              </ComponentWithLabel>
            </div>
          </SectionCard>
          <SectionCard>
            <div className='flex items-baseline gap-[1.6rem]'>
              <h3 className='font-bold-32 text-black'>새끼 문제 등록</h3>
              <p className='font-medium-14 text-lightgray500'>
                새끼 문항은 저장 후 항목 추가가 불가능해요
              </p>
            </div>
            <div className='grid grid-cols-2 gap-x-[4.8rem] gap-y-[6.4rem]'>
              <div className='mt-[3.2rem] flex flex-col gap-[3.2rem]'>
                <h6 className='font-medium-24 text-black'>새끼 문항 개념 태그</h6>
                <TagSelect sizeType='long' />
                <h6 className='font-medium-24 text-black'>새끼 문항 선택</h6>
                <ImageUpload />
                <h6 className='font-medium-24 text-black'>새끼 문항 답 입력</h6>
                <AnswerInput />
              </div>
            </div>
          </SectionCard>
          <SectionCard>
            <h6 className='font-bold-32 text-black'>TIP</h6>
            <div className='mt-[4.8rem] grid grid-cols-2 gap-[4.8rem]'>
              <div>
                <ComponentWithLabel label='문항을 읽어내려갈 때' direction='column'>
                  <Controller
                    control={control}
                    name='readingTipImageUrl'
                    render={({ field }) => (
                      <ImageUpload
                        problemId={problemId}
                        imageType='READING_TIP'
                        imageUrl={field.value}
                        handleChangeImageUrl={field.onChange}
                      />
                    )}
                  />
                </ComponentWithLabel>
              </div>
              <div>
                <ComponentWithLabel label='1등급 선배가 해주는 조언' direction='column'>
                  <Controller
                    control={control}
                    name='seniorTipImageUrl'
                    render={({ field }) => (
                      <ImageUpload
                        problemId={problemId}
                        imageType='SENIOR_TIP'
                        imageUrl={field.value}
                        handleChangeImageUrl={field.onChange}
                      />
                    )}
                  />
                </ComponentWithLabel>
              </div>
            </div>
            <div className='bg-lightgray300 my-[4.8rem] h-[2px] w-full' />
            <h6 className='font-medium-18 mt-[3.2rem] text-black'>진단 및 처방</h6>
            <div className='mt-[2.4rem] grid grid-cols-2 gap-x-[4.8rem] gap-y-[2.4rem]'>
              {prescriptionImageUrls?.map((url, index) => {
                return (
                  <ImageUpload
                    key={`prescription-${index}`}
                    problemId={problemId}
                    imageType='PRESCRIPTION'
                    imageUrl={url}
                    handleChangeImageUrl={(imageUrl: string) =>
                      handleChangePrescriptionImageUrl(imageUrl, index)
                    }
                    handleClickDelete={() => handleDeletePrescription(index)}
                  />
                );
              })}
              <div className='flex items-center'>
                <PlusButton onClick={handleAddPrescription} />
              </div>
            </div>
          </SectionCard>
        </div>
      </form>
    </>
  );
}
