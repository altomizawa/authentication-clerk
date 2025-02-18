import Image from "next/image";


export default function Home() {
  return (
    <div className='bg-black z-0 relative'>
      <div className='mt-12 overflow-hidden relative h-[70vh] flex flex-col justify-center pl-[20%]'>
        <Image src="/cryptexion_bkg2.png" priority='true' width={1920} height={1080} alt="cryptexionion background image" className='absolute top-0 left-0 w-screen h-screen opacity-90 -z-10' />
        <h3 className='text-[2rem] uppercase text-white w-full' style={{ fontFamily: 'var(--font-tektur)' }}>Welcome to</h3>
        <h1 className='text-[8rem] uppercase text-white mt-[-2rem] translate-x-[-0.5rem]' style={{ fontFamily: 'var(--font-tektur)' }}>cryptexionion</h1>
        <button className='underline text-xl text-white underline-offset-8 w-max px-4 py-2 mt-[-1.5rem] tracking-widest' style={{ fontFamily: 'var(--font-tektur)' }}>LEARN MORE</button>
      </div>
      <div className='bg-white h-[50vh] flex flex-col justify-center items-center'>
        <h3 className='text-black text-3xl font-extrabold'>THE BEST PLACE TO BUY AND SELL CRYPTO</h3>
        <p className='mt-12 w-1/2 leading-9' style={{ fontFamily: 'var(--font-tektur)' }} >Cryptexion is your trusted platform for buying and selling cryptocurrencies with ease and security. Whether you're a seasoned trader or just getting started, we provide a seamless experience with real-time market data, low fees, and top-tier security. Our user-friendly interface and robust trading tools make it simple to navigate the crypto world and execute trades with confidence. Join cryptexion today and take control of your digital assets like never before!</p>
      </div>
    </div>
  );
}
