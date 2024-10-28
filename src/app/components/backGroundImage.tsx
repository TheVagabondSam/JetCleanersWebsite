

export function BackGroundImg() {
    return (
        <div className="flex px-4 space-x-4 h-screen">
        <div className=" border-white bg-imgBackground bg-cover bg-center min-h-screen z-0 w-1/2">
        <span className="z-1 text-white flex text-8xl items-center px-8 h-[75%] w-full min-h-[45%]"> 
            Placeholder
        </span>
        <span className="h-[25%] w-full flex z-1 text-white align-items-bottom px-8 text-5xl ">
            Placeholder
        </span>
        </div>
        <div className="px-4 border-white bg-imgBackground bg-cover bg-center min-h-screen w-1/2">
        </div>
        </div>
    );
};
