import { FC } from 'react';
import CallbackButton from '@/shared/ui/CallbackButton';
import { cva } from 'class-variance-authority';

const MainBlock: FC = () => {
  const cvaRoot = cva([
    'h-screen flex flex-col xl:mt-0 mt-4 xl:justify-center items-center xl:items-start bg-center bg-cover bg-[url("/images/main_block_mobile.jpg")] xl:bg-[url("/images/main_block_bg.jpg")]',
  ]);
  const cvaContentBlock = cva([
    'p-4 flex xl:w-1/2 flex-col items-center xl:justify-center h-full gap-8',
  ]);
  const cvaTitle = cva([
    'w-full sm:w-3/4 xl:w-full uppercase text-center font-phil text-5xl xl:text-8xl',
  ]);
  const cvaSubtitle = cva(['text-cBrown']);
  const cvaLogo = cva(['xl:-mt-16 xl:w-auto w-80 -mt-10']);
  const cvaButton = cva('text-sm xl:text-xl');
  const cvaDescription = cva([
    'font-montserrat xl:w-3/5 w-4/5 text-center text-base xl:text-2xl',
  ]);
  const cvaSubDescription = cva(['font-semibold']);

  return (
    <div className={cvaRoot()}>
      <div className={cvaContentBlock()}>
        <p className={cvaTitle()}>
          18 зон тела для <span className={cvaSubtitle()}>ярких ощущений</span>
        </p>
        <img className={cvaLogo()} src={'/images/logo.png'} />
        <CallbackButton className={cvaButton()}>Принять участие</CallbackButton>
        <p className={cvaDescription()}>
          Особая последовательность прикосновений, открывающая{' '}
          <span className={cvaSubDescription()}>
            новую глубину близости в паре
          </span>
        </p>
      </div>
    </div>
  );
};

export default MainBlock;
