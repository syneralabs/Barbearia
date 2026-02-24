import { useState } from 'react'
import './App.css'

function App() {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const telefone = "557398222893";

  const handleWhatsAppClick = (servico = "") => {
    const baseMsg = "Olá! Vi o site da barbearia e gostaria de ";
    const msgFinal = servico
      ? `${baseMsg}agendar o serviço: *${servico}*.` 
      : `${baseMsg}mais informações sobre horários disponíveis.`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(msgFinal)}`;
    window.open(url, '_blank');
  }

  return (
    <div className='min-h-full bg-gray-900 relative'>
      <header className='fixed top-0 left-0 w-full z-50 bg-amber-700 h-16'>
        <nav className='flex items-center justify-between px-6 lg:px-6'>
          <div className='flex lg:px-1'> 
            <a href="" className='m-1.5 p-1.5'>
              {/* <span className="sr-only">Your Company</span> */}
              <img src="/05.jpg" alt="" className="h-8 w-auto" />
            </a>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            <a className='text-sm/6 font-semibold text-white' href="#home">Home</a>
            <a className='text-sm/6 font-semibold text-white' href="#sobre">sobre</a>
            <a className='text-sm/6 font-semibold text-white' href="#cortes">cortes</a>
          </div>

          {/* BOTÃO HAMBÚRGUER (Faltava este cara aqui!) */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-white"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav> 
        {/* Final do nav */}

        {/* --- MENU MOBILE (OVERLAY) --- */}
        <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'visible' : 'invisible'}`}>
          {/* Backdrop (Fundo escurecido) */}
          <div 
            className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Painel Lateral */}
          <div className={`absolute inset-y-0 right-0 w-full max-w-sm bg-zinc-900 p-6 shadow-xl transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex items-center justify-between mb-8">
              <img src="/05.jpg" alt="Logo" className="h-8 w-auto" />
              <button onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 p-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-y-4">
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-xl font-semibold border-b border-zinc-800 pb-2">Home</a>
              <a href="#sobre" onClick={() => setMobileMenuOpen(false)} className="text-xl font-semibold border-b border-zinc-800 pb-2">Sobre</a>
              <a href="#cortes" onClick={() => setMobileMenuOpen(false)} className="text-xl font-semibold border-b border-zinc-800 pb-2">Cortes</a>
              <button 
                onClick={() => { handleWhatsAppClick(); setMobileMenuOpen(false); }}
                className="mt-4 bg-amber-500 text-black font-bold py-3 rounded-md"
              >
                AGENDAR VIA WHATSAPP
              </button>
            </nav>
          </div>
        </div>
      
      </header>

      <main className='pt-16'>
        {/* 1. HERO SECTION */}
        <section id='home' className="relative h-[90vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60"></div> {/* Overlay para leitura */}
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
              Estilo e <span className="text-amber-500">Tradição</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Onde a navalha encontra a arte. Agende seu horário e sinta a experiência de um corte clássico.
            </p>
            <button onClick={() => handleWhatsAppClick()} 
                    className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-8 rounded-sm transition-all duration-300">
              AGENDAR AGORA
            </button>
          </div>
        </section>

        {/* 2. SOBRE */}
        <section id="sobre" className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="border-l-4 border-amber-500 pl-6">
            <h2 className="text-3xl font-bold mb-6 uppercase">A Nossa História</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Desde 2015, nossa barbearia é o ponto de encontro para quem valoriza um visual impecável. Não é apenas sobre cortar o cabelo, é sobre o momento do homem.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Ambiente climatizado, cerveja gelada e os melhores profissionais da região.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/corte01.png" alt="Corte" className="rounded-lg grayscale hover:grayscale-0 transition duration-500" />
            <img src="/corte02.png" alt="Barba" className="rounded-lg mt-8 grayscale hover:grayscale-0 transition duration-500" />
          </div>
        </section>

        {/* 3. CORTES / SERVIÇOS */}
        <section id="cortes" className="py-20 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest text-amber-500">Nossos Serviços</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card de Serviço */}
              {[
                { nome: "Corte Clássico", preco: "R$ 50", desc: "Acabamento perfeito na tesoura ou máquina." },
                { nome: "Barba Premium", preco: "R$ 40", desc: "produtos de alta qualidade." },
                { nome: "Combo VIP", preco: "R$ 80", desc: "Cabelo, barba e lavagem." },
              ].map((servico, index) => (
                <div key={index} className="p-8 border border-zinc-800 rounded-sm hover:border-amber-500/50 transition-colors bg-zinc-950/50">
                  <h3 className="text-xl font-bold mb-2">{servico.nome}</h3>
                  <p className="text-zinc-500 mb-4 text-sm">{servico.desc}</p>
                  <span className="text-2xl font-mono text-amber-500 italic">{servico.preco}</span>
                  {/* Botão adicionado em cada card */}
                  <button 
                    onClick={() => handleWhatsAppClick(servico.nome)}
                    className="mt-4 w-full border border-amber-500 text-amber-500 py-2 hover:bg-amber-500 hover:text-black transition-all font-bold uppercase tracking-wider"
                  >
                    Agendar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
   
  )
}

export default App
