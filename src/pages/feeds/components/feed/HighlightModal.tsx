import Image from '@components/image';
import { styled } from 'stitches.config';
import { AnimatePresence, motion } from 'framer-motion';
import { useLockBodyScroll } from '@hooks/useBodyScrollLock';
import React, { useCallback, useState } from 'react';
import { getRandomNumberInRange } from '@utils/getRandomNumberInRange';

const 표지_이미지_넘버 = getRandomNumberInRange({ min: 1, max: 6 });

export function HighlightModal({}) {

  // const [isVisible, makeVisible, makeInvisible] = useBooleanState(true);
  const [isVisible, setIsVisible] = useState(true);

  const handleModalVisible = () => {
    setIsVisible(false)
  }

  return (
          <StyledMotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick = {handleModalVisible}
          >
            {/* <img src='/assets/img/youthday_film_19.JPG' /> */}
            {isVisible && <Image.Root>
              <Image width={520} height={780}>
                <Image.Source src={'/assets/img/highlight_'+표지_이미지_넘버+'.png'} alt="재여비" />
              </Image>
            </Image.Root>
            }
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