/**
 * Detailed information about a post.
 */
export interface PostDetail {
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
  title: string;

  /**
   * Description of the post.
   */
  description: string;

  /**
   * Short content snippet of the post.
   */
  shortContent: string;

  /**
   * Date and time when the post was created.
   */
  createdAt: string;

  /**
   * Date and time when the post was published.
   */
  publishedAt: string;

  /**
   * ID of the user who owns the post.
   */
  ownerId: string;

  /**
   * ID of the space where the post is located.
   */
  spaceId: string;

  /**
   * Status of the post (e.g., "published", "draft").
   */
  status: string;

  /**
   * Count of reactions on the post.
   */
  reactionsCount: number;

  /**
   * Count of replies to the post.
   */
  repliesCount: number;

  /**
   * URL to access the post.
   */
  url: string;

  /**
   * ID of the post type.
   */
  postTypeId: string;

  /**
   * Type of the primary reaction, if any.
   */
  primaryReactionType?: string;

  /**
   * Count of subscribers to the post.
   */
  subscribersCount: number;

  /**
   * Custom SEO details for the post.
   */
  customSeoDetail?: SeoDetail;

  /**
   * Whether there is more content available.
   */
  hasMoreContent: boolean;

  /**
   * Array of image IDs associated with the post.
   */
  imageIds?: string[];

  /**
   * Replies to the post with pagination information.
   */
  replies: {
    /**
     * List of reply nodes.
     */
    nodes: Reply[];

    /**
     * Pagination information for replies.
     */
    pageInfo: PageInfo;

    /**
     * Total count of replies.
     */
    totalCount: number;
  };

  /**
   * Array of tags associated with the post.
   */
  tags?: Tag[];

  /**
   * Space where the post is located.
   */
  space: Space;

  /**
   * Owner of the post.
   */
  owner: Owner;

  /**
   * Array of mapping fields associated with the post.
   */
  mappingFields: MappingField[];

  /**
   * Array of additional fields associated with the post.
   */
  fields: Field[];
}

/**
 * SEO details for the post.
 */
interface SeoDetail {
  /**
   * Description for SEO purposes.
   */
  description?: string;

  /**
   * Whether the post should be excluded from search engines.
   */
  noIndex?: boolean;

  /**
   * Thumbnail image for SEO.
   */
  thumbnail?: any;

  /**
   * Title for SEO purposes.
   */
  title?: string;

  /**
   * Canonical URL for SEO purposes.
   */
  canonicalUrl?: string;
}

/**
 * Represents a tag associated with the post.
 */
interface Tag {
  /**
   * Unique identifier for the tag.
   */
  id: string;

  /**
   * URL-friendly identifier for the tag.
   */
  slug: string;

  /**
   * Title of the tag.
   */
  title: string;

  /**
   * Description of the tag.
   */
  description?: string;
}

/**
 * Represents a space where the post is located.
 */
interface Space {
  /**
   * Unique identifier for the space.
   */
  id: string;

  /**
   * Network ID of the space.
   */
  networkId: string;

  /**
   * Name of the space.
   */
  name: string;

  /**
   * Description of the space.
   */
  description: string;

  /**
   * URL-friendly identifier for the space.
   */
  slug: string;

  /**
   * Type of the space.
   */
  type: string;
}

/**
 * Represents the owner of the post.
 */
interface Owner {
  /**
   * GraphQL type name for the owner.
   */
  __typename: string;

  /**
   * Display name of the owner.
   */
  displayName: string;

  /**
   * Unique identifier for the owner.
   */
  id: string;

  /**
   * Locale of the owner.
   */
  locale: string;

  /**
   * ID of the owner's profile picture, if any.
   */
  profilePictureId?: string;

  /**
   * ID of the owner's banner, if any.
   */
  bannerId?: string;

  /**
   * Status of the owner.
   */
  status: string;

  /**
   * Username of the owner.
   */
  username: string;

  /**
   * Email address of the owner.
   */
  email: string;
}

/**
 * Represents a reply to the post.
 */
interface Reply {
  /**
   * Unique identifier for the reply.
   */
  id: string;

  /**
   * URL-friendly identifier for the reply.
   */
  slug: string;

  /**
   * Date and time when the reply was created.
   */
  createdAt: string;

  /**
   * Date and time when the reply was published.
   */
  publishedAt: string;
}

/**
 * Represents a mapping field associated with the post.
 */
interface MappingField {
  /**
   * Key of the mapping field.
   */
  key: string;

  /**
   * Type of the mapping field.
   */
  type: string;

  /**
   * Value of the mapping field.
   */
  value: string;
}

/**
 * Represents an additional field associated with the post.
 */
interface Field {
  /**
   * Key of the field.
   */
  key: string;

  /**
   * Value of the field.
   */
  value: string;
}

/**
 * Pagination information for a list of items.
 */
interface PageInfo {
  /**
   * Cursor to fetch results after this position.
   */
  endCursor: string | null;

  /**
   * Whether there are more pages of results.
   */
  hasNextPage: boolean;
}

/**
 * Response object for fetching post details.
 */
export interface PostDetailResponse {
  /**
   * Detailed information about the post.
   */
  post: PostDetail;

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

/**
 * Parameters for querying a single post by ID.
 */
export interface TPostParams {
  /**
   * Unique identifier of the post to retrieve.
   */
  id: string;
}

/**
 * Input for adding a reaction to a post.
 */
interface AddReactionInput {
  /**
   * Type of reaction to add.
   */
  reaction: string;

  /**
   * Whether to override single-choice reactions.
   */
  overrideSingleChoiceReactions: boolean;
}

/**
 * Variables for adding a reaction to a post.
 */
export interface AddReactionVariables {
  /**
   * Input data for adding a reaction.
   */
  input: AddReactionInput;

  /**
   * ID of the post to which the reaction is added.
   */
  postId: string;
}

/**
 * Response from adding a reaction to a post.
 */
export interface AddReactionResponse {
  /**
   * Status of the reaction addition.
   */
  addReaction: {
    /**
     * Status message.
     */
    status: string;
  };

  /**
   * Additional extensions related to the query.
   */
  extensions?: {
    /**
     * Complexity of the query.
     */
    complexity: number;
  };
}
