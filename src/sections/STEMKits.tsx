import React from 'react';
import { Section } from '../components/Section';
import { HexagonCard } from '../components/HexagonCard';
import { Boxes, Wrench, Cpu } from 'lucide-react';

export const STEMKits: React.FC = () => {
  const kitCategories = [
    {
      title: 'Lego & Blocks Kits',
      icon: <Boxes size={36} />,
      items: [
        'E-circuits Programming',
        'Discovering Electronics',
        'Discovering Motions & Gears',
        'Electromagnetics Sandbox',
        'Junior Electronics Kit'
      ]
    },
    {
      title: 'DIY Application Kits',
      icon: <Wrench size={36} />,
      items: [
        'Smart Robotic Car Kit',
        'Smart Automated Home',
        'Smart Irrigation Farm',
        'Smart Industrial Factory',
        'Smart Weather Station',
        'Biped Walking Robot',
        'Humanoid Robot Kit',
        'DIY Quadcopter Drone Kits'
      ]
    },
    {
      title: 'Generic IoT & AI Boards',
      icon: <Cpu size={36} />,
      items: [
        'Arduino UNO / Mega Kits',
        'ESP32 / ESP8266 WiFi Modules',
        'Raspberry Pi Developer Boards',
        'NVIDIA Jetson Nano AI Boards',
        'Micro:bit Educational Kit',
        'MangoPi Linux Edge Boards',
        'Advanced Sensors Bundle',
        'Motors & Actuators Pack'
      ]
    }
  ];

  return (
    <Section id="stem-kits" bgType="circuit">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-orange mb-3 font-heading">
          Hardware Bundles
        </h2>
        <p className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
          In-House STEM Kits
        </p>
        <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base font-body">
          Our labs are equipped with customized, modular hardware kits designed to facilitate hands-on learning across all student age groups.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 max-w-5xl mx-auto items-center">
        {kitCategories.map((cat, idx) => (
          <HexagonCard
            key={idx}
            title={cat.title}
            icon={cat.icon}
            items={cat.items}
            delay={idx * 0.15}
          />
        ))}
      </div>
    </Section>
  );
};
