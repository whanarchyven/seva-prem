import MainBlock from '@/widgets/main-block';
import Advantages from '@/widgets/advantages';
import ForWho from '@/widgets/for-who';
import Program from '@/widgets/program';
import Author from '@/widgets/author';
import LeadBlock from '@/widgets/lead-block';

export default function Home() {
  return (
    <>
      <main className={'pb-20'}>
        <MainBlock />
        <Advantages />
        <ForWho />
        <Program />
        <Author />
        <LeadBlock />
      </main>
    </>
  );
}
