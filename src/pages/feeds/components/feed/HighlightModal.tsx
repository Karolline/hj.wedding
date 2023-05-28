import Image from '@components/image';
import { useLockBodyScroll } from '@hooks/useBodyScrollLock';
import React, { useEffect, useState } from 'react';
import { css, styled } from 'stitches.config';
import { getRandomNumberInRange } from '@utils/getRandomNumberInRange';
import {
  DraggableProps,
  motion,
  MotionProps,
  PanInfo,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import CloseIcon from '@components/icon/Close';
import { Flex } from '@components/util/layout/Flex';

export function HighlightModal(props: any) {
  
  // const [isVisible, makeVisible, makeInvisible] = useBooleanState(true);
  const { modalOpen, setModalOpen} = props;

  const handleModalVisible = () => {
    setModalOpen(!modalOpen)
  }

  const 표지_이미지_넘버 = getRandomNumberInRange({ min: 1, max: 6 });
  const 표지_이미지_소스 = '/assets/img/highlight_'+표지_이미지_넘버+'.png'
  const 표지_이미지_블러 = `/_next/image?url=${표지_이미지_소스}&w=16&q=1` // next image라 SSR인 듯

  // function setScreenSize() {
  //   document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
  // }

  // useEffect(() => {
  //   setScreenSize();
  // });


/* Prop `style` did not match
서버에서 내려주는 html과 클라이언트의 html이 다르다는 warning
*/
const x = useMotionValue(0);
const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const [exitX, setExitX] = useState<string | number>('100%');

  return (
    <StyledMotionWrapper
    style={{
      x,
      width: '100%',
      cursor: 'grab',
    }}
    dragConstraints={{
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }}
    // onDragEnd={handleDragEnd}
    whileTap={{ cursor: 'grabbing' }}
    exit={{
      x: exitX,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    }}
    >
      <BackgroundMotionDiv
          style={{
            scale,
            backgroundImage: `url(${표지_이미지_블러})`,
            width: '100%',
          }}
        >


          <StyledMotionDiv
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.3 }}
            onClick = {handleModalVisible}
          >

          <Flex.CenterVertical css={{ px: '$8', py: '$4'}}>
            
             <SButton type="button">
               <CloseIcon />
               </SButton> 
          </Flex.CenterVertical>
          
          <Image.Root>  
              <Image width={520} height={780}
              // placeholder="blur"
              // blurDataURL={표지_이미지_블러} // backgroundImage를 blur로 하면 얘는 안하는게 자연스러움
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
      </BackgroundMotionDiv>
    </StyledMotionWrapper>
  )
}

const StyledMotionDiv = styled(motion.div, {
  marginTop: `calc(25vh - 150px)`,
  position: `absolute`,
  zIndex: '$max1',
});

const StyledMotionWrapper = styled(motion.section, {
  backgroundColor: '$transparent',

  // height: '100vh',
  // height: 'calc(var(--vh, 1vh) * 100',

  position: 'absolute',
  top: 0,

  // framer-motion이 drag="x"때 pan-y넣는것 override
  touchAction: 'pan-x !important',
});

const BackgroundMotionDiv = styled(motion.div, {
  br: '$3',

  backgroundSize: 'cover',
  height: '100%',
});

const SButton = styled('button', {
  // ml: 'auto',
});
