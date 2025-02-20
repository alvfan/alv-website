import React from 'react';
import Image from 'gatsby-image';
import Link from 'gatsby-link';
import { Title } from '../title';
import { FeaturedVideo } from '../featuredVideo';
import styles from './VideoHero.module.css';

export const VideoHero = ({
  backgroundImage,
  fallbackImg,
  video,
  playlist,
}) => {
  return (
    <div className="bg-navy w-full pt-2 twelve:pb-10 -mt-5 mb-30 twelve:mb-0">
      <div className="twelve:grid grid-cols-videos-hero mx-auto twelve:mb-24">
        <div />
        <span
          className={`relative twelve:-ml-20 twelve:pr-40 2xl:ml-0 2xl:pr-0 transform sm:translate-x-2/7 twelve:translate-x-0 block ${styles.card}`}
        >
          <Image
            fluid={backgroundImage}
            className={`-mx-12 h-screen sm:mx-0 transform scale-130 twelve:translate-x-10 -translate-y-5  ${styles.bgImage}`}
          />
          <div
            className={`absolute -translate-y-32 w-full text-white top-1/2 transform sm:-translate-y-1/2 sm:-translate-x-40 md:m-0 sm:ml-15 ${styles.cta}`}
          >
            <Title classes="sm:text-left text-center w-full">Videoserie</Title>
            <div className="pt-7 sm:pt-9 sm:ml-10">
              <h2 className="sm:text-blog text-center text-xl sm:text-left mx-auto sm:mx-0 sm:w-100 sm:pr-12 w-5/6 tracking-wider">
                Se gjerne videoserien vår der vi har dokumentert selskapet siden
                oppstarten med en ukentlig videoepisode.
              </h2>
            </div>
            <div className="flex mt-12 items-center justify-center sm:justify-start">
              {/* <span className="mr-4">
                <button className="rounded-full font-semibold tracking-wider text-base py-2 uppercase px-10 focus:outline-none border border-white bg-transparent">
                  Meld deg på
                </button>
              </span> */}

              <Link to="/videoserie#miniserier">
                <button
                  type="button"
                  aria-label="link"
                  className="font-semibold tracking-wider text-base uppercase bg-transparent focus:outline-none"
                >
                  Se miniserier
                </button>
              </Link>
            </div>
            <div className="twelve:absolute hidden twelve:block relative -mt-40 transform translate-x-28 w-7/12 right-0">
              <FeaturedVideo
                fallbackImg={fallbackImg}
                video={video}
                playlist={playlist}
              />
            </div>
          </div>
        </span>
      </div>
      <div className="sm:mx-auto hidden twelve:hidden sm:w-featured mt-8 sm:mt-10 lg:mt-15 sm:w-7/12 w-full">
        <FeaturedVideo video={video} fallbackImg={fallbackImg} />
      </div>
    </div>
  );
};
