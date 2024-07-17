import type { MetaFunction } from "@remix-run/cloudflare";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useEffect, useRef, useState } from 'react';
import Combo2 from "../images/Combo2.svg";
import Combo3 from "../images/Combo3.svg";
import Combo4 from "../images/Combo4.svg";
import Combo5 from "../images/Combo5.svg";
import LogoRioBatallas2024 from "../images/LogoRioBatallas2024.svg";
import LogoRioBatallas2024Png from "../images/LogoRioBatallas2024.png";

import ChimborazoBlue from "../images/ChimborazoYellowAndBlue.png";
import CatedralBlue from "../images/CatedralPurpleYellow.png";
import Ferrocarrill from "../images/FerrocarrilYellowBlue.png";
import Puruha from "../images/PuruhaYellowBlue.png";
import Basilica from "../images/BasilicaYellowBlue.png";
import Neptuno from "../images/NeptunoYellowBlue.png";
import Swing360 from "../images/Swing360Real.png";
import Swing from "../images/SwingReal.png";
import Planche from "../images/PlanceReal.png";
import Pasavallas from "../images/PasavallasReal.png";
import Laizans from "../images/Laizans.png";

import { animated } from "@react-spring/web";

export const meta: MetaFunction = () => {
  return [
    { title: "Riobambattles" },
    {
      name: "descripción",
      content: "Sitio web del torneo abireto de calistenia y street workout en Riobamba, Ecuador.",
    },
  ];
};

export const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const ref = useRef<any>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = 6; // Total number of pages in the parallax

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        const nextPage = pageIndex + 1;
        setPageIndex(nextPage);
        ref.current.scrollTo(nextPage);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp' && ref.current) {
        const previousPage = pageIndex - 1;
        setPageIndex(previousPage);
        ref.current.scrollTo(previousPage);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [pageIndex]);

  return (
    <div ref={containerRef} className="flex justify-center">
      <Parallax pages={totalPages} ref={ref} className="bg-black md:max-w-screen-sm lg:max-w-screen-sm xl:max-w-screen-sm">

        <ParallaxLayer offset={0.08 } speed={1} style={{ backgroundColor: '#000000' }} >
          <ParallaxLayer offset={0} speed={-1.5} horizontal>
            <h1 className="w-screen pt-6 pl-6 pr-6 text-2xl text-yellow-100 text-right">
              Torneo Abierto
            </h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={0.16} speed={1} style={{ backgroundColor: '#000000' }} >
          <ParallaxLayer offset={0} speed={3.5} horizontal>
            <h1 className="w-screen pl-6 pr-6 text-3xl text-blue-300 text-right">
              Calistenia y Street Workout
            </h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={0.28} speed={1} >
          <ParallaxLayer offset={0} speed={5.5} horizontal>
              <img src={LogoRioBatallas2024Png} className="object-cover w-screen p-4" />  
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={0.55} speed={0}>
          <ParallaxLayer offset={0} speed={0.5} horizontal>
            <img src={ChimborazoBlue} className="object-cover h-1/2" />        
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0} className="bg-blue-900">
          <ParallaxLayer offset={0.6} speed={0.65} horizontal>
            <div>
              <img src={Swing360} className="h-80 opacity-75" />
            </div>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={1.40} speed={0.4}>
          <ParallaxLayer offset={-0.8} speed={-0.35} horizontal>
            <h1 className="w-screen text-4xl text-red-400 text-right">
              Lugar
            </h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={1.65} speed={0} className="bg-blue-900">
          <ParallaxLayer offset={-0.8} speed={-0.35} horizontal>
            <img src={CatedralBlue} className="object-cover h-1/3" />        
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={1.45} speed={0.4} >
          <ParallaxLayer offset={-0.4} speed={-0.2} horizontal>
            <h1 className="w-screen pl-6 pr-6 text-5xl text-white text-right font-semibold">
              Polideportivo de la Ciudadela Politécnica
            </h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0} style={{ backgroundColor: '#000000' }}>
          <ParallaxLayer offset={-1.65} speed={-0.35} horizontal>
            <div className="flex justify-center items-center">    
              <img src={Planche} className="h-64" />
            </div>
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer offset={2.4} speed={0}>
          <ParallaxLayer offset={0.8} speed={0.4} horizontal>
            <h1 className="w-screen pt-6 pl-6 pr-6 text-4xl text-purple-500">
              Fecha
            </h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={0} style={{ backgroundColor: '#000000' }}>
          <ParallaxLayer offset={1} speed={1} horizontal>
            <h1 className="w-screen pl-6 pr-6 text-5xl text-white font-semibold">
              Domingo 04 de agosto de 2024
            </h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0} >
          <ParallaxLayer offset={1.6} speed={1.6} factor={3} horizontal>
            <animated.img src={Ferrocarrill} className="object-cover h-96" />
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0} className="bg-blue-900">
          <ParallaxLayer offset={0} speed={0} horizontal>
            <h1 className="w-screen pl-6 pr-6 mt-8 text-4xl text-red-500 text-right">
              Categoría
            </h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={3.1} speed={0} className="bg-blue-900">
          <ParallaxLayer offset={0.3} speed={0.1} horizontal>
            <h1 className="w-screen pl-6 pr-6 text-5xl text-white text-right font-semibold">
              Novatos y Semi-Pro            
            </h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={0} >
          <ParallaxLayer offset={0} speed={0} horizontal>
            <h1 className="w-screen pl-6 pr-6 mt-8 text-4xl text-red-500 text-right">
              Modalidad
            </h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={3.3} speed={0}>
          <ParallaxLayer offset={0.3} speed={0.1} horizontal>
            <h1 className="w-screen pl-6 pr-6 text-5xl text-white text-right font-semibold">
              Freestyle           
            </h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={0}>
          <ParallaxLayer offset={0.4} speed={0.2} horizontal>
            <img src={Puruha} className="h-full" />        
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} speed={0.2} >
          <ParallaxLayer offset={-2} speed={-0.41} horizontal>
            <img src={Pasavallas} className="h-96" />
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0} className="bg-black">
          <ParallaxLayer offset={-3} speed={-0.4} horizontal>
            <div>
              <img src={Swing} className="object-cover h-80" />
            </div>
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer offset={4.45} speed={0.2} >
          <ParallaxLayer offset={0} speed={0} horizontal>
            <h1 className="w-screen text-4xl text-red-400">Cero costo de inscripción</h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={4.7} speed={0} className="bg-black">
          <ParallaxLayer offset={1} speed={0.33} horizontal>
            <img src={Basilica} className="object-cover h-96" />        
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={4.55} speed={0.2}>
          <ParallaxLayer offset={0} speed={0} horizontal>
            <h1 className="w-screen text-6xl text-white font-semibold">Premios y Sorpresas</h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0} className="bg-blue-900">
          <ParallaxLayer offset={2} speed={0.65} horizontal>
            <div>
              <img src={Laizans} className="object-cover h-80" />
            </div>
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer offset={5.45} speed={0}>
          <ParallaxLayer offset={0} speed={0} factor={1} horizontal>
            <h1 className="w-screen pl-6 text-4xl text-white font-semibold">Más información</h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={5.6} speed={0.2}>
          <ParallaxLayer offset={-1} speed={-0.2} horizontal>
            <img src={Neptuno} className="h-1/2" />        
          </ParallaxLayer>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Index;
