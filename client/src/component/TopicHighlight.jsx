import React, { useEffect, useState } from "react"; 
import axios from "axios"; 
import { TopicCard } from "./TopicCard";

function TopicHighlight() {
  const [topics, setTopics] = useState([]);
  const [searchTopic, setSearchTopic] = useState("");

  const getTopicData = async () => {
    try {
      const result = await axios.get(`http://localhost:4001/trips?keywords=${searchTopic}`);
      setTopics(result.data.data); 
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
  };

  useEffect(() => {
    getTopicData();
  }, []);  

  useEffect(() => {
    if (searchTopic) {
      getTopicData();
    }
  }, [searchTopic]); 

  return (
    <div className="flex flex-col items-center">
      <label className="Search-Topic w-3/4 flex flex-col p-5">
        <p className="pt-5 font-bold">ค้นหาที่เที่ยว</p>
        <input 
          type="text" 
          className="border-b-2 border-black focus:border-blue-400 mt-3 outline-none" 
          placeholder="หาที่เที่ยวแล้วไปกัน" 
          style={{ textAlign: "center"}}
          value={searchTopic}
          onChange={(event) => setSearchTopic(event.target.value)}
        />
      </label>
      <section className="w-full mt-5">
        {topics.map((topic, index) => (
          <TopicCard
            key={index}
            photo={topic.photos[0]} 
            photos={topic.photos}
            topicName={topic.title}
            description={topic.description}
            url={topic.url}
            tags={topic.tags}
          />
        ))}
      </section>
    </div>
  );
}

export default TopicHighlight;
