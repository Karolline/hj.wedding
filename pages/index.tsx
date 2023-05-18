import { FeedEntity, RawFeedData } from '@models/Feed';
import { Highlight, RawHighlightData } from '@models/Highlight';
import { Feed } from '@pages/feeds/components/feed/Feed';
import { Footer } from '@pages/feeds/components/footer/Footer';
import { Header } from '@pages/feeds/components/header/Header';
// import { HighlightSection } from '@pages/feeds/components/highlight/HighlightSection';
import { InferGetStaticPropsType } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import { HighlightModal } from "@pages/feeds/components/feed/HighlightModal";
import React, { useState } from 'react';
import { getRandomNumberInRange } from '@utils/getRandomNumberInRange';

export async function getStaticProps() {
  const [feedJson, highlightJson] = await Promise.all([
    (await import('public/assets/data/feeds.json')).default,
    (await import('public/assets/data/highlights.json')).default,
  ]);
  const feedDataset = feedJson.data as RawFeedData[];
  const highlightDatdaset = highlightJson.data as RawHighlightData[];

  const feedsPromises = Promise.all(
    feedDataset.map(async feed => {
      const contents = await Promise.all(
        feed.contents.map(async content => {
          const { base64, img } = await getPlaiceholder(content.imageSrc);

          return { ...content, image: { ...img, blurDataURL: base64 } };
        })
      );

      return {
        ...feed,
        contents,
      } as FeedEntity;
    })
  );

  // const highlightPromises = Promise.all(
  //   highlightDatdaset.map(async highlight => {
  //     const { base64, img } = await getPlaiceholder(
  //       highlight.thumbnailImageSrc,
  //       {
  //         size: 24,
  //       }
  //     );
  //     const contents = await Promise.all(
  //       highlight.contents.map(async content => {
  //         const { base64, img } = await getPlaiceholder(content.imageSrc);

  //         return { ...content, image: { ...img, blurDataURL: base64 } };
  //       })
  //     );

  //     return {
  //       ...highlight,
  //       thumbnailImage: { ...img, blurDataURL: base64 },
  //       contents,
  //     } as Highlight;
  //   })
  // );

  const [feeds] = await Promise.all([
    feedsPromises,
    // highlightPromises,
  ]);

  const 표지_이미지_넘버 = getRandomNumberInRange({ min: 1, max: 6 });
  const 표지_이미지_소스 = '/assets/img/highlight_'+표지_이미지_넘버+'.png'
  const {base64, img} = await getPlaiceholder(표지_이미지_소스)
  const 표지_이미지_객체 = {
    'imgSrc': 표지_이미지_소스,
    'blurDataURL': base64
  }

  return { props: { feeds,  표지_이미지_소스 } };
} 

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function FeedsPage({ feeds,  표지_이미지_소스 }: Props) {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <>
      <Header />
      { modalOpen && <HighlightModal 표지_이미지_소스={표지_이미지_소스} modalOpen={modalOpen} setModalOpen={setModalOpen}/> }
      {/* <HighlightSection highlights={highlights} /> */}
      <Feed feeds={feeds} />
      <Footer />
    </>
  );
}
