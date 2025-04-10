import { useState } from "react";
import { Modal } from "react-awesome-modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>모달 테스트 페이지 🎉</h1>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>

      <Modal
        onEscape={() => setIsOpen(false)}
        modalPosition="bottom"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <h2>안녕 나는 모달이야 👋</h2>
        <p>이건 테스트용 모달 컴포넌트야.</p>
        <button onClick={() => setIsOpen(false)}>닫기</button>
      </Modal>
    </div>
  );
}

export default App;
