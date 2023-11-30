import ImageComp from "./ImageComp";

const B = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center gap-96">
      <ImageComp animateName="animate__bounce" image="h662.png" />
      <ImageComp animateName="animate__bounce" image="dd.png" />
    </div>
  );
};

export default B;