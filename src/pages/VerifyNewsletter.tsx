import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useStore } from '../store';
import { CheckCircle, XCircle } from 'lucide-react';

export default function VerifyNewsletter() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const verifyNewsletter = useStore(state => state.verifyNewsletter);

  useEffect(() => {
    const verifyToken = async () => {
      const token = searchParams.get('token');
      if (!token) {
        setStatus('error');
        return;
      }

      try {
        const success = await verifyNewsletter(token);
        setStatus(success ? 'success' : 'error');
      } catch {
        setStatus('error');
      }
    };

    verifyToken();
  }, [searchParams, verifyNewsletter]);

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="max-w-lg mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          {status === 'verifying' && (
            <div className="animate-pulse">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Verifying your subscription...</h2>
              <p className="text-gray-600">Please wait while we verify your email address.</p>
            </div>
          )}

          {status === 'success' && (
            <div>
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscription Verified!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for subscribing to our newsletter. You'll now receive updates about cultural events and news.
              </p>
              <Link
                to="/"
                className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Return to Home
              </Link>
            </div>
          )}

          {status === 'error' && (
            <div>
              <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Verification Failed</h2>
              <p className="text-gray-600 mb-6">
                We couldn't verify your subscription. The verification link might be expired or invalid.
              </p>
              <Link
                to="/"
                className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Return to Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}