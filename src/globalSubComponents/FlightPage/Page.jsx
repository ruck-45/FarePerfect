import React from "react";
import Hero from "./Hero";
import Details from "./Details";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { updateTab } from "../../store/curTabSlice";
import { useParams } from "react-router-dom";
import airlineData from "./data/Airline.json"


const Page = () => {
   const dispatch = useDispatch();
   dispatch(updateTab("Details"));

   window.scrollTo({
     top: 0,
     behavior: "smooth",
   });
    let details = {}
    const location = useLocation()
    const params = useParams()

    const contentType = location.state.type
    
    const name = params.name
    
    console.log(contentType,name)

    if (contentType === "airlines"){
       details = airlineData.filter((filterData) => filterData.Airline === name) 
       
    }
      return (
        <div>
          {details.map((e,i) => (<Hero key={i} title={e.Airline}/>))}
          {details.map((e,i)=>(<Details key={i} title={e.Airline} description={e.description} businessDes={e.ClassDes} />))}
        </div>
      );
};

export default Page;
