import PaperAirplane from '@components/icon/PaperAirplane';
import Image from '@components/image';
import { Flex } from '@components/util/layout/Flex';
import link from 'public/assets/data/link.json';
import React from 'react';
import { AccountTransferActionCTA } from '@pages/feeds/components/feed/action-cta/bottom-sheet-action-cta/account-transfer/AccountTransferActionCTA';
import { useAccountTransferBottomSheet } from '@pages/feeds/components/feed/action-cta/bottom-sheet-action-cta/account-transfer/useAccountTransferBottomSheet';

export function Header() {
  const { open } = useAccountTransferBottomSheet();

  return (
    <Flex.CenterVertical
      css={{
        zIndex: '$max',
        pt: '$20',
        pb: '$12',
        position: 'sticky',
        top: 0,
        backgroundColor: '$white',
        px: '$15',
        borderBottom: '1px solid $gray100',
      }}
    >
      <Flex
        elementType="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Image width={123} height={40}>
          <Image.Source src="/assets/icon/logo.jpg" alt="웨딩로그_로고" />
        </Image>
      </Flex>
      <Flex css={{ ml: 'auto', spaceX: '$24' }}>
        <a
          target="_blank"
          rel="noreferrer noopener"
          // href={link['선물목록 노션 링크']}
          onClick={open}
        >
          <PaperAirplane />
        </a>
      </Flex>
      {/* <AccountTransferActionCTA action={{"color": "black", "text": "dd"}} /> */}
    </Flex.CenterVertical>
  );
}
