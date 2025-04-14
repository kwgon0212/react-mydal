# @kwgon0102/react-mydal

React Custom Modal Component

## Features

- 🎯 다양한 위치 설정 (center, top-center, top-left, top-right, bottom-center, bottom-left, bottom-right)
- 🎨 커스텀 스타일링 (모달, 배경, 닫기 버튼)
- ⌨️ ESC 키로 닫기
- 🖱️ 외부 클릭으로 닫기
- ❌ 커스텀 닫기 버튼 (내부/외부 위치 선택)
- 🎨 닫기 버튼 스타일 커스터마이징 (크기, 색상, 아이콘)

## Installation

```bash
npm install @kwgon0102/react-mydal
```

## Usage

```tsx
import { Modal } from "@kwgon0102/react-mydal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const options = {
    isOpen,
    onClose: setIsOpen,
    position: "center",
    onEsc: true,
    onOutsideClick: true,
    closeButton: "inside",
    closeButtonStyle: {
      width: 20,
      height: 20,
      color: "red",
      icon: <div>닫기</div>,
    },
    modalStyle: {
      backgroundColor: "yellowgreen",
    },
  };

  return (
    <Modal {...options}>
      <div>모달 내용</div>
    </Modal>
  );
}
```

## Examples

### 다양한 위치 설정

```tsx
// 상단 중앙
<Modal isOpen={isOpen} onClose={setIsOpen} position="top-center">
  상단 중앙 모달
</Modal>

// 우측 하단
<Modal isOpen={isOpen} onClose={setIsOpen} position="bottom-right">
  우측 하단 모달
</Modal>
```

### 커스텀 스타일링

```tsx
<Modal
  isOpen={isOpen}
  onClose={setIsOpen}
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
  커스텀 스타일 모달
</Modal>
```

### 커스텀 닫기 버튼

```tsx
<Modal
  isOpen={isOpen}
  onClose={setIsOpen}
  closeButton="outside"
  closeButtonStyle={{
    width: 30,
    height: 30,
    color: "#ff0000",
    icon: <span>✕</span>,
  }}
>
  커스텀 닫기 버튼 모달
</Modal>
```

### ESC 키와 외부 클릭 비활성화

```tsx
<Modal isOpen={isOpen} onClose={setIsOpen} onEsc={false} onOutsideClick={false}>
  수동으로만 닫을 수 있는 모달
</Modal>
```

## Props

| Prop             | Type                                                                                                        | Default  | Description               |
| ---------------- | ----------------------------------------------------------------------------------------------------------- | -------- | ------------------------- |
| isOpen           | boolean                                                                                                     | -        | 모달 표시 여부            |
| onClose          | (value: boolean) => void                                                                                    | -        | 모달 닫기 핸들러          |
| children         | ReactNode                                                                                                   | -        | 모달 내용                 |
| className        | string                                                                                                      | -        | 모달 컨테이너 클래스명    |
| backdropStyle    | CSSProperties                                                                                               | -        | 배경 스타일 커스터마이징  |
| modalStyle       | CSSProperties                                                                                               | -        | 모달 스타일 커스터마이징  |
| position         | "center" \| "top-center" \| "top-left" \| "top-right" \| "bottom-center" \| "bottom-left" \| "bottom-right" | "center" | 모달 위치                 |
| onEsc            | boolean                                                                                                     | false    | ESC 키로 닫기 활성화      |
| onOutsideClick   | boolean                                                                                                     | false    | 외부 클릭으로 닫기 활성화 |
| closeButton      | "inside" \| "outside"                                                                                       | -        | 닫기 버튼 위치            |
| closeButtonStyle | { width?: number; height?: number; color?: string; icon?: ReactNode }                                       | -        | 닫기 버튼 스타일          |

## License

MIT
