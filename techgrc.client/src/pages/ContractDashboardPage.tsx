import React, { useState } from 'react';
import { 
  PieChart, 
  FileText, 
  Users, 
  Search, 
  Settings, 
  RotateCcw, 
  BarChart3,
  TrendingUp,
  TrendingDown,
  File,
  CheckSquare,
  Download,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const ContractDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data
  const metricsData = [
    { title: 'Total Contracts', value: '1,247', change: '+12%', trend: 'up' },
    { title: 'Active Contracts', value: '892', change: '+5%', trend: 'up' },
    { title: 'Funding Review', value: '45', change: '+8%', trend: 'up' },
    { title: 'Expiring Soon', value: '23', change: '+15%', trend: 'up' }
  ];

  const recentContracts = [
    { title: 'Software License Agreement', company: 'TechCorp Inc.', status: 'Active', value: '$125,000', statusColor: 'bg-green-100 text-green-800' },
    { title: 'Service Agreement', company: 'Global Services Ltd.', status: 'Pending', value: '$85,000', statusColor: 'bg-yellow-100 text-yellow-800' },
    { title: 'Partnership Agreement', company: 'Innovation Hub', status: 'Review', value: '$200,000', statusColor: 'bg-blue-100 text-blue-800' },
    { title: 'Supply Contract', company: 'Marekar Co.', status: 'Active', value: '$35,000', statusColor: 'bg-green-100 text-green-800' },
    { title: 'Consulting Agreement', company: 'Strategy Partners LLC', status: 'Active', value: '$75,000', statusColor: 'bg-green-100 text-green-800' },
    { title: 'NDA Agreement', company: 'New Ventures Inc.', status: 'Pending', value: '$10,000', statusColor: 'bg-yellow-100 text-yellow-800' },
    { title: 'Maintenance Contract', company: 'TechSupport Ltd.', status: 'Active', value: '$45,000', statusColor: 'bg-green-100 text-green-800' }
  ];

  const workflowSteps = [
    { number: 1, title: 'Creation', description: 'Draft & Template' },
    { number: 2, title: 'Negotiation', description: 'Terms & Conditions' },
    { number: 3, title: 'Review', description: 'Legal & Approval' },
    { number: 4, title: 'Administration', description: 'Execute & Monitor' },
    { number: 5, title: 'Renewal', description: 'Extend & Update' },
    { number: 6, title: 'Reporting', description: 'Analytic & Insights' }
  ];

  const statsData = [
    { label: 'Total Contract Value', value: '$2.4M', change: '+18.8% YoY', positive: true },
    { label: 'Average Duration', value: '18 months', change: '+2 months', positive: true },
    { label: 'Success Rate', value: '94%', change: '+3%', positive: true },
    { label: 'Renewal Rate', value: '87%', change: '+5%', positive: true },
    { label: 'Processing Time', value: '12 days', change: '-2 days', positive: true },
    { label: 'Risk Score', value: 'Low', change: 'Stable', positive: true }
  ];

  const chartData = [30, 50, 70, 90, 60, 80, 40, 20];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

  const tabItems = [
    { id: 'overview', label: 'Overview', icon: PieChart },
    { id: 'creation', label: 'Creation', icon: FileText },
    { id: 'negotiation', label: 'Negotiation', icon: Users },
    { id: 'review', label: 'Review', icon: Search },
    { id: 'administration', label: 'Administration', icon: Settings },
    { id: 'renewal', label: 'Renewal', icon: RotateCcw },
    { id: 'reporting', label: 'Reporting', icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <div className="bg-slate-800 text-white p-4 shadow-lg">
        <h1 className="text-2xl font-bold">Contract Management Dashboard</h1>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6 overflow-x-auto">
          <div className="flex border-b">
            {tabItems.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent size={16} className="mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {metricsData.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-sm font-medium text-gray-600 mb-2">{metric.title}</h3>
              <div className="text-3xl font-bold text-slate-800 mb-2">{metric.value}</div>
              <div className="flex items-center text-sm text-green-600">
                <ArrowUp size={16} className="mr-1" />
                {metric.change} from last month
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Contract Value Trends */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Contract Value Trends</h2>
            <div className="flex items-end justify-between h-48 gap-2">
              {chartData.map((height, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div
                    className="w-full bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600 cursor-pointer hover:scale-105"
                    style={{ height: `${height}%` }}
                    title={`${months[index]}: ${height}%`}
                  />
                  <div className="text-xs text-gray-600 mt-2">{months[index]}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors transform hover:scale-105">
                <File size={16} className="mr-2" />
                New Contract
              </button>
              <button className="w-full flex items-center justify-center px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors transform hover:scale-105">
                <BarChart3 size={16} className="mr-2" />
                Generate Report
              </button>
              <button className="w-full flex items-center justify-center px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105">
                <CheckSquare size={16} className="mr-2" />
                Bulk Actions
              </button>
              <button className="w-full flex items-center justify-center px-4 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors transform hover:scale-105">
                <Download size={16} className="mr-2" />
                Export Data
              </button>
            </div>
          </div>
        </div>

        {/* Recent Contracts */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Recent Contracts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {recentContracts.map((contract, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:scale-105 cursor-pointer">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{contract.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{contract.company}</p>
                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${contract.statusColor}`}>
                    {contract.status}
                  </span>
                  <span className="font-semibold text-gray-900">{contract.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contract Lifecycle Workflow */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-6">Contract Lifecycle Workflow</h2>
          <div className="flex flex-wrap justify-between items-center gap-4 overflow-x-auto">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex items-center min-w-0">
                <div className="text-center flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mb-2 mx-auto hover:bg-blue-600 transition-colors cursor-pointer">
                    {step.number}
                  </div>
                  <div className="font-semibold text-sm mb-1">{step.title}</div>
                  <div className="text-xs text-gray-600">{step.description}</div>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block w-8 h-0.5 bg-gray-300 mx-3 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Performance Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-xs text-gray-600 mb-2">{stat.label}</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="flex items-center justify-center text-xs">
                  {stat.positive ? (
                    <ArrowUp size={12} className="text-green-600 mr-1" />
                  ) : (
                    <ArrowDown size={12} className="text-red-600 mr-1" />
                  )}
                  <span className={stat.positive ? 'text-green-600' : 'text-red-600'}>
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractDashboardPage; 