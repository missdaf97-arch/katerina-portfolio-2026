import Image from "next/image";
import { CountUp } from "@/components/count-up";
import { MasonryLightbox } from "@/components/masonry-lightbox";
import { Reveal } from "@/components/reveal";
import { WorksList } from "@/components/works-list";

export default function Home() {
  const works = [
    {
      title: "Графический дизайн",
      subtitle: "Плакаты, печать, визуальные системы, коммуникации.",
      imageSrc: "/placeholders/preview.svg",
    },
    {
      title: "Брендинг",
      subtitle: "Айдентика, бренд‑платформа, упаковка, бренд‑гайд.",
      imageSrc: "/placeholders/preview.svg",
    },
    {
      title: "UI/UX",
      subtitle: "Сайты и интерфейсы: структура, прототипы, дизайн‑системы.",
      imageSrc: "/placeholders/preview.svg",
    },
    {
      title: "Нейрофотография",
      subtitle: "Имидж‑визуалы, рекламные сетапы, генеративные сцены.",
      imageSrc: "/placeholders/preview.svg",
    },
  ];

  const neuroClients = [
    { name: "NL", href: "https://www.nlstar.com/ru/" },
    { name: "КСМ", href: "https://ksm-kirov.ru/" },
    { name: "Вятский квас", href: "https://вятскийквас.рф/" },
    { name: "AIVFX", href: "https://aivfx.ru/" },
    {
      name: "The North Face",
      href: "https://www.thenorthface.com/en-us/mens",
    },
  ];

  const gallery = [
    { src: "/gallery1.png", alt: "Галерея — 01", aspect: "portrait" as const },
    { src: "/gallery2.png", alt: "Галерея — 02", aspect: "landscape" as const },
    { src: "/gallery3.png", alt: "Галерея — 03", aspect: "square" as const },
    { src: "/gallery4.png", alt: "Галерея — 04", aspect: "tall" as const },
    { src: "/gallery5.png", alt: "Галерея — 05", aspect: "landscape" as const },
    { src: "/gallery6.png", alt: "Галерея — 06", aspect: "portrait" as const },
    { src: "/gallery7.png", alt: "Галерея — 07", aspect: "square" as const },
    { src: "/gallery8.jpg", alt: "Галерея — 08", aspect: "landscape" as const },
    { src: "/gallery9.jpg", alt: "Галерея — 09", aspect: "tall" as const },
  ];

  return (
    <main id="top" className="min-h-screen">
      {/* HERO */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-6xl px-5 pt-12 pb-16 md:pt-18 md:pb-24">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <h1 className="mt-6 text-[clamp(44px,7.6vw,92px)] leading-[0.9] tracking-tight">
                <span className="block">ДИЗАЙНЕР</span>
                <span className="mt-6 block">
                  <span className="inline-flex w-full items-center">
                    <span className="mr-4 h-px flex-1 bg-[color:var(--line)]" />
                  </span>
                  <span className="mt-3 block w-full overflow-hidden rounded-2xl border border-black/10 bg-white">
                    <span className="relative block aspect-[1988/1119]">
                      <Image
                        src="/katerina1.jpg"
                        alt="Фото Катерины"
                        fill
                        sizes="(min-width: 1024px) 900px, 92vw"
                        className="object-cover object-[50%_30%] contrast-110"
                        priority
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 h-[3px] w-28 bg-[color:var(--accent)]"
                      />
                    </span>
                  </span>
                </span>
                <span className="mt-7 block">
                  <span className="text-[color:var(--accent)]">&</span>{" "}
                  НЕЙРОГРАФ
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-[color:var(--muted)]">
                Редакторский минимализм, типографика и визуальные системы. Делаю
                дизайн, который читается с первого взгляда — и запоминается.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#raboty"
                  className="rounded-full bg-black px-5 py-3 text-sm text-white hover:opacity-90 transition-opacity"
                >
                  Смотреть работы
                </a>
                <a
                  href="#kontakt"
                  className="rounded-full border border-[color:var(--line)] px-5 py-3 text-sm hover:border-black/30 transition-colors"
                >
                  Обсудить проект
                </a>
              </div>
            </div>

            <div className="md:pl-6">
              <div className="rounded-2xl border border-[color:var(--line)] p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  фокус
                </div>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-center justify-between gap-4 border-b border-[color:var(--line)] pb-3">
                    <span>Айдентика</span>
                    <span className="text-[color:var(--muted)]">01</span>
                  </li>
                  <li className="flex items-center justify-between gap-4 border-b border-[color:var(--line)] pb-3">
                    <span>UI/UX</span>
                    <span className="text-[color:var(--muted)]">02</span>
                  </li>
                  <li className="flex items-center justify-between gap-4 border-b border-[color:var(--line)] pb-3">
                    <span>Нейрофотография</span>
                    <span className="text-[color:var(--muted)]">03</span>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <span>Печать</span>
                    <span className="text-[color:var(--muted)]">04</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ОБО МНЕ */}
      <section id="obo-mne" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-18 md:py-24">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  обо мне
                </div>
                <h2 className="mt-5 text-4xl md:text-5xl tracking-tight">
                  Чистая форма. Чёткий смысл.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-[color:var(--muted)]">
                  Я Катерина — дизайнер с фокусом на типографике, сетках и
                  визуальных системах. Люблю строгий минимализм, где каждая
                  деталь работает на задачу. В проектах совмещаю классический
                  дизайн и нейроинструменты, когда это даёт преимущество по
                  скорости и выразительности.
                </p>

                <div className="mt-12">
                  <div className="h-px w-full bg-[color:var(--accent)]" />
                  <div className="mt-6 grid gap-8 sm:grid-cols-3">
                    <CountUp to={11} suffix="+" label="лет опыта" />
                    <CountUp to={50} suffix="+" label="проектов" />
                    <CountUp to={120} suffix="+" label="клиентов" />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[color:var(--line)] p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  что получаете
                </div>
                <ul className="mt-5 space-y-4 text-sm leading-6">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                    <span>Сильную структуру и ясную иерархию.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                    <span>Ритм типографики и аккуратный контраст.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                    <span>Файлы, готовые к печати/разработке.</span>
                  </li>
                </ul>
                <div className="mt-8 overflow-hidden rounded-xl border border-black/10 bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/katerina2.png"
                      alt="Катерина"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* МОИ РАБОТЫ */}
      <section id="raboty" className="scroll-mt-24 border-y border-[color:var(--line)] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-18 md:py-24">
          <Reveal>
            <div className="flex items-end justify-between gap-8">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  мои работы
                </div>
                <h2 className="mt-5 text-4xl md:text-5xl tracking-tight">
                  Направления
                </h2>
              </div>
            </div>

            <div className="mt-10">
              <WorksList items={works} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* НЕЙРОФОТОГРАФИЯ */}
      <section id="neiro" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-18 md:py-24">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  нейрофотография
                </div>
                <h2 className="mt-5 text-4xl md:text-5xl tracking-tight">
                  Когда нейро — это качество, а не эффект.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-[color:var(--muted)]">
                  Нейрофотография — это способ быстро получить нужный сетап,
                  свет и атмосферу без сложной логистики. Я использую её
                  аккуратно: если это усиливает идею и даёт коммерческий
                  результат.
                </p>

                <div className="mt-10">
                  <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    клиенты
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {neuroClients.map((client) => (
                      <a
                        key={client.name}
                        href={client.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-[color:var(--line)] px-4 py-2 text-sm text-[color:var(--muted)] transition-colors hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-white"
                      >
                        {client.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  { src: "/neuro1.jpg", alt: "Нейрофото 1" },
                  { src: "/neuro2.jpg", alt: "Нейрофото 2" },
                  { src: "/neuro3.jpg", alt: "Нейрофото 3" },
                  { src: "/neuro4.jpg", alt: "Нейрофото 4" },
                ].map((item) => (
                  <div
                    key={item.src}
                    className="overflow-hidden rounded-2xl border border-black/10 bg-white"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section id="gallery" className="scroll-mt-24 border-y border-[color:var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-18 md:py-24">
          <Reveal>
            <div className="flex items-end justify-between gap-8">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  галерея
                </div>
              </div>
              <div className="hidden md:block text-sm text-[color:var(--muted)] max-w-md">
              </div>
            </div>

            <div className="mt-12">
              <MasonryLightbox items={gallery} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="scroll-mt-24 border-t border-[color:var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-18 md:py-24">
          <Reveal>
            <div className="rounded-3xl border border-[color:var(--line)] bg-white p-8 md:p-12">
              <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    запуск
                  </div>
                  <h2 className="mt-5 text-4xl md:text-5xl tracking-tight">
                    ГОТОВЫ НАЧАТЬ ПРОЕКТ?
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-7 text-[color:var(--muted)]">
                    Напишите мне — кратко опишите задачу и сроки. Я отвечу с
                    уточняющими вопросами и предложу формат работы.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://t.me/catsaldi"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-4 text-sm text-white hover:opacity-90 transition-opacity"
                  >
                    Telegram
                  </a>
                  <a
                    href="https://www.instagram.com/katherine.halt/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-6 py-4 text-sm text-white hover:opacity-90 transition-opacity"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[color:var(--footer)] text-white">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="text-lg tracking-tight">Катерина</div>
              <div className="mt-2 text-sm text-white/70">
                Дизайнер / брендинг / UI/UX / нейрофотография
              </div>
              <div className="mt-8 text-xs uppercase tracking-[0.2em] text-white/50">
                © {new Date().getFullYear()} — все права защищены
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-white/60">
                навигация
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <a className="text-white/80 hover:text-white" href="#obo-mne">
                  Обо мне
                </a>
                <a className="text-white/80 hover:text-white" href="#raboty">
                  Работы
                </a>
                <a className="text-white/80 hover:text-white" href="#neiro">
                  Нейрофото
                </a>
                <a className="text-white/80 hover:text-white" href="#gallery">
                  Галерея
                </a>
                <a className="text-white/80 hover:text-white" href="#kontakt">
                  Контакты
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
