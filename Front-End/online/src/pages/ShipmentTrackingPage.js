import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BusContext } from '../contexts/BusContext';
import './ShipmentTrackingPage.css';


function ShipmentTrackingPage() {


  const history = useHistory();
  const { setBusData } = useContext(BusContext);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();

    // Fetch data from the API
    try {
      const response = await fetch(`http://localhost:5000/api/buses?origin=${origin}&destination=${destination}&date=${date}`);
      const data = await response.json();
      setBusData(data);
      history.push('/buses');
    } catch (error) {
      alert('Error Searching for buses', error);
      console.log('Error Searching for buses', error);
    }
  };


  return (
    <div className="container1">
      <div className="sideLeft1">
        <form action="">
          <table>
            <h4>Provide details to book for a Package</h4>
            <tr>
              <td>Name: </td>
              <td><input type="text" name="" id="" /></td>
            </tr>
            <tr>
              <td>Email: </td>
              <td><input type="email" name="" id="" /></td>
            </tr>
            <tr>
              <td>Pick Up Point: </td>
              <td><input type="text" name="" id="" /></td>
            </tr>
            <tr>
              <td>Destination: </td>
              <td><input type="text" name="" id="" /></td>
            </tr>
            <tr>
              <td>Sender Number: </td>
              <td><input type="tel" name="" id="" /></td>
            </tr>
            <tr>
              <td>Receiver Contact: </td>
              <td><input type="tel" name="" id="" /></td>
            </tr>
            <tr>
              <td>Package Value(Tsh): </td>
              <td><input type="number" name="" id="" /></td>
            </tr>
            <tr>
              <td>Estimated Weight(Kg): </td>
              <td><input type="number" name="" id="" /></td>
            </tr>
            <tr>
              <td><button type="reset">Clear</button></td>
              <td><button type="submit">Book Now</button></td>
            </tr>
          </table>
        </form>
      </div>
      <div className="sideRight1">
        <form action="" method="post">
          <table>
            <h4>Provide details to track your Package</h4>
            <tr>
              <td>Email:</td>
              <td><input type="email" name="" id="" /></td>
            </tr>
            <tr>
              <td>Package ID/No:</td>
              <td><input type="number" name="" id="" /></td>
            </tr>
            <tr>
              <td>Bus Plate/No:</td>
              <td><input type="text" name="" id="" /></td>
            </tr>
            <tr>
              <td><button className='searchBtn' type="reset">Clear</button></td>
              <td><button className='searchBtn' type="submit">Track</button></td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}

export default ShipmentTrackingPage;
