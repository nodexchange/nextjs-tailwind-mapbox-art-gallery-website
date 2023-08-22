import { Secondary as Layout } from '../../layouts';
import Link from 'next/link';
import { Article } from '../../components/Article';
import { useRouter } from 'next/router';
import articles from '../../config/articles.json';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl font-bold">Page not found</h2>
      <Link href='/'>
        <button className='bg-shine text-black font-bold uppercase text-sm px-6 py-3 rounded-full mt-6'>Return back to home</button>
      </Link>
    </div>
  );
}

export default function NewsArticle({
  article
}) {
  if (!article) return <NotFound />;
  return (
    <Layout
      title={`Latin Shine | Dance Company - ${article.title}`}
      description={article.text}>
      <main className="bg-almostBlack text-white py-10 md:py-10 lg:py-30 justify-between md:items-start">
      <section className="bg-no-repeat bg-cover bg-courseImage text-white px-8 py-10 md:py-10 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
      <div className="mt-6">
        <Article key={`article-${article.id}`} {...article} standalone={true} />
      </div>
      </section>
      </main>
    </Layout>
  );
}

export const getServerSideProps = ({ params }) => {
  const { slug } = params;
  const article = articles.articles.find((article) => article.href === `news/${slug}`);

  return { props: { article } }
}
