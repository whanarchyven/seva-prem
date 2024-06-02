import { FC, ReactNode } from 'react';

const Stage: FC<{ children: ReactNode; bgId: 0 | 1 | 2 | 3 | number }> = ({
  children,
  bgId,
}) => {
  return (
    <div className={'flex items-start gap-8'}>
      <img
        src={`/images/programm${bgId + 1}.png`}
        className={'w-14 xl:w-20 aspect-square rounded-xl'}
        alt="programm"
      />
      <p className={'xl:text-2xl  font-montserrat'}>{children}</p>
    </div>
  );
};

const Program: FC = () => {
  const stages = [
    'Исследование первичных и вторичных чувствительных зон тела',
    'Детальные инструкции по пробуждению каждой из 18 зон для достижения нового уровня ощущений',
    'Особые техники прикосновений из тантрических практик, способные в полной мере пробудить вашу чувствительность',
    'Энергетические аспекты отношений для лучшего понимания себя и партнера',
  ];

  return (
    <div
      className={'flex flex-col w-full xl:p-20 p-3 gap-10 mt-10 items-center'}>
      <p
        className={
          'font-phil text-[#C68A39] w-[90%] xl:w-1/3 text-center uppercase text-4xl xl:text-6xl'
        }>
        Программа <span className={'text-black'}>мастер-класса:</span>
      </p>
      <div className={'w-4/5 grid xl:grid-cols-2 xl:mt-14 gap-x-32 gap-y-12'}>
        {stages.map((item, counter) => (
          <Stage key={counter} bgId={counter}>
            {item}
          </Stage>
        ))}
      </div>
      <p
        className={
          'text-[#674C27] xl:w-1/3 text-center xl:text-2xl text-xl font-montserrat italic'
        }>
        Все упражнения и техники прикосновений вы сможете практиковать дома
      </p>
    </div>
  );
};

export default Program;
