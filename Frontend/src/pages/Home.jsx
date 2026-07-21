import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/doctors/HeroSection.jsx';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Home = () => {
  const features = [
    {
      icon: '👨‍⚕️',
      title: 'Expert doctors',
      description: 'Board-certified specialists with years of hands-on experience.',
    },
    {
      icon: '🏥',
      title: 'Modern facilities',
      description: 'Contemporary care spaces equipped for advanced diagnostics and comfort.',
    },
    {
      icon: '💳',
      title: 'Flexible payments',
      description: 'Simple billing and multiple payment methods for a smoother visit.',
    },
    {
      icon: '📍',
      title: 'Convenient access',
      description: 'Easy appointments, fast support, and dependable follow-through.',
    },
  ];

  const stats = [
    { value: '500+', label: 'Doctors' },
    { value: '50+', label: 'Specialties' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '1000+', label: 'Appointments' },
  ];

  return (
    <div>
      <HeroSection />

      <div className="container-custom py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">Why choose us</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Thoughtful care for every step of your health journey.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We combine medical excellence with a smooth digital experience so every appointment feels effortless.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={feature.title} className="text-left" hoverable>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary-800 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">Our impact</p>
            <h3 className="mt-3 text-2xl font-semibold">Trusted by patients who expect more.</h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-3xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">What sets us apart</p>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-xl text-primary-600">✓</span>
                <span>24/7 emergency support and seamless appointment coordination.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-xl text-primary-600">✓</span>
                <span>Modern telehealth and in-person visits designed for flexibility.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-xl text-primary-600">✓</span>
                <span>Clear communication, transparent care plans, and dependable follow-up.</span>
              </li>
            </ul>

            <div className="mt-8">
              <Link to="/doctors">
                <Button variant="primary" size="lg" icon="→" iconPosition="right">
                  Find Your Doctor
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        <div className="mt-16 rounded-[32px] bg-gradient-to-r from-primary-700 via-primary-600 to-sky-600 p-8 text-white shadow-xl shadow-primary-900/20 sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-100">Ready to get started?</p>
              <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">Book your visit and experience modern care today.</h3>
            </div>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-slate-100">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;