import { MouseEvent, useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import { ICardProps } from "./types";
import { DateRenderer } from "@/utils/DateRenderer";

function Card({ fields, title, reactionsCount = 0, onAddReaction, createdAt }: ICardProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  const collapsedHeight = 208;

  useEffect(() => {
    const contentEl = contentRef.current;
    if (contentEl) {
      const fullHeight = contentEl.scrollHeight;
      setContentHeight(fullHeight > collapsedHeight ? fullHeight : null);
    }
  }, [fields]);

  const handleExpand = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsExpanded(prev => !prev);
  };

  const handleAddReaction = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    onAddReaction();
  };

  return (
    <div className="bg-surface rounded-md p-6">
      {!!createdAt && (
        <span className="text-content text-sm">
          Created At: <b>{DateRenderer(createdAt)}</b>
        </span>
      )}
      <h1 className="text-content text-xl mt-6">{title}</h1>
      <div className="mt-6">
        <div
          ref={contentRef}
          style={{
            maxHeight: isExpanded ? `${contentHeight}px` : `${collapsedHeight}px`
          }}
          className="overflow-hidden transition-all duration-500 relative"
        >
          {fields?.map(item => <div key={item?.key} dangerouslySetInnerHTML={{ __html: item?.value }} />)}
          {!isExpanded && contentHeight && contentHeight > collapsedHeight && (
            <div className="absolute bottom-0 left-0 w-full px-2 py-6 bg-gradient-to-b from-transparent to-surface"></div>
          )}
        </div>
        {contentHeight && contentHeight > collapsedHeight && (
          <button className="text-blue-500 cursor-pointer relative z-10 mt-2" onClick={handleExpand}>
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
      <button className="flex gap-2 items-center mt-6" type="button" onClick={handleAddReaction}>
        <Icon icon="mdi:like" className="size-5" color="var(--content)" />
        <span>{reactionsCount}</span>
      </button>
    </div>
  );
}

export default Card;
