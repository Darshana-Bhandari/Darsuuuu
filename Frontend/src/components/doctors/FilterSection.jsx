import React, { useState } from 'react';
import { SPECIALTIES, AVAILABILITY_OPTIONS, RATING_OPTIONS, EXPERIENCE_RANGES } from '../../utils/constants';

const FilterSection = ({ filters, setFilters }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      specialty: '',
      availability: '',
      rating: '',
      experience: ''
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="card sticky top-24 p-6">
      <div className="flex-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <span>🔍</span> Filters
        </h3>
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-primary-600 hover:text-primary-800 transition-colors"
            >
              Clear All
            </button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-gray-700 lg:hidden"
          >
            {isExpanded ? '▲' : '▼'}
          </button>
        </div>
      </div>

      <div className={`space-y-6 ${isExpanded ? 'block' : 'hidden lg:block'}`}>
        {/* Specialty Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Specialty
          </label>
          <select
            value={filters.specialty}
            onChange={(e) => handleFilterChange('specialty', e.target.value)}
            className="select input"
          >
            {SPECIALTIES.map(specialty => (
              <option key={specialty} value={specialty === 'All Specialties' ? '' : specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>

        {/* Availability Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Availability
          </label>
          <select
            value={filters.availability}
            onChange={(e) => handleFilterChange('availability', e.target.value)}
            className="select input"
          >
            {AVAILABILITY_OPTIONS.map(option => (
              <option key={option} value={option === 'All' ? '' : option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Rating Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Rating
          </label>
          <select
            value={filters.rating}
            onChange={(e) => handleFilterChange('rating', e.target.value)}
            className="select input"
          >
            {RATING_OPTIONS.map(option => (
              <option key={option} value={option === 'All' ? '' : option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Experience Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Experience (Years)
          </label>
          <div className="grid grid-cols-2 gap-2">
            {EXPERIENCE_RANGES.map(range => (
              <button
                key={range}
                onClick={() => handleFilterChange('experience', range)}
                className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                  filters.experience === range
                    ? 'border-primary-600 bg-primary-50 text-primary-600'
                    : 'border-gray-300 hover:border-primary-300 hover:bg-gray-50'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Active Filters Summary */}
        {hasActiveFilters && (
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-2">Active Filters:</p>
            <div className="flex flex-wrap gap-1.5">
              {filters.specialty && (
                <span className="badge badge-primary">{filters.specialty}</span>
              )}
              {filters.availability && (
                <span className="badge badge-success">{filters.availability}</span>
              )}
              {filters.rating && (
                <span className="badge badge-warning">⭐ {filters.rating}</span>
              )}
              {filters.experience && (
                <span className="badge badge-info">{filters.experience} yrs</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;