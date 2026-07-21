import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const About = () => {
  const values = [
    {
      icon: '❤️',
      title: 'Patient First',
      description: 'We prioritize patient care and comfort above all else'
    },
    {
      icon: '🔬',
      title: 'Innovation',
      description: 'Embracing latest medical technologies and treatments'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Honest and transparent healthcare services'
    },
    {
      icon: '🌍',
      title: 'Community',
      description: 'Serving our community with dedication and compassion'
    }
  ];

  return (
    <div className="container-custom py-12 animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          About Our Clinic
        </h1>
        
        <Card className="p-8 mb-8">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Welcome to Clinic Management System, your trusted healthcare partner in Nepal. 
            We are dedicated to providing exceptional medical care with a focus on patient 
            comfort and satisfaction.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Our team of experienced doctors and healthcare professionals work tirelessly 
            to ensure you receive the best possible treatment using modern medical facilities 
            and technology.
          </p>
        </Card>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-4xl mb-3">{value.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/doctors">
            <Button variant="primary" size="lg">
              Meet Our Doctors
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;