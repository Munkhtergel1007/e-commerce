import React from "react";

export const priceFormat = (_number, _decimal) => {
  if (_number) {
    let result = _number.toFixed(_decimal).toString();
    result = result.replace(/\d+/, (n) => {
      return n.replace(/(\d)(?=(\d{3})+$)/g, ($1) => {
        return `${$1},`;
      });
    });
    return result;
  }
};
