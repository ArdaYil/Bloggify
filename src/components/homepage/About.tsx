import ImageParagraph from "../ImageParagraph";

export default function About() {
  return (
    <section className="about">
      <article className="about__content-container">
        <ImageParagraph
          src="../../../public/images/regular/CreateBlog.webp"
          alt="An image of a laptop, cofee cup, notepad and a cell phone on a lightbrown table"
          title="What is Blogify?"
        >
          The way Blogify works is that you create your own blogging studio. You
          will be able to give your studio name. You will be able to invite
          other users to your studio if you would like to colaborate with other
          bloggers or you can receive and invite yourself to someone else's
          studio
        </ImageParagraph>
        <ImageParagraph
          src="../../../public/images/regular/BlogPost.webp"
          alt="An image of a laptop showing a website on a light brown table"
          title="Create your own blog"
        >
          From your studio, you will be able to create blog posts. You will be
          able to give your blogposts a title and a description. Furthermore you
          will be able to design your blogposts. You do not have to post a
          blogpost right away, you can keep them as drafts for as long as you
          want.
        </ImageParagraph>
        <ImageParagraph
          src="../../../public/images/regular/Dashboard.webp"
          alt="An image of a laptop showing a dashboard on a black reflecting table"
          title="Analyze your stats"
        >
          Once you have posted your blogpost, you will be able to view metrics
          and stats about your blogpost. The stats you can view are things such
          as how many visitors you get, how high on the searchbar your blog is,
          how much revenue your blog generates and much more.
        </ImageParagraph>
        <ImageParagraph
          src="../../../public/images/regular/Domain.webp"
          alt="An image of a searchbar with a domain name"
          title="Personalize your blog"
        >
          Lastly, you will be able to personalize your own blog by having your
          own domain name for your blog. You can purchase your domain name
          wherever you want and very easily connect your blog to the domain name
          here at Blogify
        </ImageParagraph>
      </article>
    </section>
  );
}
