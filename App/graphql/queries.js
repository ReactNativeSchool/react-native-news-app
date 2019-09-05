import gql from 'graphql-tag';

export const TopHeadlines = gql`
  query TopHeadlines {
    headlines
      @rest(
        type: "HeadlinesPayload"
        path: "top-headlines?country=us&category=technology"
      ) {
      totalResults
      articles @type(name: "Article") {
        title
        publishedAt
        url
        source @type(name: "Source") {
          id
          name
        }
      }
    }
  }
`;
