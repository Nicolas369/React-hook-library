import { useReducer } from 'react';

const Paginator = (props) => {

    const { pages } = props; 

    const initialState = 0;
    const reducer = (state, action) => {
      switch(action.type) {
        case "NEXT":
          return state < (pages.length-1) ? state + 1 : state;
        case "PREV":
          return state > 0 ? state - 1 : state;
      }
    }

    const [page, dispatch] = useReducer(reducer, initialState);

    const nextPage = () => {
      dispatch({ type: "NEXT"});
    }

    const prevPage = () => {
      dispatch({ type: "PREV"});
    }

    return (
      <div className="paginator-container">
        <span className="paginator-title">{pages[page].hook}</span>
        
        <div className="paginator-page">
          { pages[page].component }
        </div>

        <div className='pagination-btn'>
            <button onClick={prevPage}>prev</button>
            <p> page { page + 1} </p>
            <button onClick={nextPage}>next</button>
        </div>

      </div>
    )
}

export default Paginator;