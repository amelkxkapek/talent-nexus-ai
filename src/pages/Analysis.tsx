
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Upload, FileText, File, ArrowRight, Download, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

// Dummy data for the chart
const skillGapData = [
  { name: "React", required: 4, candidate: 5 },
  { name: "TypeScript", required: 3, candidate: 4 },
  { name: "Node.js", required: 4, candidate: 3 },
  { name: "GraphQL", required: 3, candidate: 2 },
  { name: "AWS", required: 4, candidate: 3 },
  { name: "Docker", required: 3, candidate: 1 },
];

const Analysis = () => {
  const [isDragging, setIsDragging] = useState(false);
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // File handling would go here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">CV Analysis and Matching</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Upload Area */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Upload Documents</h2>
                
                <div 
                  className={`border-2 border-dashed rounded-lg p-8 text-center flex flex-col items-center justify-center h-48 mb-4 transition-colors ${isDragging ? 'border-talent-teal bg-talent-teal/5' : 'border-gray-200'}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="bg-gray-100 rounded-full p-2 mb-3">
                    <Upload className="h-6 w-6 text-gray-500" />
                  </div>
                  <p className="mb-1 font-medium">Drag and drop files</p>
                  <p className="text-sm text-gray-500 mb-3">or click to browse</p>
                  <Button size="sm">Select Files</Button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="text-talent-teal h-5 w-5" />
                      <div>
                        <p className="text-sm font-medium">John_Smith_CV.pdf</p>
                        <p className="text-xs text-gray-500">430 KB</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">×</Button>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <File className="text-talent-purple h-5 w-5" />
                      <div>
                        <p className="text-sm font-medium">Senior_Dev_JD.pdf</p>
                        <p className="text-xs text-gray-500">215 KB</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">×</Button>
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-gradient-to-r from-talent-teal to-talent-purple hover:opacity-90">
                  Analyze Match
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Analysis Results */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Match Analysis</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" /> Export
                    </Button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Overall Match</span>
                    <span className="font-bold text-talent-teal">78%</span>
                  </div>
                  <Progress 
                    value={78} 
                    className={cn("h-3 bg-gray-100")}
                  />
                </div>
                
                <Tabs defaultValue="scores">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="scores">Score Analysis</TabsTrigger>
                    <TabsTrigger value="gaps">Skill Gaps</TabsTrigger>
                    <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                  </TabsList>
                  <TabsContent value="scores" className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Technical Skills</span>
                          <span className="font-bold text-talent-teal">83%</span>
                        </div>
                        <Progress value={83} className={cn("h-1.5 bg-gray-100")} />
                        <p className="text-sm text-gray-600 mt-1">Strong TypeScript and React experience</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Experience</span>
                          <span className="font-bold text-talent-purple">70%</span>
                        </div>
                        <Progress value={70} className={cn("h-1.5 bg-gray-100")} />
                        <p className="text-sm text-gray-600 mt-1">4 years vs. required 5+ years</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Cultural Fit</span>
                          <span className="font-bold text-talent-teal">85%</span>
                        </div>
                        <Progress value={85} className={cn("h-1.5 bg-gray-100")} />
                        <p className="text-sm text-gray-600 mt-1">Similar values and work approach</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="gaps" className="pt-4">
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={skillGapData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="required" fill="#6E59A5" name="Required" />
                          <Bar dataKey="candidate" fill="#33C3F0" name="Candidate" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="recommendations" className="pt-4">
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">Based on our analysis, the candidate is a good match with some areas for consideration:</p>
                      
                      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                        <li>Candidate has strong frontend skills that align well with the requirements</li>
                        <li>Limited Docker experience could be addressed with training</li>
                        <li>Salary expectations are within the target range</li>
                        <li>Previous team leadership experience is a plus</li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Generate Communications</h2>
                
                <Tabs defaultValue="candidate">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="candidate">Candidate</TabsTrigger>
                    <TabsTrigger value="client">Client</TabsTrigger>
                  </TabsList>
                  <TabsContent value="candidate">
                    <div className="p-3 bg-gray-50 rounded-lg mb-4 text-sm">
                      <p><strong>Subject:</strong> Exciting Senior Developer Position</p>
                      <p className="mt-2">Hi John,</p>
                      <p className="mt-2">I came across your profile and noticed your strong experience with React and TypeScript. I'm working with a client who's looking for someone with your skillset for a Senior Developer role.</p>
                      <p className="mt-2">The position offers remote work, competitive pay, and a great tech stack. Would you be interested in learning more?</p>
                      <p className="mt-2">Best regards,<br/>Sarah</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-talent-teal to-talent-purple hover:opacity-90">
                        <MessageSquare className="mr-2 h-4 w-4" /> Send Message
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="client">
                    <div className="mb-3">
                      <label htmlFor="client-email" className="text-sm font-medium">Email Template</label>
                      <Input id="client-email" className="mt-1" placeholder="Customize your message..." />
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg mb-4 text-sm">
                      <p><strong>Subject:</strong> Strong Candidate for Senior Developer Role</p>
                      <p className="mt-2">Hi Team,</p>
                      <p className="mt-2">I'd like to present John Smith for your Senior Developer role. John has 4+ years of experience with React and TypeScript, and has led teams of 3-5 developers.</p>
                      <p className="mt-2">Key strengths:</p>
                      <ul className="list-disc pl-5 my-2">
                        <li>Strong in React, TypeScript (83% match to requirements)</li>
                        <li>Previous experience in fintech industry</li>
                        <li>Available for interviews starting next week</li>
                      </ul>
                      <p className="mt-2">Please let me know if you'd like to schedule an interview.</p>
                      <p className="mt-2">Best regards,<br/>Sarah</p>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-talent-teal to-talent-purple hover:opacity-90">
                        <MessageSquare className="mr-2 h-4 w-4" /> Send Message
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
