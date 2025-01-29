import BottomNav from '../_components/BottomNav';
import Header from '../_components/Header';
import Player from '../_components/Player';

export default function SuccessPayment() {
  return (
    <div className="">
      <main className="min-h-[118vh]">
        <Header />
        <BottomNav />
        <h3 className='mt-8 px-5 font-bold text-[22px] text-center text-primary md:text-[25px] uppercase leading-5'>ATENÇÃO, VEJA ESSE VÍDEO ATÉ O FINAL PARA ACESSAR O REVIEWPIX!</h3>
        <Player store='up-3' showBtn='01:10' btnW={'w-full'} moldura={false} btnIcon='/icons/cadeado.png' btnLabel={'Quero Participar'} src="/vsl-up-3.mp4" link='https://checkout.perfectpay.com.br/pay/PPU38CPD6SH?upsell=true&utm_source=13b1b66d-a1d6-481d-a583-4094f2f21a53%3A%3A%3A%3A&subid=13b1b66d-a1d6-481d-a583-4094f2f21a53&xcod=13b1b66d-a1d6-481d-a583-4094f2f21a53%3A%3A%3A%3AhQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&sck=13b1b66d-a1d6-481d-a583-4094f2f21a53%3A%3A%3A%3AhQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR' />
        <p className='mt-4 px-7 text-[16px] text-center text-primary md:text-2xl leading-4'><strong>Atenção:</strong> ao sair desta página você perderá essa oportunidade para sempre!</p>
      </main>
    </div>
  );
}
