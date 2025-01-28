import Image from "next/image";
import ImageCarousel from "./components/carousel";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className=""
          src="grand-palais-logo-white.png"
          alt="Next.js logo"
          width={250}
          height={100}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
         <ImageCarousel/>
        </ol>

        <div className="flex gap-4 items-center flex-col w-full">
          <h1 className="text-2xl font-semibold mb-3">
            Le Coupé Grand Palais à Rétromobile 2025
            </h1>
          <p>
              Près de 70 ans après l’iconique DS19 dévoilée au Grand Palais en 1955, 
              le salon Rétromobile 2025 accueille à nouveau le coupé Grand Palais, déjà présenté en 2019.
          </p>
          <p>
              Cette création rend hommage à Flaminio Bertoni, dont l’idée d’un coupé DS fut interrompue par sa disparition. 
              Fidèle à l’élégance de la berline originale, le coupé réinvente avec modestie l’art de la carrosserie française 
              des années 30, mêlant lignes redessinées et raffinement.
          </p>
          <p>
              Ce voyage temporel évoque l’âge d’or des années 50, une époque où progrès techniques 
              et rêves d’avenir se conjuguaient harmonieusement. Respectueux de l’histoire, le coupé 
              intègre cependant des équipements modernes comme les vitres électriques, sans dénaturer son authenticité.
          </p>
          <p>
              Basé sur une DS d’époque, il conserve son empattement, sa mécanique et un poids similaire, 
              tout en sublimant son design intérieur et extérieur.
          </p>  
        </div>
        <div className="flex gap-4 items-center flex-col w-full">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p className="text-xl">
            <a
              href="https://www.google.com/maps?q=Chemin+aux+Boeufs,+72100+Le+Mans"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Chemin aux Boeufs, 72100 Le Mans
            </a>
          </p>
          <p className="text-xl">
            <a
              href="mailto:automotive@hotmail.fr"
              className="hover:underline underline"
            >
              automotive@hotmail.fr
            </a>
          </p>
          <p className="text-xl underline">
            <a
              href="tel:+33243213045"
              className="hover:underline"
            >
              +33 2 43 21 30 45
            </a>
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.195123456891!2d0.2000000000!3d47.9999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x000000000000000!2sChemin%20aux%20Boeufs%2C%2072100%20Le%20Mans!5e0!3m2!1sen!2sfr!4v1234567890123"
            width="100%"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
            title="Google Map Location"
          ></iframe>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
