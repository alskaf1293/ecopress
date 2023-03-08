import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="EcoPress" description="EcoPress" />}>
    <h2 className="text-2l font-bold">Our Mission:</h2>

    <p>
      We aim to encourage sustainability by creating and nurishing a community
      of people that are actively learning and keeping up to the latest news on
      green energy, and eco-sustainability. Ensuring sustainability is crucial
      for the well-being of our planet and future generations, and it is our
      responsibility to take actions that protect the environment, promote
      social equity, and create a collective well-being.
    </p>

    <img src={`/assets/images/img/sus2.png`} alt=""></img>
  </Main>
);

export default About;
