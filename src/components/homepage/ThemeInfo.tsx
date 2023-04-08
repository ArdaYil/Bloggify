import ImageCarousel from "../imageCarousel/ImageCarousel";
import CarouselItem from "../imageCarousel/CarouselItem";

export default function ThemeInfo() {
  const carouselImages = {
    petBlog: "../../../public/images/regular/Pet-Blog.webp",
    foodBlog: "../../../public/images/regular/Food-Blog.webp",
    gymBlog: "../../../public/images/regular/Gym-Blog.webp",
  };

  return (
    <div>
      <p>
        Blogify has numerous templates to make your bloging experience as smooth
        as possible.
      </p>
      <ImageCarousel className="image-carousel">
        <CarouselItem key="petBlog" src={carouselImages.petBlog} />
        <CarouselItem key="foodBlog" src={carouselImages.foodBlog} />
        <CarouselItem key="gymBlog" src={carouselImages.gymBlog} />
      </ImageCarousel>
      <ul>
        <li>Pick a niche</li>
        <li>Pick a template</li>
        <li>Design your first blogpost</li>
        <li>Publish and let people enjoy your blog</li>
      </ul>
    </div>
  );
}
