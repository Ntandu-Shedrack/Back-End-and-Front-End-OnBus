import React from 'react';
import './BusesPage.css';
import AirlineSeatReclineNormalOutlinedIcon from '@mui/icons-material/AirlineSeatReclineNormalOutlined';

function buses() {
  return (
    <div className='container'>
    <div class="bus-card">
        <div class="bus-info">
            <div class="bus-details">
                <h3>BM COACH DSM ARS NO1</h3>
                <p>Plate No. - T 583 EBL</p>
                <p class="luxury">2×2 Luxury | <span class="via">VIA BAGAMOYO</span></p>
            </div>
            <div class="bus-timing">
                <div class="departure">
                    <p>03:00 AM</p>
                </div>
                <div class="duration">
                    <p>10 Hrs 00 Min</p>
                </div>
                <div class="arrival">
                    <p>13:00 PM</p>
                </div>
            </div>
        </div>
        <div class="bus-booking">
            <div class="price">
                <p>TSH.</p>
                <p>50,000</p>
            </div>
            <div class="seats-left">
                <AirlineSeatReclineNormalOutlinedIcon/>
                <p>49 Seats Left</p>
            </div>
            <button class="select-seats">Select Seats</button>
        </div>
        <div class="bus-footer">
            <div class="rating">
                <span class="rating-icon">★</span>
                <span class="rating-value">4.5</span>
            </div>
            <div class="policy">
                <p>Booking Policy</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default buses;
