import Image from "next/image";
import ImageCarousel from "./components/carousel";
import Form from "./components/form";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-martian-mono)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className=""
          src="/grand-palais-logo-white.png"
          alt="Next.js logo"
          width={250}
          height={100}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-martian-mono)]">
          <ImageCarousel />
        </ol>

        <div className="flex flex-col md:flex-row gap-4 items-center w-full">
          <div className="flex flex-col gap-16">
            <h1 className="[family-name:var(--font-archivo)] text-sl mb-3">
              Du 5 au 9 février 2025
            </h1>
            <h1 className="text-5xl font-semibold mb-3">
              Le Coupé Grand Palais à Rétromobile 2025
            </h1>
          </div>
          <div>
            <div className="flex flex-col gap-4 font-[family-name:var(--font-archivo)] text-sm/6">
              <p>
                Près de 70 ans après l’iconique DS19 dévoilée au Grand Palais en
                1955, le salon Rétromobile 2025 accueille à nouveau le coupé
                Grand Palais, déjà présenté en 2019.
              </p>
              <p>
                Cette création rend hommage à Flaminio Bertoni, dont l’idée d’un
                coupé DS fut interrompue par sa disparition. Fidèle à l’élégance
                de la berline originale, le coupé réinvente avec modestie l’art
                de la carrosserie française des années 30, mêlant lignes
                redessinées et raffinement.
              </p>
              <p>
                Ce voyage temporel évoque l’âge d’or des années 50, une époque
                où progrès techniques et rêves d’avenir se conjuguaient
                harmonieusement. Respectueux de l’histoire, le coupé intègre
                cependant des équipements modernes comme les vitres électriques,
                sans dénaturer son authenticité.
              </p>

              <p>
                Basé sur une DS d’époque, il conserve son empattement, sa
                mécanique et un poids similaire, tout en sublimant son design
                intérieur et extérieur.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-solid w-full" />

        <Form />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
