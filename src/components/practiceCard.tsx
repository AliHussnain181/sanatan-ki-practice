import { client } from "@/sanity/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";

const PracticeCard = ({ data }: any) => {

  const builder = imageUrlBuilder(client);

  function urlFor(image: string) {
    return builder.image(image);
  }

  return (
    <div className="p-3 rounded-sm shadow-md my-4 mx-auto w-[19rem] overflow-hidden  ">
      <div className=" overflow-hidden ">
      <Image
        src={urlFor(data?.image).url()}
        alt="img"
        width={700}
        height={700}
        className=" w-80 h-36 hover:scale-110 transition-all duration-300"
      />
      </div>
      <h2 className="text-[15px] leading-5 line-clamp-2 w-[90%] font-bold mb-1 font-poppins">
        {data.name}
      </h2>
      {/* <div className="flex justify-between items-center "> */}
        <Link
          href={data.link}
          className="text-blue-500 text-sm font-roboto hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Now
        </Link>
        {/* <Link
          href={`/prac/${data.name}`}
          className="text-blue-500 text-sm font-roboto hover:underline"
        >
          Read More
        </Link> */}
      {/* </div> */}
    </div>
  );
};

export default PracticeCard;
