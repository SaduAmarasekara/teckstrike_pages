import React, { useState } from "react";
import {
  Search,
  Calendar,
  User,
  Tag,
  ArrowRight,
  Filter,
  Eye,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";

const BlogAndNews = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock data for blog posts and news
  const posts = [
    {
      id: 1,
      title: "Web Development Workshop Series",
      excerpt:
        "Join our comprehensive web development workshops and build your skills from scratch...",
      content: "Full article content here...",
      category: "blog",
      author: "John Doe",
      date: "2025-07-10",
      image: "/images/blog1.jpg",
      tags: ["web development", "workshop", "coding"],
      views: 1250,
      likes: 89,
      comments: 23,
      featured: true,
    },
    {
      id: 2,
      title: "Graduation Day 2025",
      excerpt:
        "Celebrate the achievements of our graduates at the 2025 graduation ceremony...",
      content: "Full article content here...",
      category: "news",
      author: "Jane Smith",
      date: "2025-07-08",
      image: "/images/blog2.jpg",
      tags: ["graduation", "ceremony", "students"],
      views: 892,
      likes: 45,
      comments: 12,
      featured: false,
    },
    {
      id: 3,
      title: "Friends gathering",
      excerpt:
        "A look back at our fun and memorable friend gatherings this year...",
      content: "Full article content here...",
      category: "blog",
      author: "Mike Johnson",
      date: "2025-07-05",
      image: "/images/blog3.jpg",
      tags: ["friends", "events", "community"],
      views: 1450,
      likes: 127,
      comments: 34,
      featured: true,
    },
    {
      id: 4,
      title: "career Development Program",
      excerpt:
        "Discover our new programs and resources to boost your career prospects...",
      content: "Full article content here...",
      category: "news",
      author: "Sarah Wilson",
      date: "2025-07-03",
      image: "/images/blog4.jpg",
      tags: ["career", "development", "workshops"],
      views: 756,
      likes: 62,
      comments: 18,
      featured: false,
    },
    {
      id: 5,
      title: "Hackathon",
      excerpt:
        "Get ready for our upcoming hackathon — collaborate, innovate, and compete...",
      content: "Full article content here...",
      category: "blog",
      author: "Alex Chen",
      date: "2025-07-30",
      image: "/images/blog5.jpg",
      tags: ["hackathon", "coding", "competition"],
      views: 934,
      likes: 78,
      comments: 28,
      featured: false,
    },
    {
      id: 6,
      title: "Annual Funny Events",
      excerpt:
        "Relive the funniest moments and highlights from our annual fun events...",
      content: "Full article content here...",
      category: "news",
      author: "Emma Davis",
      date: "2025-08-28",
      image: "/images/blog6.jpg",
      tags: ["fun", "events", "community"],
      views: 623,
      likes: 41,
      comments: 9,
      featured: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Posts", count: posts.length },
    {
      id: "news",
      name: "News",
      count: posts.filter((p) => p.category === "news").length,
    },
    {
      id: "blog",
      name: "Blog",
      count: posts.filter((p) => p.category === "blog").length,
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesTab = activeTab === "all" || post.category === activeTab;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.tags.includes(selectedCategory);

    return matchesTab && matchesSearch && matchesCategory;
  });

  const featuredPosts = posts.filter((post) => post.featured);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="App min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Tekstrike Club
            </h1>
            <p className="text-xl text-gray-600">Latest News & Blog Posts</p>
          </div>
        </div>
      </header>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Featured Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </span>
                      </div>
                      <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                <option value="championship">Championship</option>
                <option value="training">Training</option>
                <option value="strategy">Strategy</option>
                <option value="tournament">Tournament</option>
              </select>
              <Filter className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex space-x-1 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No posts found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-gray-200 group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          post.category === "news"
                            ? "bg-red-600 text-white"
                            : "bg-green-600 text-white"
                        }`}
                      >
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors">
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter to get the latest news and updates from
            Tekstrike Club.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Tekstrike Club. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogAndNews;
