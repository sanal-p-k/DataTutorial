export interface Dashboard {
  id: number;
  title: string;
  category: string;
  description: string;
  detailedDescription?: string;
  tools: string[];
  color: string;
  image: string;
  embedUrl: string;
  isTableau?: boolean;
  embedCode?: string;
  features?: string[];
  dataSource?: string;
  lastUpdated?: string;
  views?: number;
  favorites?: number;
}
