import * as React from 'react';
import './SeatLayout.css';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function SeatLayout() {

  const leftSeats = Array(12).fill(null).map(() => Array(2).fill(null));
  const rightSeats = Array(12).fill(null).map(() => Array(2).fill(null));



    return (
        <div className="seatContainer">
            <div className="left">
                <div className="leftLeft">
                {leftSeats.map((row, rowIndex) => (
                        <div key={rowIndex} className="seatRow">
                            {row.map((seat, seatIndex) => (
                                <Checkbox
                                    key={seatIndex}
                                    {...label}
                                    icon={<AirlineSeatReclineExtraIcon />}
                                    checkedIcon={<AirlineSeatReclineExtraIcon />}
                                />
                            ))}
                        </div>
                    ))}
                </div>
                <div className="leftRight">
                {rightSeats.map((row, rowIndex) => (
                        <div key={rowIndex} className="seatRow">
                            {row.map((seat, seatIndex) => (
                                <Checkbox
                                    key={seatIndex}
                                    {...label}
                                    icon={<AirlineSeatReclineExtraIcon />}
                                    checkedIcon={<AirlineSeatReclineExtraIcon />}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="right">
                <table>
                    <tr>
                        <td>
                            <div className="rightLeft">
                                <h4>SEAT SELECTION</h4>
                                <label htmlFor="">Selected Seat:</label>
                                <ul>
                                    <li className='selected'><AirlineSeatReclineExtraIcon/> Selected</li>
                                    <li className='unavailable'><AirlineSeatReclineExtraIcon/> Booked</li>
                                    <li className='available'><AirlineSeatReclineExtraIcon/> Available</li>
                                </ul>
                                <input type="text" placeholder='Enter Pick-Up point' />
                                <input type="text" placeholder='Enter Drop Point' />
                                <label htmlFor="">Specify Additional Package(Optional)</label>
                                <input type="text" placeholder='Package Description' />
                                <input type="number" name="" id="" placeholder='Estimated Weight' />
                            </div>
                        </td>
                        <td>
                            <div className="rightRight">
                                <h4>BOOKING SUMMARY</h4>
                                <label htmlFor="">From: </label>
                                <label htmlFor="">Going To: </label>
                                <label htmlFor="">Date: </label>
                                <label htmlFor="">Arrival: </label>
                                <label htmlFor="">Number of Seats: </label>
                                <label htmlFor="">Fare: </label>
                                <input type="tel" name="" id="" placeholder='Phone Number'/>
                                <input type="email" name="" id="" placeholder='Email' />
                                <button type="submit">Book Now</button>
                                <p><b>IMPORTANT</b></p>
                                <p>THE VEHICLE LEAVES SHEKILANGO (MAZENSE) AT 4:30 a.m (4:30 Hrs) early morning</p>
                            </div>
                        </td>
                    </tr>
                </table>


            </div>
        </div>

    );
}

export default SeatLayout;

