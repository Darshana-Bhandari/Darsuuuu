import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const DoctorCard = ({ doctor }) => {
  const getAvailabilityColor = (availability) => {
    if (availability === 'Available Today') return 'success';
    if (availability === 'This Week') return 'info';
    return 'warning';
  };

  return (
    <Card className="h-full flex flex-col">
      <div className="flex items-start gap-4">
        <img
          src={doctor.image || '/src/assets/images/placeholder-doctor.png'}
          alt={doctor.name}
          className="w-20 h-20 rounded-full object-cover border-4 border-primary-100 flex-shrink-0"
          onError={(e) => {
            e.target.src = '/src/assets/images/placeholder-doctor.png';
          }}
        />
        <div className="flex-1 min-w-0">
          <div className="flex-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {doctor.name}
              </h3>
              <p className="text-sm text-primary-600 font-medium">{doctor.specialty}</p>
            </div>
            <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded">
              <span className="text-yellow-500">⭐</span>
              <span className="text-sm font-semibold">{doctor.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-sm flex-1">
        <div className="flex items-center gap-2 text-gray-600 min-w-0">
          <span className="flex-shrink-0">🏥</span>
          <span className="truncate">{doctor.hospital}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <span>📍</span>
          <span>{doctor.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <span>💼</span>
          <span>{doctor.experience} years</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <span>💰</span>
          <span>Rs. {doctor.consultationFee}</span>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {doctor.languages && doctor.languages.map(lang => (
          <span key={lang} className="badge badge-gray">
            {lang}
          </span>
        ))}
      </div>

      <div className="mt-4 flex-between">
        <span className={`badge badge-${getAvailabilityColor(doctor.availability)}`}>
          {doctor.availability}
        </span>
        <Link
          to={`/doctors/${doctor.id}`}
          className="btn btn-primary btn-sm"
        >
          Book Appointment
        </Link>
      </div>
    </Card>
  );
};

export default DoctorCard;