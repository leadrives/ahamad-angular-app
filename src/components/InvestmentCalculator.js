import React, { useState, useEffect } from 'react';
import './InvestmentCalculator.css';

const InvestmentCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(1000000);
  const [results, setResults] = useState({
    monthlyIncome: 0,
    yearlyIncome: 0,
    fiveYearValue: 0,
    tenYearValue: 0,
    fiveYearProfit: 0,
    tenYearProfit: 0,
    roi5Year: 0,
    roi10Year: 0
  });

  const quickAmounts = [
    { label: "500K AED", value: 500000 },
    { label: "1M AED", value: 1000000 },
    { label: "2M AED", value: 2000000 },
    { label: "5M AED", value: 5000000 }
  ];

  const investmentBenefits = [
    { icon: 'fas fa-coins', title: 'Tax-Free Income', description: 'Zero rental income tax in UAE' },
    { icon: 'fas fa-chart-line', title: 'High Returns', description: '6-8% annual rental yields' },
    { icon: 'fas fa-shield-alt', title: 'Strong Regulation', description: 'Robust investor protection framework' }
  ];

  // Format currency with proper AED formatting
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

  // Calculate investment returns
  const calculateReturns = (amount) => {
    const annualYield = 0.06; // 6% rental yield
    const appreciationRate = 0.08; // 8% annual appreciation
    
    // Income calculations
    const monthlyIncome = (amount * annualYield) / 12;
    const yearlyIncome = amount * annualYield;
    
    // 5-year projections
    const fiveYearAppreciated = amount * Math.pow(1 + appreciationRate, 5);
    const fiveYearRental = yearlyIncome * 5;
    const fiveYearValue = fiveYearAppreciated + fiveYearRental;
    const fiveYearProfit = fiveYearValue - amount;
    const roi5Year = ((fiveYearProfit / amount) * 100);
    
    // 10-year projections
    const tenYearAppreciated = amount * Math.pow(1 + appreciationRate, 10);
    const tenYearRental = yearlyIncome * 10;
    const tenYearValue = tenYearAppreciated + tenYearRental;
    const tenYearProfit = tenYearValue - amount;
    const roi10Year = ((tenYearProfit / amount) * 100);
    
    return {
      monthlyIncome,
      yearlyIncome,
      fiveYearValue,
      tenYearValue,
      fiveYearProfit,
      tenYearProfit,
      roi5Year,
      roi10Year
    };
  };

  useEffect(() => {
    const newResults = calculateReturns(investmentAmount);
    setResults(newResults);
  }, [investmentAmount]);

  const handleAmountChange = (e) => {
    const value = Math.max(0, parseInt(e.target.value.replace(/[^0-9]/g, '')) || 0);
    setInvestmentAmount(value);
  };

  const handleQuickAmount = (amount) => {
    setInvestmentAmount(amount);
  };

  const formatInputValue = (value) => {
    return value.toLocaleString();
  };

  return (
    <section id="investment-calculator" className="ic-section">
      <div className="investment-calc-container">
        {/* Header (refined structure to mirror PartnersSection) */}
        <div className="partners-header calculator-header">
          <h2 className="partners-main-title calculator-main-title">
            Investment Calculator
          </h2>
          <h3 className="partners-subtitle calculator-subtitle">
            Instant Dubai Property ROI & Growth Projection
          </h3>
          
        </div>
        

        {/* Main Calculator Layout */}
        <div className="investment-calc-main">
          
          {/* Input Panel */}
          <div className="investment-calc-input-panel">
            <div className="investment-calc-card">
              
              {/* Investment Amount Input */}
              <div className="investment-calc-input-section">
                <div className="investment-calc-input-header">
                  <h3 className="investment-calc-input-title">Investment Amount</h3>
                  <span className="investment-calc-currency-badge">AED</span>
                </div>
                <div className="investment-calc-input-wrapper">
                  <span className="investment-calc-input-symbol">AED</span>
                  <input
                    type="text"
                    className="investment-calc-main-input"
                    value={formatInputValue(investmentAmount)}
                    onChange={handleAmountChange}
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              {/* Quick Amount Buttons */}
              <div className="investment-calc-quick-section">
                <label className="investment-calc-quick-label">Quick amounts:</label>
                <div className="investment-calc-quick-buttons">
                  {quickAmounts.map((amount, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`investment-calc-quick-btn ${investmentAmount === amount.value ? 'investment-calc-quick-btn-active' : ''}`}
                      onClick={() => handleQuickAmount(amount.value)}
                    >
                      {amount.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div className="investment-calc-benefits-section">
                <h4 className="investment-calc-benefits-title">
                  <i className="fas fa-gem"></i>
                  Dubai Benefits
                </h4>
                <div className="investment-calc-benefits-grid">
                  {investmentBenefits.map((benefit, index) => (
                    <div key={index} className="investment-calc-benefit-card">
                      <div className="investment-calc-benefit-icon">
                        <i className={benefit.icon}></i>
                      </div>
                      <div className="investment-calc-benefit-content">
                        <h6 className="investment-calc-benefit-title">{benefit.title}</h6>
                        <small className="investment-calc-benefit-desc">{benefit.description}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="investment-calc-results-panel">
            <div className="investment-calc-card">
              
              <div className="investment-calc-results-header">
                <h3 className="investment-calc-results-title">
                  <i className="fas fa-chart-line"></i>
                  Projections
                </h3>
                <p className="investment-calc-results-subtitle">Based on Dubai market trends</p>
              </div>

              {/* Metrics Grid */}
              <div className="investment-calc-metrics-grid">
                
                {/* Monthly Income */}
                <div className="investment-calc-metric-card investment-calc-metric-featured">
                  <div className="investment-calc-metric-icon">
                    <i className="fas fa-coins"></i>
                  </div>
                  <div className="investment-calc-metric-content">
                    <div className="investment-calc-metric-label">Monthly Income</div>
                    <div className="investment-calc-metric-value">{formatCurrency(results.monthlyIncome)}</div>
                    <div className="investment-calc-metric-note">6% annual yield</div>
                  </div>
                </div>

                {/* Annual Income */}
                <div className="investment-calc-metric-card">
                  <div className="investment-calc-metric-icon">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div className="investment-calc-metric-content">
                    <div className="investment-calc-metric-label">Annual Income</div>
                    <div className="investment-calc-metric-value">{formatCurrency(results.yearlyIncome)}</div>
                    <div className="investment-calc-metric-note">Tax-free</div>
                  </div>
                </div>

                {/* 5-Year Projection */}
                <div className="investment-calc-metric-card">
                  <div className="investment-calc-metric-icon">
                    <i className="fas fa-trending-up"></i>
                  </div>
                  <div className="investment-calc-metric-content">
                    <div className="investment-calc-metric-label">5-Year Value</div>
                    <div className="investment-calc-metric-value">{formatCurrency(results.fiveYearValue)}</div>
                    <div className="investment-calc-metric-profit">
                      +{formatCurrency(results.fiveYearProfit)} ({results.roi5Year.toFixed(0)}% ROI)
                    </div>
                  </div>
                </div>

                {/* 10-Year Projection */}
                <div className="investment-calc-metric-card">
                  <div className="investment-calc-metric-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <div className="investment-calc-metric-content">
                    <div className="investment-calc-metric-label">10-Year Value</div>
                    <div className="investment-calc-metric-value">{formatCurrency(results.tenYearValue)}</div>
                    <div className="investment-calc-metric-profit">
                      +{formatCurrency(results.tenYearProfit)} ({results.roi10Year.toFixed(0)}% ROI)
                    </div>
                  </div>
                </div>

              </div>

              {/* Compact Disclaimer */}
              <div className="investment-calc-disclaimer">
                <div className="investment-calc-disclaimer-icon">
                  <i className="fas fa-info-circle"></i>
                </div>
                <div className="investment-calc-disclaimer-content">
                  <strong>Disclaimer:</strong> Projections based on 8% annual appreciation and 6% rental yield. 
                  Actual returns may vary with market conditions.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculator;
