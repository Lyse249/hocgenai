import { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import { Loader2 } from 'lucide-react'

interface Article {
  id: string
  title: string
  description: string
  image: string
  category: string
  author: string
  publishedAt: string
  readTime: string
  content: string
}

const NewsPage = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Mock data for demonstration
  const mockArticles: Article[] = [
    {
      id: '1',
      title: 'The Future of Artificial Intelligence in Healthcare',
      description: 'Discover how AI is revolutionizing the healthcare industry with breakthrough technologies and innovative applications.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      category: 'Technology',
      author: 'Dr. Sarah Johnson',
      publishedAt: '2024-01-15',
      readTime: '5',
      content: 'Artificial Intelligence is transforming healthcare in unprecedented ways...'
    },
    {
      id: '2',
      title: 'Global Markets React to New Economic Policies',
      description: 'Major stock markets worldwide show mixed reactions as central banks implement new monetary policies.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      category: 'Business',
      author: 'Michael Chen',
      publishedAt: '2024-01-14',
      readTime: '4',
      content: 'Global financial markets experienced significant volatility...'
    },
    {
      id: '3',
      title: 'Breakthrough in Quantum Computing Research',
      description: 'Scientists achieve new milestone in quantum computing, bringing us closer to practical quantum applications.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
      category: 'Science',
      author: 'Prof. David Wilson',
      publishedAt: '2024-01-13',
      readTime: '6',
      content: 'A team of researchers has made a significant breakthrough...'
    },
    {
      id: '4',
      title: 'New Study Reveals Benefits of Mediterranean Diet',
      description: 'Comprehensive research confirms the long-term health benefits of following Mediterranean dietary patterns.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
      category: 'Health',
      author: 'Dr. Emily Rodriguez',
      publishedAt: '2024-01-12',
      readTime: '3',
      content: 'A comprehensive study involving over 10,000 participants...'
    },
    {
      id: '5',
      title: 'Championship Finals Set for Record-Breaking Viewership',
      description: 'The upcoming championship game is expected to draw unprecedented viewership numbers worldwide.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      category: 'Sports',
      author: 'Alex Thompson',
      publishedAt: '2024-01-11',
      readTime: '4',
      content: 'The championship finals are set to break viewership records...'
    },
    {
      id: '6',
      title: 'Renewable Energy Surpasses Fossil Fuels in Europe',
      description: 'For the first time in history, renewable energy sources have generated more electricity than fossil fuels.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
      category: 'Technology',
      author: 'Lisa Park',
      publishedAt: '2024-01-10',
      readTime: '5',
      content: 'Europe has reached a historic milestone in energy production...'
    }
  ]

  useEffect(() => {
    // Simulate API call
    const fetchArticles = async () => {
      try {
        setLoading(true)
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        setArticles(mockArticles)
        setError(null)
      } catch (err) {
        setError('Failed to load articles')
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex items-center space-x-2">
          <Loader2 className="w-6 h-6 animate-spin text-primary-600" />
          <span className="text-gray-600">Loading articles...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">{error}</div>
        <button 
          onClick={() => window.location.reload()}
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    )
  }

  const featuredArticle = articles[0]
  const otherArticles = articles.slice(1)

  return (
    <div className="space-y-8">
      {/* Featured Article */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
        <NewsCard {...featuredArticle} featured={true} />
      </section>

      {/* Latest News */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherArticles.map((article) => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Technology', 'Business', 'Science', 'Health', 'Sports', 'Entertainment'].map((category) => (
            <a
              key={category}
              href={`/category/${category.toLowerCase()}`}
              className="card p-6 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="font-semibold text-gray-900">{category}</h3>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

export default NewsPage 