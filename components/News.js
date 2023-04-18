import { Article } from './Article';
import articles from '../config/articles.json';

export const News = ({ limit = 30 }) => {
  return (
    <section className="bg-no-repeat bg-cover bg-courseImage text-white px-8 py-10 md:py-10 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
          <h2
            className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer pb-1"
            style={{ lineHeight: '1.5rem' }}>
            LATEST NEWS
          </h2>
          <hr />
          <div className="mt-6">
            {articles.articles.slice(0, limit).map((article, id) => (
              <Article key={`article-${id}`} {...article} />
            ))}
          </div>
        </section>
  );
};
