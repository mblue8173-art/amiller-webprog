import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="mx-auto mt-24 max-w-3xl px-4">
      <div className="rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-zinc-900">Page Not Found</h1>
        <p className="mt-4 text-zinc-700">
          The link you followed to get here must be broken...
        </p>
        <div className="mt-8">
          <Link to="/" className="inline-flex rounded-full border-2 border-zinc-900 bg-zinc-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-zinc-700">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
