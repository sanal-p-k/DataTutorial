import { ChartPieIcon, ChartBarIcon, UserGroupIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import { FaDatabase, FaPython } from 'react-icons/fa';

export interface PurchaseMaterialType {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  features: string[];
  image: string;
  price: string;
}

export interface PurchaseMaterialProps {
  material: PurchaseMaterialType;
}

export interface Service {
  icon: typeof ChartPieIcon | typeof ChartBarIcon | typeof UserGroupIcon | typeof VideoCameraIcon | typeof FaDatabase | typeof FaPython;
  title: string;
  description: string;
  features: string[];
}

export interface Tool {
  icon: React.ElementType;
  name: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: React.ReactElement;
  description?: string;
}
