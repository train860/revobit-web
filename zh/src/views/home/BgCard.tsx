interface Props {
  title: string;
  image: string;
}
export default function BgCard({ title, image }: Props) {
  return (
    <div
      className="relative rounded-5 bg-cover h-65"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-rev-bg-black-03 opacity-60 absolute top-0 left-0 w-full h-full rounded-5 flex flex-row justify-center items-center">
        <div className="text-white text-4xl">{title}</div>
      </div>
    </div>
  );
}
