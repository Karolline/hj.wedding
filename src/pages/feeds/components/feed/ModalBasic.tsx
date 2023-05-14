type modalType = {
	modalOpen: boolean
  }

export function ModalBasic({ modalOpen }: modalType) {
    // 모달 끄기 
    // const closeModal = () => {
    //     setModalOpen(false);
    // };

    return (
        <div>
            <p>모달창입니다.</p>
        </div>
    );
}