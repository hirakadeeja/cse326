import React, { useState } from 'react';
import { Mail, Loader } from 'lucide-react';
import { useStore } from '../store';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const subscribeToNewsletter = useStore(state => state.subscribeToNewsletter);

  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    try {
      await subscribeToNewsletter(email);
      setStatus('success');
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus('idle');
            setErrorMessage('');
          }}
          placeholder="Enter your email"
          className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
          disabled={status === 'loading'}
        />
      </div>
      
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 transition-colors flex items-center justify-center"
      >
        {status === 'loading' ? (
          <>
            <Loader className="animate-spin -ml-1 mr-2 h-5 w-5" />
            Subscribing...
          </>
        ) : 'Subscribe'}
      </button>

      {status === 'success' && (
        <div className="text-green-400 text-sm">
          Please check your email to verify your subscription!
        </div>
      )}

      {status === 'error' && (
        <div className="text-red-400 text-sm">
          {errorMessage}
        </div>
      )}
    </form>
  );
}