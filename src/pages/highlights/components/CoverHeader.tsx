import { NextImage } from '@models/common/NextImage';
import { motion } from 'framer-motion';
import React, { PropsWithChildren } from 'react';
import Image from '@components/image';
import CloseIcon from '@components/icon/Close';
import { Flex } from '@components/util/layout/Flex';
import { styled } from 'stitches.config';

interface Props {
  // thumbnailImage: NextImage;
  onClose?: () => void;
}

export function CoverHeader({
  // thumbnailImage,
  onClose,
  children,
}: PropsWithChildren<Props>) {
  return (
    <header>
      <Flex.CenterVertical // 화면에서 가운데로 정렬
      // css={{ py: '$12', px: '$18' }}
      css={{ py: '$12', px: '$18'}}
      >
        {/* <SImageRoot> 프로필사진
          <Image.RoundShape {...thumbnailImage} width={30} height={30}>
            <Image.Source src={thumbnailImage.src} alt="프로필_사진" />
          </Image.RoundShape>
        </SImageRoot> */}

        {/* {children} 계정이름 */}

        <div>
        전상빈 x 김혜진
        </div>

        {/* x 버튼 */}
        <SButton type="button" onClick={onClose}>
          <CloseIcon />
        </SButton>
      </Flex.CenterVertical>
    </header>
  );
}

const SImageRoot = motion(Image.Root);

const SButton = styled('button', {
  ml: 'auto',
});
