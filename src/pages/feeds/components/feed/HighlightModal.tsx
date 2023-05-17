import Image from '@components/image';
import { styled } from 'stitches.config';
import { AnimatePresence, motion } from 'framer-motion';
import { useLockBodyScroll } from '@hooks/useBodyScrollLock';
import React, { useCallback, useState } from 'react';

export function HighlightModal(props) {
  
  // const [isVisible, makeVisible, makeInvisible] = useBooleanState(true);
  const [isVisible, setIsVisible] = useState(true);

  const handleModalVisible = () => {
    setIsVisible(false)
  }

  console.log(props)

  return (
          <StyledMotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick = {handleModalVisible}
          >
            {isVisible && <Image.Root>
              <Image width={520} height={780}>
                <Image.Source src={props.표지_이미지_소스} alt="재여비" />
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