import { useParams, Link } from 'react-router-dom';
import articles from '../../assets/article-content';

const ArticlePage = () => {
  const { name } = useParams();
  const article = articles.find((item) => item.name === name);

  if (!article) {
    return (
      <div className="space-y-6 rounded-3xl border-2 border-zinc-900 bg-white p-8 text-center">
        <h1 className="text-2xl font-bold text-zinc-900">Article not found</h1>
        <p className="text-sm text-zinc-600">There is no article matching that link.</p>
        <Link to="/articles" className="inline-flex rounded-full border-2 border-zinc-900 bg-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
          Back to Articles
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 rounded-3xl border-2 border-zinc-900 bg-white p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">Article</p>
          <h1 className="mt-2 text-3xl font-bold text-zinc-900">{article.title}</h1>
        </div>
        <Link to="/articles" className="inline-flex rounded-full border-2 border-zinc-900 bg-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
          Back to Articles
        </Link>
      </div>

      <p className="text-sm leading-7 text-zinc-600">{article.description}</p>

      <div className="space-y-4 rounded-3xl border-2 border-zinc-100 bg-zinc-50 p-5">
        {article.content?.map((paragraph, index) => (
          <p key={index} className="text-sm leading-7 text-zinc-600">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;
