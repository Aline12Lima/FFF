import { Plus } from "lucide-react";
import img1 from "../assets/imgs/Fundaçoes.jpeg";
import img2 from "../assets/imgs/estaca.jpg";
import img3 from "../assets/imgs/equipe.jpeg";
import img4 from "../assets/imgs/PDA.jpg";
import img5 from "../assets/imgs/Hero2.jpeg";

const services = [
  {
    title: "Fundações",
    image: img1,
  },
  {
    title: "Estacas Pré-moldadas",
    image: img2,
  },
  {
    title: "Projetos",
    image: img3,
  },
  {
    title: "Brutus - Martelo PDA",
    image: img4,
  },
  {
    title: "Consultoria de Fundações",
    image: img5,
  },
];

export default function Services() {
  return (
    <section id="Services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cabeçalho da Seção estilo Drywall Vital */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-400 uppercase leading-none">
            Nossos <br />
            <span className="text-brand-blue">Serviços</span>
          </h2>
          <div className="w-32 h-2 bg-brand-yellow mt-4"></div>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white overflow-hidden shadow-lg border-t-4 border-brand-blue flex flex-col h-[350px] cursor-pointer"
            >
              {/* Imagem do Serviço */}
              <div className="h-2/3 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Rodapé do Card (Estilo Drywall) */}
              <div className="h-1/3 p-6 flex items-center justify-between bg-white group-hover:bg-brand-blue transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-700 group-hover:text-white transition-colors duration-300 uppercase leading-tight max-w-[80%]">
                  {service.title}
                </h3>

                {/* Botão de Plus no canto */}
                <div className="absolute bottom-0 right-0 bg-gray-800 p-2 text-white group-hover:bg-brand-yellow group-hover:text-brand-blue transition-all">
                  <Plus size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
