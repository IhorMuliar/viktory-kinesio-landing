import Hero from '@/app/(landing)/_home/components/hero/Hero';
import Services from '@/app/(landing)/_home/components/services/Services';
import Content from '@/app/(landing)/_home/components/content/Content';
import Process from '@/app/(landing)/_home/components/process/process';
import Faq from '@/app/(landing)/_home/components/faq/Faq';

export const metadata = {
  title: {
    absolute: 'Viktory Kinesio',
  },
  description:
    'Вікторія Крахмальна - допоможу навести лад в середині Тебе, щоб все і ззовні стало на свої місця!',
  alternates: {
    canonical: '/',
  },
};

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Content />
      <Process />
      <Faq />
    </>
  );
};

export default Home;
