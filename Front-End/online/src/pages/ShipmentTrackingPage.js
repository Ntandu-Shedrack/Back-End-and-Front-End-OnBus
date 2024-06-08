import React from 'react';
import './ShipmentTrackingPage.css';

function ShipmentTrackingPage() {
  return (
    <div className="container">
      <div className="ShipmentTrackingPage">
      <form action="" method="post">
        <table>
          {/* <h4>Enter Shipment detils below</h4> */}
          <tr>
            <td>Email:</td>
            <td><input type="text" name="" id="" /></td>
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
    
  )
}

export default ShipmentTrackingPage;
