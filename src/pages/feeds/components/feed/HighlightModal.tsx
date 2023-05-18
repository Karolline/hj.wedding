import Image from '@components/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useLockBodyScroll } from '@hooks/useBodyScrollLock';
import React, { useEffect } from 'react';
import { css, styled } from 'stitches.config';
import { getRandomNumberInRange } from '@utils/getRandomNumberInRange';

export function HighlightModal(props: any) {
  
  // const [isVisible, makeVisible, makeInvisible] = useBooleanState(true);
  const { modalOpen, setModalOpen} = props;

  const handleModalVisible = () => {
    setModalOpen(!modalOpen)
  }

  const 표지_이미지_넘버 = getRandomNumberInRange({ min: 1, max: 6 });
  const 표지_이미지_소스 = '/assets/img/highlight_'+표지_이미지_넘버+'.png'

  // 스크롤 금지
  // useEffect: 리액트 컴포넌트가 랜더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
  // useEffect(() => {
  //   document.body.style.cssText = `
  //     position: fixed; 
  //     top: -${window.scrollY}px;
  //     overflow-y: scroll;
  //     width: 100%;
  //     `;

  //     // effect 이후에 어떻게 정리(clean-up)할 것인지 표시
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = "";
  //     window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  //   };
  // }, []);  // 빈 배열을 입력하는 경우 렌더링 될 때 마다 실행

  return (
          <StyledMotionDiv
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.3 }}
            onClick = {handleModalVisible}
          >
            <Image.Root>

              <Image width={520} height={780}
              placeholder="blur"
              blurDataURL={`/_next/image?url=${표지_이미지_소스}&w=16&q=1`}
              >
                <Image.Source src={표지_이미지_소스} alt="재여비" />
              </Image>

              {/* <Image
                {...imageProps}
                placeholder="blur"
                width={520} height={780}
                className={css({ transition: 'all 0.2s' })()}
              >
                <Image.Source src={imageProps.src} alt="표지사진" />
              </Image> */}

            </Image.Root>
            </StyledMotionDiv>
  )
}

const StyledMotionDiv = styled(motion.div, {
  // marginTop: `calc(10vh)`,
  position: `absolute`,
  // display: `block`,
  zIndex: '$max1',
  // overflow: `hidden`
});