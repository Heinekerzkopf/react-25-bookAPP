import { useDispatch, useSelector } from 'react-redux';
import { setTitleFilter, selectTitleFilter, resetFilters, selectAuthorFilter, setAuthorFilter, selectFavoriteFilter, setFavoriteFilter } from '../../redux/slices/filterSlice';
import './Filter.css'

const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectFavoriteFilter);

    const handleTitleFilterChange = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };

    const handleAuthorFilterChange = (e) => {
        dispatch(setAuthorFilter(e.target.value));
    };

    const handleOnlyFavoriteFilterChange = () => {
        dispatch(setFavoriteFilter());
    };

    const handleResetFilters = () => {
        dispatch(resetFilters());
    };

    return (
        <div className="app-block filter">
            <div className='filter-row'>
                <div className='filter-group'>
                    <input type='text' placeholder='Filter by title...' value={titleFilter} onChange={handleTitleFilterChange} />
                </div>
                <div className='filter-group'>
                    <input type='text' placeholder="Filter by author's name..." value={authorFilter} onChange={handleAuthorFilterChange} />
                </div>
                <div className='filter-group'>
                    <label>
                        <input type="checkbox" checked={onlyFavoriteFilter} onClick={handleOnlyFavoriteFilterChange} />
                        Only Favorite
                    </label>
                </div>
                <button type="button" onClick={handleResetFilters}>Reset Filters</button>
            </div>
        </div>
    );
};

export default Filter