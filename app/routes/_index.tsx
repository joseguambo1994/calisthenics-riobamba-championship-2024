import type { MetaFunction } from "@remix-run/cloudflare";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';
import Combo1 from "../images/Combo1.svg";
import Combo2 from "../images/Combo2.svg";
import Combo3 from "../images/Combo3.svg";
import Combo4 from "../images/Combo4.svg";
import Combo5 from "../images/Combo5.svg";



export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!",
    },
  ];
};


export const Index = () => {
  const ref = useRef()
  return (
    <div>

      <Parallax pages={3} ref={ref}>
        <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#000000' }} >
          <ParallaxLayer offset={0} speed={-3.5} horizontal>
            <div className="w-256 h-256 bg-red-200" />
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={1} style={{ backgroundColor: '#000000' }} >
          <ParallaxLayer offset={0} speed={-1.5} horizontal>
            <h1 className="w-screen pt-6 pl-6 pr-6 text-3xl text-fuchsia-500 text-right">
              Torneo
            </h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={0.3} speed={1} style={{ backgroundColor: '#000000' }} >
          <ParallaxLayer offset={0} speed={3.5} horizontal>
            <h1 className="w-screen pl-6 pr-6 text-3xl text-cyan-500 text-right">
              Calistenia y Street Workout
            </h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={0.4} speed={1} >
          <ParallaxLayer offset={0} speed={5.5} horizontal>
            <h1 className="w-screen pl-6 pr-6 text-7xl text-red-500 text-right italic font-semibold">
              Riobamba
            </h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={1} style={{ backgroundColor: '#000000' }} >
          <ParallaxLayer offset={0} speed={2.5} horizontal>
            <h1 className="w-screen pb-6 pl-6 pr-6 text-7xl text-blue-500 text-right">
              2024
            </h1>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={0.7} speed={1} style={{ backgroundColor: '#000000' }} >
          <ParallaxLayer offset={0.04} speed={-5} horizontal>
            <div className="flex flex-row">
              <img src={Combo2} className="w-24 h-24 filter invert sepia" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.15} speed={-4} horizontal>
            <div className="flex flex-row">
              <img src={Combo3} className="w-24 h-24 filter invert sepia" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.25} speed={-3} horizontal>
            <div className="flex flex-row">
              <img src={Combo4} className="w-24 h-24 filter invert sepia" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.35} speed={-2} horizontal>
            <div className="flex flex-row">
              <img src={Combo5} className="w-24 h-24 filter invert sepia" />
            </div>
          </ParallaxLayer>
        </ParallaxLayer>


        <ParallaxLayer offset={1} speed={0} style={{ backgroundColor: '#C026D3' }} >
          <ParallaxLayer offset={0.6} speed={1} horizontal>
            <div>
              <img src={Combo1} />
            </div>
          </ParallaxLayer>
        </ParallaxLayer>
        
        <ParallaxLayer offset={1.5} speed={0} style={{ backgroundColor: '#C026D3' }} >
          <ParallaxLayer offset={-0.8} speed={-0.35} horizontal>
            <h1 className="w-screen pl-6 pr-6 text-4xl text-blue-900 text-right">
              Lugar
            </h1>
          </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={0} style={{ backgroundColor: '#C026D3' }} >
          <ParallaxLayer offset={0.4} speed={0.4} horizontal>
            <h1 className="w-screen pl-6 pr-6 text-5xl text-white text-right">
              Polideportivo de la Ciudadela Politénica
            </h1>
          </ParallaxLayer>
        </ParallaxLayer>


        <ParallaxLayer offset={2} speed={0} style={{ backgroundColor: '#000000' }}>
          <ParallaxLayer offset={0.8} speed={0.4} horizontal>
          <h1 className="w-screen pt-6 pl-6 pr-6 text-3xl text-purple-500">
              Fecha
            </h1>          
            </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer offset={2.1} speed={0} style={{ backgroundColor: '#000000' }}>
          <ParallaxLayer offset={1} speed={1} horizontal>
          <h1 className="w-screen pl-6 pr-6 text-5xl text-white">
              Domingo 04 de agosto de 2024
            </h1>          
            </ParallaxLayer>
        </ParallaxLayer>
        <ParallaxLayer offset={2.4} speed={0} style={{ backgroundColor: '#000000' }}>
        <ParallaxLayer  offset={-1.4} speed={-0.35} horizontal>
  <div>
    <img src={Combo2} />
  </div>
</ParallaxLayer>
        </ParallaxLayer>


        {/* 
        <ParallaxLayer offset={1.4} speed={1} style={{ backgroundColor: '#000000' }}>
          <ParallaxLayer offset={0} speed={2} horizontal>
            <h1 className="text-6xl text-purple-600">Fecha: 04 de agosto de 2024</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={0.4} speed={-2} horizontal>
            <div>
              <img src={Combo2} />
            </div>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={0} style={{ backgroundColor: '#C026D3' }}>
          <ParallaxLayer offset={0} speed={-1} factor={1} horizontal>
            <span className="text-6xl text-black-600">Categoría   novatos y semipro</span>
          </ParallaxLayer>
          <ParallaxLayer offset={0.6} speed={1.2} horizontal>
            <div>
              <h1>Combo3</h1>
              <img src={Combo3} />
            </div>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={2.2} speed={0} style={{ backgroundColor: '#000000' }}>
          <ParallaxLayer offset={0} speed={-0.4} factor={1} horizontal>
            <h1 className="text-6xl text-fuchsia-600">Premios y Sorpresas</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={-3.4} horizontal>
            <div>
              <h1>Combo4</h1>
              <img src={Combo4} />
            </div>
          </ParallaxLayer>
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0} style={{ backgroundColor: '#C026D3' }}>
          <ParallaxLayer offset={0} speed={-1} factor={1} horizontal>
            <h1 className="text-6xl text-black-600">Cero costo de inscripción</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={0.8} speed={0.4} horizontal>
            <div>
              <h1>Combo5</h1>
              <img src={Combo5} />
            </div>
          </ParallaxLayer>
        </ParallaxLayer>


        <ParallaxLayer offset={2.8} speed={1}>
          <button onClick={() => ref.current.scrollTo(0)}>Scroll to top</button>
        </ParallaxLayer> */}
      </Parallax>
    </div>
  )
}

export default Index;