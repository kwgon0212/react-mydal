# React MyDal

간단하고 커스터마이징 가능한 React Modal Component

## 설치

```bash
npm install @kwgon0102/react-mydal
# or
yarn add @kwgon0102/react-mydal
```

## 기본 사용법

```tsx
import { Modal } from "@kwgon0102/react-mydal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>모달 내용1...</p>
        <p>모달 내용2...</p>
      </Modal>
    </>
  );
}
```

## Props

| Prop          | 타입                          | 기본값   | 설명                            |
| ------------- | ----------------------------- | -------- | ------------------------------- |
| isOpen        | boolean                       | -        | 모달 표시 여부                  |
| onClose       | () => void                    | -        | 모달 닫기 핸들러                |
| children      | ReactNode                     | -        | 모달 내용                       |
| className     | string                        | -        | 모달 컨테이너에 적용할 클래스명 |
| backdropStyle | CSSProperties                 | -        | 배경 스타일 커스터마이징        |
| modalStyle    | CSSProperties                 | -        | 모달 스타일 커스터마이징        |
| modalPosition | "center" \| "top" \| "bottom" | "center" | 모달 위치                       |
| onEscape      | () => void                    | -        | ESC 키 입력 시 실행할 함수      |

## 스타일 커스터마이징 예제

```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  backdropStyle={{
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(5px)",
  }}
  modalStyle={{
    maxWidth: "800px",
    background: "#f5f5f5",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  }}
>
  <h2>커스텀 스타일 모달</h2>
  <p>스타일이 적용된 모달 내용입니다.</p>
</Modal>
```

## 위치 조정 예제

```tsx
// 상단에 표시
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  modalPosition="top"
>
  상단 모달
</Modal>

// 하단에 표시
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  modalPosition="bottom"
>
  하단 모달
</Modal>
```

## ESC 키 이벤트 처리 예제

```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onEscape={() => {
    console.log("ESC 키가 눌렸습니다");
    setIsOpen(false);
  }}
>
  ESC 키 이벤트가 처리되는 모달
</Modal>
```

## 클래스명 적용 예제

```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  className="custom-modal"
>
  <div className="modal-content">
    클래스명이 적용된 모달
  </div>
</Modal>

// CSS
.custom-modal {
  border: 2px solid #333;
}

.modal-content {
  padding: 20px;
}
```

## 라이선스

MIT
