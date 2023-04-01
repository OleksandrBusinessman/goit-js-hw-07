import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

(function () {
  const smallImgGallery = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
  gallery.insertAdjacentHTML("afterbegin", smallImgGallery);
})();

const onSmallImgClick = (e) => {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
`);

  instance.show();
};
gallery.addEventListener("click", onSmallImgClick);
