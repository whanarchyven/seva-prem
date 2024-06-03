import { FC } from 'react';
import CallbackButton from '@/shared/ui/CallbackButton';
import { cva } from 'class-variance-authority';


const BackgroundWithFootages:FC=()=>{
  return(
      <div className={'w-2/3 flex 2xl:w-full justify-center overflow-clip h-screen absolute right-0 top-0 z-0'}>
          <img className={'absolute h-full right-0'} src={'/images/main-block/seva.png'}/>
          <img className={'absolute right-60 w-[40rem]'} src={'/images/main-block/lepestki.png'}/>
          <img className={'absolute right-0 bottom-0'} src={'/images/main-block/column.png'}/>


          <img className={'absolute w-[35rem] right-[33rem]'} src={'/images/main-block/flower1.png'}/>
          <img className={'absolute w-96 right-5 top-16'} src={'/images/main-block/flower2.png'}/>
          <img className={'absolute w-72 right-[35rem] top-60'} src={'/images/main-block/flower3.png'}/>
          <img className={'absolute w-80 right-[45rem] top-96'} src={'/images/main-block/flower4.png'}/>
          <img className={'absolute w-72 right-0 bottom-8'} src={'/images/main-block/flower5.png'}/>
          <img className={'absolute w-80 right-[45rem] bottom-0'} src={'/images/main-block/flower6.png'}/>

          <img className={'absolute right-0 bottom-0 w-full'} src={'/images/main-block/smoke.png'}/>
      </div>
  )
}

const MainBlock: FC = () => {
    const cvaRoot = cva([
        'h-screen min-h-[850px] xl:min-h-auto flex flex-col xl:mt-0 mt-4 relative xl:justify-center items-center xl:items-center bg-center bg-cover bg-[url("/images/main_block_mobile.jpg")] xl:bg-[url("/images/main_block_bg.png")]',
  ]);
  const cvaContentBlock = cva([
    'p-4 absolute xl:left-0 flex xl:w-1/2 flex-col items-center xl:justify-center h-full gap-8',
  ]);
  const cvaTitle = cva([
    'w-full sm:w-3/4 xl:w-full uppercase text-center font-phil text-5xl lg:text-7xl',
  ]);
  const cvaSubtitle = cva(['text-cBrown']);
  const cvaLogo = cva(['xl:-mt-14 lg:w-auto w-80 -mt-10']);
  const cvaButton = cva('text-sm xl:text-xl');
  const cvaDescription = cva([
    'font-montserrat xl:w-3/5 w-4/5 text-center text-base xl:text-xl',
  ]);
  const cvaSubDescription = cva(['font-semibold']);

  return (
      <div className={cvaRoot()}>
          <div className={'xl:flex hidden'}>
              <BackgroundWithFootages/>
          </div>
          <img className={'absolute bottom-0'} src={'/images/main-block/bottom_footage.svg'}/>
          <div className={cvaContentBlock()}>
              <p className={cvaTitle()}>
                  18 зон тела для <br/> <span className={cvaSubtitle()}>ярких ощущений</span>
              </p>
              <img className={cvaLogo()} src={'/images/logo.png'}/>
              <CallbackButton className={cvaButton()}>Принять участие</CallbackButton>
              <p className={cvaDescription()}>
                  Особая последовательность прикосновений, открывающая <span className={cvaSubDescription()}>новую глубину близости в паре </span>
              </p>
          </div>
      </div>
  );
};

export default MainBlock;
