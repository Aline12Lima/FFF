import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { MessageCircle } from "lucide-react";

import hero1 from "../assets/imgs/Hero.jpg";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-fade";

const images = [hero1];

export default function Hero() {
  return (
    <section
      id="Hero"
      className="relative h-[110vh] w-full overflow-hidden bg-brand-blue"
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-[5000ms] scale-100"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Overlay Escuro para dar leitura ao texto */}
              <div className="absolute inset-0 bg-black/60" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Conteúdo do Texto */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-20">
        <div className="max-w-3xl">
          <span className="text-brand-yellow font-black tracking-[0.1em] uppercase text-sm md:mt-32 mt-0 mb-4 block animate-fadeIn">
            Engenharia de Base e Fundações
          </span>

          <h1 className="text-2xl md:text-7xl font-black text-white leading-tight uppercase mb-2">
            Soluções em <br />
            <span className="text-brand-yellow">Prédios e Galpões</span> <br />
            Industriais
          </h1>

          <p className="text-gray-200 text-lg md:text-xl font-medium max-w-2xl mb-2 border-l-4 border-brand-yellow pl-6">
            Atendimento especializado em toda a região de **São Paulo**.
            Executamos obras de alta complexidade com precisão técnica.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-brand-yellow text-brand-blue font-black px-8 py-4 uppercase tracking-tighter hover:bg-yellow-500 transition-all flex items-center gap-2"
            >
              Ver Nossos Serviços
            </a>
            <a
              href="https://wa.me/5511998623585"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-black px-8 py-4 uppercase tracking-tighter hover:bg-white hover:text-brand-blue transition-all flex items-center gap-2"
            >
              <MessageCircle size={20} className="text-brand-yellow" /> Falar
              com Engenheiro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
