export function getFirstPart(num) { 
    const decimalStr = num.toString().split('.')[0];
    return Number(decimalStr);
  }

export function getDecimalPart(num) {
    if (Number.isInteger(num)) {
      return '-';
    }
  
    const decimalStr = num.toString().split('.')[1];
    return Number(decimalStr);
  }