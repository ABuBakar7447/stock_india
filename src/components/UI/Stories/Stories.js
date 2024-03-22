import Image from "next/image";
import './stories.css'
import { storiesData } from "@/Data/Data";

const Stories = () => {

    return (
        <div className=" lg:max-h-screen">
            <div className="overflow-y-scroll custom-scrollbar h-full p-2">

                <div className="hidden lg:block">
                    <p className="text-red-500 uppercase font-semibold text-xl bg-slate-300 p-5 w-3/4 text-center">
                        Stories
                    </p>
                </div>


                <div className="flex flex-col justify-center items-center">
                    {storiesData.map(data =>
                        <div key={data.id} className="w-[350px] h-[500px] bg-slate-200 text-black my-5">
                            <Image src={data.image} alt="stock image" width={350} height={250} className="w-[350px] h-[250px] object-cover" />
                            <div className="px-5">
                                <p className="text-xl font-semibold my-5">{data.stotryTitle}</p>
                                <p>{data.details}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Stories;