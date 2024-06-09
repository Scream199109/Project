import Container from "components/shared/container/Container";
import {Text} from "components/shared/text/Text";
import {Link} from "react-router-dom";
import cls from './Footer.module.scss';

const FooterNav = () => {
  return (
    <div className={cls.footer_nav}>
      <Container>
        <div className={cls.footer_nav_content}>
          <Link to="/">
            <Text size='xl' weight='bold'>
              Goods4you
            </Text>
          </Link>
          <ul className={cls.footer_nav_links}>
            <li>
              <a href="/#catalog">
                <Text>
                  Catalog
                </Text>
              </a>
            </li>
            <li>
              <a href="/#faq">
                <Text>
                  FAQ
                </Text>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default FooterNav;
