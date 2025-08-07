import React, { useState, useEffect } from 'react';

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
    <section className="calculator-section full-bleed py-5" id="calculator">
      {/* Top separator */}
      <div className="separator-group d-none d-md-block">
        <div className="separator-line"></div>
        <div className="separator-bar"></div>
      </div>

      <div className="container-fluid px-0">
        {/* Header */}
        <div className="row">
          <div className="col-12 text-center mb-3">
            <h2 className="display-5 fw-bold text-white mb-1">
              Investment Calculator
            </h2>
            <p className="text-secondary mb-0">
              Discover your potential returns in Dubai's thriving real estate market
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12">
            <div className="calculator-container">
              
              {/* Currency Info */}
              <div className="currency-info text-center">
                <div className="currency-badge">
                  <i className="fa-solid fa-globe me-2"></i>
                  Showing amounts in <strong>AED - UAE Dirham</strong>
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="row gx-4">
                {/* LEFT: Input Section */}
                <div className="col-lg-6">
                  <div className="input-section">
                    <h3 className="input-title text-white">
                      <i className="fa-solid fa-calculator me-2"></i>
                      Your Investment Amount
                    </h3>

                    {/* Amount Input */}
                    <div className="amount-input-group">
                      <span className="currency-symbol">AED</span>
                      <input 
                        type="number" 
                        className="form-control amount-input" 
                        value={investmentAmount} 
                        min="0" 
                        placeholder="Enter amount"
                        onChange={handleAmountChange}
                      />
                    </div>

                    {/* Quick Amounts */}
                    <div className="quick-amounts">
                      <p className="quick-label text-white">Quick amounts:</p>
                      <div className="quick-buttons">
                        {quickAmounts.map((amount, index) => (
                          <button 
                            key={index}
                            className="btn btn-outline-light quick-btn" 
                            onClick={() => handleQuickAmount(amount.value)}
                          >
                            {amount.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Investment Benefits */}
                    <div className="investment-benefits">
                      <h4 className="benefits-title text-white">
                        <i className="fa-solid fa-star me-2"></i>
                        Why Invest in Dubai?
                      </h4>
                      <div className="benefits-list">
                        {benefits.map((benefit, index) => (
                          <div key={index} className="benefit-item">
                            <i className="fa-solid fa-check-circle text-danger"></i>
                            <span className="text-secondary">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Results Section */}
                <div className="col-lg-6">
                  <div className="results-section">
                    <h3 className="results-title text-white">
                      <i className="fa-solid fa-chart-line me-2"></i>
                      Your Potential Returns
                    </h3>

                    {/* Metric Cards */}
                    <div className="metrics-grid">
                      {/* Monthly Income */}
                      <div className="metric-card highlight">
                        <div className="metric-icon">
                          <i className="fa-solid fa-coins text-danger"></i>
                        </div>
                        <div className="metric-content">
                          <h4 className="text-white">Monthly Rental Income</h4>
                          <p className="metric-value text-danger">
                            {formatCurrency(monthlyIncome)}
                          </p>
                          <small className="text-secondary">Based on 6% annual yield</small>
                        </div>
                      </div>

                      {/* 5-Year Value */}
                      <div className="metric-card">
                        <div className="metric-icon">
                          <i className="fa-solid fa-coins text-danger"></i>
                        </div>
                        <div className="metric-content">
                          <h4 className="text-white">5-Year Value</h4>
                          <p className="metric-value text-danger">
                            {formatCurrency(fiveYearValue)}
                          </p>
                          <small className="profit text-success">
                            +{formatCurrency(fiveYearProfit)} profit
                          </small>
                        </div>
                      </div>

                      {/* 10-Year Value */}
                      <div className="metric-card">
                        <div className="metric-icon">
                          <i className="fa-solid fa-rocket text-danger"></i>
                        </div>
                        <div className="metric-content">
                          <h4 className="text-white">10-Year Value</h4>
                          <p className="metric-value text-danger">
                            {formatCurrency(tenYearValue)}
                          </p>
                          <small className="profit text-success">
                            +{formatCurrency(tenYearProfit)} profit
                          </small>
                        </div>
                      </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="disclaimer-note">
                      <i className="fa-solid fa-info-circle text-warning"></i>
                      <strong className="text-white">Important:</strong>
                      <span className="text-secondary">
                        {' '}Estimates based on historical Dubai real‑estate performance (10% appreciation, 6% yield). Actual returns may vary.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="separator-group d-none d-md-block">
        <div className="separator-line"></div>
        <div className="separator-bar"></div>
      </div>
    </section>
  );
};

export default InvestmentCalculator;
