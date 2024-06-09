import Accordion from 'components/shared/accordion/Accordion';
import cls from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className={cls.footer_faq}>
        <Accordion />
      </div>
    </footer>
  );
};

export default Footer;
