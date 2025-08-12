import { Link } from 'react-router-dom'
import { Calendar, Clock, User } from 'lucide-react'

interface NewsCardProps {
  id: string
  title: string
  description: string
  image: string
  category: string
  author: string
  publishedAt: string
  readTime: string
  featured?: boolean
}

const NewsCard = ({
  id,
  title,
  description,
  image,
  category,
  author,
  publishedAt,
  readTime,
  featured = false
}: NewsCardProps) => {
  return (
    <article className={`card overflow-hidden group ${featured ? 'md:col-span-2' : ''}`}>
      <Link to={`/article/${id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
              featured ? 'h-64 md:h-80' : 'h-48'
            }`}
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-full">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className={`font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200 ${
            featured ? 'text-xl md:text-2xl' : 'text-lg'
          }`}>
            {title}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <User className="w-3 h-3" />
                <span>{author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>{publishedAt}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default NewsCard 