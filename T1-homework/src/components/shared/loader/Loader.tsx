import cls from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.loader}>
        <span className={cls.hour}></span>
        <span className={cls.min}></span>
        <span className={cls.circel}></span>
      </div>
    </div>
  );
};

export default Loader;
