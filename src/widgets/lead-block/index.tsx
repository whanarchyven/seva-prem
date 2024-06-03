import { FC } from 'react';
import CallbackButton from '@/shared/ui/CallbackButton';

const LeadBlock: FC = () => {
  return (
    <div className={'xl:px-32 flex justify-center px-4'}>
      <div
        className={
          'p-8 2xl:p-14 2xl:w-2/3 w-full rounded-2xl flex flex-col items-center gap-8 bg-cover bg-[url("/images/lead_mobile.png")] xl:bg-[url("/images/lead.png")]'
        }>
        <p className={'uppercase font-phil text-5xl 2xl:text-7xl xl:text-5xl'}>стоимость</p>
        <p
          className={
            'line-through font-phil text-[#3E2B13] opacity-30 2xl:text-7xl text-5xl xl:text-5xl'
          }>
          7900 ₽
        </p>
        <p className={'font-phil text-5xl 2xl:text-7xl xl:text-5xl'}>4900 ₽</p>
        <CallbackButton className={'text-sm xl:text-xl mt-7'}>
          принять участие
        </CallbackButton>
      </div>
    </div>
  );
};

export default LeadBlock;
