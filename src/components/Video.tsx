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
            <img className="rounded-lg" src={video.image} />
            <div className="flex items-center">
                <img
                    src={video.logoImg}
                    alt="channel logo"
                    className="rounded-full w-10 h-10 mr-2"
                />
                <div>
                    <p className="font-semibold">{video.title}</p>
                    <p className="text-slate-500 text-sm">
                        {video.channelName}
                    </p>
                    <p className="text-xs text-slate-500">
                        {video.views} views <span>{video.publishTime}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Video;
