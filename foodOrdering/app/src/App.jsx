import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResults/SearchResult";

 export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const[error,setError] = useState(null)
  const[filterdata,setFilterData] = useState(null);
  const[selectedButton,setSelectedButton] = useState("all");

  useEffect(() => {

    const fetchFoodData = async () => {
      setLoading(true);
  
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilterData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data from the server")
      }
    };

    fetchFoodData();

  },[])

     
  const searchfood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue) ;
    if(searchValue == ""){
      setFilterData(null)
    }
    
    setFilterData(filter)

  }

  const filterfood = (type) => {
    if(type == "all"){
      setFilterData(data);
      setSelectedButton("all");
      return ;
    }

    const filter = data?.filter((food) => food.type.toLowerCase().includes(type.toLowerCase())
    ) ;
      setFilterData(filter)
      setSelectedButton(type)
  } ;

  const filterbtns = [
    {
      name : "All",
      type : "all",
    },
    {
      name : "Breakfast",
      type : "breakfast",
    },
    {
      name : "Lunch",
      type : "lunch",
    },
    {
      name : "Dinner",
      type : "dinner",
    }

]

  if(error) return <div>{error}</div>
  if(loading) return <div>loading...</div>


  return (
    <>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>

        <div className="search">
          <input onChange={searchfood} placeholder="Search for meals" />
        </div>
      </TopContainer>

      <FilterContainer>
        {
          filterbtns.map((value) => 
          <Button key={value.name} onClick={() => filterfood(value.type)}>{value.name}</Button>
          )
        }
      </FilterContainer>

    </Container>
    <SearchResult data = {filterdata} />
    </>
  );
};

export default App;

 export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;
  export const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #410606;
  }
`;

