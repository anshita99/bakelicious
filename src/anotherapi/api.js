import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'
import './api.css'
function Index() {
  const [name, setName] = useState("car");
  const [year, setYear] = useState( '');
  const [maindata, setMaindata] = useState([]);
  const [initial, setInitial] = useState('')
  const [startDate, setStartDate] = useState(new Date());
  const [Datee, setDatee] = useState('1999');
  const [error, setError] = useState('');

  const HandleDate = () => {
      let date2=JSON.stringify(Datee)
      let date1=date2.slice(1,5)
      setYear(date1)
      
     
    };
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?i=tt3896198&apikey=f435c726&t=${name}&y=${year}`)
      .then((res) => {
        const data = res.data;
        setMaindata(data);
        console.log(maindata);
      })
      .catch((error) => {
        const msg = error.message;
        console.log(msg);
        setError(msg)
      });
  }, [name, year]);
  const handelChange=(e)=>{
      setName(initial)
      
     
  }

  return (
    <div className="main">
      <DatePicker className="a" dateFormat= 'yyyy' selected={startDate}  onChange={(data)=>{setDatee(data) 
        setStartDate(data)}} />
      <Button  onClick={HandleDate}>Search By Year</Button>
      
     
        <input className="b" type="text" placeholder="search..." onChange={(e)=>setInitial(e.target.value)}/>
        <Button onClick={handelChange} >search</Button>
        
      <Card className="c" style={{ width: "32rem" }}>
        <Card.Img variant="top" src={maindata.Poster} />
        <Card.Body>
          <Card.Title>
            <b>{maindata.Title}</b>
            <br />
            <small>
              <b>Year:-</b>
              {maindata.Year}
            </small>
            <br />{" "}
            <small>
              <b>Released Date:-</b>
              {maindata.Released}
            </small>
          </Card.Title>
          
          <p>
            
          </p>
          <Card.Text>{maindata.Plot}.</Card.Text>
          <Card.Text>
            <b>Director:-</b>
            {maindata.Director}.
            <br />
            <b>Writer:-</b>
            {maindata.Writer}
          </Card.Text>
          
        </Card.Body>
      </Card>
     
   </div>
  );
}
const Wrapper=styled.div`

`

export default Index;