
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line 
} from 'recharts';
import { Search, MapPin, Code, TrendingUp } from 'lucide-react';

const salaryData = [
  { role: "Junior Developer", min: 35000, avg: 45000, max: 55000 },
  { role: "Mid-level Developer", min: 50000, avg: 65000, max: 80000 },
  { role: "Senior Developer", min: 70000, avg: 85000, max: 105000 },
  { role: "Tech Lead", min: 85000, avg: 100000, max: 120000 },
  { role: "CTO", min: 100000, avg: 130000, max: 180000 },
];

const trendData = [
  { year: '2019', salary: 62000 },
  { year: '2020', salary: 65000 },
  { year: '2021', salary: 69000 },
  { year: '2022', salary: 76000 },
  { year: '2023', salary: 83000 },
  { year: '2024', salary: 89000 },
];

const locationData = [
  { name: 'Berlin', salary: 68000 },
  { name: 'London', salary: 92000 },
  { name: 'Paris', salary: 74000 },
  { name: 'Amsterdam', salary: 70000 },
  { name: 'Barcelona', salary: 58000 },
  { name: 'Rome', salary: 52000 },
];

const SalaryInsights = () => {
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Salary <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get accurate salary range suggestions based on location, skills, and experience level
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="mr-2 h-5 w-5 text-talent-teal" />
                Salary Explorer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="text-sm font-medium block mb-2">Role or Position</label>
                  <div className="flex">
                    <div className="bg-gray-100 p-2 flex items-center rounded-l-md">
                      <Code className="h-5 w-5 text-gray-500" />
                    </div>
                    <Input 
                      placeholder="e.g. Frontend Developer" 
                      className="rounded-l-none" 
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium block mb-2">Location</label>
                  <div className="flex">
                    <div className="bg-gray-100 p-2 flex items-center rounded-l-md">
                      <MapPin className="h-5 w-5 text-gray-500" />
                    </div>
                    <Input 
                      placeholder="e.g. Berlin" 
                      className="rounded-l-none"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="flex items-end">
                  <Button className="w-full bg-gradient-to-r from-talent-teal to-talent-purple hover:opacity-90">
                    Get Salary Data
                  </Button>
                </div>
              </div>
              
              <Tabs defaultValue="ranges">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="ranges">Salary Ranges</TabsTrigger>
                  <TabsTrigger value="trends">Salary Trends</TabsTrigger>
                  <TabsTrigger value="location">Location Impact</TabsTrigger>
                </TabsList>
                
                <TabsContent value="ranges" className="mt-6">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={salaryData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="role" 
                          angle={-45} 
                          textAnchor="end"
                          tick={{ fontSize: 12 }}
                          height={70}
                        />
                        <YAxis />
                        <Tooltip formatter={(value) => `€${value}`} />
                        <Bar dataKey="min" name="Minimum" fill="#6E59A5" />
                        <Bar dataKey="avg" name="Average" fill="#33C3F0" />
                        <Bar dataKey="max" name="Maximum" fill="#50E3C2" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Recommendation for {role || 'Developer'} in {location || 'Europe'}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-3 bg-white rounded shadow-sm">
                        <p className="text-xs text-gray-500">Candidate Offer</p>
                        <p className="text-xl font-bold text-green-600">€65,000 - €75,000</p>
                      </div>
                      <div className="p-3 bg-white rounded shadow-sm">
                        <p className="text-xs text-gray-500">Market Average</p>
                        <p className="text-xl font-bold">€70,000</p>
                      </div>
                      <div className="p-3 bg-white rounded shadow-sm">
                        <p className="text-xs text-gray-500">Client Budget</p>
                        <p className="text-xl font-bold text-talent-purple">€75,000 - €85,000</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="trends" className="mt-6">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={trendData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip formatter={(value) => `€${value}`} />
                        <Line type="monotone" dataKey="salary" stroke="#6E59A5" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-6 flex items-center p-4 bg-gray-50 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-500 mr-3" />
                    <div>
                      <h3 className="font-semibold">Upward Trend</h3>
                      <p className="text-sm text-gray-600">Salaries for {role || 'Developer'} roles have increased by approximately 7.5% annually over the past 3 years.</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="location" className="mt-6">
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={locationData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        layout="vertical"
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" width={80} />
                        <Tooltip formatter={(value) => `€${value}`} />
                        <Bar dataKey="salary" fill="#33C3F0" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Location Analysis</h3>
                    <p className="text-gray-600 mb-4">Significant salary variations exist across European tech hubs. London offers the highest average compensation, while southern European cities tend to offer lower salaries but often with lower living costs.</p>
                    <p className="text-sm text-talent-purple font-medium">Recommend adjusting offers by +15% for London and -10% for southern European locations.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SalaryInsights;
