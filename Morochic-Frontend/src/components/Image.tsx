interface ImageProps {
  className?: string;
  src: string;
  byDefault?: boolean;
  alt?: string;
}
export const Image = ({
  className,
  src,
  byDefault = true,
  alt,
}: ImageProps) => {
  return (
    <img
      className={className}
      src={byDefault ? `${import.meta.env.VITE_APP_API_URL}/storage/${src}` : src}
      alt={alt}
    />
  );
};
