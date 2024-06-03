'use client';
import { FC, ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';

interface CallbackButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const CallbackButton: FC<CallbackButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  const cvaRoot = cva([
    'callback-button-bg cursor-pointer pt-10 pb-6 px-10 text-center rounded-xl flex items-center justify-center callback-button-shadows',
    'font-montserrat uppercase  text-[#3E2B13] font-semibold',
  ]);
  return (
    <div
      onClick={() => (onClick ? onClick() : null)}
      className={clsx(className, cvaRoot())}>
      <p className={'callback-button-text'}>{children}</p>
    </div>
  );
};

export default CallbackButton;
