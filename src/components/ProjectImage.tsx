import Image from 'next/image'
import { useState } from 'react'

interface ProjectImageProps {
  projectId: string
  alt: string
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
}

interface ProjectGalleryProps {
  projectId: string
  images: string[]
  title: string
  className?: string
}

// 単一プロジェクト画像コンポーネント
export function ProjectImage({ 
  projectId, 
  alt, 
  className = "", 
  priority = false,
  fill = false,
  sizes = "100vw"
}: ProjectImageProps) {
  const [imageError, setImageError] = useState(false)
  
  // 画像パスの生成
  const imagePath = `/images/projects/${projectId}/main.jpg`
  const fallbackPath = `/images/projects/placeholder.jpg`

  if (imageError) {
    return (
      <div className={`bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <div className="text-gray-400 dark:text-gray-500 text-4xl mb-2">📷</div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            プロジェクト画像
          </p>
        </div>
      </div>
    )
  }

  return (
    <Image
      src={imagePath}
      alt={alt}
      className={className}
      priority={priority}
      fill={fill}
      sizes={sizes}
      onError={() => setImageError(true)}
      style={fill ? { objectFit: 'cover' } : undefined}
    />
  )
}

// プロジェクト画像ギャラリーコンポーネント
export function ProjectGallery({ 
  projectId, 
  images, 
  title, 
  className = "" 
}: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
  }

  if (images.length === 0) {
    return (
      <div className={`bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg p-8 text-center ${className}`}>
        <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">🖼️</div>
        <p className="text-gray-500 dark:text-gray-400">
          プロジェクト画像は準備中です
        </p>
      </div>
    )
  }

  return (
    <div className={className}>
      {/* メイン画像 */}
      <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800">
        {imageErrors[selectedImage] ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">📷</div>
              <p className="text-gray-500 dark:text-gray-400">
                画像を読み込めませんでした
              </p>
            </div>
          </div>
        ) : (
          <Image
            src={`/images/projects/${projectId}/${images[selectedImage]}`}
            alt={`${title} - 画像 ${selectedImage + 1}`}
            fill
            className="object-cover"
            onError={() => handleImageError(selectedImage)}
          />
        )}
      </div>

      {/* サムネイル一覧 */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-video rounded overflow-hidden bg-gray-200 dark:bg-gray-700 transition-all ${
                selectedImage === index
                  ? 'ring-2 ring-teal-500 ring-offset-2 dark:ring-offset-gray-800'
                  : 'hover:ring-1 hover:ring-gray-300 dark:hover:ring-gray-600'
              }`}
            >
              {imageErrors[index] ? (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-sm">📷</span>
                </div>
              ) : (
                <Image
                  src={`/images/projects/${projectId}/${image}`}
                  alt={`${title} - サムネイル ${index + 1}`}
                  fill
                  className="object-cover"
                  onError={() => handleImageError(index)}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// プロジェクトカード用の画像コンポーネント
export function ProjectCardImage({ 
  projectId, 
  title, 
  className = "" 
}: { 
  projectId: string
  title: string
  className?: string
}) {
  return (
    <div className={`relative ${className}`}>
      <ProjectImage
        projectId={projectId}
        alt={`${title}のプロジェクト画像`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
