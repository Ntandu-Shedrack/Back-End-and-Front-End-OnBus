import * as React from 'react';
import './SeatLayout.css';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


// const getAnimalsContent = animals => {
//     let content = [];
//     for (let i = 0; i < animals.length; i++) {
//       const item = animals[i];
//       content.push(<li key={item.id}>{item.animal}</li>);
//     }
//     return content;
//   };

//   return <ul>{getAnimalsContent(animals)}</ul>;


function SeatLayout() {
    return (
        <div className="seatContainer">
            <div className="left">
                <div className="leftLeft">
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                </div>
                <div className="leftRight">
                <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
                    <tr>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                        <td><Checkbox {...label} icon={<AirlineSeatReclineExtraIcon/>} checkedIcon={<AirlineSeatReclineExtraIcon/>} /></td>
                    </tr>
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



// import * as React from 'react';
// import Checkbox from '@mui/material/Checkbox';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// export default function IconCheckboxes() {
//   return (
//     <div>
//       <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
//       <Checkbox
//         {...label}
//         icon={<BookmarkBorderIcon />}
//         checkedIcon={<BookmarkIcon />}
//       />
//     </div>
//   );
// }
