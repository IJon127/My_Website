import "./Tags.css";
import TagBtn from "./TagBtn";
import { useEffect } from "react";

function Tags({ tags, activeTag, setActiveTag, setFilteredItems, allItems }) {
  useEffect(() => {
    if (activeTag === "Show All") {
      setFilteredItems(allItems);
      return;
    }
    const filtered = allItems.filter((item) => item.tags.includes(activeTag));
    setFilteredItems(filtered);
  }, [activeTag]);

  return (
    <div className="tags__container">
      {tags.map((tag) => (
        <TagBtn
          key={tag}
          tag={tag}
          active={activeTag === tag ? true : false}
          setActiveTag={setActiveTag}
        />
      ))}
    </div>
  );
}

export default Tags;
