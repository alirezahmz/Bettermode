import { MouseEvent, useState, useRef, useEffect } from "react";
import { IExpandableContentProps } from "./types";

function ExpandableContent({ fields }: IExpandableContentProps) {
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

  return (
    <div>
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
  );
}

export default ExpandableContent;
