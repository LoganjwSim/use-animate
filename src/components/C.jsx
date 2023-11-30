import { useAnimate } from "../hooks";

const C = () => {
  const { detectedRef, isObserve } = useAnimate();

  return (
    <div
      ref={detectedRef}
      className="bg-black min-h-screen flex flex-col justify-center items-center"
    >
      <img
        className={`w-96 h-96 ${
          isObserve && "animate__animated animate__rotateOut animate__infinite" //얘가 true일 때만 애니메이션 작동
        } `}
        src="./images/h662.png"
        alt="h662"
      />
    </div>
  );
};

export default C;
