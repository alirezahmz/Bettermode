import { MouseEvent } from "react";
import { Icon } from "@iconify/react";
import { DateRenderer } from "@/utils/DateRenderer";
import { ExpandableContent } from "@/components/containers/post/expandableContent";

import { ICardProps } from "./types";

function Card({ fields, title, reactionsCount = 0, onAddReaction, createdAt }: ICardProps) {
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
        <ExpandableContent fields={fields} />
      </div>
      <button className="flex gap-2 items-center mt-6" type="button" onClick={handleAddReaction}>
        <Icon icon="mdi:like" className="size-5" color="var(--content)" />
        <span>{reactionsCount}</span>
      </button>
    </div>
  );
}

export default Card;
