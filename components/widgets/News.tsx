// src/components/widgets/News.tsx
"use client";

import { useEffect, useState } from "react";

export default function News() {
  const [articles, setArticles] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/news")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load news");
        return res.json();
      })
      .then((data) => setArticles(data.articles || []))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Top News</h2>
      <ul className="space-y-2">
        {articles.slice(0, 5).map((article, index) => (
          <li key={index} className="text-sm">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {article.title}
            </a>
            <p>{article.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
