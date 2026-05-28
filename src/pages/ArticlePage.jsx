import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import articles from '../assets/article-content';

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);

  if (!article) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8">
          <div className="mx-auto max-w-xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Article
            </p>
            <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Article not found
            </h1>
            <div className="mt-6">
              <Button to="/articles">Back to Articles</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const title =
    article.title ||
    article.name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  const isNotFoundContent =
    Array.isArray(article.content) &&
    article.content.length === 1 &&
    article.content[0] === 'Page not found';

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            <Button to="/articles">Back to Articles</Button>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Article
            </p>
            {!isNotFoundContent ? (
              <h1 className="max-w-3xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                {title}
              </h1>
            ) : null}
            <p className="max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
              {article.description}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8">
        <div className="mx-auto max-w-3xl space-y-6">
          {article.content.map((paragraph, index) => (
            <p
              key={index}
              className="prose prose-sm max-w-none space-y-4 text-zinc-700 leading-7"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8">
        <div className="mx-auto max-w-3xl">
          <Button to="/articles">Back to Articles</Button>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;
