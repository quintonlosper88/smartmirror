// src/components/widgets/News.tsx
"use client";

import * as React from "react";

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function News() {
  const [articles, setArticles] = React.useState<any[]>([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
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
      <Carousel opts={{ align: "start" }} className="w-full h-full">
        <CarouselContent>
          {articles.slice(0, 5).map((article, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="h-full flex flex-col">
                  {/* ✅ Banner Image at Top */}
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  )}

                  {/* ✅ Card Content */}
                  <CardContent className="flex flex-col justify-between flex-grow">
                    <CardTitle className="mt-3 mb-2 text-base font-semibold">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm mb-4">
                      {article.description}
                    </CardDescription>
                  </CardContent>

                  {/* ✅ Footer */}
                  <CardFooter className="text-xs text-muted-foreground px-4 pb-4">
                    {new Date(article.publishedAt).toLocaleString()}
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
