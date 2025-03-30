import Link from "next/link";
import BackgroundWrapper from "@/components/BackgroundWrapper";

export default function NotFound() {
  return (
    <BackgroundWrapper>
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="text-center px-4 max-w-2xl mx-auto">
          <h1 className="text-[120px] font-normal text-sharp leading-none mb-6">
            404
          </h1>
          <h2 className="text-4xl font-normal text-sharp mb-8">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-lg mx-auto">
            We couldn't find the page you're looking for. Please check the URL
            or navigate back to our homepage.
          </p>
          <Link
            href="/"
            className="inline-block bg-black text-white px-8 py-4 text-lg hover:bg-gray-900 transition-colors duration-300"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </BackgroundWrapper>
  );
}
