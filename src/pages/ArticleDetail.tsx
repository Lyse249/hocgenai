import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, User, Share2, Bookmark } from 'lucide-react'
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

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [article, setArticle] = useState<Article | null>(null)
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([])
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
      content: `
        <p>Artificial Intelligence is transforming healthcare in unprecedented ways, offering new possibilities for diagnosis, treatment, and patient care. The integration of AI technologies in medical settings has opened up a world of opportunities that were once thought impossible.</p>
        
        <h2>The Current State of AI in Healthcare</h2>
        <p>Today, AI is being used across various aspects of healthcare, from diagnostic imaging to drug discovery. Machine learning algorithms can analyze medical images with remarkable accuracy, often outperforming human radiologists in detecting early signs of diseases such as cancer.</p>
        
        <h2>Diagnostic Advancements</h2>
        <p>One of the most significant impacts of AI in healthcare is in the field of diagnostics. AI-powered systems can process vast amounts of medical data, including patient records, lab results, and imaging studies, to identify patterns that might be missed by human practitioners.</p>
        
        <h2>Personalized Medicine</h2>
        <p>AI is enabling the development of personalized medicine approaches, where treatments are tailored to individual patients based on their genetic makeup, lifestyle, and other factors. This precision medicine approach has the potential to improve treatment outcomes significantly.</p>
        
        <h2>Challenges and Considerations</h2>
        <p>Despite the promising potential, the implementation of AI in healthcare faces several challenges. These include concerns about data privacy, the need for extensive validation of AI systems, and the importance of maintaining human oversight in medical decision-making.</p>
        
        <h2>The Future Outlook</h2>
        <p>As AI technology continues to evolve, we can expect to see even more innovative applications in healthcare. From robotic surgery to predictive analytics for disease prevention, the possibilities are endless. However, it's crucial that these developments are guided by ethical considerations and a commitment to improving patient outcomes.</p>
      `
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
    }
  ]

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800))
        
        const foundArticle = mockArticles.find(a => a.id === id)
        if (foundArticle) {
          setArticle(foundArticle)
          // Get related articles (same category, different articles)
          const related = mockArticles.filter(a => a.category === foundArticle.category && a.id !== foundArticle.id)
          setRelatedArticles(related)
        } else {
          setError('Article not found')
        }
      } catch (err) {
        setError('Failed to load article')
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-600">Loading article...</span>
        </div>
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 mb-4">{error || 'Article not found'}</div>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <Link 
        to="/" 
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to News</span>
      </Link>

      {/* Article Header */}
      <header className="mb-8">
        <div className="mb-4">
          <span className="bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded-full">
            {article.category}
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        
        <p className="text-xl text-gray-600 mb-6">
          {article.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{article.publishedAt}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} min read</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Article Image */}
      <div className="mb-8">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 md:h-96 object-cover rounded-xl"
        />
      </div>

      {/* Article Content */}
      <article className="prose prose-lg max-w-none mb-12">
        <div 
          dangerouslySetInnerHTML={{ __html: article.content }}
          className="text-gray-700 leading-relaxed"
        />
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <NewsCard key={relatedArticle.id} {...relatedArticle} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default ArticleDetail 