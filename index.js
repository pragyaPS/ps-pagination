import React from 'react';
import ReactDOM from 'react-dom';

import Pagination from './src/pagination';

const App = () => (<div>ps-pagination
    <Pagination count={4} onClick = { onPaginationClick }/>
</div>);

const onPaginationClick = (action) => {
    console.log('action', action);
}

ReactDOM.render(<App/>, document.getElementById('react-container'));
// console.log("Pagination", Pagination);
// export default Pagination;
 