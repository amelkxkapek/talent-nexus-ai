
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CircleCheck, AlertTriangle, Calendar, DollarSign, MapPin, Clock, Building, BriefcaseBusiness } from 'lucide-react';

const candidatePreferences = [
  { factor: 'Remote Work', importance: 'High', compatible: true },
  { factor: 'Salary Range', importance: 'High', compatible: true },
  { factor: 'Tech Stack', importance: 'High', compatible: true },
  { factor: 'Company Size', importance: 'Medium', compatible: false },
  { factor: 'Work Hours', importance: 'Medium', compatible: true },
  { factor: 'Industry', importance: 'Low', compatible: true },
];

const clientRequirements = [
  { factor: 'Experience Level', importance: 'High', compatible: true },
  { factor: 'Technical Skills', importance: 'High', compatible: true },
  { factor: 'Availability', importance: 'High', compatible: true },
  { factor: 'Salary Expectations', importance: 'Medium', compatible: true },
  { factor: 'Location', importance: 'Medium', compatible: true },
  { factor: 'Cultural Fit', importance: 'Low', compatible: false },
];

const CandidateClientMatch = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Candidate-Client <span className="gradient-text">Matching</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect fit between candidates and client companies with our comprehensive matching system
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <BriefcaseBusiness className="h-5 w-5 mr-2 text-talent-purple" />
                Match Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center mb-6">
                <div className="text-5xl font-bold text-talent-teal">78%</div>
                <div className="text-sm font-medium mt-2">Overall Compatibility</div>
                
                <div className="w-full mt-6">
                  <Progress value={78} className="h-2" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">Candidate</p>
                  <p className="font-medium">John Smith</p>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500">Company</p>
                  <p className="font-medium">Tech Solutions Ltd</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 p-2">
                  <Clock className="h-4 w-4 text-talent-teal" />
                  <span className="text-sm">Available in 2 weeks</span>
                </div>
                
                <div className="flex items-center gap-2 p-2">
                  <MapPin className="h-4 w-4 text-talent-teal" />
                  <span className="text-sm">Remote (Europe timezone)</span>
                </div>
                
                <div className="flex items-center gap-2 p-2">
                  <DollarSign className="h-4 w-4 text-talent-teal" />
                  <span className="text-sm">€70,000 - €85,000 range</span>
                </div>
                
                <div className="flex items-center gap-2 p-2">
                  <Calendar className="h-4 w-4 text-talent-teal" />
                  <span className="text-sm">Full-time, permanent</span>
                </div>
                
                <div className="flex items-center gap-2 p-2">
                  <Building className="h-4 w-4 text-talent-teal" />
                  <span className="text-sm">Mid-size company (50-200)</span>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-gradient-to-r from-talent-teal to-talent-purple hover:opacity-90">
                Generate Introduction Email
              </Button>
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Compatibility Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="candidate">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="candidate">Candidate Preferences</TabsTrigger>
                  <TabsTrigger value="client">Client Requirements</TabsTrigger>
                </TabsList>
                
                <TabsContent value="candidate" className="pt-6">
                  <div className="space-y-3">
                    {candidatePreferences.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="flex items-center">
                            <span className="font-medium">{item.factor}</span>
                            <Badge variant="outline" className="ml-2 text-xs">
                              {item.importance}
                            </Badge>
                          </div>
                        </div>
                        <div>
                          {item.compatible ? (
                            <div className="flex items-center text-green-600">
                              <CircleCheck className="h-5 w-5 mr-1" />
                              <span className="text-sm font-medium">Compatible</span>
                            </div>
                          ) : (
                            <div className="flex items-center text-amber-600">
                              <AlertTriangle className="h-5 w-5 mr-1" />
                              <span className="text-sm font-medium">Mismatch</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-talent-teal/10 rounded-lg">
                    <h3 className="font-semibold mb-2">Candidate Note</h3>
                    <p className="text-sm text-gray-600">
                      This candidate prefers a smaller company environment (under 50 people) but the client company is mid-sized (50-200 employees). This is a potential mismatch, but not a dealbreaker based on their preferences.
                    </p>
                  </div>
                  
                  <div className="mt-4 p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-semibold mb-2">Candidate Rate Range</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Expected</p>
                        <p className="font-bold">€70,000 - €80,000</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Offer Range</p>
                        <p className="font-bold text-green-600">€72,000 - €78,000</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="client" className="pt-6">
                  <div className="space-y-3">
                    {clientRequirements.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="flex items-center">
                            <span className="font-medium">{item.factor}</span>
                            <Badge variant="outline" className="ml-2 text-xs">
                              {item.importance}
                            </Badge>
                          </div>
                        </div>
                        <div>
                          {item.compatible ? (
                            <div className="flex items-center text-green-600">
                              <CircleCheck className="h-5 w-5 mr-1" />
                              <span className="text-sm font-medium">Compatible</span>
                            </div>
                          ) : (
                            <div className="flex items-center text-amber-600">
                              <AlertTriangle className="h-5 w-5 mr-1" />
                              <span className="text-sm font-medium">Mismatch</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-talent-purple/10 rounded-lg">
                    <h3 className="font-semibold mb-2">Client Note</h3>
                    <p className="text-sm text-gray-600">
                      The client has concerns about cultural fit since the candidate has mostly worked in startups and the client has a more corporate environment. Consider discussing this during interviews.
                    </p>
                  </div>
                  
                  <div className="mt-4 p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-semibold mb-2">Client Budget Range</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Base Budget</p>
                        <p className="font-bold">€75,000 - €85,000</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Client Charge</p>
                        <p className="font-bold text-green-600">€93,750 - €106,250</p>
                        <p className="text-xs text-gray-500">(25% markup)</p>
                      </div>
                    </div>
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

export default CandidateClientMatch;
