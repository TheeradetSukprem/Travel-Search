import axios from "axios";
import { useEffect, useState } from "react";

export function SearchTopic() {
    const [topics, setTopics] = useState([]);
    const [searchTopic, setSearchTopic]  = useState("");

    const getTopicData = async () => {
        try {
            const topicDataFromServer = await axios.get(`http://localhost:4001/trips?keywords=${searchTopic}`);
            setTopics(topicDataFromServer.data.data);
            console.log(setTopics);
        } catch (error) {
            console.error("Error fetching topics:", error);
        }
    };

    useEffect(() => {
        if (searchTopic) {
            getTopicData();
        }
    }, [searchTopic]);

    return (
        <div className="flex justify-center items-center"> 
            <div className="Search-Topic w-3/4 flex flex-col p-5">
               
                <input 
                    type="text" 
                    className={`border-b-2 border-black focus:border-blue-400 mt-3 outline-none`} 
                    placeholder='หาที่เที่ยวแล้วไปกัน' 
                    style={{ textAlign: "center"}}
                    value={searchTopic}
                    onChange={(event)=> setSearchTopic(event.target.value)}
                />
            </div>
        </div>
    );
}
