interface Props {
  className?: string;
  src: string;
  children: string;
  title: string;
  alt: string;
}

export default function Media({
  src,
  children,
  alt,
  title,
  className = "",
}: Props) {
  return (
    <section className="media">
      <h2 className="media__title title">{title}</h2>
      <div className="media__container">
        <img src={src} alt={alt} className="media__icon" />
        <p className="media__text">{children}</p>
      </div>
    </section>
  );
}
