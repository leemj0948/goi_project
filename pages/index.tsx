import Head from 'next/head';
import Step from './request/[step]';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>goi_project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {process.env.NEXT_PUBLIC_RUN_MODE === 'development' ? (
        <div>
          <div>Home</div>
          <div>bulid:{process.env.NEXT_PUBLIC_RUN_MODE}</div>
        </div>
      ) : (
        <div>
        <div>고이 프로젝트</div>
        <Link href="/request/1">시작</Link>
        {/* <Step/> */}
        </div>
      )}
>    </div>
  );
}
