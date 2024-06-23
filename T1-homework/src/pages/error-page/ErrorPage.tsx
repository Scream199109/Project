
import {Button} from 'components/shared/buttons/Button';
import {classNames} from 'components/shared/lib/classNames/classNames';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({className}: ErrorPageProps) => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <p>An unexpected error occurred</p>
      <Button size='l' onClick={reloadPage}>Reload page</Button>
    </div>
  );
};
