import React from "react";
import { useParams, Link } from "react-router-dom";
import portfolioData from "../data/mockData";

const InsightDetail = () => {
  const { id } = useParams();
  const { insights = [] } = portfolioData;

  const insight = insights.find((item) => String(item.id) === id);

  if (!insight) {
    return (
      <section className="p-8 bg-white min-h-screen">
        <Link to="/insights" className="text-blue-600 underline">
          ← Back to Insights
        </Link>
        <h1 className="text-2xl font-bold mt-4">Article not found</h1>
      </section>
    );
  }

  return (
    <section className="p-8 bg-white min-h-screen">
      <Link to="/insights" className="text-blue-600 underline">
        ← Back to Insights
      </Link>
      <h1 className="text-3xl font-bold mt-2">{insight.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {insight.date} • {insight.readTime} • {insight.category}
      </p>

      <article className="whitespace-pre-line text-lg leading-relaxed">
        {insight.content}
      </article>
    </section>
  );
};

export default InsightDetail;
