
import {classNames} from 'components/shared/lib/classNames/classNames';
import {Text} from 'components/shared/text/Text';
import {Link} from 'react-router-dom';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {

  return (
    <div
      className={classNames(cls.NotFoundPage, {}, [className])}
    >
      <Text variant='dark' size='xl'>
        Страница не найдена
      </Text>
      <Link to='/'>
        <Text variant='dark'>
          Вернуться на главную
        </Text>
      </Link>
    </div>
  );
};
