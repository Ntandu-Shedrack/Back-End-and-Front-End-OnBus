import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BusContext } from '../contexts/BusContext';
import AirlineSeatReclineNormalOutlinedIcon from '@mui/icons-material/AirlineSeatReclineNormalOutlined';
import './BusesPage.css';

function BusesPage() {
  const history = useHistory();
  const { busData } = useContext(BusContext);

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/seat');
  };

  return (
    <div className='container8'>
      {busData.map((bus, index) => (
        <div className="bus-card" key={index}>
          <div className="bus-info">
            <div className="bus-details">
              <h3 className='companyName'>{bus.companyName}</h3>
              <p className='plateNumber'>{bus.plateNumber}</p>
              <p className="seatLayout">{bus.seatLayout}</p>
            </div>
            <div className="bus-timing">
              <div className="departure">
                <p>{bus.departureTime}</p>
              </div>
              <div className="duration">
                <p>{bus.duration}</p>
              </div>
              <div className="arrival">
                <p>{bus.arrivalTime}</p>
              </div>
            </div>
          </div>
          <div className="bus-booking">
            <div className="price">
              <p>TSH. {bus.fare}</p>
            </div>
            <div className="seats-left">
              <AirlineSeatReclineNormalOutlinedIcon />
              <p>{bus.seatsLeft} Seats Left</p>
            </div>
            <button className="select-seats" onClick={handleClick}>Select Seats</button>
          </div>
          <div className="bus-footer">
            <div className="rating">
              <span className="rating-icon">★</span>
              <span className="rating-value">{bus.rating}</span>
            </div>
            <div className="policy">
              <p>Booking Policy</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BusesPage;
