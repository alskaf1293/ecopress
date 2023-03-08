import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  /* const router = useRouter(); */

  return (
    <Main
      meta={
        <Meta
          title="EcoPress"
          description="EcoPress is a sustainability news aggregator that seeks to develop a community of responsible global citizens."
        />
      }
    >
      <div className="logoimg">
        <img
          className="logoimg"
          src="assets/images/img/main.png"
          alt="Nextjs starter banner"
        />
      </div>
      <h2 className="text-4xl font-bold">What we do:</h2>
      <p>
        <span role="img" aria-label="rocket"></span>{' '}
        <p>
          We offer Ecopress, a sustainability news agregator that creates a collection of
          news articles related to sustainability from various reliable
          newspapers and websites. Using natural language processing algorithms,
          we are able to summarize the article as well as provide actions to take
          to encourage sustainability. While articles from various different news journals
          can be difficult to follow and read entirely, our app bridges that gap to
          encourage users to stay up to date with the latest sustainability issues.
        </p>
      </p>
      <h3 className="text-3xl font-bold">
        A compilation of reliable green journal articles designed for you.
      </h3>
      <ul>
        <h2 className="font-bold">1 - Filter your search 🛠</h2>
        <li>
          <span role="img" aria-label="fire"></span>{' '}
          <a href="https://nextjs.org" rel="nofollow"></a> Our keyword based algorithm ensures
          that the matched articles best resonate with your needs and
          curiosities
        </li>
        <p></p>
        <h2 className="font-bold">2 - Summarized articles ⚙️</h2>
        <li>
          <span role="img" aria-label="art"></span> Read from our highly detailed summarization
          to identify key points of the article as well a great amount of save time and energy!
          <a href="https://tailwindcss.com" rel="nofollow"></a>
        </li>
        <p></p>
        <h2 className="font-bold">3 - Best Action to Take 📚</h2>
        <li>
          <span role="img" aria-label="nail_care"></span> Get tailored suggestions to make it easier
          to make the correct, smart decisions to help make the world a greener place!
        </li>
      </ul>
      <h1 className="spacing1">We strive to make the world a better place.</h1>

      <img src="/assets/images/img/Sustainability-news.png" alt="" />
      <p></p>
      <p></p>
      <h1 className="text-4xl font-bold">Our Sponsors</h1>
      <ul>
        <li>
          <div className="image-columns">
            <img src="/assets/images/img/news_partners/news4.png" alt="" />
            <img src="/assets/images/img/news_partners/news1.png" alt="" />
          </div>
        </li>
        <li>
          <div className="image-columns">
            <img src="/assets/images/img/news_partners/news3.png" alt="" />
            <img src="/assets/images/img/news_partners/news2.png" alt="" />
          </div>
        </li>
      </ul>
    </Main>
  );
};

export default Index;
