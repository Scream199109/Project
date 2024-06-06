import Accordion from 'components/shared/accordion/Accordion';
import {Text} from 'components/shared/text/Text';
import cls from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className={cls.footer_faq}>
        <Accordion />
      </div>

      <div className={cls.footer_nav}>
        <div className={cls.footer_nav_content}>
          <a href="/">
            <Text size='xl' weight='bold'>
              Goods4you
            </Text>
          </a>
          <ul className={cls.footer_nav_links}>
            <li>
              <a href="#catalog">
                <Text>
                  Catalog
                </Text>
              </a>
            </li>
            <li>
              <a href="#faq">
                <Text>
                  FAQ
                </Text>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
