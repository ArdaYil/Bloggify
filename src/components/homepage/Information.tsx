import ArrowText from "../ArrowText";

export default function Information() {
  return (
    <div className="information">
      <h2 className="information__title">Why Blogify?</h2>
      <p className="information__first-paragraph">
        We understand that blogging can be difficult to get started with.
        Blogging should just be about blogging. No technicality. That is why we
        created Blogify. Blogify is a service designed to make blogging esier
        and more accessible. Why should you as a bloger worry about creating a
        website and get it up and running when we can help you with it. Blogify
        is designed to allow you to devote all your energy to your blogs, while
        we handle the rest.
      </p>
      <p className="information__second-paragraph">
        For as little as $12 a month you will be able to use our profesional
        tools, to create and design beautiful blogs with no coding experience.
        We will handle the rest such as making sure the blog is rendered
        properly, is up and running on a dedicated server and allow you to
        update your blogs in real time without having to worry about anything
        else.
      </p>
      <ArrowText to="/">Learn More</ArrowText>
    </div>
  );
}
