import React, { useState } from 'react';
import HeroSection from '../components/doctors/HeroSection';
import SearchBar from '../components/doctors/SearchBar';
import FilterSection from '../components/doctors/FilterSection';
import DoctorsList from '../components/doctors/DoctorList';
import Card from '../components/ui/Card';

const Doctor = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    specialty: '',
    availability: '',
    rating: '',
    experience: ''
  });

  return (
    <div className="min-h-screen bg-transparent">
      <HeroSection />

      <div className="container-custom relative z-10 -mt-10 px-4 pb-16 sm:px-6 lg:px-8">
        <Card className="mb-8 border-0 bg-white/90 p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </Card>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full flex-shrink-0 lg:w-72">
            <div className="sticky top-24">
              <FilterSection filters={filters} setFilters={setFilters} />
            </div>
          </div>

          <div className="flex-1">
            <DoctorsList
              searchQuery={searchQuery}
              filters={filters}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;