import { Post } from "@/api/posts/types";

/**
 * Properties for a content component.
 */
export interface ICardProps {
  /**
   * Title of the content.
   */
  title?: string;

  /**
   * Date and time when the content was created.
   */
  createdAt?: string;

  /**
   * Count of reactions to the content.
   */
  reactionsCount?: number;

  /**
   * Array of fields associated with the content.
   */
  fields?: Post["fields"];

  /**
   * Callback function to add a reaction to the content.
   */
  onAddReaction: () => void;
}
