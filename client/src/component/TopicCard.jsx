export function TopicCard(props) {
    const { description, topicName, photo, url, tags, photos } = props;

    const DescriptionNotOverLength100 = description.length > 100 ? description.substring(0, 100) + '...' : description;

    return (
        <div className="flex justify-center items-center flex-row p-5 space-y-3">
            <div className="flex w-full justify-start mx-[24rem] gap-10">
                <div className="w-72 h-72 flex justify-center items-center">
                    <img 
                        src={photos[0]} 
                        alt="" 
                        className="w-full h-full rounded-[43px] object-cover " 
                    />
                </div>
                <ul className="h-72 w-82 pl-3 flex flex-col justify-center">
                    <li>
                        <h1 className="font-medium py-1 text-2xl">
                            <a href={url} className="underline" target="_blank">
                                {topicName}
                            </a>
                        </h1>
                    </li>
                    <li><p className="py-1 font-serif">{DescriptionNotOverLength100}</p></li>
                    <li className="py-1 text-blue-500">
                        <a href={url} className="underline" target="_blank">อ่านต่อ</a>
                    </li>
                    <li className="py-1">
                        หมวด: 
                        {tags.map((tag, eid) => (
                            <span key={eid}>
                                {tag}
                                {eid < tags.length - 1 ? (eid === tags.length - 2 ? ' และ ' : ', ') : ''}
                            </span>
                        ))}
                    </li>
                    <div className="flex flex-row gap-10">
                        {photos.slice(1).map((photo, eid) => (
                            <img key={eid} src={photo} alt="" className="pt-3 w-28 h-32 rounded-3xl" />
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    );
}
