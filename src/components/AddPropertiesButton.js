import React, { useState } from 'react';
import { addSampleProperties } from '../utils/addSampleProperties';

const AddPropertiesButton = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleAddProperties = async () => {
    setLoading(true);
    setMessage('');
    
    try {
      const result = await addSampleProperties();
      
      if (result.success) {
        setMessage(`✅ Successfully added ${result.count} properties to the database!`);
      } else {
        setMessage(`❌ Error: ${result.error}`);
      }
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: '20px', 
      right: '20px', 
      zIndex: 9999, 
      background: 'white', 
      padding: '20px', 
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      border: '1px solid #ddd',
      maxWidth: '300px'
    }}>
      <h4 style={{ marginBottom: '15px', color: '#333' }}>Database Setup</h4>
      
      <button
        onClick={handleAddProperties}
        disabled={loading}
        style={{
          background: loading ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer',
          width: '100%',
          fontSize: '14px',
          fontWeight: '600'
        }}
      >
        {loading ? 'Adding Properties...' : 'Add 10 Sample Properties'}
      </button>
      
      {message && (
        <div style={{
          marginTop: '15px',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '14px',
          backgroundColor: message.includes('✅') ? '#d4edda' : '#f8d7da',
          color: message.includes('✅') ? '#155724' : '#721c24',
          border: `1px solid ${message.includes('✅') ? '#c3e6cb' : '#f5c6cb'}`
        }}>
          {message}
        </div>
      )}
      
      <div style={{ marginTop: '15px', fontSize: '12px', color: '#666' }}>
        <strong>Note:</strong> Click the button above to populate your Firebase database with 10 sample properties. You can remove this component after adding the properties.
      </div>
    </div>
  );
};

export default AddPropertiesButton;
