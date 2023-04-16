interface Props {
  src: string;
  alt: string;
  className?: string;
  children: string;
  title: string;
}

export default function ({ src, className = "", children, alt, title }: Props) {
  return (
    <section className={className + " image-paragraph"}>
      <h2 className="image-paragraph__title title">{title}</h2>
      <p className="image-paragraph__text">{children}</p>
      <img className="image-paragraph__image" src={src} alt={alt} />
    </section>
  );
}
