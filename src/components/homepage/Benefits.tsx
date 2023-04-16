import Media from "../Media";

export default function Benefits() {
  return (
    <section className="benefits">
      <article className="benefits__section">
        <Media
          src="../../../public/icons/design.png"
          alt=""
          title="Design your blog"
        >
          Your first step is to pick a template. By picking a template 90% of
          the work will already have been done. All you have to do is to pick
          your colors, fonts and add the finishing design touches. This is an
          incredibly simple step that will yield an outstanding blog
        </Media>
        <Media
          src="../../../public/icons/crowd.png"
          alt=""
          title="Reach out to people"
        >
          Your first step is to pick a template. By picking a template 90% of
          the work will already have been done. All you have to do is to pick
          your colors, fonts and add the finishing design touches. This is an
          incredibly simple step that will yield an outstanding blog
        </Media>
        <Media
          src="../../../public/icons/business.png"
          alt=""
          title="Run your own business"
        >
          Your first step is to pick a template. By picking a template 90% of
          the work will already have been done. All you have to do is to pick
          your colors, fonts and add the finishing design touches. This is an
          incredibly simple step that will yield an outstanding blog
        </Media>
      </article>
    </section>
  );
}
