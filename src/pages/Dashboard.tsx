
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Users, FileText, Briefcase, TrendingUp, Clock } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 px-4 pb-16 bg-gray-50">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Active Projects</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="bg-talent-teal/10 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-talent-teal" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Candidates</p>
                  <p className="text-2xl font-bold">48</p>
                </div>
                <div className="bg-talent-purple/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-talent-purple" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">CV Analyses</p>
                  <p className="text-2xl font-bold">64</p>
                </div>
                <div className="bg-talent-teal/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-talent-teal" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((_, index) => (
                    <div key={index} className="flex items-start p-3 rounded-lg hover:bg-gray-50">
                      <div className={`${index % 2 === 0 ? "bg-talent-teal/10" : "bg-talent-purple/10"} p-2 rounded-full mr-3`}>
                        {index % 2 === 0 ? 
                          <FileText className={`h-5 w-5 ${index % 2 === 0 ? "text-talent-teal" : "text-talent-purple"}`} /> : 
                          <Users className={`h-5 w-5 ${index % 2 === 0 ? "text-talent-teal" : "text-talent-purple"}`} />
                        }
                      </div>
                      <div>
                        <p className="font-medium">{index % 2 === 0 ? "CV Analysis Completed" : "New Candidate Added"}</p>
                        <p className="text-sm text-gray-500">{index % 2 === 0 ? "Senior React Developer" : "Project Manager"} • 2h ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-sm">Match Accuracy</p>
                      <p className="text-sm font-bold">92%</p>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-talent-teal" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-sm">Response Rate</p>
                      <p className="text-sm font-bold">78%</p>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-talent-purple" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-sm">Placement Rate</p>
                      <p className="text-sm font-bold">64%</p>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-talent-teal to-talent-purple" style={{ width: "64%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
