import React from "react";
import './busManagement.css';

function BusManagement() {
    return (
        <div className="busManagement">
        <div className="container">
            <div className="form-container">
                <form action="" method="post">
                    <table>
                        <h4>Add New Bus to System</h4>
                        <tr>
                            <td>
                                <label htmlFor="">Bus Plate Number:</label>
                            </td>
                            <td>
                                <input type="text" name="" id="" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="">Bus Capacity</label>
                            </td>
                            <td>
                                <input type="number" name="" id="" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="">Company/Brand Name</label>
                            </td>
                            <td>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value="Tilisho Safaris">Tilisho Safaris</option>
                                    <option value="BM Coach">BM Coach</option>
                                    <option value="Ester Luxury">Ester Luxury</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="">Bus Route</label>
                            </td>
                            <td>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value="DAR ES SALAAM-ARUSHA">DAR ES SALAAM-ARUSHA</option>
                                    <option value="MOROGORO-DAR ES SALAAM">MOROGORO-DAR ES SALAAM</option>
                                    <option value="ARUSHA-DODOMA">ARUSHA-DODOMA</option>
                                    <option value="DODOMA-DAR ES SALAAM">DODOMA-DAR ES SALAAM</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="">Seat Layout</label>
                            </td>
                            <td>
                                <select name="" id="">
                                    <option value=""></option>
                                    <option value="1x2">1x2</option>
                                    <option value="2x2">2x2</option>
                                    <option value="2x3">2x3</option>
                                    <option value="3x3">3x3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="">Bus Capacity</label>
                            </td>
                            <td>
                                <input type="number" name="" id="" />
                            </td>
                        </tr>
                    </table>
                    <button type="submit">Add Bus</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default BusManagement;