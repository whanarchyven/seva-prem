import { FC } from 'react';
import CallbackButton from '@/shared/ui/CallbackButton';

const LeadBlock: FC = () => {
  return (
    <div className={'xl:px-32 px-4'}>
      <div
        className={
          'p-20 pb-48 w-full rounded-2xl flex flex-col items-center gap-8 bg-cover bg-[url("/images/lead_mobile.png")] xl:bg-[url("/images/lead.png")]'
        }>
        <p className={'uppercase font-phil text-5xl xl:text-7xl'}>стоимость</p>
        <p
          className={
            'line-through font-phil text-[#3E2B13] opacity-30 text-5xl xl:text-7xl'
          }>
          7900 ₽
        </p>
        <p className={'font-phil text-5xl xl:text-7xl'}>4900 ₽</p>
        <CallbackButton className={'text-xl xl:text-3xl mt-7'}>
          принять участие
        </CallbackButton>
      </div>
    </div>
  );
};

export default LeadBlock;
