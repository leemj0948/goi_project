import Head from 'next/head';
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
        <div style={{fontSize: '2rem',fontWeight: 'bold',textAlign: 'center',margin: '1.5rem auto'}}>고이 프로젝트</div>
        <Link style={{    display: 'block',
                          width: '80%',
                          textAlign: 'center',
                          margin: '1rem auto',
                          border: '1px wheat solid',
                          color: 'white',
                          backgroundColor: 'darkgrey',
                          height: '30px',
                          paddingTop: '7px'
}}href="/request/1">시작(클릭)</Link>
        
        </div>
      )}
    </div>
  );
}
