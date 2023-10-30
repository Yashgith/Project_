import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Vendor() {
    const [salesData, setSalesData] = useState({})

    useEffect(() => {
        axios.get('http://localhost:5000/userData')
            .then((response) => {
                setSalesData(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return (
        <div>
            {Object.keys(salesData).map((vendorName) => (
                <div key={vendorName}>
                    <h2>{vendorName} User Data:</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Shipping Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salesData[vendorName].map((user, index) => (
                                <tr key={index}>
                                    <td>{user.username}</td>
                                    <td>{user.product}</td>
                                    <td>{user.quantity}</td>
                                    <td>{user.shipping}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    )
}

export default Vendor
