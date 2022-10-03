import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllBoxes,
  getBoxesStatus,
  getBoxesError,
  fetchBoxes
} from "features/boxes/boxesSlice";
import BoxListItem from "components/boxesList/BoxListItem";
import "./home.scss";


const Home = () => {
  const dispatch = useDispatch();
  const boxes = useSelector(selectAllBoxes);
  const boxesStatus = useSelector(getBoxesStatus);
  const error = useSelector(getBoxesError);

  useEffect(() => {
    
    if (boxesStatus === 'idle') {
      dispatch(fetchBoxes())
  }
 console.log(boxes)
  }, [boxesStatus,dispatch])

  

  /*let content;
    if (boxesStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (boxesStatus === 'succeeded') {
      
        //const orderedPosts = allBoxes.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = boxes.map(box => <BoxListItem key={box._id} box={box} />)
    } else if (boxesStatus === 'failed') {
        content = <p>{error}</p>;
    }*/
  

  return (
    <div className="pageContainer homePage">
       <section>
            <h2>boxes</h2>
         {  /* {content}*/}
        </section>
    </div>
  );
};

export default Home;
