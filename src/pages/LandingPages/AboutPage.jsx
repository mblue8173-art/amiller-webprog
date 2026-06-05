import Button from '../../components/Button';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[1.25rem] border-2 border-dashed border-zinc-300 bg-zinc-100 p-4">
            <div className="overflow-hidden rounded-[1.25rem] bg-zinc-200 h-72" />
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              About Section
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Favorite and missed episodes are here to be bought back to life.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Favorite and missed episodes are here to be bought back to life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/articles">Open Articles</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Profile Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Highest gross cartoon episodes</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Nickelodeon: SpongeBob SquarePants', value: '01' },
            { label: 'Disney Channel: Phineas and Ferb', value: '02' },
            { label: 'Cartoon Network: The Powerpuff Girls', value: '03' },
            { label: 'Nickelodeon: Rugrats', value: '04' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-2xl font-bold text-zinc-900">{stat.value}</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Section Flow
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Audience top picks</h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: 'The Most-Watched Nickelodeon Episode: "All Growed Up"',
                  text: 'This 10th-anniversary special pulled in 11.9 million viewers and became Nickelodeon history.',
                },
                {
                  title: 'Sofia the First',
                  text: 'It became the number one cable TV telecast for preschool audiences and a merchandising success.',
                },
                {
                  title: 'Gravity Falls',
                  text: 'This special pulled in 6.1 million viewers and remains one of Cartoon Network’s most beloved finales.',
                },
              ].map((item) => (
                <article key={item.title} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                  <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Visual Grid
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {['Tom & Jerry', 'SpongeBob', 'Courage the Cowardly Dog'].map((card) => (
                <div key={card} className="overflow-hidden rounded-[1.25rem] border-2 border-zinc-300 bg-zinc-200 h-40" />
              ))}
            </div>
            <Button className="mt-5">View Section</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
