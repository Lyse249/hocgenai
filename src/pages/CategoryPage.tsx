import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Loader2 } from 'lucide-react'
import NewsCard from '../components/NewsCard'

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

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>()
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Mock data
  const mockArticles: Article[] = [
    {
      id: '1',
      title: 'The Future of AI in Healthcare',
      description: 'Discover how AI is revolutionizing healthcare with breakthrough technologies.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      category: 'Technology',
      author: 'Dr. Sarah Johnson',
      publishedAt: '2024-01-15',
      readTime: '5',
      content: 'AI is transforming healthcare...'
    },
    {
      id: '2',
      title: 'Global Markets React to New Policies',
      description: 'Major stock markets show mixed reactions to new monetary policies.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      category: 'Business',
      author: 'Michael Chen',
      publishedAt: '2024-01-14',
      readTime: '4',
      content: 'Global markets experienced volatility...'
    }
  ]

  useEffect(() => {
    const fetchCategoryArticles = async () => {
      try {
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 600))
        
        if (category) {
          const categoryArticles = mockArticles.filter(
            article => article.category.toLowerCase() === category.toLowerCase()
          )
          setArticles(categoryArticles)
          
          if (categoryArticles.length === 0) {
            setError(`No articles found for category: ${category}`)
          }
        }
      } catch (err) {
        setError('Failed to load articles')
      } finally {
        setLoading(false)
      }
    }

    fetchCategoryArticles()
  }, [category])

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
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    )
  }

  const categoryName = category ? category.charAt(0).toUpperCase() + category.slice(1) : ''

  return (
    <div>
      <Link to="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to News</span>
      </Link>

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {categoryName} News
        </h1>
        <p className="text-gray-600">
          {articles.length} article{articles.length !== 1 ? 's' : ''} found
        </p>
      </header>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">No articles found in this category.</div>
          <Link to="/" className="btn-primary">Browse All Articles</Link>
        </div>
      )}
    </div>
  )
}

export default CategoryPage 