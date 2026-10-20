/**
 * <img> mit WebP-Variante gleichen Namens (vorab erzeugt, z. B. img/community.webp neben community.jpg).
 * Das JPEG bleibt Fallback. Bilder in <picture> lädt React 19 nicht automatisch per Preload vor.
 */
export function Picture({ src, alt, ...rest }: React.ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string }) {
  const webp = src.replace(/\.jpe?g$/i, ".webp");
  return (
    <picture className="contents">
      {webp !== src && <source srcSet={webp} type="image/webp" />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} {...rest} />
    </picture>
  );
}
