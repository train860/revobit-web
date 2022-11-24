const Shoe = () => {
  return (
    <model-viewer
      id="transform"
      scale="0.8 0.8 0.8"
      //orientation="20deg 0 0"
      style={{ width: "100%", height: "100%" }}
      alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
      src="https://test-20221101.revobit.cn/static/shoe.gltf"
      ar
      shadow-intensity="1"
      camera-controls
    ></model-viewer>
  );
};
export default Shoe;
