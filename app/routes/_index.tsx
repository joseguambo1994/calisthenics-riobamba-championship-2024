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
    <div className="bg-black min-h-screen">

    <Parallax pages={3} ref={ref}>
  <ParallaxLayer offset={0} speed={1}>
  <h1 className="text-8xl text-fuchsia-600">Torneo de Calistenia Riobamba 2024</h1>
  <p>Layers can contain anything</p>
      </ParallaxLayer>

      <ParallaxLayer offset={0.4} speed={1} style={{ backgroundColor: '#C026D3' }} >
      <ParallaxLayer offset={0} speed={1} horizontal>
      <h1 className="text-4xl text-black-600">LUGAR: Polideportivo de la ciudadela politecnica (Zona de Calistenia)</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={0.2} speed={-1} horizontal>
      <div>
      <h1>Some Page</h1>
      <img src={Combo1} />
    </div>
      </ParallaxLayer>
      </ParallaxLayer>
{/* 
      <ParallaxLayer sticky={{ start: 1, end: 2 }} /> */}

      <ParallaxLayer offset={0.8} speed={1} style={{ backgroundColor: '#000000' }}>
      <ParallaxLayer offset={0} speed={2} horizontal>
      <h1 className="text-6xl text-purple-600">Fecha: 04 de agosto de 2024</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={0.4} speed={-2} horizontal>
      <div>
      <h1>Some Page</h1>
      <img src={Combo2} />
    </div>
      </ParallaxLayer>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0} style={{ backgroundColor: '#C026D3' }}>
      <ParallaxLayer offset={0} speed={-1} factor={1} horizontal>
      <h1 className="text-6xl text-black-600">Categoría   novatos y semipro</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={1.2} speed={-2.4} horizontal>
      <div>
      <h1>Combo3</h1>
      <img src={Combo3} />
    </div>
      </ParallaxLayer>
      </ParallaxLayer>

      <ParallaxLayer offset={1.4} speed={0} style={{ backgroundColor: '#000000' }}>
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

      <ParallaxLayer offset={1.8} speed={0} style={{ backgroundColor: '#C026D3' }}>
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


      <ParallaxLayer offset={2} speed={1}>
        <button onClick={() => ref.current.scrollTo(0)}>Scroll to top</button>
      </ParallaxLayer>
    </Parallax>
    </div>
  )
}

export default Index;