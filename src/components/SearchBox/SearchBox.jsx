import { changeFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';
import { useDispatch } from "react-redux";


const SearchBox = () => {
  const dispatch = useDispatch();

    return ( <div className={s.wrap}>
      <p className={s.label}>Find contacts by name</p>
        <input className={s.input} onChange={(e) => dispatch(changeFilter(e.target.value))} type="text" />
    </div>);
};
export default SearchBox;
