import Button from "../Button";

export default function Hero() {
  return (
    <div className="hero">
      <img
        className="hero__image"
        src="../../public/images/regular/Hero-Image.webp"
      />
      <div className="hero__content">
        <p className="hero__content__text">
          Blogify is a service to make your bloging dreams possible. With
          Blogify you can easily create your own bloging studio and create your
          own blogposts. Design your posts, insert and edit images, and make
          your voice heard. Get started with Blogify or learn more about us.
        </p>
        <div className="hero__content__btn-holder">
          <Button className="black">Get Started</Button>
          <Button className="black--transparent">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
