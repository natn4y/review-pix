import BottomNav from '../_components/BottomNav';
import Header from '../_components/Header';
import Player from '../_components/Player';

export default function SuccessPayment() {
  return (
    <div className="">
      <main className="min-h-[115vh] md:min-h-[118vh]">
        <Header />
        <BottomNav />

        <div className="flex justify-center items-center mt-[35px] mb-[5px] px-4 md:px-0">
          <h1 className='px-12 font-bold text-[22px] text-center text-primary md:text-2xl md:text-start uppercase leading-6'>MEUS PARABÉNS PELA SUA COMPRA
          </h1>
        </div>
        <h3 className='mt-4 px-5 font-bold text-[18px] text-center text-primary md:text-[25px] md:text-2xl uppercase leading-5'>ATENÇÃO, VEJA ESSE VÍDEO ATÉ O FINAL PARA ACESSAR O REVIEWPIX!</h3>
        <Player store='up-2' showBtn='00:41' btnW={'w-full'} moldura={false} btnIcon='/icons/cadeado.png' btnLabel={'Desbloquear FEEDFY'} src="/vsl-up-2.mp4" link='https://checkout.perfectpay.com.br/pay/PPU38CPD6SH?upsell=true&utm_source=13b1b66d-a1d6-481d-a583-4094f2f21a53%3A%3A%3A%3A&subid=13b1b66d-a1d6-481d-a583-4094f2f21a53&xcod=13b1b66d-a1d6-481d-a583-4094f2f21a53%3A%3A%3A%3AhQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&sck=13b1b66d-a1d6-481d-a583-4094f2f21a53%3A%3A%3A%3AhQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR' />
        <p className='mt-4 px-7 text-[16px] text-center text-primary md:text-2xl leading-4'><strong>Atenção:</strong> ao sair desta página você perderá essa oportunidade para sempre!</p>
      </main>
    </div>
  );
}
