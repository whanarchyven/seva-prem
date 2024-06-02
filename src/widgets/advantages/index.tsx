import { FC, ReactNode } from 'react';

interface AdvantageProps {
  children: ReactNode;
  bgId: 0 | 1 | 2 | 3 | number;
}

const Advantage: FC<AdvantageProps> = ({ children, bgId }) => {
  return (
    <div
      className={
        'w-full pr-3 py-6 pb-8 pl-9 rounded-2xl bg-cover flex flex-col gap-7'
      }
      style={{ backgroundImage: `url(/images/advantage${bgId + 1}.png` }}>
      <p className={'text-6xl font-phil text-[#7B7061]'}>0{bgId + 1}</p>
      <p
        className={
          'text-[#25211B] w-3/4 xl:text-2xl font-montserrat font-medium'
        }>
        {children}
      </p>
    </div>
  );
};

const AdvantagesBlock: FC = () => {
  const advantages = [
    'Какие зоны нашего тела обладают наибольшей чувствительностью',
    'Как правильно взаимодействовать с этими зонами, для усиления ощущений',
    'Как с помощью массажа и прикосновений повысить чувствительность тела',
    'Какие виды наслаждения существуют и как их достичь',
  ];
  return (
    <div className={'w-2/3 grid  xl:grid-cols-2 gap-x-20 gap-y-8'}>
      {advantages.map((item, counter) => (
        <Advantage key={counter} bgId={counter % 4}>
          {item}
        </Advantage>
      ))}
    </div>
  );
};

const HelpPoint: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={'flex gap-4 items-start'}>
      <img src={'/icons/checkbox.png'} className={'w-7'} />
      <p className={'font-montserrat m-0 xl:text-2xl'}>{children}</p>
    </div>
  );
};

const HelpBlock: FC = () => {
  const helpPoints = [
    'Подарить себе и партнеру новые яркие ощущения',
    'Углубить доверие и понимание в паре',
    'Убрать зажимы и напряжение, мешающие получать удовольствие',
    'Научиться полнее чувствовать свое тело',
    'Сделать ваши отношения богаче и разнообразнее',
  ];

  return (
    <div
      className={
        'w-full relative rounded-3xl overflow-clip for-who-block flex flex-col xl:flex-row justify-between '
      }>
      <div className={'flex flex-col w-full p-7 xl:p-16 gap-8'}>
        <p
          className={
            'font-phil text-black text-3xl xl:text-left text-center xl:text-6xl uppercase'
          }>
          Этот мастер-класс <br />
          <span className={'text-[#7F5C2D]'}>поможет вам:</span>
        </p>
        <div className={'flex flex-col w-full xl:w-2/3 gap-6'}>
          {helpPoints.map((item, counter) => (
            <HelpPoint key={counter}>{item}</HelpPoint>
          ))}
        </div>
      </div>
      <img
        className={'h-full hidden xl:flex w-auto'}
        src={'/images/help.png'}
      />
      <img
        className={'h-full xl:hidden w-auto'}
        src={'/images/help_mobile.png'}
      />
    </div>
  );
};

const Advantages: FC = () => {
  return (
    <div
      className={
        'bg-cover relative flex flex-col justify-center items-center bg-[url("/images/advantages_bg.png")]'
      }>
      <div className={'flex flex-col items-center gap-3'}>
        <p className={'uppercase text-4xl xl:text-6xl p-8 font-phil'}>
          Вы узнаете:
        </p>
        <AdvantagesBlock />
      </div>
      <div className={'flex p-4 xl:p-20 xl:px-32 justify-center'}>
        <HelpBlock />
      </div>
      <img
        className={'absolute xl:flex hidden left-0 self-center'}
        src={'/images/advantage_footage.png'}
      />
    </div>
  );
};

export default Advantages;
