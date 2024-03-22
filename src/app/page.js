import DiscussionForum from "@/components/UI/DiscussionForum/DiscussionForum";
import SmallDevice from "@/components/UI/SmallDevice/SmallDevice";
import Stories from "@/components/UI/Stories/Stories";
import Image from "next/image";

export default function Home() {
  return (

    <div className=" bg-white">
      <div className="lg:flex lg:space-x-16 hidden lg:visible">
        <DiscussionForum></DiscussionForum>
        <Stories></Stories>
      </div>


      <div className="visible lg:hidden w-full">
        <SmallDevice></SmallDevice>
      </div>
    </div>
  );
}
