import { FC } from 'react';

const ForWho: FC = () => {
  return (
    <div className={'p-4 flex flex-col items-center justify-center gap-12'}>
      <p className={'font-phil text-5xl xl:text-6xl uppercase'}>Для кого:</p>
      <div
        className={
          'flex xl:flex-row flex-col w-full items-center justify-center gap-10 xl:gap-20'
        }>
        <div
          className={
            'w-full xl:w-1/3 2xl:w-[36rem] rounded-2xl flex relative flex-col items-center aspect-square for-who-footage'
          }>
          <img
            src={'/images/forwho_footage1.png'}
            className={'w-full h-full absolute left-0 top-0 z-0'}
          />
          <img className={'h-full'} src={'/images/forwho1.png'} />
          <div
            className={
              'for-who-text-grad w-full rounded-2xl -mt-10 p-8 flex flex-col gap-3'
            }>
            <p className={'uppercase text-center text-4xl font-phil'}>
              для пар
            </p>
            <p className={'text-center text-[#393939] text-xl font-montserrat'}>
              стремящимся разнообразить <br/> свои отношения
            </p>
          </div>
        </div>
        <div
          className={
            'w-full xl:w-1/3 2xl:w-[36rem] rounded-2xl flex relative flex-col aspect-square for-who-footage'
          }>
          <img
            src={'/images/forwho_footage2.png'}
            className={'w-full h-full absolute left-0 top-0 z-0'}
          />
          <img src={'/images/forwho2.png'} />
          <div
            className={
              'for-who-text-grad w-full rounded-2xl -mt-10 p-8 flex flex-col gap-3'
            }>
            <p className={'uppercase text-center text-4xl font-phil'}>
              для одиночек
            </p>
            <p className={'text-center text-[#393939] text-xl font-montserrat'}>
              желающих лучше <br/>понять свое тело
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForWho;
