import gql from 'graphql-tag';

export const TopHeadlines = gql`
  query TopHeadlines {
    headlines
      @rest(
        type: "HeadlinesPayload"
        path: "top-headlines?country=us&category=technology"
      ) {
      totalResults
      articles @type(name: "ArticlePayload") {
        title
        publishedAt
        url
        source @type(name: "SourcePayload") {
          name
        }
      }
    }
  }
`;
