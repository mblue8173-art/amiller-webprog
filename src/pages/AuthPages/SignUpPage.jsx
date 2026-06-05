import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { AuthContext } from '../../context/AuthContext';
import { registerUser } from '../../services/api';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const initialForm = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  contactNumber: '',
  age: '',
};

const initialErrors = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  contactNumber: '',
  age: '',
};

const SignUpPage = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateContact = (value) => /^\d{11}$/.test(value);
  const validateAge = (value) => /^[0-9]+$/.test(value);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = { ...initialErrors };

    if (!form.firstName.trim()) nextErrors.firstName = 'First name is required.';
    if (!form.lastName.trim()) nextErrors.lastName = 'Last name is required.';
    if (!form.username.trim()) nextErrors.username = 'Username is required.';
    else if (form.username.includes(' ')) nextErrors.username = 'Username cannot contain spaces.';
    if (!form.email.trim()) nextErrors.email = 'Email is required.';
    else if (!validateEmail(form.email)) nextErrors.email = 'Please enter a valid email address.';
    if (!form.password) nextErrors.password = 'Password is required.';
    else if (form.password.length < 8) nextErrors.password = 'Password must be at least 8 characters.';
    if (!form.contactNumber.trim()) nextErrors.contactNumber = 'Contact number is required.';
    else if (!validateContact(form.contactNumber)) nextErrors.contactNumber = 'Contact number must be 11 digits.';
    if (!form.age.trim()) nextErrors.age = 'Age is required.';
    else if (!validateAge(form.age)) nextErrors.age = 'Age must be a number.';

    setErrors(nextErrors);

    if (Object.values(nextErrors).every((error) => !error)) {
      setLoading(true);
      try {
        const data = await registerUser({
          firstName: form.firstName,
          lastName: form.lastName,
          username: form.username,
          email: form.email,
          password: form.password,
          contactNumber: form.contactNumber,
          age: parseInt(form.age),
        });
        login(data.user, data.token);
        navigate('/dashboard');
      } catch (error) {
        setErrors((prev) => ({ ...prev, email: error.message }));
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Sign Up</h1>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Create your account using the same monochrome wireframe style with beginner-friendly validation.
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-sm font-medium text-zinc-700">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              value={form.firstName}
              onChange={handleChange('firstName')}
              className={inputClasses}
            />
            {errors.firstName && <p className="mt-1 text-xs text-rose-600">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="last-name" className="text-sm font-medium text-zinc-700">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              value={form.lastName}
              onChange={handleChange('lastName')}
              className={inputClasses}
            />
            {errors.lastName && <p className="mt-1 text-xs text-rose-600">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="signup-username" className="text-sm font-medium text-zinc-700">
            Username
          </label>
          <input
            id="signup-username"
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={handleChange('username')}
            className={inputClasses}
          />
          {errors.username ? (
            <p className="mt-1 text-xs text-rose-600">{errors.username}</p>
          ) : (
            <p className="mt-1 text-xs leading-5 text-zinc-500">Username must not contain spaces.</p>
          )}
        </div>

        <div>
          <label htmlFor="signup-email" className="text-sm font-medium text-zinc-700">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="you@domain.com"
            autoComplete="email"
            value={form.email}
            onChange={handleChange('email')}
            className={inputClasses}
          />
          {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="signup-password" className="text-sm font-medium text-zinc-700">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Create password"
            autoComplete="new-password"
            value={form.password}
            onChange={handleChange('password')}
            className={inputClasses}
          />
          {errors.password ? (
            <p className="mt-1 text-xs text-rose-600">{errors.password}</p>
          ) : (
            <p className="mt-2 text-xs leading-5 text-zinc-500">Password must be at least 8 characters.</p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="signup-contact" className="text-sm font-medium text-zinc-700">
              Contact Number
            </label>
            <input
              id="signup-contact"
              type="tel"
              placeholder="e.g. 09123456789"
              value={form.contactNumber}
              onChange={handleChange('contactNumber')}
              className={inputClasses}
            />
            {errors.contactNumber && <p className="mt-1 text-xs text-rose-600">{errors.contactNumber}</p>}
          </div>
          <div>
            <label htmlFor="signup-age" className="text-sm font-medium text-zinc-700">
              Age
            </label>
            <input
              id="signup-age"
              type="text"
              placeholder="Age"
              value={form.age}
              onChange={handleChange('age')}
              className={inputClasses}
            />
            {errors.age && <p className="mt-1 text-xs text-rose-600">{errors.age}</p>}
          </div>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName} disabled={loading}>
          {loading ? 'Creating Account...' : 'Create Account'}
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        Already have an account?{' '}
        <Link to="/auth/signin" className="font-semibold text-zinc-900 transition hover:text-zinc-600">
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
