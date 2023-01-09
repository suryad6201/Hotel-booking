import { Hotel1, Hotel2, Hotel3 } from "./Images";

function GalleryItems(props) {
  return (
    <figure class="gallery__item">
      <img src={props.hotel} alt="hotel" class="gallery__photo" />
    </figure>
  );
}

function Gallery() {
  return (
    <>
      <div className="gallery">
        <GalleryItems hotel={Hotel1} />
        <GalleryItems hotel={Hotel2} />
        <GalleryItems hotel={Hotel3} />
      </div>
    </>
  );
}

export default Gallery;
