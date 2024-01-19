import React, { useState } from 'react';
import './App.css';

function App() {
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTotal = () => {
    const ticketTypeSelect = document.getElementById('ticketType');
    const ticketQuantitySelect = document.getElementById('ticketQuantity');
    const ministryAmountInput = document.getElementById('ministryAmount');

    const selectedTicketValue = parseInt(ticketTypeSelect.value);
    const selectedQuantity = parseInt(ticketQuantitySelect.value);
    const ministryAmount = ministryAmountInput.value ? parseInt(ministryAmountInput.value) : 0;

    const calculatedTotal = selectedTicketValue * selectedQuantity + ministryAmount;
    setTotalAmount(calculatedTotal);

    window.alert(`Payment successful!\nThank you for supporting Bereans Ministry\nTotal Amount: Ksh ${calculatedTotal}`);
  };
  return (
    <div className="container p-0">
      <div className="card px-4">
        <p className="h8 py-3">Bereans Ministries</p>
        <p className="h8 py-3">Concert</p>

        <form>
          <div className="row gx-3">
            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Name</p>
                <input className="form-control mb-3" type="text" placeholder="Name" />
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Email</p>
                <input className="form-control mb-3" type="email" placeholder="john@gmail.com" />
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Ticket Type</p>
                <select id="ticketType" className="form-select mb-3">
                  <option value="2000">VIP - Ksh 2000</option>
                  <option value="500">Normal - Ksh 500</option>
                  <option value="2500">Family - Ksh 2500</option>
                  <option value="1500">Couple - Ksh 1500</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Number of Tickets</p>
                <select id="ticketQuantity" className="form-select mb-3">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex flex-column">
                <p className="text mb-1">Support The Ministry (Optional)</p>
                <input id="ministryAmount" className="form-control mb-3" type="number" placeholder="Enter amount" />
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex flex-column">
                <button id="calculateTotal" className="btn btn-primary mb-3" onClick={calculateTotal}>
                  <span className="ps-3">Pay</span>
                  <span className="fas fa-arrow-right"></span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
