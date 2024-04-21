interface ImageProps {
  className: string;
  src: File | string | null;
  alt: string;
}
export const Image = ({ className, src, alt }: ImageProps) => {
  return (
    <img
      className={className}
      src={
        typeof src === "string"
          ? `${import.meta.env.VITE_APP_API_URL}/storage/` + src
          : src
          ? URL.createObjectURL(src)
          : ""
      }
      alt={alt}
    />
  );
};
