/**
 * Parameters for querying posts.
 */
export type TPostsParams = {
  /**
   * Cursor to fetch results after this position.
   */
  after?: string;

  /**
   * Cursor to fetch results before this position.
   */
  before?: string;

  /**
   * Whether to exclude pinned posts.
   */
  excludePins?: boolean;

  /**
   * Array of filters to apply to the query.
   */
  filterBy?: Array<any>;

  /**
   * Maximum number of posts to return.
   */
  limit: number;

  /**
   * Number of posts to skip before starting to collect the result set.
   */
  offset?: number;

  /**
   * Field by which to order the posts.
   */
  orderBy?: string;

  /**
   * Ordering as a string (e.g., "createdAt DESC").
   */
  orderByString?: string;

  /**
   * Array of post type IDs to filter by.
   */
  postTypeIds?: string[];

  /**
   * Whether to reverse the order of results.
   */
  reverse?: boolean;

  /**
   * Array of space IDs to filter by.
   */
  spaceIds?: string[];

  /**
   * Search query string to filter posts.
   */
  query?: string;
};

/**
 * Represents a field with a key and value.
 */
interface Field {
  /**
   * The key of the field.
   */
  key: string;

  /**
   * The value of the field.
   */
  value: string;
}

/**
 * Represents a post with various details.
 */
export interface Post {
  /**
   * Unique identifier for the post.
   */
  id: string;

  /**
   * URL-friendly identifier for the post.
   */
  slug: string;

  /**
   * Title of the post.
   */
  title?: string;

  /**
   * Short content snippet of the post.
   */
  shortContent?: string;

  /**
   * Date and time when the post was created.
   */
  createdAt: string;

  /**
   * ID of the user who created the post.
   */
  createdById: string;

  /**
   * Description of the post.
   */
  description?: string;

  /**
   * ID of the post owner.
   */
  ownerId: string;

  /**
   * Date and time when the post was published.
   */
  publishedAt: string;

  /**
   * Array of reactions to the post.
   */
  reactions: any[];

  /**
   * Count of reactions on the post.
   */
  reactionsCount: number;

  /**
   * Count of replies to the post.
   */
  repliesCount: number;

  /**
   * ID of the space where the post is located.
   */
  spaceId: string;

  /**
   * Status of the post (e.g., "published", "draft").
   */
  status: string;

  /**
   * Array of additional fields associated with the post.
   */
  fields: Field[];

  /**
   * Thumbnail image associated with the post.
   */
  thumbnail?: Thumbnail | null;

  /**
   * GraphQL type name for the post.
   */
  __typename: string;
}

/**
 * Represents a thumbnail image with optional dimensions.
 */
interface Thumbnail {
  /**
   * URL of the thumbnail image.
   */
  url: string;

  /**
   * Width of the thumbnail image.
   */
  width?: number;

  /**
   * Height of the thumbnail image.
   */
  height?: number;
}

/**
 * Pagination information for a list of posts.
 */
interface PageInfo {
  /**
   * Cursor to fetch results after this position.
   */
  endCursor: string;

  /**
   * Whether there are more pages of results.
   */
  hasNextPage: boolean;

  /**
   * GraphQL type name for the page info.
   */
  __typename: string;
}

/**
 * Represents a paginated list of posts.
 */
interface PaginatedPost {
  /**
   * Total count of posts available.
   */
  totalCount: number;

  /**
   * Pagination information.
   */
  pageInfo: PageInfo;

  /**
   * List of posts on the current page.
   */
  nodes: Post[];

  /**
   * GraphQL type name for the paginated posts.
   */
  __typename: string;
}

/**
 * Response object for fetching posts.
 */
export interface PostsResponse {
  /**
   * Paginated posts data.
   */
  posts: PaginatedPost;

  /**
   * Additional extensions related to the query.
   */
  extensions: {
    /**
     * Complexity of the query.
     */
    complexity: number;
  };
}
