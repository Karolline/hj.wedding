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
import { AnimatePresence} from 'framer-motion';
import ContentWrapper from '@pages/highlights/components/ContentWrapper';
import { CoverHeader } from '@pages/highlights/components/CoverHeader';

export function HighlightModal(props: any) {
  
  const { modalOpen, setModalOpen, modals} = props;
  const handleModalVisible = () => {
    setModalOpen(!modalOpen)
  }

  const 표지_이미지_넘버 = getRandomNumberInRange({ min: 0, max: modals.length });
  const 대표_컨텐츠_이미지 = modals[표지_이미지_넘버].image

  console.log(대표_컨텐츠_이미지)

  return (
    <AnimatePresence initial={false}>

      {대표_컨텐츠_이미지 != null ? ( // 메인이미지
        <ContentWrapper
          key={표지_이미지_넘버}
          imageContent={대표_컨텐츠_이미지}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          drag="x"
          // setPrev={setPrev}
          // setNext={setNext}
          transition={{
            opacity: { duration: 0.2 },
          }}
          // setPrevToBackgroundContent={setPrevToBackgroundContent}
          // setNextToBackgroundContent={setNextToBackgroundContent}
        >
          <CoverHeader
            // thumbnailImage={highlight.thumbnailImage}
            // onClose={router.back}
          >
            {/* {account.name} */}
          </CoverHeader>
          <StyledMotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image.Root>
              <Image {...대표_컨텐츠_이미지} width={520} height={780}>
                <Image.Source src={대표_컨텐츠_이미지.img} alt="재여비" />
              </Image>
            </Image.Root>
          </StyledMotionDiv>
        </ContentWrapper>
      ) : null}
    </AnimatePresence>
  )


}


// export function HighlightModal(props: any) {
  
  
//   // const [isVisible, makeVisible, makeInvisible] = useBooleanState(true);
//   const { modalOpen, setModalOpen} = props;

//   const handleModalVisible = () => {
//     setModalOpen(!modalOpen)
//   }

//   const 표지_이미지_넘버 = getRandomNumberInRange({ min: 1, max: 6 });
//   const 표지_이미지_소스 = '/assets/img/highlight_'+표지_이미지_넘버+'.png'
//   const 표지_이미지_블러 = `/_next/image?url=${표지_이미지_소스}&w=16&q=1` // next image라 SSR인 듯


//   // 스크롤 금지
//   // useEffect: 리액트 컴포넌트가 랜더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
//   useEffect(() => {
//     // document.body.style.cssText = `
//     //   position: fixed; 
//     //   top: -${window.scrollY}px;
//     //   overflow-y: scroll;
//     //   width: 100%;
//     //   `;

//     // window.scrollTo(0, 0);

//       // effect 이후에 어떻게 정리(clean-up)할 것인지 표시
//     return () => {
//       // const scrollY = document.body.style.top;
//       // document.body.style.cssText = "";
//       // window.scrollTo(0, 0);
//     };
//   }, []);  // 빈 배열을 입력하는 경우 렌더링 될 때 마다 실행


// /* Prop `style` did not match
// 서버에서 내려주는 html과 클라이언트의 html이 다르다는 warning
// */
// const x = useMotionValue(0);
// const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
//   const [exitX, setExitX] = useState<string | number>('100%');

//   return (
//     <StyledMotionWrapper
//     style={{
//       x,
//       width: '100%',
//       cursor: 'grab',
//     }}
//     dragConstraints={{
//       top: 0,
//       right: 0,
//       bottom: 0,
//       left: 0,
//     }}
//     // onDragEnd={handleDragEnd}
//     whileTap={{ cursor: 'grabbing' }}
//     exit={{
//       x: exitX,
//       opacity: 0,
//       scale: 0.5,
//       transition: { duration: 0.2 },
//     }}
//     >
//       <BackgroundMotionDiv
//           style={{
//             scale,
//             backgroundImage: `url(${표지_이미지_블러})`,
//             width: '100%',
//           }}
//         >


//           <StyledMotionDiv
//             // initial={{ opacity: 0 }}
//             // animate={{ opacity: 1 }}
//             // transition={{ duration: 0.3 }}
//             onClick = {handleModalVisible}
//           >

//           <Flex.CenterVertical css={{ px: '$8' }}>
            
//              <SButton type="button">
//                <CloseIcon />
//                </SButton> 
//           </Flex.CenterVertical>
          
//           <Image.Root>  
//               <Image width={520} height={780}
//               // placeholder="blur"
//               // blurDataURL={표지_이미지_블러} // backgroundImage를 blur로 하면 얘는 안하는게 자연스러움
//               >
//                 <Image.Source src={표지_이미지_소스} alt="재여비" />
//               </Image>

//               {/* <Image 
//                 {...imageProps}
//                 placeholder="blur"
//                 width={520} height={780}
//                 className={css({ transition: 'all 0.2s' })()}
//               >
//                 <Image.Source src={imageProps.src} alt="표지사진" />
//               </Image> */}

//             </Image.Root>
//             </StyledMotionDiv>
//       </BackgroundMotionDiv>
//     </StyledMotionWrapper>
//   )
// }

const StyledMotionDiv = styled(motion.div, {
  marginTop: `calc(25vh - 150px)`,
  position: `absolute`,
  zIndex: '$max1',
});

const StyledMotionWrapper = styled(motion.section, {
  backgroundColor: '$transparent',

  height: '100vh',

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
