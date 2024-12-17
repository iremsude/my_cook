import React from "react";
import { useNavigate } from 'react-router-dom';

const Home = ({ food }) => {
  const navigate = useNavigate();


  
  return (
    <div className="flex flex-row basis-1/3  flex-wrap place-content-center bg-[url('/public/images/background.png')] bg-repeat bg-auto">
      {food?.map((item, index) => {
        console.log(index);
        const imj = item?.recipe?.image;
        const mType = item?.recipe?.mealType[0];
        const dType = item?.recipe?.dishType;
        const cal = item?.recipe.calories.toFixed(0);
        return (
          <div
            key={index} // Liste render ederken key kullanmak iyi bir uygulamadır
           
            className=" bg-opacity-35 p-4 border-[2px]  border-lime-600 bg-[#dae7c3] backdrop-blur-md m-6 rounded-2xl w-[336px]"
          >
            <h1 className="text-lime-700 font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
              {" "}
              {item?.recipe?.label}
            </h1>
            <img
              className="w-[300px]  rounded-2xl"
              src={imj === undefined || null ? "/images/nofoto.jpg" : imj}
              alt=""
            ></img>
            <div className="flex flex-row flex-nowrap justify-between w-[300px] h-[40px] mt-3">
              <h4 className="rounded-2xl border-2 border-dashed border-lime-700 text-xs w-[83px] place-content-center text-center">
                {mType}
              </h4>
              <h4 className="rounded-2xl border-2 border-dashed border-lime-700 text-xs w-[83px] place-content-center text-center">
                {" "}
                {dType}
              </h4>
              <h4 className="rounded-2xl border-2 border-dashed border-lime-700 text-xs w-[83px] place-content-center text-center">
                Calorie:{cal}
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
