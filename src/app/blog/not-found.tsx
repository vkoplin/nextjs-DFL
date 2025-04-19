import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cyber-dark flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
        <p className="text-gray-300 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
        <Link
          href="/blog"
          className="text-cyber-blue hover:text-cyber-blue/80 transition-colors"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
} 