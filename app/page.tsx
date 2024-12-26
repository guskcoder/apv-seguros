import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md relative z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Image
            src="/APV Logo.png"
            alt="APV Logo"
            width={150}
            height={50}
            className="object-contain"
            priority
          />
          <nav className="flex gap-6">
            <a
              href="#contato"
              className="text-gray-700 hover:text-secondary font-medium transition-colors"
            >
              Contato
            </a>
            <a
              href="#ajuda"
              className="text-gray-700 hover:text-secondary font-medium transition-colors"
            >
              Ajuda
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden py-12 md:py-4">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80"></div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <span className="text-secondary font-medium mb-4 block">
                Segurança para seu veículo
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Proteja seu veículo com até{" "}
                <span className="text-secondary font-extrabold bg-secondary/10 px-2 rounded-lg inline-block">
                  25% OFF
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Ofertas a partir de{" "}
                <span className="font-semibold">R$ 1000</span> por ano,
                parcelando em até{" "}
                <span className="font-semibold">12 vezes</span>. Cote, compare e
                contrate online com toda segurança.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <button className="bg-secondary hover:bg-secondary-dark text-gray-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
                  Cotar meu seguro
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <p className="text-gray-300 text-sm">
                  <svg
                    className="w-5 h-5 inline-block mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Ambiente 100% seguro
                </p>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent rounded-full filter blur-3xl transform scale-110"></div>
              <Image
                src="/icon.png"
                alt="APV Seguros"
                width={500}
                height={500}
                className="object-contain animate-float relative drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a APV Seguros?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Oferecemos as melhores soluções em seguros auto, com preços competitivos e atendimento personalizado para sua tranquilidade
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-secondary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Image
                  src="/file.svg"
                  alt="Muitas ofertas"
                  width={32}
                  height={32}
                  className="text-gray-900"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Muitas ofertas
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Trabalhamos com as melhores seguradoras do país e oferecemos a
                maior variedade de planos.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-secondary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Image
                  src="/thumbs-up.svg"
                  alt="Preços baixíssimos"
                  width={32}
                  height={32}
                  className="text-gray-900"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Preços baixíssimos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Garantimos o melhor preço direto na sua tela, sem precisar
                negociar. Cotação instantânea com preços reais.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-secondary w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Image
                  src="/computer.svg"
                  alt="100% online"
                  width={32}
                  height={32}
                  className="text-gray-900"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                100% online
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Contrate seu seguro de carro online em minutos. Se precisar,
                nossos especialistas estão sempre disponíveis para ajudar.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-secondary hover:bg-secondary-dark text-gray-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 mx-auto">
              Cotar meu seguro
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Veja a experiência de quem já contratou seu seguro conosco e
              aproveite as mesmas vantagens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 right-8 text-primary opacity-10">
                <svg
                  className="w-16 h-16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                  R
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Roberto Silva</h3>
                  <p className="text-gray-500 text-sm">São Paulo, SP</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                &quot;Processo super rápido e fácil. Consegui um ótimo desconto
                no seguro do meu carro e o atendimento foi excelente!&quot;
              </p>
              <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 right-8 text-primary opacity-10">
                <svg
                  className="w-16 h-16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                  M
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Marina Costa</h3>
                  <p className="text-gray-500 text-sm">Rio de Janeiro, RJ</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                &quot;Incrível como foi simples fazer a cotação. Em poucos
                minutos recebi várias opções e escolhi a melhor para mim. Super
                recomendo!&quot;
              </p>
              <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute -top-4 right-8 text-primary opacity-10">
                <svg
                  className="w-16 h-16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                  P
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Pedro Santos</h3>
                  <p className="text-gray-500 text-sm">Curitiba, PR</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                &quot;O suporte foi excepcional! Tive algumas dúvidas e a equipe
                me ajudou prontamente. Consegui um ótimo seguro com um preço
                justo.&quot;
              </p>
              <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-secondary hover:bg-secondary-dark text-gray-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 mx-auto">
              Cotar meu seguro
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">
                Fale com a gente
              </h4>
              <div className="space-y-4">
                <p className="flex items-center gap-2 text-gray-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7l9 6 9-6"
                    />
                  </svg>
                  contato@apvseguros.com
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="text-white hover:text-secondary transition-colors"
                  />
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">
                Links Legais
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Reclame Aqui
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Termos & Condições
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">
                Redes Sociais
              </h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-secondary transition-colors">
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  <Image
                    src="/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p> 2024 APV Seguros. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
