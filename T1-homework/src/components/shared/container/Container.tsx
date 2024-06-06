import cls from './Container.module.scss';

type Props = {
  children: React.ReactNode;
}
// Компонент для переиспользования обертки многих частей сайта в контейнер по макету
const Container = ({children}: Props) => {
  return (
    <div className={cls.container}>
      {children}
    </div>
  );
};

export default Container;
