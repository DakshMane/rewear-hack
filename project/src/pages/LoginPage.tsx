import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Leaf } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const success = await login(email, password);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-sage-50 to-brown-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-sage-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-display font-bold text-brown-900">Welcome Back</h2>
          <p className="mt-2 text-brown-600">Continue your sustainable fashion journey</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-brown-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-brown-50 border border-brown-200 text-brown-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-brown-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-brown-400" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-brown-200 rounded-lg focus:ring-sage-500 focus:border-sage-500 bg-cream-50/50"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-brown-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-brown-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-brown-200 rounded-lg focus:ring-sage-500 focus:border-sage-500 bg-cream-50/50"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-brown-400 hover:text-brown-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-sage-600 text-white py-3 rounded-lg font-semibold hover:bg-sage-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-brown-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-sage-600 hover:text-sage-700 font-semibold">
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-4 p-4 bg-brown-50 rounded-lg border border-brown-100">
            <p className="text-sm text-brown-600 mb-2 font-medium">Demo credentials:</p>
            <p className="text-sm text-brown-700">Admin: admin@rewear.com / password</p>
            <p className="text-sm text-brown-700">User: user@example.com / password</p>
          </div>
        </div>
      </div>
    </div>
  );
}