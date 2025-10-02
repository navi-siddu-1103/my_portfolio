'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import profileImage from '../profile.jpg';
import { StaticImageData } from 'next/image';

interface ProfileImageProps {
  src?: string | StaticImageData;
  alt?: string;
  size?: number;
  className?: string;
  priority?: boolean;
}

/**
 * Optimized profile image component with fallback
 * Uses Next.js Image component for automatic optimization
 */
export function ProfileImage({ 
  src = profileImage, 
  alt = 'Profile photo', 
  size = 400,
  className,
  priority = false
}: ProfileImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}

/**
 * Avatar variant for smaller profile images
 */
export function ProfileAvatar({ 
  src = profileImage, 
  alt = 'Profile avatar', 
  size = 100,
  className 
}: ProfileImageProps) {
  return (
    <ProfileImage
      src={src}
      alt={alt}
      size={size}
      className={cn("rounded-full border-2 border-border", className)}
      priority={false}
    />
  );
}

/**
 * Large profile image for hero sections
 */
export function ProfileHero({ 
  src = profileImage, 
  alt = 'Profile photo', 
  className 
}: Omit<ProfileImageProps, 'size'>) {
  return (
    <ProfileImage
      src={src}
      alt={alt}
      size={600}
      className={cn("rounded-2xl shadow-2xl", className)}
      priority={true}
    />
  );
}
