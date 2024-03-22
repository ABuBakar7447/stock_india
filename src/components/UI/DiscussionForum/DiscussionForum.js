

import Image from "next/image";
import { FaRegHeart, FaEye, FaRegCommentAlt } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import '../Stories/stories.css'
import { discussionData } from "@/Data/Data";

const DiscussionForum = () => {
    
    return (

        <div className="lg:w-4/6 lg:max-h-screen">
            <div className=" p-2 lg:overflow-y-scroll custom-scrollbar lg:h-full">

                <div className="hidden lg:block">
                    <p className="text-red-500 uppercase font-semibold text-xl bg-slate-300 p-5 lg:w-[250px] text-center">Discussion Forum</p>
                </div>


                <div>
                    {discussionData?.map(data =>
                        <div key={data.id} >

                            <div className="flex justify-center gap-3 my-5 bg-slate-200 text-black lg:p-5">
                                <Image src={data.image} alt="avater image" width={25} height={25} className="w-10 h-10 object-cover" />

                                <div className="flex flex-col gap-3 lg:w-4/5 md:w-3/4 px-2">

                                    <div className="flex justify-start lg:gap-10">

                                        <p className="lg:w-56 w-[140px]">
                                            {data.postTitle}
                                        </p>
                                        <p className="bg-blue-600 rounded-full text-white px-2 h-7 text-center">
                                            {data.tag}
                                        </p>

                                    </div>

                                    <p className="leading-5 ">
                                        {data.details}
                                    </p>

                                    <div className="flex justify-evenly items-center">
                                        <p className="w-1/4 text-start flex items-center gap-2">
                                            <FaRegHeart />
                                            {data.likes}
                                        </p>
                                        <p className="w-1/4 text-start flex items-center gap-2">
                                            <FaEye />
                                            {data.views}
                                        </p>
                                        <p className="w-1/4 text-start flex items-center gap-2">
                                            <FaRegCommentAlt />
                                            {data.comments}
                                        </p>
                                        <p className="w-1/4 text-start flex items-center gap-2">
                                            <GoShareAndroid />
                                            share
                                        </p>
                                    </div>
                                </div>

                                <p className="text-blue-500">
                                    {data.postTime}
                                </p>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default DiscussionForum;