import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  blockHeroCollection?: Maybe<BlockHeroCollection>;
  blockWrapperCollection?: Maybe<BlockWrapperCollection>;
  componentAuthorCollection?: Maybe<ComponentAuthorCollection>;
  componentRichImageCollection?: Maybe<ComponentRichImageCollection>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
};


export type AssetLinkingCollectionsBlockHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsBlockWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsComponentAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsComponentRichImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockFaQs) */
export type BlockFaQs = Entry & _Node & {
  __typename?: 'BlockFaQs';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  itemsCollection?: Maybe<BlockFaQsItemsCollection>;
  linkedFrom?: Maybe<BlockFaQsLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockFaQs) */
export type BlockFaQsItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlockFaQsItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BlockTextColumnItemFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockFaQs) */
export type BlockFaQsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockFaQs) */
export type BlockFaQsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlockFaQsCollection = {
  __typename?: 'BlockFaQsCollection';
  items: Array<Maybe<BlockFaQs>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlockFaQsFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlockFaQsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlockFaQsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  items?: InputMaybe<CfBlockTextColumnItemNestedFilter>;
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlockFaQsItemsCollection = {
  __typename?: 'BlockFaQsItemsCollection';
  items: Array<Maybe<BlockTextColumnItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum BlockFaQsItemsCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type BlockFaQsLinkingCollections = {
  __typename?: 'BlockFaQsLinkingCollections';
  blockWrapperCollection?: Maybe<BlockWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type BlockFaQsLinkingCollectionsBlockWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlockFaQsLinkingCollectionsBlockWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlockFaQsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum BlockFaQsLinkingCollectionsBlockWrapperCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PaddingBottomAsc = 'paddingBottom_ASC',
  PaddingBottomDesc = 'paddingBottom_DESC',
  PaddingTopAsc = 'paddingTop_ASC',
  PaddingTopDesc = 'paddingTop_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export enum BlockFaQsOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockHero) */
export type BlockHero = Entry & _Node & {
  __typename?: 'BlockHero';
  _id: Scalars['ID']['output'];
  backgroundImage?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars['String']['output']>;
  ctaUrl?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<BlockHeroLinkingCollections>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockHero) */
export type BlockHeroBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockHero) */
export type BlockHeroCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockHero) */
export type BlockHeroCtaUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockHero) */
export type BlockHeroInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockHero) */
export type BlockHeroLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockHero) */
export type BlockHeroSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockHero) */
export type BlockHeroTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlockHeroCollection = {
  __typename?: 'BlockHeroCollection';
  items: Array<Maybe<BlockHero>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlockHeroFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlockHeroFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlockHeroFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']['input']>;
  ctaText_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText_not?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaUrl?: InputMaybe<Scalars['String']['input']>;
  ctaUrl_contains?: InputMaybe<Scalars['String']['input']>;
  ctaUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaUrl_not?: InputMaybe<Scalars['String']['input']>;
  ctaUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlockHeroLinkingCollections = {
  __typename?: 'BlockHeroLinkingCollections';
  blockWrapperCollection?: Maybe<BlockWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type BlockHeroLinkingCollectionsBlockWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlockHeroLinkingCollectionsBlockWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlockHeroLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum BlockHeroLinkingCollectionsBlockWrapperCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PaddingBottomAsc = 'paddingBottom_ASC',
  PaddingBottomDesc = 'paddingBottom_DESC',
  PaddingTopAsc = 'paddingTop_ASC',
  PaddingTopDesc = 'paddingTop_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export enum BlockHeroOrder {
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  CtaUrlAsc = 'ctaUrl_ASC',
  CtaUrlDesc = 'ctaUrl_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockTextColumnItem) */
export type BlockTextColumnItem = Entry & _Node & {
  __typename?: 'BlockTextColumnItem';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BlockTextColumnItemLinkingCollections>;
  sys: Sys;
  text?: Maybe<BlockTextColumnItemText>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockTextColumnItem) */
export type BlockTextColumnItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockTextColumnItem) */
export type BlockTextColumnItemTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockTextColumnItem) */
export type BlockTextColumnItemTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlockTextColumnItemCollection = {
  __typename?: 'BlockTextColumnItemCollection';
  items: Array<Maybe<BlockTextColumnItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlockTextColumnItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlockTextColumnItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlockTextColumnItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlockTextColumnItemLinkingCollections = {
  __typename?: 'BlockTextColumnItemLinkingCollections';
  blockFaQsCollection?: Maybe<BlockFaQsCollection>;
  blockTextColumnsCollection?: Maybe<BlockTextColumnsCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type BlockTextColumnItemLinkingCollectionsBlockFaQsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlockTextColumnItemLinkingCollectionsBlockFaQsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlockTextColumnItemLinkingCollectionsBlockTextColumnsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlockTextColumnItemLinkingCollectionsBlockTextColumnsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlockTextColumnItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum BlockTextColumnItemLinkingCollectionsBlockFaQsCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum BlockTextColumnItemLinkingCollectionsBlockTextColumnsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum BlockTextColumnItemOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type BlockTextColumnItemText = {
  __typename?: 'BlockTextColumnItemText';
  json: Scalars['JSON']['output'];
  links: BlockTextColumnItemTextLinks;
};

export type BlockTextColumnItemTextAssets = {
  __typename?: 'BlockTextColumnItemTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BlockTextColumnItemTextEntries = {
  __typename?: 'BlockTextColumnItemTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BlockTextColumnItemTextLinks = {
  __typename?: 'BlockTextColumnItemTextLinks';
  assets: BlockTextColumnItemTextAssets;
  entries: BlockTextColumnItemTextEntries;
  resources: BlockTextColumnItemTextResources;
};

export type BlockTextColumnItemTextResources = {
  __typename?: 'BlockTextColumnItemTextResources';
  block: Array<BlockTextColumnItemTextResourcesBlock>;
  hyperlink: Array<BlockTextColumnItemTextResourcesHyperlink>;
  inline: Array<BlockTextColumnItemTextResourcesInline>;
};

export type BlockTextColumnItemTextResourcesBlock = ResourceLink & {
  __typename?: 'BlockTextColumnItemTextResourcesBlock';
  sys: ResourceSys;
};

export type BlockTextColumnItemTextResourcesHyperlink = ResourceLink & {
  __typename?: 'BlockTextColumnItemTextResourcesHyperlink';
  sys: ResourceSys;
};

export type BlockTextColumnItemTextResourcesInline = ResourceLink & {
  __typename?: 'BlockTextColumnItemTextResourcesInline';
  sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockTextColumns) */
export type BlockTextColumns = Entry & _Node & {
  __typename?: 'BlockTextColumns';
  _id: Scalars['ID']['output'];
  columns?: Maybe<BlockTextColumnItem>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<BlockTextColumnsLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockTextColumns) */
export type BlockTextColumnsColumnsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BlockTextColumnItemFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockTextColumns) */
export type BlockTextColumnsInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockTextColumns) */
export type BlockTextColumnsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockTextColumns) */
export type BlockTextColumnsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlockTextColumnsCollection = {
  __typename?: 'BlockTextColumnsCollection';
  items: Array<Maybe<BlockTextColumns>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlockTextColumnsFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlockTextColumnsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlockTextColumnsFilter>>>;
  columns?: InputMaybe<CfBlockTextColumnItemNestedFilter>;
  columns_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlockTextColumnsLinkingCollections = {
  __typename?: 'BlockTextColumnsLinkingCollections';
  blockWrapperCollection?: Maybe<BlockWrapperCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type BlockTextColumnsLinkingCollectionsBlockWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlockTextColumnsLinkingCollectionsBlockWrapperCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlockTextColumnsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum BlockTextColumnsLinkingCollectionsBlockWrapperCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PaddingBottomAsc = 'paddingBottom_ASC',
  PaddingBottomDesc = 'paddingBottom_DESC',
  PaddingTopAsc = 'paddingTop_ASC',
  PaddingTopDesc = 'paddingTop_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export enum BlockTextColumnsOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockWrapper) */
export type BlockWrapper = Entry & _Node & {
  __typename?: 'BlockWrapper';
  _id: Scalars['ID']['output'];
  backgroundColor?: Maybe<Scalars['String']['output']>;
  backgroundImage?: Maybe<Asset>;
  content?: Maybe<BlockWrapperContent>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BlockWrapperLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  paddingBottom?: Maybe<Scalars['String']['output']>;
  paddingTop?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  width?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockWrapper) */
export type BlockWrapperBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockWrapper) */
export type BlockWrapperBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockWrapper) */
export type BlockWrapperContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockWrapper) */
export type BlockWrapperLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockWrapper) */
export type BlockWrapperNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockWrapper) */
export type BlockWrapperPaddingBottomArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockWrapper) */
export type BlockWrapperPaddingTopArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/blockWrapper) */
export type BlockWrapperWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlockWrapperCollection = {
  __typename?: 'BlockWrapperCollection';
  items: Array<Maybe<BlockWrapper>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlockWrapperContent = BlockFaQs | BlockHero | BlockTextColumns;

export type BlockWrapperFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlockWrapperFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlockWrapperFilter>>>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paddingBottom?: InputMaybe<Scalars['String']['input']>;
  paddingBottom_contains?: InputMaybe<Scalars['String']['input']>;
  paddingBottom_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paddingBottom_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paddingBottom_not?: InputMaybe<Scalars['String']['input']>;
  paddingBottom_not_contains?: InputMaybe<Scalars['String']['input']>;
  paddingBottom_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paddingTop?: InputMaybe<Scalars['String']['input']>;
  paddingTop_contains?: InputMaybe<Scalars['String']['input']>;
  paddingTop_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paddingTop_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paddingTop_not?: InputMaybe<Scalars['String']['input']>;
  paddingTop_not_contains?: InputMaybe<Scalars['String']['input']>;
  paddingTop_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  width?: InputMaybe<Scalars['String']['input']>;
  width_contains?: InputMaybe<Scalars['String']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width_not?: InputMaybe<Scalars['String']['input']>;
  width_not_contains?: InputMaybe<Scalars['String']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlockWrapperLinkingCollections = {
  __typename?: 'BlockWrapperLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageBuilderCollection?: Maybe<PageBuilderCollection>;
};


export type BlockWrapperLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type BlockWrapperLinkingCollectionsPageBuilderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlockWrapperLinkingCollectionsPageBuilderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum BlockWrapperLinkingCollectionsPageBuilderCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum BlockWrapperOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PaddingBottomAsc = 'paddingBottom_ASC',
  PaddingBottomDesc = 'paddingBottom_DESC',
  PaddingTopAsc = 'paddingTop_ASC',
  PaddingTopDesc = 'paddingTop_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/category) */
export type Category = Entry & _Node & {
  __typename?: 'Category';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CategoryLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/category) */
export type CategoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/category) */
export type CategoryNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/category) */
export type CategorySlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CategoryCollection = {
  __typename?: 'CategoryCollection';
  items: Array<Maybe<Category>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CategoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CategoryLinkingCollections = {
  __typename?: 'CategoryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
};


export type CategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CategoryLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryLinkingCollectionsPageBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum CategoryLinkingCollectionsPageBlogPostCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CategoryOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentAuthor) */
export type ComponentAuthor = Entry & _Node & {
  __typename?: 'ComponentAuthor';
  _id: Scalars['ID']['output'];
  avatar?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentAuthorLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentAuthor) */
export type ComponentAuthorAvatarArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentAuthor) */
export type ComponentAuthorInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentAuthor) */
export type ComponentAuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentAuthor) */
export type ComponentAuthorNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentAuthorCollection = {
  __typename?: 'ComponentAuthorCollection';
  items: Array<Maybe<ComponentAuthor>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentAuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentAuthorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentAuthorFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentAuthorLinkingCollections = {
  __typename?: 'ComponentAuthorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
};


export type ComponentAuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentAuthorLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAuthorLinkingCollectionsPageBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ComponentAuthorLinkingCollectionsPageBlogPostCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentAuthorOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentRichImage) */
export type ComponentRichImage = Entry & _Node & {
  __typename?: 'ComponentRichImage';
  _id: Scalars['ID']['output'];
  caption?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  fullWidth?: Maybe<Scalars['Boolean']['output']>;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentRichImageLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentRichImage) */
export type ComponentRichImageCaptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentRichImage) */
export type ComponentRichImageFullWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentRichImage) */
export type ComponentRichImageImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentRichImage) */
export type ComponentRichImageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentRichImage) */
export type ComponentRichImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentRichImageCollection = {
  __typename?: 'ComponentRichImageCollection';
  items: Array<Maybe<ComponentRichImage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentRichImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentRichImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentRichImageFilter>>>;
  caption?: InputMaybe<Scalars['String']['input']>;
  caption_contains?: InputMaybe<Scalars['String']['input']>;
  caption_exists?: InputMaybe<Scalars['Boolean']['input']>;
  caption_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caption_not?: InputMaybe<Scalars['String']['input']>;
  caption_not_contains?: InputMaybe<Scalars['String']['input']>;
  caption_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fullWidth?: InputMaybe<Scalars['Boolean']['input']>;
  fullWidth_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fullWidth_not?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentRichImageLinkingCollections = {
  __typename?: 'ComponentRichImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentRichImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ComponentRichImageOrder {
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  FullWidthAsc = 'fullWidth_ASC',
  FullWidthDesc = 'fullWidth_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentSeo) */
export type ComponentSeo = Entry & _Node & {
  __typename?: 'ComponentSeo';
  _id: Scalars['ID']['output'];
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentSeoLinkingCollections>;
  nofollow?: Maybe<Scalars['Boolean']['output']>;
  noindex?: Maybe<Scalars['Boolean']['output']>;
  pageDescription?: Maybe<Scalars['String']['output']>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  shareImagesCollection?: Maybe<AssetCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentSeo) */
export type ComponentSeoCanonicalUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentSeo) */
export type ComponentSeoInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentSeo) */
export type ComponentSeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentSeo) */
export type ComponentSeoNofollowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentSeo) */
export type ComponentSeoNoindexArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentSeo) */
export type ComponentSeoPageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentSeo) */
export type ComponentSeoPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/componentSeo) */
export type ComponentSeoShareImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentSeoCollection = {
  __typename?: 'ComponentSeoCollection';
  items: Array<Maybe<ComponentSeo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentSeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']['input']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noindex?: InputMaybe<Scalars['Boolean']['input']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noindex_not?: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentSeoLinkingCollections = {
  __typename?: 'ComponentSeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
};


export type ComponentSeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentSeoLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentSeoLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ComponentSeoLinkingCollectionsPageBlogPostCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ComponentSeoLinkingCollectionsPageLandingCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoOrder {
  CanonicalUrlAsc = 'canonicalUrl_ASC',
  CanonicalUrlDesc = 'canonicalUrl_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NofollowAsc = 'nofollow_ASC',
  NofollowDesc = 'nofollow_DESC',
  NoindexAsc = 'noindex_ASC',
  NoindexDesc = 'noindex_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/countries) */
export type Countries = Entry & _Node & {
  __typename?: 'Countries';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  countries?: Maybe<Scalars['String']['output']>;
  countryList?: Maybe<Scalars['JSON']['output']>;
  linkedFrom?: Maybe<CountriesLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/countries) */
export type CountriesCountriesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/countries) */
export type CountriesCountryListArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/countries) */
export type CountriesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CountriesCollection = {
  __typename?: 'CountriesCollection';
  items: Array<Maybe<Countries>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CountriesFilter = {
  AND?: InputMaybe<Array<InputMaybe<CountriesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CountriesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  countries?: InputMaybe<Scalars['String']['input']>;
  countries_contains?: InputMaybe<Scalars['String']['input']>;
  countries_exists?: InputMaybe<Scalars['Boolean']['input']>;
  countries_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  countries_not?: InputMaybe<Scalars['String']['input']>;
  countries_not_contains?: InputMaybe<Scalars['String']['input']>;
  countries_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  countryList_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CountriesLinkingCollections = {
  __typename?: 'CountriesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CountriesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum CountriesOrder {
  CountriesAsc = 'countries_ASC',
  CountriesDesc = 'countries_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  /** AVIF image format. */
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/notaDeImprensa) */
export type NotaDeImprensa = Entry & _Node & {
  __typename?: 'NotaDeImprensa';
  _id: Scalars['ID']['output'];
  body?: Maybe<NotaDeImprensaBody>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NotaDeImprensaLinkingCollections>;
  publishDate?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/notaDeImprensa) */
export type NotaDeImprensaBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/notaDeImprensa) */
export type NotaDeImprensaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/notaDeImprensa) */
export type NotaDeImprensaPublishDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/notaDeImprensa) */
export type NotaDeImprensaSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/notaDeImprensa) */
export type NotaDeImprensaTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NotaDeImprensaBody = {
  __typename?: 'NotaDeImprensaBody';
  json: Scalars['JSON']['output'];
  links: NotaDeImprensaBodyLinks;
};

export type NotaDeImprensaBodyAssets = {
  __typename?: 'NotaDeImprensaBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type NotaDeImprensaBodyEntries = {
  __typename?: 'NotaDeImprensaBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type NotaDeImprensaBodyLinks = {
  __typename?: 'NotaDeImprensaBodyLinks';
  assets: NotaDeImprensaBodyAssets;
  entries: NotaDeImprensaBodyEntries;
  resources: NotaDeImprensaBodyResources;
};

export type NotaDeImprensaBodyResources = {
  __typename?: 'NotaDeImprensaBodyResources';
  block: Array<NotaDeImprensaBodyResourcesBlock>;
  hyperlink: Array<NotaDeImprensaBodyResourcesHyperlink>;
  inline: Array<NotaDeImprensaBodyResourcesInline>;
};

export type NotaDeImprensaBodyResourcesBlock = ResourceLink & {
  __typename?: 'NotaDeImprensaBodyResourcesBlock';
  sys: ResourceSys;
};

export type NotaDeImprensaBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'NotaDeImprensaBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type NotaDeImprensaBodyResourcesInline = ResourceLink & {
  __typename?: 'NotaDeImprensaBodyResourcesInline';
  sys: ResourceSys;
};

export type NotaDeImprensaCollection = {
  __typename?: 'NotaDeImprensaCollection';
  items: Array<Maybe<NotaDeImprensa>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NotaDeImprensaFilter = {
  AND?: InputMaybe<Array<InputMaybe<NotaDeImprensaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NotaDeImprensaFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  publishDate?: InputMaybe<Scalars['DateTime']['input']>;
  publishDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NotaDeImprensaLinkingCollections = {
  __typename?: 'NotaDeImprensaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NotaDeImprensaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum NotaDeImprensaOrder {
  PublishDateAsc = 'publishDate_ASC',
  PublishDateDesc = 'publishDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBlogPost) */
export type PageBlogPost = Entry & _Node & {
  __typename?: 'PageBlogPost';
  _id: Scalars['ID']['output'];
  author?: Maybe<ComponentAuthor>;
  category?: Maybe<Category>;
  content?: Maybe<PageBlogPostContent>;
  contentfulMetadata: ContentfulMetadata;
  featuredImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageBlogPostLinkingCollections>;
  publishedDate?: Maybe<Scalars['DateTime']['output']>;
  relatedBlogPostsCollection?: Maybe<PageBlogPostRelatedBlogPostsCollection>;
  seoFields?: Maybe<ComponentSeo>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBlogPost) */
export type PageBlogPostAuthorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentAuthorFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBlogPost) */
export type PageBlogPostCategoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CategoryFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBlogPost) */
export type PageBlogPostContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBlogPost) */
export type PageBlogPostFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBlogPost) */
export type PageBlogPostInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBlogPost) */
export type PageBlogPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBlogPost) */
export type PageBlogPostPublishedDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBlogPost) */
export type PageBlogPostRelatedBlogPostsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostRelatedBlogPostsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageBlogPostFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBlogPost) */
export type PageBlogPostSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBlogPost) */
export type PageBlogPostShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBlogPost) */
export type PageBlogPostSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBlogPost) */
export type PageBlogPostTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageBlogPostCollection = {
  __typename?: 'PageBlogPostCollection';
  items: Array<Maybe<PageBlogPost>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageBlogPostContent = {
  __typename?: 'PageBlogPostContent';
  json: Scalars['JSON']['output'];
  links: PageBlogPostContentLinks;
};

export type PageBlogPostContentAssets = {
  __typename?: 'PageBlogPostContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageBlogPostContentEntries = {
  __typename?: 'PageBlogPostContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageBlogPostContentLinks = {
  __typename?: 'PageBlogPostContentLinks';
  assets: PageBlogPostContentAssets;
  entries: PageBlogPostContentEntries;
  resources: PageBlogPostContentResources;
};

export type PageBlogPostContentResources = {
  __typename?: 'PageBlogPostContentResources';
  block: Array<PageBlogPostContentResourcesBlock>;
  hyperlink: Array<PageBlogPostContentResourcesHyperlink>;
  inline: Array<PageBlogPostContentResourcesInline>;
};

export type PageBlogPostContentResourcesBlock = ResourceLink & {
  __typename?: 'PageBlogPostContentResourcesBlock';
  sys: ResourceSys;
};

export type PageBlogPostContentResourcesHyperlink = ResourceLink & {
  __typename?: 'PageBlogPostContentResourcesHyperlink';
  sys: ResourceSys;
};

export type PageBlogPostContentResourcesInline = ResourceLink & {
  __typename?: 'PageBlogPostContentResourcesInline';
  sys: ResourceSys;
};

export type PageBlogPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageBlogPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageBlogPostFilter>>>;
  author?: InputMaybe<CfComponentAuthorNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  category?: InputMaybe<CfCategoryNestedFilter>;
  category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  relatedBlogPosts?: InputMaybe<CfPageBlogPostNestedFilter>;
  relatedBlogPostsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageBlogPostLinkingCollections = {
  __typename?: 'PageBlogPostLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
};


export type PageBlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageBlogPostLinkingCollectionsPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostLinkingCollectionsPageBlogPostCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageBlogPostLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PageBlogPostLinkingCollectionsPageBlogPostCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageBlogPostLinkingCollectionsPageLandingCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageBlogPostOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageBlogPostRelatedBlogPostsCollection = {
  __typename?: 'PageBlogPostRelatedBlogPostsCollection';
  items: Array<Maybe<PageBlogPost>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageBlogPostRelatedBlogPostsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBuilder) */
export type PageBuilder = Entry & _Node & {
  __typename?: 'PageBuilder';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageBuilderLinkingCollections>;
  sectionsCollection?: Maybe<PageBuilderSectionsCollection>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBuilder) */
export type PageBuilderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBuilder) */
export type PageBuilderSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBuilderSectionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BlockWrapperFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBuilder) */
export type PageBuilderSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageBuilder) */
export type PageBuilderTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageBuilderCollection = {
  __typename?: 'PageBuilderCollection';
  items: Array<Maybe<PageBuilder>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageBuilderFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageBuilderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageBuilderFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sections?: InputMaybe<CfBlockWrapperNestedFilter>;
  sectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageBuilderLinkingCollections = {
  __typename?: 'PageBuilderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageBuilderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PageBuilderOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageBuilderSectionsCollection = {
  __typename?: 'PageBuilderSectionsCollection';
  items: Array<Maybe<BlockWrapper>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageBuilderSectionsCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PaddingBottomAsc = 'paddingBottom_ASC',
  PaddingBottomDesc = 'paddingBottom_DESC',
  PaddingTopAsc = 'paddingTop_ASC',
  PaddingTopDesc = 'paddingTop_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageLanding) */
export type PageLanding = Entry & _Node & {
  __typename?: 'PageLanding';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  featuredBlogPost?: Maybe<PageBlogPost>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageLandingLinkingCollections>;
  seoFields?: Maybe<ComponentSeo>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageLanding) */
export type PageLandingFeaturedBlogPostArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageBlogPostFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageLanding) */
export type PageLandingInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageLanding) */
export type PageLandingLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/pageLanding) */
export type PageLandingSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};

export type PageLandingCollection = {
  __typename?: 'PageLandingCollection';
  items: Array<Maybe<PageLanding>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageLandingFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredBlogPost?: InputMaybe<CfPageBlogPostNestedFilter>;
  featuredBlogPost_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageLandingLinkingCollections = {
  __typename?: 'PageLandingLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLandingLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PageLandingOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  blockFaQs?: Maybe<BlockFaQs>;
  blockFaQsCollection?: Maybe<BlockFaQsCollection>;
  blockHero?: Maybe<BlockHero>;
  blockHeroCollection?: Maybe<BlockHeroCollection>;
  blockTextColumnItem?: Maybe<BlockTextColumnItem>;
  blockTextColumnItemCollection?: Maybe<BlockTextColumnItemCollection>;
  blockTextColumns?: Maybe<BlockTextColumns>;
  blockTextColumnsCollection?: Maybe<BlockTextColumnsCollection>;
  blockWrapper?: Maybe<BlockWrapper>;
  blockWrapperCollection?: Maybe<BlockWrapperCollection>;
  category?: Maybe<Category>;
  categoryCollection?: Maybe<CategoryCollection>;
  componentAuthor?: Maybe<ComponentAuthor>;
  componentAuthorCollection?: Maybe<ComponentAuthorCollection>;
  componentRichImage?: Maybe<ComponentRichImage>;
  componentRichImageCollection?: Maybe<ComponentRichImageCollection>;
  componentSeo?: Maybe<ComponentSeo>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  countries?: Maybe<Countries>;
  countriesCollection?: Maybe<CountriesCollection>;
  entryCollection?: Maybe<EntryCollection>;
  notaDeImprensa?: Maybe<NotaDeImprensa>;
  notaDeImprensaCollection?: Maybe<NotaDeImprensaCollection>;
  pageBlogPost?: Maybe<PageBlogPost>;
  pageBlogPostCollection?: Maybe<PageBlogPostCollection>;
  pageBuilder?: Maybe<PageBuilder>;
  pageBuilderCollection?: Maybe<PageBuilderCollection>;
  pageLanding?: Maybe<PageLanding>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
  staticPage?: Maybe<StaticPage>;
  staticPageCollection?: Maybe<StaticPageCollection>;
  vehicle?: Maybe<Vehicle>;
  vehicleCollection?: Maybe<VehicleCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBlockFaQsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBlockFaQsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlockFaQsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BlockFaQsFilter>;
};


export type QueryBlockHeroArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBlockHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlockHeroOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BlockHeroFilter>;
};


export type QueryBlockTextColumnItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBlockTextColumnItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlockTextColumnItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BlockTextColumnItemFilter>;
};


export type QueryBlockTextColumnsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBlockTextColumnsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlockTextColumnsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BlockTextColumnsFilter>;
};


export type QueryBlockWrapperArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBlockWrapperCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlockWrapperOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BlockWrapperFilter>;
};


export type QueryCategoryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CategoryFilter>;
};


export type QueryComponentAuthorArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAuthorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentAuthorFilter>;
};


export type QueryComponentRichImageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentRichImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentRichImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentRichImageFilter>;
};


export type QueryComponentSeoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


export type QueryCountriesArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountriesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CountriesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CountriesFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryNotaDeImprensaArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNotaDeImprensaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NotaDeImprensaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NotaDeImprensaFilter>;
};


export type QueryPageBlogPostArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageBlogPostFilter>;
};


export type QueryPageBuilderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageBuilderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBuilderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageBuilderFilter>;
};


export type QueryPageLandingArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageLandingFilter>;
};


export type QueryStaticPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryStaticPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<StaticPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<StaticPageFilter>;
};


export type QueryVehicleArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVehicleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VehicleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VehicleFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/staticPage) */
export type StaticPage = Entry & _Node & {
  __typename?: 'StaticPage';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<StaticPageLinkingCollections>;
  richText?: Maybe<StaticPageRichText>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  tituloExterno?: Maybe<Scalars['String']['output']>;
  tituloInterno?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/staticPage) */
export type StaticPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/staticPage) */
export type StaticPageRichTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/staticPage) */
export type StaticPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/staticPage) */
export type StaticPageTituloExternoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/staticPage) */
export type StaticPageTituloInternoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StaticPageCollection = {
  __typename?: 'StaticPageCollection';
  items: Array<Maybe<StaticPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type StaticPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<StaticPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StaticPageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  richText_contains?: InputMaybe<Scalars['String']['input']>;
  richText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  richText_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tituloExterno?: InputMaybe<Scalars['String']['input']>;
  tituloExterno_contains?: InputMaybe<Scalars['String']['input']>;
  tituloExterno_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tituloExterno_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tituloExterno_not?: InputMaybe<Scalars['String']['input']>;
  tituloExterno_not_contains?: InputMaybe<Scalars['String']['input']>;
  tituloExterno_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tituloInterno?: InputMaybe<Scalars['String']['input']>;
  tituloInterno_contains?: InputMaybe<Scalars['String']['input']>;
  tituloInterno_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tituloInterno_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tituloInterno_not?: InputMaybe<Scalars['String']['input']>;
  tituloInterno_not_contains?: InputMaybe<Scalars['String']['input']>;
  tituloInterno_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StaticPageLinkingCollections = {
  __typename?: 'StaticPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type StaticPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum StaticPageOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TituloExternoAsc = 'tituloExterno_ASC',
  TituloExternoDesc = 'tituloExterno_DESC',
  TituloInternoAsc = 'tituloInterno_ASC',
  TituloInternoDesc = 'tituloInterno_DESC'
}

export type StaticPageRichText = {
  __typename?: 'StaticPageRichText';
  json: Scalars['JSON']['output'];
  links: StaticPageRichTextLinks;
};

export type StaticPageRichTextAssets = {
  __typename?: 'StaticPageRichTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type StaticPageRichTextEntries = {
  __typename?: 'StaticPageRichTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type StaticPageRichTextLinks = {
  __typename?: 'StaticPageRichTextLinks';
  assets: StaticPageRichTextAssets;
  entries: StaticPageRichTextEntries;
  resources: StaticPageRichTextResources;
};

export type StaticPageRichTextResources = {
  __typename?: 'StaticPageRichTextResources';
  block: Array<StaticPageRichTextResourcesBlock>;
  hyperlink: Array<StaticPageRichTextResourcesHyperlink>;
  inline: Array<StaticPageRichTextResourcesInline>;
};

export type StaticPageRichTextResourcesBlock = ResourceLink & {
  __typename?: 'StaticPageRichTextResourcesBlock';
  sys: ResourceSys;
};

export type StaticPageRichTextResourcesHyperlink = ResourceLink & {
  __typename?: 'StaticPageRichTextResourcesHyperlink';
  sys: ResourceSys;
};

export type StaticPageRichTextResourcesInline = ResourceLink & {
  __typename?: 'StaticPageRichTextResourcesInline';
  sys: ResourceSys;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

export type TimelineFilterInput = {
  /** Preview content starting from a given release date */
  release_lte?: InputMaybe<Scalars['String']['input']>;
  /** Preview content starting from a given timestamp */
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/vehicle) */
export type Vehicle = Entry & _Node & {
  __typename?: 'Vehicle';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  details?: Maybe<Scalars['JSON']['output']>;
  linkedFrom?: Maybe<VehicleLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/vehicle) */
export type VehicleDetailsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/vehicle) */
export type VehicleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/g4fee19rgtk9/content_types/vehicle) */
export type VehicleNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VehicleCollection = {
  __typename?: 'VehicleCollection';
  items: Array<Maybe<Vehicle>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type VehicleFilter = {
  AND?: InputMaybe<Array<InputMaybe<VehicleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VehicleFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  details_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type VehicleLinkingCollections = {
  __typename?: 'VehicleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type VehicleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum VehicleOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfBlockTextColumnItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfBlockTextColumnItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfBlockTextColumnItemNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfBlockWrapperNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfBlockWrapperNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfBlockWrapperNestedFilter>>>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paddingBottom?: InputMaybe<Scalars['String']['input']>;
  paddingBottom_contains?: InputMaybe<Scalars['String']['input']>;
  paddingBottom_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paddingBottom_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paddingBottom_not?: InputMaybe<Scalars['String']['input']>;
  paddingBottom_not_contains?: InputMaybe<Scalars['String']['input']>;
  paddingBottom_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paddingTop?: InputMaybe<Scalars['String']['input']>;
  paddingTop_contains?: InputMaybe<Scalars['String']['input']>;
  paddingTop_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paddingTop_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paddingTop_not?: InputMaybe<Scalars['String']['input']>;
  paddingTop_not_contains?: InputMaybe<Scalars['String']['input']>;
  paddingTop_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  width?: InputMaybe<Scalars['String']['input']>;
  width_contains?: InputMaybe<Scalars['String']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width_not?: InputMaybe<Scalars['String']['input']>;
  width_not_contains?: InputMaybe<Scalars['String']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfCategoryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCategoryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCategoryNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentAuthorNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentAuthorNestedFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']['input']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noindex?: InputMaybe<Scalars['Boolean']['input']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noindex_not?: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription?: InputMaybe<Scalars['String']['input']>;
  pageDescription_contains?: InputMaybe<Scalars['String']['input']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageBlogPostNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageBlogPostNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageBlogPostNestedFilter>>>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedDate?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  relatedBlogPostsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AuthorFieldsFragment = { __typename: 'ComponentAuthor', name?: string | null, sys: { __typename?: 'Sys', id: string }, avatar?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null };

export type CategoryPageQueryVariables = Exact<{
  categorySlug: Scalars['String']['input'];
  locale: Scalars['String']['input'];
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CategoryPageQuery = { __typename?: 'Query', categoryCollection?: { __typename?: 'CategoryCollection', items: Array<{ __typename?: 'Category', name?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, pageBlogPostCollection?: { __typename?: 'PageBlogPostCollection', items: Array<(
      { __typename?: 'PageBlogPost' }
      & PageBlogPostFieldsFragment
    ) | null> } | null };

export type ImageFieldsFragment = { __typename: 'Asset', title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } };

export type GetPressReleaseBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale: Scalars['String']['input'];
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetPressReleaseBySlugQuery = { __typename?: 'Query', notaDeImprensaCollection?: { __typename?: 'NotaDeImprensaCollection', items: Array<{ __typename?: 'NotaDeImprensa', title?: string | null, slug?: string | null, publishDate?: any | null, body?: { __typename?: 'NotaDeImprensaBody', json: any, links: { __typename: 'NotaDeImprensaBodyLinks' } } | null } | null> } | null };

export type GetPressReleasesListQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  limit: Scalars['Int']['input'];
  order: Array<InputMaybe<NotaDeImprensaOrder>> | InputMaybe<NotaDeImprensaOrder>;
}>;


export type GetPressReleasesListQuery = { __typename?: 'Query', notaDeImprensaCollection?: { __typename?: 'NotaDeImprensaCollection', items: Array<{ __typename?: 'NotaDeImprensa', title?: string | null, slug?: string | null, publishDate?: any | null } | null> } | null };

export type ReferencePageBlogPostFieldsFragment = { __typename: 'PageBlogPost', slug?: string | null, publishedDate?: any | null, title?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, author?: (
    { __typename?: 'ComponentAuthor' }
    & AuthorFieldsFragment
  ) | null, featuredImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, category?: { __typename?: 'Category', name?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type PageBlogPostFieldsFragment = { __typename: 'PageBlogPost', internalName?: string | null, slug?: string | null, publishedDate?: any | null, title?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, seoFields?: (
    { __typename?: 'ComponentSeo' }
    & SeoFieldsFragment
  ) | null, author?: (
    { __typename?: 'ComponentAuthor' }
    & AuthorFieldsFragment
  ) | null, featuredImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, category?: { __typename?: 'Category', name?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string } } | null, content?: { __typename?: 'PageBlogPostContent', json: any, links: { __typename?: 'PageBlogPostContentLinks', entries: { __typename?: 'PageBlogPostContentEntries', block: Array<{ __typename?: 'BlockFaQs' } | { __typename?: 'BlockHero' } | { __typename?: 'BlockTextColumnItem' } | { __typename?: 'BlockTextColumns' } | { __typename?: 'BlockWrapper' } | { __typename?: 'Category' } | { __typename?: 'ComponentAuthor' } | (
          { __typename?: 'ComponentRichImage' }
          & RichImageFieldsFragment
        ) | { __typename?: 'ComponentSeo' } | { __typename?: 'Countries' } | { __typename?: 'NotaDeImprensa' } | { __typename?: 'PageBlogPost' } | { __typename?: 'PageBuilder' } | { __typename?: 'PageLanding' } | { __typename?: 'StaticPage' } | { __typename?: 'Vehicle' } | null> } } } | null, relatedBlogPostsCollection?: { __typename?: 'PageBlogPostRelatedBlogPostsCollection', items: Array<(
      { __typename?: 'PageBlogPost' }
      & ReferencePageBlogPostFieldsFragment
    ) | null> } | null };

export type PageBlogPostQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PageBlogPostQuery = { __typename?: 'Query', pageBlogPostCollection?: { __typename?: 'PageBlogPostCollection', items: Array<(
      { __typename?: 'PageBlogPost' }
      & PageBlogPostFieldsFragment
    ) | null> } | null };

export type PageBlogPostCollectionQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBlogPostOrder>> | InputMaybe<PageBlogPostOrder>>;
  where?: InputMaybe<PageBlogPostFilter>;
}>;


export type PageBlogPostCollectionQuery = { __typename?: 'Query', pageBlogPostCollection?: { __typename?: 'PageBlogPostCollection', items: Array<(
      { __typename?: 'PageBlogPost' }
      & PageBlogPostFieldsFragment
    ) | null> } | null };

export type BlockTextColumnItemFieldsFragment = { __typename: 'BlockTextColumnItem', title?: string | null, sys: { __typename?: 'Sys', id: string }, text?: { __typename?: 'BlockTextColumnItemText', json: any } | null };

export type BlockHeroFieldsFragment = { __typename: 'BlockHero', internalTitle?: string | null, title?: string | null, subtitle?: string | null, ctaText?: string | null, ctaUrl?: string | null, sys: { __typename?: 'Sys', id: string }, backgroundImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null };

export type BlockTextColumnsFieldsFragment = { __typename: 'BlockTextColumns', internalTitle?: string | null, title?: string | null, sys: { __typename?: 'Sys', id: string }, columns?: (
    { __typename?: 'BlockTextColumnItem' }
    & BlockTextColumnItemFieldsFragment
  ) | null };

export type BlockFaQsFieldsFragment = { __typename: 'BlockFaQs', title?: string | null, sys: { __typename?: 'Sys', id: string }, itemsCollection?: { __typename?: 'BlockFaQsItemsCollection', items: Array<(
      { __typename?: 'BlockTextColumnItem' }
      & BlockTextColumnItemFieldsFragment
    ) | null> } | null };

export type BlockWrapperFieldsFragment = { __typename: 'BlockWrapper', name?: string | null, width?: string | null, backgroundColor?: string | null, paddingTop?: string | null, paddingBottom?: string | null, sys: { __typename?: 'Sys', id: string }, backgroundImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, content?: (
    { __typename: 'BlockFaQs' }
    & BlockFaQsFieldsFragment
  ) | (
    { __typename: 'BlockHero' }
    & BlockHeroFieldsFragment
  ) | (
    { __typename: 'BlockTextColumns' }
    & BlockTextColumnsFieldsFragment
  ) | null };

export type PageBuilderFieldsFragment = { __typename: 'PageBuilder', title?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, sectionsCollection?: { __typename?: 'PageBuilderSectionsCollection', items: Array<(
      { __typename?: 'BlockWrapper' }
      & BlockWrapperFieldsFragment
    ) | null> } | null };

export type PageBuilderQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PageBuilderQuery = { __typename?: 'Query', pageBuilderCollection?: { __typename?: 'PageBuilderCollection', items: Array<(
      { __typename?: 'PageBuilder' }
      & PageBuilderFieldsFragment
    ) | null> } | null };

export type PageBuilderCollectionQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageBuilderOrder>> | InputMaybe<PageBuilderOrder>>;
  where?: InputMaybe<PageBuilderFilter>;
}>;


export type PageBuilderCollectionQuery = { __typename?: 'Query', pageBuilderCollection?: { __typename?: 'PageBuilderCollection', items: Array<{ __typename?: 'PageBuilder', slug?: string | null } | null> } | null };

export type PageLandingFieldsFragment = { __typename: 'PageLanding', internalName?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, seoFields?: (
    { __typename?: 'ComponentSeo' }
    & SeoFieldsFragment
  ) | null, featuredBlogPost?: (
    { __typename?: 'PageBlogPost' }
    & ReferencePageBlogPostFieldsFragment
  ) | null };

export type PageLandingQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PageLandingQuery = { __typename?: 'Query', pageLandingCollection?: { __typename?: 'PageLandingCollection', items: Array<(
      { __typename?: 'PageLanding' }
      & PageLandingFieldsFragment
    ) | null> } | null };

export type PageLandingCollectionQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type PageLandingCollectionQuery = { __typename?: 'Query', pageLandingCollection?: { __typename?: 'PageLandingCollection', items: Array<(
      { __typename?: 'PageLanding' }
      & PageLandingFieldsFragment
    ) | null> } | null };

export type RichImageFieldsFragment = { __typename: 'ComponentRichImage', internalName?: string | null, caption?: string | null, fullWidth?: boolean | null, sys: { __typename?: 'Sys', id: string }, image?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null };

export type SeoFieldsFragment = { __typename: 'ComponentSeo', pageTitle?: string | null, pageDescription?: string | null, canonicalUrl?: string | null, nofollow?: boolean | null, noindex?: boolean | null, shareImagesCollection?: { __typename?: 'AssetCollection', items: Array<(
      { __typename?: 'Asset' }
      & ImageFieldsFragment
    ) | null> } | null };

export type SitemapPagesFieldsFragment = { __typename?: 'Query', pageBlogPostCollection?: { __typename?: 'PageBlogPostCollection', items: Array<{ __typename?: 'PageBlogPost', slug?: string | null, sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null, pageLandingCollection?: { __typename?: 'PageLandingCollection', items: Array<{ __typename?: 'PageLanding', sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null };

export type SitemapPagesQueryVariables = Exact<{
  locale: Scalars['String']['input'];
}>;


export type SitemapPagesQuery = (
  { __typename?: 'Query' }
  & SitemapPagesFieldsFragment
);

export type StaticPageFieldsFragment = { __typename: 'StaticPage', tituloInterno?: string | null, tituloExterno?: string | null, slug?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, richText?: { __typename?: 'StaticPageRichText', json: any, links: { __typename?: 'StaticPageRichTextLinks', entries: { __typename?: 'StaticPageRichTextEntries', block: Array<{ __typename?: 'BlockFaQs' } | { __typename?: 'BlockHero' } | { __typename?: 'BlockTextColumnItem' } | { __typename?: 'BlockTextColumns' } | { __typename?: 'BlockWrapper' } | { __typename?: 'Category' } | { __typename?: 'ComponentAuthor' } | (
          { __typename?: 'ComponentRichImage' }
          & RichImageFieldsFragment
        ) | { __typename?: 'ComponentSeo' } | { __typename?: 'Countries' } | { __typename?: 'NotaDeImprensa' } | { __typename?: 'PageBlogPost' } | { __typename?: 'PageBuilder' } | { __typename?: 'PageLanding' } | { __typename?: 'StaticPage' } | { __typename?: 'Vehicle' } | null> } } } | null };

export type StaticPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type StaticPageQuery = { __typename?: 'Query', staticPageCollection?: { __typename?: 'StaticPageCollection', items: Array<(
      { __typename?: 'StaticPage' }
      & StaticPageFieldsFragment
    ) | null> } | null };

export type VehicleCollectionQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<VehicleOrder>> | InputMaybe<VehicleOrder>>;
  where?: InputMaybe<VehicleFilter>;
}>;


export type VehicleCollectionQuery = { __typename?: 'Query', vehicleCollection?: { __typename?: 'VehicleCollection', items: Array<{ __typename?: 'Vehicle', name?: string | null, details?: any | null } | null> } | null };

export const ImageFieldsFragmentDoc = gql`
    fragment ImageFields on Asset {
  __typename
  sys {
    id
  }
  title
  description
  width
  height
  url
  contentType
}
    `;
export const SeoFieldsFragmentDoc = gql`
    fragment SeoFields on ComponentSeo {
  __typename
  pageTitle
  pageDescription
  canonicalUrl
  nofollow
  noindex
  shareImagesCollection(limit: 3, locale: $locale) {
    items {
      ...ImageFields
    }
  }
}
    `;
export const AuthorFieldsFragmentDoc = gql`
    fragment AuthorFields on ComponentAuthor {
  __typename
  sys {
    id
  }
  name
  avatar {
    ...ImageFields
  }
}
    `;
export const RichImageFieldsFragmentDoc = gql`
    fragment RichImageFields on ComponentRichImage {
  __typename
  internalName
  sys {
    id
  }
  image {
    ...ImageFields
  }
  caption
  fullWidth
}
    `;
export const ReferencePageBlogPostFieldsFragmentDoc = gql`
    fragment ReferencePageBlogPostFields on PageBlogPost {
  __typename
  sys {
    id
    spaceId
  }
  slug
  author {
    ...AuthorFields
  }
  publishedDate
  title
  shortDescription
  featuredImage {
    ...ImageFields
  }
  category {
    name
    slug
    sys {
      id
    }
  }
}
    `;
export const PageBlogPostFieldsFragmentDoc = gql`
    fragment PageBlogPostFields on PageBlogPost {
  __typename
  sys {
    id
    spaceId
  }
  internalName
  seoFields {
    ...SeoFields
  }
  slug
  author {
    ...AuthorFields
  }
  publishedDate
  title
  shortDescription
  featuredImage {
    ...ImageFields
  }
  category {
    name
    slug
    sys {
      id
    }
  }
  content {
    json
    links {
      entries {
        block {
          ...RichImageFields
        }
      }
    }
  }
  relatedBlogPostsCollection(limit: 2) {
    items {
      ...ReferencePageBlogPostFields
    }
  }
}
    `;
export const BlockHeroFieldsFragmentDoc = gql`
    fragment BlockHeroFields on BlockHero {
  __typename
  sys {
    id
  }
  internalTitle
  title
  subtitle
  ctaText
  ctaUrl
  backgroundImage {
    ...ImageFields
  }
}
    `;
export const BlockTextColumnItemFieldsFragmentDoc = gql`
    fragment BlockTextColumnItemFields on BlockTextColumnItem {
  __typename
  sys {
    id
  }
  title
  text {
    json
  }
}
    `;
export const BlockFaQsFieldsFragmentDoc = gql`
    fragment BlockFaQsFields on BlockFaQs {
  __typename
  sys {
    id
  }
  title
  itemsCollection(limit: 10) {
    items {
      ...BlockTextColumnItemFields
    }
  }
}
    `;
export const BlockTextColumnsFieldsFragmentDoc = gql`
    fragment BlockTextColumnsFields on BlockTextColumns {
  __typename
  sys {
    id
  }
  internalTitle
  title
  columns {
    ...BlockTextColumnItemFields
  }
}
    `;
export const BlockWrapperFieldsFragmentDoc = gql`
    fragment BlockWrapperFields on BlockWrapper {
  __typename
  sys {
    id
  }
  name
  width
  backgroundColor
  paddingTop
  paddingBottom
  backgroundImage {
    ...ImageFields
  }
  content {
    __typename
    ...BlockHeroFields
    ...BlockFaQsFields
    ...BlockTextColumnsFields
  }
}
    `;
export const PageBuilderFieldsFragmentDoc = gql`
    fragment PageBuilderFields on PageBuilder {
  __typename
  sys {
    id
    spaceId
  }
  title
  slug
  sectionsCollection(limit: 20) {
    items {
      ...BlockWrapperFields
    }
  }
}
    `;
export const PageLandingFieldsFragmentDoc = gql`
    fragment PageLandingFields on PageLanding {
  __typename
  sys {
    id
    spaceId
  }
  internalName
  seoFields {
    ...SeoFields
  }
  featuredBlogPost {
    ...ReferencePageBlogPostFields
  }
}
    `;
export const SitemapPagesFieldsFragmentDoc = gql`
    fragment sitemapPagesFields on Query {
  pageBlogPostCollection(limit: 100, locale: $locale) {
    items {
      slug
      sys {
        publishedAt
      }
    }
  }
  pageLandingCollection(limit: 1, locale: $locale) {
    items {
      sys {
        publishedAt
      }
    }
  }
}
    `;
export const StaticPageFieldsFragmentDoc = gql`
    fragment StaticPageFields on StaticPage {
  __typename
  sys {
    id
    spaceId
  }
  tituloInterno
  tituloExterno
  slug
  richText {
    json
    links {
      entries {
        block {
          ...RichImageFields
        }
      }
    }
  }
}
    `;
export const CategoryPageDocument = gql`
    query CategoryPage($categorySlug: String!, $locale: String!, $preview: Boolean) {
  categoryCollection(
    where: {slug: $categorySlug}
    locale: $locale
    preview: $preview
    limit: 1
  ) {
    items {
      name
      sys {
        id
      }
    }
  }
  pageBlogPostCollection(
    limit: 100
    locale: $locale
    preview: $preview
    order: [publishedDate_DESC]
    where: {category: {slug: $categorySlug}}
  ) {
    items {
      ...PageBlogPostFields
    }
  }
}
    ${PageBlogPostFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${AuthorFieldsFragmentDoc}
${RichImageFieldsFragmentDoc}
${ReferencePageBlogPostFieldsFragmentDoc}`;
export const GetPressReleaseBySlugDocument = gql`
    query GetPressReleaseBySlug($slug: String!, $locale: String!, $preview: Boolean) {
  notaDeImprensaCollection(
    where: {slug: $slug}
    locale: $locale
    preview: $preview
    limit: 1
  ) {
    items {
      title
      slug
      publishDate
      body {
        json
        links {
          __typename
        }
      }
    }
  }
}
    `;
export const GetPressReleasesListDocument = gql`
    query GetPressReleasesList($locale: String!, $limit: Int!, $order: [NotaDeImprensaOrder]!) {
  notaDeImprensaCollection(locale: $locale, limit: $limit, order: $order) {
    items {
      title
      slug
      publishDate
    }
  }
}
    `;
export const PageBlogPostDocument = gql`
    query pageBlogPost($slug: String!, $locale: String, $preview: Boolean) {
  pageBlogPostCollection(
    limit: 1
    where: {slug: $slug}
    locale: $locale
    preview: $preview
  ) {
    items {
      ...PageBlogPostFields
    }
  }
}
    ${PageBlogPostFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${AuthorFieldsFragmentDoc}
${RichImageFieldsFragmentDoc}
${ReferencePageBlogPostFieldsFragmentDoc}`;
export const PageBlogPostCollectionDocument = gql`
    query pageBlogPostCollection($locale: String, $preview: Boolean, $limit: Int, $order: [PageBlogPostOrder], $where: PageBlogPostFilter) {
  pageBlogPostCollection(
    limit: $limit
    locale: $locale
    preview: $preview
    order: $order
    where: $where
  ) {
    items {
      ...PageBlogPostFields
    }
  }
}
    ${PageBlogPostFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${AuthorFieldsFragmentDoc}
${RichImageFieldsFragmentDoc}
${ReferencePageBlogPostFieldsFragmentDoc}`;
export const PageBuilderDocument = gql`
    query pageBuilder($slug: String!, $locale: String, $preview: Boolean) {
  pageBuilderCollection(
    limit: 1
    where: {slug: $slug}
    locale: $locale
    preview: $preview
  ) {
    items {
      ...PageBuilderFields
    }
  }
}
    ${PageBuilderFieldsFragmentDoc}
${BlockWrapperFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${BlockHeroFieldsFragmentDoc}
${BlockFaQsFieldsFragmentDoc}
${BlockTextColumnItemFieldsFragmentDoc}
${BlockTextColumnsFieldsFragmentDoc}`;
export const PageBuilderCollectionDocument = gql`
    query pageBuilderCollection($locale: String, $preview: Boolean, $limit: Int, $order: [PageBuilderOrder], $where: PageBuilderFilter) {
  pageBuilderCollection(
    limit: $limit
    locale: $locale
    preview: $preview
    order: $order
    where: $where
  ) {
    items {
      slug
    }
  }
}
    `;
export const PageLandingDocument = gql`
    query pageLanding($locale: String, $preview: Boolean) {
  pageLandingCollection(limit: 1, locale: $locale, preview: $preview) {
    items {
      ...PageLandingFields
    }
  }
}
    ${PageLandingFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${ReferencePageBlogPostFieldsFragmentDoc}
${AuthorFieldsFragmentDoc}`;
export const PageLandingCollectionDocument = gql`
    query pageLandingCollection($locale: String, $preview: Boolean) {
  pageLandingCollection(limit: 100, locale: $locale, preview: $preview) {
    items {
      ...PageLandingFields
    }
  }
}
    ${PageLandingFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${ReferencePageBlogPostFieldsFragmentDoc}
${AuthorFieldsFragmentDoc}`;
export const SitemapPagesDocument = gql`
    query sitemapPages($locale: String!) {
  ...sitemapPagesFields
}
    ${SitemapPagesFieldsFragmentDoc}`;
export const StaticPageDocument = gql`
    query staticPage($slug: String!, $locale: String, $preview: Boolean) {
  staticPageCollection(
    limit: 1
    where: {slug: $slug}
    locale: $locale
    preview: $preview
  ) {
    items {
      ...StaticPageFields
    }
  }
}
    ${StaticPageFieldsFragmentDoc}
${RichImageFieldsFragmentDoc}
${ImageFieldsFragmentDoc}`;
export const VehicleCollectionDocument = gql`
    query vehicleCollection($locale: String, $preview: Boolean, $limit: Int, $order: [VehicleOrder], $where: VehicleFilter) {
  vehicleCollection(
    locale: $locale
    preview: $preview
    limit: $limit
    order: $order
    where: $where
  ) {
    items {
      name
      details
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CategoryPage(variables: CategoryPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CategoryPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CategoryPageQuery>({ document: CategoryPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CategoryPage', 'query', variables);
    },
    GetPressReleaseBySlug(variables: GetPressReleaseBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetPressReleaseBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPressReleaseBySlugQuery>({ document: GetPressReleaseBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetPressReleaseBySlug', 'query', variables);
    },
    GetPressReleasesList(variables: GetPressReleasesListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetPressReleasesListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPressReleasesListQuery>({ document: GetPressReleasesListDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetPressReleasesList', 'query', variables);
    },
    pageBlogPost(variables: PageBlogPostQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PageBlogPostQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageBlogPostQuery>({ document: PageBlogPostDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'pageBlogPost', 'query', variables);
    },
    pageBlogPostCollection(variables?: PageBlogPostCollectionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PageBlogPostCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageBlogPostCollectionQuery>({ document: PageBlogPostCollectionDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'pageBlogPostCollection', 'query', variables);
    },
    pageBuilder(variables: PageBuilderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PageBuilderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageBuilderQuery>({ document: PageBuilderDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'pageBuilder', 'query', variables);
    },
    pageBuilderCollection(variables?: PageBuilderCollectionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PageBuilderCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageBuilderCollectionQuery>({ document: PageBuilderCollectionDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'pageBuilderCollection', 'query', variables);
    },
    pageLanding(variables?: PageLandingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PageLandingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageLandingQuery>({ document: PageLandingDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'pageLanding', 'query', variables);
    },
    pageLandingCollection(variables?: PageLandingCollectionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PageLandingCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageLandingCollectionQuery>({ document: PageLandingCollectionDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'pageLandingCollection', 'query', variables);
    },
    sitemapPages(variables: SitemapPagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<SitemapPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SitemapPagesQuery>({ document: SitemapPagesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'sitemapPages', 'query', variables);
    },
    staticPage(variables: StaticPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<StaticPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<StaticPageQuery>({ document: StaticPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'staticPage', 'query', variables);
    },
    vehicleCollection(variables?: VehicleCollectionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<VehicleCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<VehicleCollectionQuery>({ document: VehicleCollectionDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'vehicleCollection', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;