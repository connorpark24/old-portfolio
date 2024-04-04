type ArticleProps = {
  article: {
    title: string;
    content: string;
  };
};

const ArticlePage = ({ article }: ArticleProps) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default ArticlePage;
