declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": unknown;
    }
  }
}
const Shoe = () => {
  const src=`${process.env.NEXT_PUBLIC_API_ENDPOINT}/static/shoe.gltf`
  return (
    <model-viewer
      id="transform"
      scale="0.6 0.6 0.6"
      //orientation="20deg 0 0"
      style={{ width: "100%", height: "100%" }}
      alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
      src={src}
      ar
      shadow-intensity="1"
      camera-controls
    ></model-viewer>
  );
};
export default Shoe;
