import {AppDispatch} from 'providers/store-provider/config/store';
import {useDispatch} from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
