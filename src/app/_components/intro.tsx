export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        GumHead
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {" "}
        <a
          href="https://linktr.ee/gumheadband"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          linktree
        </a>{" "}
      </h4>
    </section>
  );
}
