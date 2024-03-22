"use client"

import { useState } from "react";
import DiscussionForum from "../DiscussionForum/DiscussionForum";
import Stories from "../Stories/Stories";

const SmallDevice = () => {
    const [activeCOmponent, setActiveComponent] = useState('discussion');
    return (
        <div className="w-screen min-h-screen bg-white">
            <div className="flex p-2">
                <div onClick={() => setActiveComponent('discussion')}
                    className={`w-1/2 bg-blue-800 p-5 ${activeCOmponent === 'discussion' ? 'border-b-4 border-red-600' : ''}`}>
                    Discussion
                </div>

                <div onClick={() => setActiveComponent('stories')}
                    className={`w-1/2 bg-blue-800  p-5 ${activeCOmponent !== 'discussion' ? 'border-b-4 border-red-600' : ''}`}>
                    Stories
                </div>

            </div>

            {activeCOmponent === 'discussion'?
            <>
            <DiscussionForum></DiscussionForum>
            </>:
            <>
            <Stories></Stories>
            </>
            }
        </div>
    );
};

export default SmallDevice;