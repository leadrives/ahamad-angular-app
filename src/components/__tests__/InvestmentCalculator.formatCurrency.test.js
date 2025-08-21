// Basic unit tests for formatCurrency logic (mirrors component implementation)

const formatCurrency = (amount, showSymbol = true) => {
  if (amount >= 1000000) {
    const millions = (amount / 1000000).toFixed(2);
    return showSymbol ? `AED ${millions}M` : `${millions}M`;
  } else if (amount >= 1000) {
    const thousands = (amount / 1000).toFixed(0);
    return showSymbol ? `AED ${thousands}K` : `${thousands}K`;
  } else {
    return showSymbol ? `AED ${Math.round(amount).toLocaleString()}` : Math.round(amount).toLocaleString();
  }
};

describe('formatCurrency', () => {
  it('formats sub-thousand values with symbol', () => {
    expect(formatCurrency(950)).toBe('AED 950');
  });
  it('formats thousands with K suffix', () => {
    expect(formatCurrency(125000)).toBe('AED 125K');
  });
  it('formats millions with M and two decimals', () => {
    expect(formatCurrency(2500000)).toBe('AED 2.50M');
  });
  it('omits symbol when showSymbol is false', () => {
    expect(formatCurrency(1500000, false)).toBe('1.50M');
  });
});
