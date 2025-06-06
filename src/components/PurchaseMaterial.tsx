import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import type { PurchaseMaterialType } from '../types';

interface PurchaseMaterialProps {
  material: PurchaseMaterialType;
  slidePosition: number;
}

export const PurchaseMaterial: React.FC<PurchaseMaterialProps> = ({ material }) => {
  return (
    <motion.div 
      className="rounded-2xl p-3 shadow-lg w-[300px] min-h-[200px]"
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col h-full">
            <div className="relative h-82 mb-4 rounded-lg overflow-hidden bg-gray-800">
              <img 
                src={`/images/purchase/${material.image}`} 
                alt={material.title} 
                className="w-full h-full object-cover rounded-lg" 
                onError={(e: any) => {
                  const img = e.target as HTMLImageElement;
                  img.src = 'https://via.placeholder.com/400x300/333333/ffffff?text=No+Image';
                }}
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-3 rounded-full">
                    {material.icon}
                  </div>
                  <span className="text-white/80 text-sm">{material.price}</span>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{material.title}</h3>
                <p className="text-white/80 mb-4">{material.description}</p>
                <div className="flex items-center gap-2 text-white/80">
                  {material.features.map((feature: string, featureIndex: number) => (
                    <span 
                      key={featureIndex}
                      className="bg-gradient-to-r from-purple-500 to-purple-700 px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="https://topmate.io/data_tutorials" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Purchase Now
                <FaArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PurchaseMaterial;
