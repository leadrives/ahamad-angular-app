import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/config';
import './PropertyManager.css';

const PropertyManager = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    image: '',
    price: '',
    roi: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    parking: '',
    badge: { text: 'Ready', type: 'ready' }
  });

  const badgeOptions = [
    { text: 'Luxury Villa', type: 'luxury' },
    { text: 'Off-Plan', type: 'offplan' },
    { text: 'Ready', type: 'ready' },
    { text: 'Investment', type: 'investment' }
  ];

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const q = query(collection(db, 'properties'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const propertyData = [];
      querySnapshot.forEach((doc) => {
        propertyData.push({ id: doc.id, ...doc.data() });
      });
      setProperties(propertyData);
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setLoading(false);
    }
  };

  const seedSampleProperties = async () => {
    const sampleProperties = [
      {
        title: "Emirates Hills Villa",
        description: "Spectacular 6-bedroom villa with private pool, garden, and stunning city views in Dubai's most prestigious community.",
        location: "Emirates Hills",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=250&fit=crop",
        price: "AED 8.5M",
        roi: "12% ROI",
        details: {
          bedrooms: 6,
          bathrooms: 7,
          area: "8,500 sq ft",
          parking: 4
        },
        badge: { text: "Luxury Villa", type: "luxury" },
        alt: "Emirates Hills Villa",
        featured: true,
        status: "active",
        createdAt: new Date().toISOString()
      },
      {
        title: "Downtown Dubai Apartment",
        description: "Modern 2-bedroom apartment with Burj Khalifa views, premium finishes, and world-class amenities.",
        location: "Downtown Dubai",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop",
        price: "AED 2.8M",
        roi: "18% ROI",
        details: {
          bedrooms: 2,
          bathrooms: 3,
          area: "1,450 sq ft",
          parking: 2
        },
        badge: { text: "Off-Plan", type: "offplan" },
        alt: "Downtown Dubai Apartment",
        featured: true,
        status: "active",
        createdAt: new Date().toISOString()
      },
      {
        title: "Dubai Marina Penthouse",
        description: "Exclusive penthouse with panoramic marina views, private terrace, and premium amenities.",
        location: "Dubai Marina",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=250&fit=crop",
        price: "AED 4.2M",
        roi: "15% ROI",
        details: {
          bedrooms: 4,
          bathrooms: 5,
          area: "3,200 sq ft",
          parking: 3
        },
        badge: { text: "Ready", type: "ready" },
        alt: "Dubai Marina Penthouse",
        featured: true,
        status: "active",
        createdAt: new Date().toISOString()
      }
    ];

    try {
      setLoading(true);
      for (const property of sampleProperties) {
        await addDoc(collection(db, 'properties'), property);
      }
      await fetchProperties();
      alert('Sample properties added successfully!');
    } catch (error) {
      console.error('Error adding sample properties:', error);
      alert('Error adding sample properties. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'badgeText') {
      const selectedBadge = badgeOptions.find(badge => badge.text === value);
      setFormData(prev => ({
        ...prev,
        badge: selectedBadge
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      location: '',
      image: '',
      price: '',
      roi: '',
      bedrooms: '',
      bathrooms: '',
      area: '',
      parking: '',
      badge: { text: 'Ready', type: 'ready' }
    });
    setEditingProperty(null);
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const propertyData = {
        ...formData,
        details: {
          bedrooms: formData.bedrooms,
          bathrooms: parseInt(formData.bathrooms),
          area: formData.area,
          parking: parseInt(formData.parking)
        },
        alt: formData.title,
        featured: true,
        status: 'active',
        createdAt: editingProperty ? editingProperty.createdAt : new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      if (editingProperty) {
        // Update existing property
        await updateDoc(doc(db, 'properties', editingProperty.id), propertyData);
      } else {
        // Add new property
        await addDoc(collection(db, 'properties'), propertyData);
      }

      await fetchProperties();
      resetForm();
    } catch (error) {
      console.error('Error saving property:', error);
      alert('Error saving property. Please try again.');
    }
  };

  const handleEdit = (property) => {
    setFormData({
      title: property.title,
      description: property.description,
      location: property.location,
      image: property.image,
      price: property.price,
      roi: property.roi,
      bedrooms: property.details.bedrooms,
      bathrooms: property.details.bathrooms.toString(),
      area: property.details.area,
      parking: property.details.parking.toString(),
      badge: property.badge
    });
    setEditingProperty(property);
    setShowForm(true);
  };

  const handleDelete = async (propertyId) => {
    if (window.confirm('Are you sure you want to delete this property? This action cannot be undone.')) {
      try {
        await deleteDoc(doc(db, 'properties', propertyId));
        await fetchProperties();
      } catch (error) {
        console.error('Error deleting property:', error);
        alert('Error deleting property. Please try again.');
      }
    }
  };

  if (loading) {
    return (
      <div className="property-manager-loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading properties...</p>
      </div>
    );
  }

  return (
    <div className="property-manager">
      <div className="property-manager-header">
        <div className="header-content">
          <h2>Property Management</h2>
          <p>Manage your property listings</p>
        </div>
        <div className="header-actions">
          {properties.length === 0 && (
            <button 
              className="btn btn-outline-success me-2"
              onClick={seedSampleProperties}
            >
              <i className="fa-solid fa-seedling"></i>
              Add Sample Properties
            </button>
          )}
          <button 
            className="btn btn-primary add-property-btn"
            onClick={() => setShowForm(!showForm)}
          >
            <i className="fa-solid fa-plus"></i>
            Add New Property
          </button>
        </div>
      </div>

      {/* Property Form Modal */}
      {showForm && (
        <div className="custom-modal-backdrop">
          <div className="custom-modal-overlay" onClick={resetForm}></div>
          <div className="custom-modal-container">
            <div className="custom-modal-header">
              <h3>{editingProperty ? 'Edit Property' : 'Add New Property'}</h3>
              <button className="form-close-btn" onClick={resetForm}>
                <i className="fa-solid fa-times"></i>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="property-form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Property Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Emirates Hills Villa"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g., Emirates Hills"
                    required
                  />
                </div>

                <div className="form-group span-2">
                  <label>Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe the property features and highlights..."
                    rows="3"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Image URL *</label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Property Type *</label>
                  <select
                    name="badgeText"
                    value={formData.badge.text}
                    onChange={handleInputChange}
                    required
                  >
                    {badgeOptions.map((option) => (
                      <option key={option.type} value={option.text}>
                        {option.text}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Price *</label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="e.g., AED 2.5M"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>ROI *</label>
                  <input
                    type="text"
                    name="roi"
                    value={formData.roi}
                    onChange={handleInputChange}
                    placeholder="e.g., 12% ROI"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Bedrooms *</label>
                  <input
                    type="text"
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleInputChange}
                    placeholder="e.g., 3 or Studio"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Bathrooms *</label>
                  <input
                    type="number"
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleInputChange}
                    placeholder="e.g., 2"
                    min="1"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Area *</label>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    placeholder="e.g., 1,450 sq ft"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Parking Spaces *</label>
                  <input
                    type="number"
                    name="parking"
                    value={formData.parking}
                    onChange={handleInputChange}
                    placeholder="e.g., 2"
                    min="0"
                    required
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={resetForm}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  <i className="fa-solid fa-save"></i>
                  {editingProperty ? 'Update Property' : 'Add Property'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Properties List */}
      <div className="properties-list">
        {properties.length === 0 ? (
          <div className="no-properties">
            <i className="fa-solid fa-building fa-3x text-muted mb-3"></i>
            <h5>No properties added yet</h5>
            <p className="text-muted">Add your first property to get started.</p>
          </div>
        ) : (
          <div className="properties-grid">
            {properties.map((property) => (
              <div key={property.id} className="property-card">
                <div className="property-image-wrapper">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="property-image"
                  />
                  <div className={`property-badge property-badge-${property.badge.type}`}>
                    {property.badge.text}
                  </div>
                </div>

                <div className="property-content">
                  <h4 className="property-title">{property.title}</h4>
                  <p className="property-location">
                    <i className="fa-solid fa-location-dot"></i>
                    {property.location}
                  </p>
                  <p className="property-description">
                    {property.description.substring(0, 100)}...
                  </p>
                  
                  <div className="property-details-grid">
                    <div className="property-detail">
                      <i className="fa-solid fa-bed"></i>
                      <span>{property.details.bedrooms}</span>
                    </div>
                    <div className="property-detail">
                      <i className="fa-solid fa-bath"></i>
                      <span>{property.details.bathrooms}</span>
                    </div>
                    <div className="property-detail">
                      <i className="fa-solid fa-maximize"></i>
                      <span>{property.details.area}</span>
                    </div>
                    <div className="property-detail">
                      <i className="fa-solid fa-car"></i>
                      <span>{property.details.parking}</span>
                    </div>
                  </div>

                  <div className="property-footer">
                    <div className="property-price-section">
                      <span className="property-price">{property.price}</span>
                      <span className="property-roi">{property.roi}</span>
                    </div>
                    <div className="property-actions">
                      <button 
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => handleEdit(property)}
                      >
                        <i className="fa-solid fa-edit"></i>
                        Edit
                      </button>
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(property.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyManager;
