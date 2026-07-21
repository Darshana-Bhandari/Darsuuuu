import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '❤️',
      title: 'Cardiology',
      description: 'Comprehensive heart care including diagnosis, treatment, and prevention of cardiovascular diseases.',
      features: ['Heart checkups', 'ECG/EKG', 'Cardiac surgery', 'Rehabilitation'],
      path: '/services/cardiology'
    },
    {
      id: 2,
      icon: '🧴',
      title: 'Dermatology',
      description: 'Expert skin care services for all skin conditions including acne, eczema, and cosmetic procedures.',
      features: ['Skin consultation', 'Acne treatment', 'Laser therapy', 'Cosmetic procedures'],
      path: '/services/dermatology'
    },
    {
      id: 3,
      icon: '🧠',
      title: 'Neurology',
      description: 'Advanced diagnosis and treatment for disorders of the nervous system and brain.',
      features: ['Stroke care', 'Epilepsy treatment', 'Neurological exams', 'Brain surgery'],
      path: '/services/neurology'
    },
    {
      id: 4,
      icon: '👶',
      title: 'Pediatrics',
      description: 'Comprehensive healthcare for children from birth to adolescence.',
      features: ['Well-baby visits', 'Vaccinations', 'Child development', 'Pediatric surgery'],
      path: '/services/pediatrics'
    },
    {
      id: 5,
      icon: '🦴',
      title: 'Orthopedics',
      description: 'Specialized care for bones, joints, ligaments, and musculoskeletal conditions.',
      features: ['Fracture care', 'Joint replacement', 'Sports medicine', 'Physical therapy'],
      path: '/services/orthopedics'
    },
    {
      id: 6,
      icon: '🌸',
      title: 'Gynecology',
      description: 'Comprehensive women\'s health services from adolescence through menopause.',
      features: ['Annual exams', 'Pregnancy care', 'Menopause management', 'Gynecological surgery'],
      path: '/services/gynecology'
    },
    {
      id: 7,
      icon: '👁️',
      title: 'Ophthalmology',
      description: 'Complete eye care services including diagnosis and treatment of eye conditions.',
      features: ['Eye exams', 'Cataract surgery', 'LASIK', 'Glaucoma treatment'],
      path: '/services/ophthalmology'
    },
    {
      id: 8,
      icon: '👂',
      title: 'ENT',
      description: 'Specialized care for ear, nose, and throat conditions.',
      features: ['Hearing tests', 'Sinus treatment', 'Tonsillectomy', 'Balance disorders'],
      path: '/services/ent'
    },
    {
      id: 9,
      icon: '🧘',
      title: 'Psychiatry',
      description: 'Mental health services for depression, anxiety, and other psychiatric conditions.',
      features: ['Mental health evaluation', 'Therapy', 'Medication management', 'Crisis intervention'],
      path: '/services/psychiatry'
    },
    {
      id: 10,
      icon: '🦷',
      title: 'Dentistry',
      description: 'Complete dental care including preventive, restorative, and cosmetic dentistry.',
      features: ['Cleanings', 'Fillings', 'Root canals', 'Orthodontics'],
      path: '/services/dentistry'
    },
    {
      id: 11,
      icon: '💊',
      title: 'Pharmacy',
      description: 'Full-service pharmacy with prescription fulfillment and medication counseling.',
      features: ['Prescription filling', 'Medication counseling', 'Delivery service', 'Health products'],
      path: '/services/pharmacy'
    },
    {
      id: 12,
      icon: '🏥',
      title: 'Emergency Care',
      description: '24/7 emergency medical services for urgent and life-threatening conditions.',
      features: ['24/7 availability', 'Trauma care', 'Ambulance service', 'Critical care'],
      path: '/services/emergency'
    }
  ];

  return (
    <div className="container-custom py-16 animate-fade-in-up sm:py-20 lg:py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">Our services</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Complete care across every specialty.
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          We offer a wide range of medical services to meet all your healthcare needs with expertise and compassion.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id} className="flex h-full flex-col border-0 bg-white/90 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-2xl">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {service.features.map((feature, index) => (
                  <span key={index} className="badge badge-info text-xs">
                    {feature}
                  </span>
                ))}
              </div>
              <Link to={service.path}>
                <Button variant="primary" size="sm" fullWidth>
                  Learn More →
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="section-shell rounded-[2rem] bg-gradient-to-br from-primary-50 via-white to-slate-50 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900">
            Need help choosing a service?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Our team is here to help you find the right service for your needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
            </Link>
            <Link to="/doctors">
              <Button variant="outline" size="lg">
                Find a Doctor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;