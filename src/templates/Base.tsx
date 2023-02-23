import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="mx-auto max-w-7xl antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <Hero />
    <VerticalFeatures />
    <Footer />
  </div>
);

export { Base };
