import Image from 'next/image'
import Octagon from './icons/octagon'

const Proficiencies = () => {
    return (
        <section className='max-w-wrapper mx-auto px-4 py-16 text-blue-dark'>
          <h2 className=''>Proficiencies</h2>
          <p className="mt-4">Jeg har en tanke om at det bør komme en kort tekst under undertittelene nedover siden. Denne mikroteksten skal være et par setningler lang, og forklare hva som er interessant med dette segmentet av internettstedet.</p>

          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8'>
            <li className='relative'>
              <Octagon />
              <figure className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <Image src="/python.png" width={100} height={100} className='p-8' alt="Logoen til Python" />
              </figure>
            </li>

            <li className='relative'>
              <Octagon />
              <figure className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <Image src="/julia.png" width={100} height={65} className='p-8' alt="Logoen til Julia"/>
              </figure>
            </li>

            <li className='relative'>
              <Octagon />
              <figure className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <Image src="/haskell.png" width={75} height={75} className='p-8' alt="Logoen til Haskell"/>
              </figure>
            </li>

          </ul>
        </section>
    )
}

export default Proficiencies