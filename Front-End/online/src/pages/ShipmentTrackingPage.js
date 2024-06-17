import React from 'react';
import './ShipmentTrackingPage.css';

function ShipmentTrackingPage() {
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
