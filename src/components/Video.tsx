type VideoProps = {
    video: {
        image: string;
        logoImg: string;
        title: string;
        channelName: string;
        views: string;
        publishTime: string;
    };
};

const Video = ({ video }: VideoProps) => {
    return (
        <div className="flex flex-col gap-2">
            <img className="rounded-lg cursor-pointer hover:scale-[1.02] hover:rounded duration-300" src={video.image} />
            <div className="flex items-start">
                <img
                    src={video.logoImg}
                    alt="channel logo"
                    className="cursor-pointer rounded-full w-10 h-10 mr-2 mt-1"
                />
                <div>
                    <p className="cursor-pointer font-semibold">
                        {video.title}
                    </p>
                    <p className="cursor-pointer text-slate-500 text-sm">
                        {video.channelName}
                    </p>
                    <p className="cursor-pointer text-xs text-slate-500">
                        {video.views} views <span>{video.publishTime}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Video;
