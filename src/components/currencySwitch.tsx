import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'type/types';

const CurrencySwitch = ({ price }) => {
  const currencyRateList = useSelector((state: RootState) => {
    const {
      currencyReducer: { currency },
    } = state;
    return currency;
  });

  const currencyList = [
    { name: 'USD', symbol: '$' },
    { name: 'JPY', symbol: '¥' },
    { name: 'EUR', symbol: '€' },
    { name: 'GBP', symbol: '£' },
  ];
  const [selectedCurrency, setSelectedCurrency] = useState(currencyList[0]);
  const [open, setOpen] = useState(false);
  const optionList = currencyList.filter((cur) => cur.name !== selectedCurrency.name);
  const dropDownHandler = () => setOpen(!open);
  const dropDownMenu = `dropdown-menu ${open ? 'show' : ''}`;
  const priceWithCurrency = selectedCurrency.name !== 'USD' ? price * currencyRateList['rates'][selectedCurrency.name] : price;
  const updateCuurency = (evt) => {
    const { id } = evt.target;
    const currencyObject = currencyList.find((cur) => cur.name === id);
    setSelectedCurrency(currencyObject);
    setOpen(false);
  };
  return (
    <>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" onClick={dropDownHandler}>
          {selectedCurrency.symbol}
        </button>
        <div className={dropDownMenu} aria-labelledby="dropdownMenuButton">
          {optionList.map((cur, index) => (
            <a key={index} id={cur.name} onClick={updateCuurency} className="dropdown-item">
              {cur.symbol}
            </a>
          ))}
        </div>
      </div>
      <span>{priceWithCurrency.toFixed(2)}</span>
    </>
  );
};

export default CurrencySwitch;
