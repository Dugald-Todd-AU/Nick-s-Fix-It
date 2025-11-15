export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <p className="text-gray-300 mb-8">Page not found</p>
        <a href="/" className="text-primary hover:text-primary-dark">
          Return to homepage
        </a>
      </div>
    </div>
  );
}

