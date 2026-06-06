import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../../components/Button';
import { findUserByEmail } from '../../services/UserService';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const user = findUserByEmail(email);
    if (!user) {
      setError('No user found with that email.');
      return;
    }

    // This demo does not validate passwords stored locally.
    if (user.role === 'Viewer') {
      setError('Viewer accounts are not allowed to log in.');
      return;
    }

    const safeUser = {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    sessionStorage.setItem('currentUser', JSON.stringify(safeUser));
    navigate('/dashboard');
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Log In</h1>
      <p className="mt-3 text-sm leading-6 text-zinc-600">Access your account using the same monochrome wireframe language used across the site.</p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="signin-email" className="text-sm font-medium text-zinc-700">Email Address</label>
          <input id="signin-email" type="email" placeholder="you@domain.com" autoComplete="email" className={inputClasses} value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-medium text-zinc-700">Password</label>
          <input id="signin-password" type="password" placeholder="Enter password" autoComplete="current-password" className={inputClasses} value={password} readOnly />
          <p className="mt-2 text-xs leading-5 text-zinc-500">Use a strong password with at least 8 characters.</p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-zinc-600">
            <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 accent-zinc-900" />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-medium text-zinc-700 transition hover:text-zinc-600">Forgot Password?</button>
        </div>

        {error && <p className="text-rose-600 text-sm">{error}</p>}

        <Button type="submit" variant="primary" className={actionButtonClassName}>Log In</Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>Log In with Google</Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>Log In with Apple</Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        No account yet?{' '}
        <Link to="/auth/signup" className="font-semibold text-zinc-900 transition hover:text-zinc-600">Sign Up</Link>
      </div>
    </>
  );
};

export default SignInPage;
