import type { Dashboard } from '../types/dashboard';

export const tableauDashboards: Dashboard[] = [
  {
    id: 1,
    title: 'HR Analytics Dashboard',
    category: 'Tableau',
    description: 'Comprehensive HR metrics and workforce analytics with interactive visualizations.',
    detailedDescription: 'This dashboard provides insights into workforce demographics, employee performance, attrition rates, and other key HR metrics. It helps HR professionals make data-driven decisions about talent management and workforce planning.',
    tools: ['Tableau', 'HR Analytics', 'Data Visualization', 'People Analytics'],
    color: 'from-blue-500 to-cyan-500',
    image: 'https://public.tableau.com/static/images/HM/HRAnalyticsDashboard_16753449359860/HRANALYTICSDASHBOARD/1_rss.png',
    embedUrl: 'https://public.tableau.com/views/HRAnalyticsDashboard_16753449359860/HRANALYTICSDASHBOARD',
    isTableau: true,
    features: [
      'Employee demographics and distribution',
      'Attrition analysis by department and role',
      'Performance metrics and ratings',
      'Compensation analysis',
      'Department-wise workforce insights'
    ],
    dataSource: 'HR Management System',
    lastUpdated: '2023-11-10',
    views: 890,
    favorites: 65
  },
  {
    id: 2,
    title: 'IPL Cricket Analysis',
    category: 'Tableau',
    description: 'In-depth analysis of Indian Premier League cricket matches and player performances.',
    detailedDescription: 'This dashboard provides comprehensive statistics and visualizations of IPL cricket matches, including team performances, player statistics, match outcomes, and historical trends across different seasons.',
    tools: ['Tableau', 'Sports Analytics', 'Data Visualization', 'Cricket Statistics'],
    color: 'from-yellow-500 to-orange-500',
    image: 'https://public.tableau.com/static/images/IP/IPLAnalysis_16753443721400/Overview/1_rss.png',
    embedUrl: 'https://public.tableau.com/views/IPLAnalysis_16753443721400/Overview',
    isTableau: true,
    features: [
      'Team performance across seasons',
      'Player statistics and rankings',
      'Match outcomes and win/loss ratios',
      'Venue analysis',
      'Player vs Team performance'
    ],
    dataSource: 'IPL Official Records',
    lastUpdated: '2023-05-20',
    views: 1540,
    favorites: 120
  },
  {
    id: 3,
    title: 'Superstore Sales Dashboard',
    category: 'Tableau',
    description: 'Interactive sales performance dashboard with regional and product category insights.',
    detailedDescription: 'This dashboard provides a comprehensive view of sales performance across different regions, product categories, and customer segments. It includes trend analysis, profit margins, and key performance indicators for business decision-making.',
    tools: ['Tableau', 'Sales Analytics', 'Business Intelligence', 'Retail Analytics'],
    color: 'from-green-500 to-emerald-600',
    image: 'https://public.tableau.com/static/images/SU/SuperstoreSalesDashboard_16753436845960/SalesDashboard/1_rss.png',
    embedUrl: 'https://public.tableau.com/views/SuperstoreSalesDashboard_16753436845960/SalesDashboard',
    isTableau: true,
    features: [
      'Sales performance by region and category',
      'Profitability analysis',
      'Customer segment performance',
      'Time series analysis of sales trends',
      'Product performance metrics'
    ],
    dataSource: 'Retail Superstore Dataset',
    lastUpdated: '2023-09-15',
    views: 2100,
    favorites: 145
  },
  {
    id: 4,
    title: 'Credit Card Complaints Analysis',
    category: 'Tableau',
    description: 'Interactive analysis of credit card complaints with filtering and drill-down capabilities.',
    detailedDescription: 'This dashboard provides a comprehensive analysis of credit card complaints filed with the Consumer Financial Protection Bureau (CFPB). It includes interactive visualizations that allow users to explore complaint trends, company responses, and resolution status across different time periods and geographic locations.',
    tools: ['Tableau', 'Data Analysis', 'Interactive Dashboard', 'Data Visualization'],
    color: 'from-purple-500 to-pink-500',
    image: 'https://public.tableau.com/static/images/Cr/CreditCardComplaintsDashboards_16753455355860/CREDITCARDCOMPLAINTSDASHBOARD/1_rss.png',
    embedUrl: 'https://public.tableau.com/views/CreditCardComplaintsDashboards_16753455355860/CREDITCARDCOMPLAINTSDASHBOARD',
    isTableau: true,
    features: [
      'Interactive filters for date range and complaint type',
      'Geographic heat map of complaint distribution',
      'Trend analysis over time',
      'Company performance comparison',
      'Drill-down capabilities for detailed analysis'
    ],
    dataSource: 'Consumer Financial Protection Bureau (CFPB) Complaints Database',
    lastUpdated: '2023-10-15',
    views: 1245,
    favorites: 87
  },
];