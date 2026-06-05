import Button from '../../components/Button';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Wireframe Studio Hero
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Welcome to Wireframe Studio Layout
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Discover the art of wireframing with simple, elegant sections for hero content, key metrics, and feature cards.
            </p>
            <div className="mt-6">
              <Button to="/about" variant="primary">
                Learn More
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="mx-auto h-80 max-w-2xl rounded-[1.5rem] border-2 border-zinc-300 bg-zinc-200" />
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            KPI Section
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Quick overview blocks</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {['12 Projects', '08 Sections', '24 Screens', '04 Layouts'].map((item) => (
            <div key={item} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-2xl font-bold text-zinc-900">{item.split(' ')[0]}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-zinc-500">{item.split(' ').slice(1).join(' ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Feature Cards
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Simple wireframe cards</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {['Design systems', 'Rapid prototyping', 'Responsive layouts'].map((feature) => (
            <div key={feature} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-6">
              <div className="h-40 rounded-3xl bg-zinc-200" />
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{feature}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">A clean and consistent design style for your next project.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
