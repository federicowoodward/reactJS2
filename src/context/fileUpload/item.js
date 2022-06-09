import { React} from 'react';

export default function Item({img}){
  return (
      <div className="flexItem">
        <img src={img} alt="esta foto es temporal" className="imgUpload"/>
      </div>
    );   
};