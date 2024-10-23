import { AssetName, getAssets } from "@/lib/assets";
import Image from "next/image";

const Chip = ({ name }: { name: AssetName }) => {
  const logo = getAssets(name);
  return (
    <>
      <div className="flex">
        <div className="flex group relative">
          <Image
            src={require(`@/public/logos/${logo}`)}
            alt={name}
            className="h-9 w-9 border-[1px] border-tertiary p-1.5 rounded-lg hover:border-white cursor-pointer"
            width={1}
            height={1}
          />
          <span className="group-hover:opacity-100 left-4 mt-1 transition-opacity bg-gray-800 px-2 py-1 text-md text-gray-100 rounded-md absolute left-1/2-translate-x-1/2 translate-y-full opacity-0 mx-auto">
            {name}
          </span>
        </div>
      </div>
    </>
  );
};

export default Chip;
