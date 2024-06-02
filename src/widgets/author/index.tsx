import { FC } from 'react';

const Author: FC = () => {
  return (
    <div className={' p-12 bg-[url("/images/author_bg.png")]'}>
      <div className={'grid xl:grid-cols-2 gap-3 items-center'}>
        <div className={'flex flex-col gap-8'}>
          <img src={'/images/logo.svg'} className={'xl:w-[80%]'} />
          <p className={'font-montserrat xl:text-2xl whitespace-pre-wrap'}>
            <strong>Один из самых известных в мире</strong> русскоязычных
            мастеров тантры, автор и ведущий тренингов `&quot;`Искусство
            прикосновений`&quot;`, `&quot;`Энергетические аспекты
            отношений`&quot;`, `&quot;`Практики тонкой чувствительности`&quot;`.
            Более 20 лет опыта личной практики и более 11 лет практики
            преподавания.
            <br />
            <br />
            Занятия регулярно проводятся более чем в 10 странах (Россия, Индия,
            Турция, Индонезия, Тайланд, Кипр, Дубай, Германия, Испания, Латвия,
            Эстония и др.)
            <br />
            <br />
            Особенностью стиля преподавания является перевод сложных вещей на
            простой и понятный язык, чтобы любой человек, вне зависимости от
            своего опыта, мог сразу применить полученные знания и вывести свою
            чувствительность на новый уровень.
          </p>
        </div>
        <div className={'relative flex flex-col items-end justify-end'}>
          <img src={'/images/author.png'} />
          <div className={'author-wrapper w-full h-12 xl:h-32 -mt-6'}></div>
        </div>
      </div>
    </div>
  );
};

export default Author;
