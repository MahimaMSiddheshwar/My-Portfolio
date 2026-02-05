import React from "react";
import { useParams, Link } from "react-router-dom";
import portfolioData from "../data/mockData";

export default function BlogDetail() {
  const { id } = useParams();
  const posts = portfolioData?.blogPosts || [];
  const post = posts.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Post not found
          </h1>
          <p className="text-slate-600 mb-6">
            The URL id does not match any post in mockData.js
          </p>
          <Link className="text-emerald-600 font-medium" to="/blog">
            ← Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link className="text-emerald-600 font-medium" to="/blog">
          ← Back to Blog
        </Link>

        <div className="mt-6 bg-white rounded-xl shadow p-8">
          <div className="text-sm text-slate-500 mb-3">
            {post.category} • {post.readTime} •{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {post.title}
          </h1>

          <p className="text-slate-600 mb-8">{post.excerpt}</p>

          {/* If you add `content` in mockData.js, it will show here */}
          {post.content ? (
            <div className="prose max-w-none">
              <div style={{ whiteSpace: "pre-wrap" }}>{post.content}</div>
            </div>
          ) : (
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-slate-700">
              <p className="font-semibold mb-2">Add full content</p>
              <p className="text-sm">
                In <code>mockData.js</code>, add a field{" "}
                <code>content</code> inside this blog post object. Example:
              </p>
              <pre className="text-xs mt-3 bg-white p-3 rounded border overflow-auto">
                {`{
  id: ${post.id},
  title: "...",
  excerpt: "...",
  content: "Write your full article here...\\n\\nYou can add sections like Background, Methods, Results, Takeaways.",
}`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
