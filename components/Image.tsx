import Image from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  objectFit = 'cover',
}: OptimizedImageProps) {
  // Handle external URLs vs local paths
  const imageSrc = src.startsWith('http') ? src : src

  if (fill) {
    return (
      <div className={cn('relative', className)}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className={cn('object-cover', `object-${objectFit}`)}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    )
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  )
}

