import React, { useState, useEffect } from 'react';
import './InvestmentCalculator.css';

const InvestmentCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(1000000);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [fiveYearValue, setFiveYearValue] = useState(0);
  const [tenYearValue, setTenYearValue] = useState(0);
  const [fiveYearProfit, setFiveYearProfit] = useState(0);
  const [tenYearProfit, setTenYearProfit] = useState(0);

  const quickAmounts = [
    { label: "AED 500K", value: 500000 },
    { label: "AED 1M", value: 1000000 },
    { label: "AED 2M", value: 2000000 },
    { label: "AED 5M", value: 5000000 }
  ];

  const benefits = [
    "Tax-free rental income",
    "High rental yields (4-8%)",
    "Strong capital appreciation",
    "World-class infrastructure"
  ];

  // Format currency function
  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `AED ${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `AED ${(amount / 1000).toFixed(0)}K`;
    } else {
      return `AED ${amount.toLocaleString()}`;
    }
  };

  // Calculate returns based on investment amount
  const calculateReturns = (amount) => {
    const annualYield = 0.06; // 6% annual yield
    const appreciationRate = 0.10; // 10% annual appreciation
    
    // Monthly rental income
    const monthly = (amount * annualYield) / 12;
    
    // 5-year projections
    const fiveYearAppreciated = amount * Math.pow(1 + appreciationRate, 5);
    const fiveYearRental = amount * annualYield * 5;
    const fiveYearTotal = fiveYearAppreciated + fiveYearRental;
    const fiveYearProfitCalc = fiveYearTotal - amount;
    
    // 10-year projections
    const tenYearAppreciated = amount * Math.pow(1 + appreciationRate, 10);
    const tenYearRental = amount * annualYield * 10;
    const tenYearTotal = tenYearAppreciated + tenYearRental;
    const tenYearProfitCalc = tenYearTotal - amount;
    
    return {
      monthly,
      fiveYearTotal,
      tenYearTotal,
      fiveYearProfitCalc,
      tenYearProfitCalc
    };
  };

  // Update calculations when investment amount changes
  useEffect(() => {
    const results = calculateReturns(investmentAmount);
    setMonthlyIncome(results.monthly);
    setFiveYearValue(results.fiveYearTotal);
    setTenYearValue(results.tenYearTotal);
    setFiveYearProfit(results.fiveYearProfitCalc);
    setTenYearProfit(results.tenYearProfitCalc);
  }, [investmentAmount]);

  const handleAmountChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setInvestmentAmount(value);
  };

  const handleQuickAmount = (amount) => {
    setInvestmentAmount(amount);
  };

  return (
    <div className="investment-calculator">
      <section className="calculator-section" id="calculator">
        <div className="calculator-container">
        
        {/* Section Header */}
        <div className="calculator-header">
          <h2 className="calculator-main-title">Investment Calculator</h2>
          <p className="calculator-subtitle">Discover Your Potential Returns</p>
        </div>

        {/* Main Calculator Content */}
        <div className="calculator-content">
          
          {/* Investment Input Section */}
          <div className="calculator-input-section">
            <div className="input-card">
              <div className="input-header">
                <div className="input-icon">
                  <i className="fa-solid fa-calculator"></i>
                </div>
                <h3 className="input-title">Your Investment Amount</h3>
              </div>

              {/* Currency Info */}
              <div className="currency-info">
                <div className="currency-badge">
                  <i className="fa-solid fa-globe"></i>
                  <span>Amounts in <strong>AED - UAE Dirham</strong></span>
                </div>
              </div>

              {/* Amount Input */}
              <div className="amount-input-group">
                <span className="currency-symbol">AED</span>
                <input 
                  type="number" 
                  className="amount-input" 
                  value={investmentAmount} 
                  min="0" 
                  placeholder="Enter amount"
                  onChange={handleAmountChange}
                />
              </div>

              {/* Quick Amounts */}
              <div className="quick-amounts">
                <p className="quick-label">Quick amounts:</p>
                <div className="quick-buttons">
                  {quickAmounts.map((amount, index) => (
                    <button 
                      key={index}
                      className={`quick-btn ${investmentAmount === amount.value ? 'active' : ''}`}
                      onClick={() => handleQuickAmount(amount.value)}
                    >
                      {amount.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Investment Benefits */}
              <div className="investment-benefits">
                <h4 className="benefits-title">
                  <div className="benefits-icon">
                    <i className="fa-solid fa-gem"></i>
                  </div>
                  Why Invest in Dubai?
                </h4>
                <div className="benefits-grid">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                      <div className="benefit-card-icon">
                        <i className="fa-solid fa-trophy"></i>
                      </div>
                      <span className="benefit-card-text">{benefit}</span>
                      <div className="benefit-card-glow"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="calculator-results-section">
            <div className="results-card">
              <div className="results-header">
                <div className="results-icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h3 className="results-title">Your Potential Returns</h3>
              </div>

              {/* Metrics Grid */}
              <div className="metrics-grid">
                {/* Monthly Income */}
                <div className="metric-card featured">
                  <div className="metric-icon">
                    <i className="fa-solid fa-coins"></i>
                  </div>
                  <div className="metric-content">
                    <h4 className="metric-label">Monthly Rental Income</h4>
                    <p className="metric-value">
                      {formatCurrency(monthlyIncome)}
                    </p>
                    <small className="metric-note">Based on 6% annual yield</small>
                  </div>
                  <div className="metric-accent"></div>
                </div>

                {/* 5-Year Value */}
                <div className="metric-card">
                  <div className="metric-icon">
                    <i className="fa-solid fa-trending-up"></i>
                  </div>
                  <div className="metric-content">
                    <h4 className="metric-label">5-Year Total Value</h4>
                    <p className="metric-value">
                      {formatCurrency(fiveYearValue)}
                    </p>
                    <small className="metric-profit">
                      +{formatCurrency(fiveYearProfit)} profit
                    </small>
                  </div>
                  <div className="metric-accent"></div>
                </div>

                {/* 10-Year Value */}
                <div className="metric-card">
                  <div className="metric-icon">
                    <i className="fa-solid fa-rocket"></i>
                  </div>
                  <div className="metric-content">
                    <h4 className="metric-label">10-Year Total Value</h4>
                    <p className="metric-value">
                      {formatCurrency(tenYearValue)}
                    </p>
                    <small className="metric-profit">
                      +{formatCurrency(tenYearProfit)} profit
                    </small>
                  </div>
                  <div className="metric-accent"></div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="disclaimer-note">
                <div className="disclaimer-icon">
                  <i className="fa-solid fa-info-circle"></i>
                </div>
                <div className="disclaimer-content">
                  <strong>Important:</strong>
                  <span>
                    Estimates based on historical Dubai real estate performance (10% appreciation, 6% yield). 
                    Actual returns may vary based on market conditions.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
};

export default InvestmentCalculator;
