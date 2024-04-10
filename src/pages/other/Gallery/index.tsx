import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// components
import PageTitle from '../../../components/PageTitle';
import Loader from '../../../components/Loader';

import LightBox from './LightBox';

// dummy data
import { gallery as data, GalleryItem, ImageType } from './data';

const Gallery = () => {
  const [gallery, setGallery] = useState<GalleryItem[]>(data);
  const [category, setCategory] = useState<string>('all');
  const [galleryImages, setGalleryImages] = useState<ImageType[]>(
    (data || []).map((album) => {
      return album.image;
    })
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  /**
   * filter images by category
   * @param category category
   */
  const filterImages = (category: string) => {
    setIsLoading(true);
    setCategory(category);
    setTimeout(() => {
      const galleryAlbums =
        category === 'all' ? data : data.filter((album) => album.category?.includes(category));
      setGallery(galleryAlbums);
      setGalleryImages(
        (galleryAlbums || []).map((album) => {
          return album.image;
        })
      );
      setIsLoading(false);
    }, 300);
  };

  /*
   * handle lightbox events
   */
  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const moveNext = () => {
    setPhotoIndex((prevState) => (prevState + 1) % galleryImages.length);
  };

  const movePrev = () => {
    setPhotoIndex((prevState) => (prevState + galleryImages.length - 1) % galleryImages.length);
  };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: 'Extra Pages', path: '/pages/gallery' },
          { label: 'Gallery', path: '/pages/gallery', active: true },
        ]}
        title={'Gallery'}
      />

      <Row>
        <Col>
          <div className="text-center filter-menu">
            <Link
              to="#"
              className={classNames('filter-menu-item', 'me-1', {
                active: category === 'all',
              })}
              onClick={() => filterImages('all')}
            >
              All
            </Link>
            <Link
              to="#"
              className={classNames('filter-menu-item', 'me-1', {
                active: category === 'web',
              })}
              onClick={() => filterImages('web')}
            >
              Web Design
            </Link>
            <Link
              to="#"
              className={classNames('filter-menu-item', 'me-1', {
                active: category === 'graphic',
              })}
              onClick={() => filterImages('graphic')}
            >
              Graphic Design
            </Link>
            <Link
              to="#"
              className={classNames('filter-menu-item', 'me-1', {
                active: category === 'illustrator',
              })}
              onClick={() => filterImages('illustrator')}
            >
              Illustrator
            </Link>
            <Link
              to="#"
              className={classNames('filter-menu-item', 'me-1', {
                active: category === 'photography',
              })}
              onClick={() => filterImages('photography')}
            >
              Photography
            </Link>
          </div>
        </Col>
      </Row>

      <Row className="filterable-content position-relative">
        {isLoading && <Loader />}
        {(gallery || []).map((item, index) => {
          return (
            <Col sm={6} xl={3} key={index} className="filter-item  all web illustrator">
              <div className="gal-box">
                <Link
                  to="#"
                  className="image-popup"
                  title={item.image!.caption}
                  onClick={() => openLightbox(index)}
                >
                  <img src={item.image!.src} alt="" className="img-fluid" />
                </Link>

                <div className="gall-info">
                  <h4 className="font-16 mt-0">{item.title}</h4>
                  <Link to="#">
                    <img src={item.avatar} alt="user-img" className="rounded-circle" height="24" />
                    <span className="text-muted ms-1">{item.userName}</span>
                  </Link>
                  <Link to="#" className="gal-like-btn">
                    <i className="mdi mdi-heart-outline text-danger"></i>
                  </Link>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>

      {/* image lightbox */}
      {isOpen && (
        <LightBox
          images={galleryImages}
          photoIndex={photoIndex}
          closeLightbox={closeLightbox}
          moveNext={moveNext}
          movePrev={movePrev}
        />
      )}
    </>
  );
};

export default Gallery;
