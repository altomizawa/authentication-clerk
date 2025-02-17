import Image from 'next/image';
import { currentUser } from '@clerk/nextjs/server'


const Dashboard = () => {
  async function getUser() {
    const user = await currentUser();
    console.log(user.id);
  }
  getUser();
  return (
    <div className="flex flex-col items-center justify-items-center p-8 pb-20 sm:p-20">
      <Image src="/cryptexion_bkg.png" width={1920} height={1080} alt="Cryptexion Logo" className='w-screen h-screen fixed top-0 left-0 -z-10 opacity-50' />
        <h1 className='text-[5rem] uppercase' style={{ fontFamily: 'var(--font-tektur)' }}>DASHBOARD</h1>
    </div>
  );
}

export default Dashboard
