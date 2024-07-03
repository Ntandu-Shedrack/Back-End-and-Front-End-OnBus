import React, { useState } from 'react';
import './SeatLayout.css';

function SeatLayout() {
    const [selectedSeats, setSelectedSeats] = useState([]);

    // Handle seat selection
    const handleSeatSelect = (seatNumber) => {
        const isSelected = selectedSeats.includes(seatNumber);

        if (isSelected) {
            setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
        } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
        }
    };

    return (
        <div className="container">
            <div className="seat-selection card">
                <div className="legend">
                    <div className="legend-item">
                        <div className="legend-color available"></div>
                        <span>Available</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color sold"></div>
                        <span>Sold</span>
                    </div>
                    <div className="legend-item">
                        <div className="legend-color selected"></div>
                        <span>Selected</span>
                    </div>
                </div>
                <div className="seats">
                    <table className='seat-table'>
                        <tbody>
                            <tr>
                                <td><div className='seat-empty'></div></td>
                                <td><div className='seat-empty'></div></td>
                                <td><div className='seat-empty'></div></td>
                                <td><div className='seat-empty'></div></td>
                                <td><img src="https://www.busbora.co.tz/assets/img/stearing.png" alt="Driver" title="Driver" height="42" class="stearing_image" /></td>
                            </tr>
                            <tr>
                                <td><div className={`seat available ${selectedSeats.includes(1) ? 'selected' : ''}`} onClick={() => handleSeatSelect(1)}>1</div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(2) ? 'selected' : ''}`} onClick={() => handleSeatSelect(2)}>2</div></td>
                                <td><div className='seat-empty'></div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(4) ? 'selected' : ''}`} onClick={() => handleSeatSelect(4)}>4</div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(5) ? 'selected' : ''}`} onClick={() => handleSeatSelect(5)}>5</div></td>
                            </tr>
                            <tr>
                                <td><div className={`seat available ${selectedSeats.includes(1) ? 'selected' : ''}`} onClick={() => handleSeatSelect(1)}>1</div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(2) ? 'selected' : ''}`} onClick={() => handleSeatSelect(2)}>2</div></td>
                                <td><div className='seat-empty'></div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(4) ? 'selected' : ''}`} onClick={() => handleSeatSelect(4)}>4</div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(5) ? 'selected' : ''}`} onClick={() => handleSeatSelect(5)}>5</div></td>
                            </tr>
                            <tr>
                                <td><div className={`seat available ${selectedSeats.includes(1) ? 'selected' : ''}`} onClick={() => handleSeatSelect(1)}>1</div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(2) ? 'selected' : ''}`} onClick={() => handleSeatSelect(2)}>2</div></td>
                                <td><div className='seat-empty'></div></td>
                                <td><div className={`seat available ${selectedSeats.includes(4) ? 'selected' : ''}`} onClick={() => handleSeatSelect(4)}>4</div></td>
                                <td><div className={`seat available ${selectedSeats.includes(5) ? 'selected' : ''}`} onClick={() => handleSeatSelect(5)}>5</div></td>
                            </tr>
                            <tr>
                                <td><div className={`seat sold ${selectedSeats.includes(1) ? 'selected' : ''}`} onClick={() => handleSeatSelect(1)}>1</div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(2) ? 'selected' : ''}`} onClick={() => handleSeatSelect(2)}>2</div></td>
                                <td><div className='seat-empty'></div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(4) ? 'selected' : ''}`} onClick={() => handleSeatSelect(4)}>4</div></td>
                                <td><div className={`seat available ${selectedSeats.includes(5) ? 'selected' : ''}`} onClick={() => handleSeatSelect(5)}>5</div></td>
                            </tr>
                            <tr>
                                <td><div className={`seat available ${selectedSeats.includes(1) ? 'selected' : ''}`} onClick={() => handleSeatSelect(1)}>1</div></td>
                                <td><div className={`seat available ${selectedSeats.includes(2) ? 'selected' : ''}`} onClick={() => handleSeatSelect(2)}>2</div></td>
                                <td><div className='seat-empty'></div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(4) ? 'selected' : ''}`} onClick={() => handleSeatSelect(4)}>4</div></td>
                                <td><div className={`seat available ${selectedSeats.includes(5) ? 'selected' : ''}`} onClick={() => handleSeatSelect(5)}>5</div></td>
                            </tr>
                            <tr>
                                <td><div className={`seat available ${selectedSeats.includes(1) ? 'selected' : ''}`} onClick={() => handleSeatSelect(1)}>1</div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(2) ? 'selected' : ''}`} onClick={() => handleSeatSelect(2)}>2</div></td>
                                <td><div className='seat-empty'></div></td>
                                <td><div className={`seat available ${selectedSeats.includes(4) ? 'selected' : ''}`} onClick={() => handleSeatSelect(4)}>4</div></td>
                                <td><div className={`seat available ${selectedSeats.includes(5) ? 'selected' : ''}`} onClick={() => handleSeatSelect(5)}>5</div></td>
                            </tr>
                            <tr>
                                <td><div className={`seat available ${selectedSeats.includes(1) ? 'selected' : ''}`} onClick={() => handleSeatSelect(1)}>1</div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(2) ? 'selected' : ''}`} onClick={() => handleSeatSelect(2)}>2</div></td>
                                <td><div className='seat-empty'></div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(4) ? 'selected' : ''}`} onClick={() => handleSeatSelect(4)}>4</div></td>
                                <td><div className={`seat available ${selectedSeats.includes(5) ? 'selected' : ''}`} onClick={() => handleSeatSelect(5)}>5</div></td>
                            </tr>
                            <tr>
                                <td><div className={`seat available ${selectedSeats.includes(1) ? 'selected' : ''}`} onClick={() => handleSeatSelect(1)}>1</div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(2) ? 'selected' : ''}`} onClick={() => handleSeatSelect(2)}>2</div></td>
                                <td><div className='seat-empty'></div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(4) ? 'selected' : ''}`} onClick={() => handleSeatSelect(4)}>4</div></td>
                                <td><div className={`seat available ${selectedSeats.includes(5) ? 'selected' : ''}`} onClick={() => handleSeatSelect(5)}>5</div></td>
                            </tr>
                            <tr>
                                <td><div className={`seat available ${selectedSeats.includes(1) ? 'selected' : ''}`} onClick={() => handleSeatSelect(1)}>1</div></td>
                                <td><div className={`seat available ${selectedSeats.includes(2) ? 'selected' : ''}`} onClick={() => handleSeatSelect(2)}>2</div></td>
                                <td><div className='seat-empty'></div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(4) ? 'selected' : ''}`} onClick={() => handleSeatSelect(4)}>4</div></td>
                                <td><div className={`seat available ${selectedSeats.includes(5) ? 'selected' : ''}`} onClick={() => handleSeatSelect(5)}>5</div></td>
                            </tr>
                            <tr>
                                <td><div className={`seat available ${selectedSeats.includes(1) ? 'selected' : ''}`} onClick={() => handleSeatSelect(1)}>1</div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(2) ? 'selected' : ''}`} onClick={() => handleSeatSelect(2)}>2</div></td>
                                <td><div className='seat-empty'></div></td>
                                <td><div className={`seat available ${selectedSeats.includes(4) ? 'selected' : ''}`} onClick={() => handleSeatSelect(4)}>4</div></td>
                                <td><div className={`seat available ${selectedSeats.includes(5) ? 'selected' : ''}`} onClick={() => handleSeatSelect(5)}>5</div></td>
                            </tr>
                            <tr>
                                <td><div className={`seat available ${selectedSeats.includes(1) ? 'selected' : ''}`} onClick={() => handleSeatSelect(1)}>1</div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(2) ? 'selected' : ''}`} onClick={() => handleSeatSelect(2)}>2</div></td>
                                <td><div className='seat-empty'></div></td>
                                <td><div className={`seat sold ${selectedSeats.includes(4) ? 'selected' : ''}`} onClick={() => handleSeatSelect(4)}>4</div></td>
                                <td><div className={`seat available ${selectedSeats.includes(5) ? 'selected' : ''}`} onClick={() => handleSeatSelect(5)}>5</div></td>
                            </tr>
                            <tr>
                                <td><div className={`seat available ${selectedSeats.includes(1) ? 'selected' : ''}`} onClick={() => handleSeatSelect(1)}>1</div></td>
                                <td><div className={`seat available ${selectedSeats.includes(2) ? 'selected' : ''}`} onClick={() => handleSeatSelect(2)}>2</div></td>
                                <td><div className={`seat available ${selectedSeats.includes(5) ? 'selected' : ''}`} onClick={() => handleSeatSelect(5)}>5</div></td>
                                <td><div className={`seat available ${selectedSeats.includes(4) ? 'selected' : ''}`} onClick={() => handleSeatSelect(4)}>4</div></td>
                                <td><div className={`seat available ${selectedSeats.includes(5) ? 'selected' : ''}`} onClick={() => handleSeatSelect(5)}>5</div></td>
                            </tr>
                        </tbody>
                    </table>
                    {/* Add more seats as needed */}
                </div>
            </div>

            {selectedSeats.length > 0 && (
                <div className="booking-forms">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="boarding-dropping">
                                        <label htmlFor="boarding">Boarding Point</label>
                                        <input type="text" id="boarding" name="boarding" placeholder="Boarding Point" />
                                    </div>
                                </td>
                                <td>
                                    <div className="baording-dropping">
                                        <label htmlFor="dropping">Dropping Point</label>
                                        <input type="text" id="dropping" name="dropping" placeholder="Dropping Point" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                    {selectedSeats.map((seatNumber) => (
                        <div key={`booking-${seatNumber}`} className="booking-form card">
                            <div className="form-header">
                                <h3>Passenger 1 (Seat-{seatNumber})</h3>
                                <button className="close-btn" onClick={() => handleSeatSelect(seatNumber)}>
                                    X
                                </button>
                            </div>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" name="firstName" placeholder="First name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" placeholder="Last name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile</label>
                                    <div className="mobile-input">
                                        <span>+255</span>
                                        <input type="tel" id="mobile" name="mobile" placeholder="XXX XXX XXX" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="gender">Gender</label>
                                    <select id="gender" name="gender">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="type">Type</label>
                                    <select id="type" name="type">
                                        <option value="adult">Adult</option>
                                        <option value="child">Child</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email (Optional)</label>
                                    <input type="email" id="email" name="email" placeholder="Email (Optional)" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="idType">Id Type</label>
                                    <select id="idType" name="idType">
                                        <option value="nil">NIL</option>
                                    </select>
                                </div>
                                <div className="total-cost">
                                    <span>Total</span>
                                    <span>TZS 40000.00</span>
                                </div>
                                <button type="submit" className="continue-btn">
                                    CONTINUE
                                </button>
                            </form>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SeatLayout;
