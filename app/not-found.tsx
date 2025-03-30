export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">The page you are looking for does not exist.</p>
      <a href="/" className="text-blue-500 hover:underline">
        Return to homepage
      </a>
    </div>
  );
}
