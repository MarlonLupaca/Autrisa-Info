import HeaderAustrisa from '../components/HeaderAustrisa';
import HomeAustrisa from '../components/HomeAustrisa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-20">
      <HeaderAustrisa />

      <div className="w-full text-center pt-8 pb-6 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-4xl md:text-6xl font-bold text-mainAutrisa mb-4 leading-tight">Atención de Clientes</p>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Conoce nuestro proceso de atención paso a paso para brindarte el mejor servicio
          </p>

          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-1 w-12 bg-mainAutrisa rounded-full"></div>
            <div className="h-1 w-12 bg-mainAutrisa/50 rounded-full"></div>
            <div className="h-1 w-12 bg-mainAutrisa/30 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-12">
        <HomeAustrisa />
      </div>

      <div className="w-full py-12 bg-gradient-to-t from-mainAutrisa/5 to-transparent">
        <div className="text-center text-gray-500 text-sm">
          <p>¿Tienes dudas? Estamos aquí para ayudarte</p>
        </div>
      </div>
    </div>
  );
}
