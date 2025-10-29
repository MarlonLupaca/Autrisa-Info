import Image from 'next/image';
import HeaderAustrisa from '../components/HeaderAustrisa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 ">
      <HeaderAustrisa />
      <div className=" h-[100vh] flex flex-col items-center justify-center pt-30 p-10 gap-6">
        <div className="relative">
          <div className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-mainAutrisa to-mainAutrisa rounded-full"></div>
          <span className="relative text-[38px] md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-mainAutrisa via-mainAutrisa to-mainAutrisa text-nowrap">
            ¡Próximamente!
          </span>
          <div className="mt-4 h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-mainAutrisa/90 to-transparent rounded-full"></div>
        </div>
        <Image src="/Mantenimiento.png" width={500} height={500} alt="Mantenimiento" className="object-contain" />
      </div>
    </div>
  );
}
