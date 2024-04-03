import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { request, gql } from "graphql-request";

// const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

// const GET_ARTICLES_SLUGS = gql`
//   query GetArticlesSlugs {
//     articles {
//       slug
//     }
//   }
// `;

// const GET_ARTICLE_BY_SLUG = gql`
//   query GetArticleBySlug($slug: String!) {
//     article(where: { slug: $slug }) {
//       title
//       content
//     }
//   }
// `;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const data = await request(graphqlAPI, GET_ARTICLES_SLUGS);

//   const paths = data.articles.map((article: { slug: string }) => ({
//     params: { slug: article.slug },
//   }));

//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const data = await request(graphqlAPI, GET_ARTICLE_BY_SLUG, {
//     slug: params?.slug,
//   });

//   return {
//     props: {
//       article: data.article,
//     },
//   };
// };

type ArticleProps = {
  article: {
    title: string;
    content: string;
  };
};

const ArticlePage: NextPage<ArticleProps> = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default ArticlePage;
