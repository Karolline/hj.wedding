import Image from '@components/image';
import { styled } from 'stitches.config';
import { AnimatePresence, motion } from 'framer-motion';
import { useLockBodyScroll } from '@hooks/useBodyScrollLock';
import React, { useEffect } from 'react';

export function HighlightModal(props: any) {
  
  // const [isVisible, makeVisible, makeInvisible] = useBooleanState(true);
  const { 표지_이미지_소스, modalOpen, setModalOpen } = props;

  const handleModalVisible = () => {
    setModalOpen(!modalOpen)
  }

  // 스크롤 금지
  // useEffect: 리액트 컴포넌트가 랜더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
      `;

      // effect 이후에 어떻게 정리(clean-up)할 것인지 표시
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      console.log(document.body.style.cssText)
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);  // 빈 배열을 입력하는 경우 렌더링 될 때 마다 실행

  return (
          <StyledMotionDiv
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.3 }}
            onClick = {handleModalVisible}
          >
            <Image.Root>
              <Image width={520} height={780}>
                <Image.Source src={표지_이미지_소스} alt="재여비" />
              </Image>
            </Image.Root>
            </StyledMotionDiv>
  )
}

const StyledMotionDiv = styled(motion.div, {
  // marginTop: `calc(10vh)`,
  position: `absolute`,
  // display: `block`,
  zIndex: 1,
  // overflow: `hidden`
});