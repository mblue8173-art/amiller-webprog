import Button from '../components/Button';
 
const ArticlePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                    Articles
                </p>
                <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                    Featured articles of the most talked about cartoons and animated movies of all time.
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
                    Dive into the stories behind the most controversial animated shows and movies ever made. This section features deep-dives into cartoons that pushed boundaries, faced massive public backlash.
                </p>
                <div className="mt-6">
                    <Button to="/">Back Home</Button>
                </div>
            </section>
 
            <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Featured Articles
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Remaked and Modern Animated Shows</h2>
                </div>
 
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <div className="overflow-hidden rounded-[1.25rem] bg-zinc-200">
                            <img
                                src="https://th.bing.com/th/id/OIP.WTV7NuaA1BXXnukZkr2xMwHaDt?w=307&h=174&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                                alt="Family Guy"
                                className="h-56 w-full object-cover"
                            />
                        </div>
                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Family Guy
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-zinc-900">Favorite episode highlight</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            The best moments from Family Guy are showcased in this animated article card.
                        </p>
                        <Button className="mt-4">Read More</Button>
                    </article>
 
                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <div className="overflow-hidden rounded-[1.25rem] bg-zinc-200">
                            <img
                                src="https://th.bing.com/th/id/OIP.Lcuof-5sth4p6Mv1aRSDpQHaEK?w=320&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                                alt="Looney Tunes"
                                className="h-56 w-full object-cover"
                            />
                        </div>
                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Looney Tunes
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-zinc-900">Classic cartoon collection</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            A classic Looney Tunes episode collection that brings the funniest characters into focus.
                        </p>
                        <Button className="mt-4">Read More</Button>
                    </article>
 
                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <div className="overflow-hidden rounded-[1.25rem] bg-zinc-200">
                            <img
                                src="https://th.bing.com/th/id/OIP.bdqzFbLcLlnZ0WiG5tj6pgHaJQ?w=208&h=260&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                                alt="Arcane"
                                className="h-56 w-full object-cover"
                            />
                        </div>
                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Arcane
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-zinc-900">Animated drama spotlight</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            The most gripping Arcane episode moments brought together in this premium article card.
                        </p>
                        <Button className="mt-4">Read More</Button>
                    </article>
 
                    <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
                        <div className="overflow-hidden rounded-[1.25rem] bg-zinc-200">
                            <img
                                src="https://th.bing.com/th/id/OIP.ub7oV9_oL9TLtaGa8Nv2HwHaE8?w=275&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                                alt="Blue Eye Samurai"
                                className="h-56 w-full object-cover"
                            />
                        </div>
                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                            Blue Eye Samurai
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-zinc-900">New warrior series</h3>
                        <p className="mt-3 text-sm leading-6 text-zinc-600">
                            Highlighting the action-packed style and unforgettable scenes from Blue Eye Samurai.
                        </p>
                        <Button className="mt-4">Read More</Button>
                    </article>
                </div>
            </section>
        </div>
    );
};
 
export default ArticlePage;