
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Upload, FileText, MessageSquare, FileCog, File } from 'lucide-react';

const Analysis = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 px-4 pb-16 bg-gray-50">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8">CV Analysis</h1>
          
          <Tabs defaultValue="upload">
            <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
              <TabsTrigger value="upload">Upload</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Upload CV
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed rounded-lg p-8 text-center flex flex-col items-center justify-center h-64">
                      <div className="bg-talent-teal/10 rounded-full p-3 mb-4">
                        <Upload className="h-6 w-6 text-talent-teal" />
                      </div>
                      <p className="mb-2 font-medium">Drag and drop CV here</p>
                      <p className="text-sm text-gray-500 mb-4">or click to browse</p>
                      <Button className="bg-talent-teal hover:bg-talent-teal/90">
                        Upload CV
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <File className="h-5 w-5 mr-2" />
                      Upload Job Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed rounded-lg p-8 text-center flex flex-col items-center justify-center h-64">
                      <div className="bg-talent-purple/10 rounded-full p-3 mb-4">
                        <Upload className="h-6 w-6 text-talent-purple" />
                      </div>
                      <p className="mb-2 font-medium">Drag and drop job description here</p>
                      <p className="text-sm text-gray-500 mb-4">or click to browse</p>
                      <Button className="bg-talent-purple hover:bg-talent-purple/90">
                        Upload Description
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button className="bg-gradient-to-r from-talent-teal to-talent-purple hover:opacity-90 px-8">
                  Analyze Match
                  <FileCog className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="analysis">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Match Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Overall Match</span>
                          <span className="font-bold text-talent-teal">85%</span>
                        </div>
                        <Progress value={85} className="h-2.5 bg-gray-100" indicatorClassName="bg-gradient-to-r from-talent-teal to-talent-purple" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h3 className="font-bold mb-3">Technical Skills</h3>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>React.js</span>
                                <span className="font-bold text-talent-teal">95%</span>
                              </div>
                              <Progress value={95} className="h-1.5" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>TypeScript</span>
                                <span className="font-bold text-talent-teal">90%</span>
                              </div>
                              <Progress value={90} className="h-1.5" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Node.js</span>
                                <span className="font-bold text-talent-teal">85%</span>
                              </div>
                              <Progress value={85} className="h-1.5" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h3 className="font-bold mb-3">Experience & Education</h3>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Years of Experience</span>
                                <span className="font-bold text-talent-purple">80%</span>
                              </div>
                              <Progress value={80} className="h-1.5" indicatorClassName="bg-talent-purple" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Education Level</span>
                                <span className="font-bold text-talent-purple">100%</span>
                              </div>
                              <Progress value={100} className="h-1.5" indicatorClassName="bg-talent-purple" />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Industry Relevance</span>
                                <span className="font-bold text-talent-purple">90%</span>
                              </div>
                              <Progress value={90} className="h-1.5" indicatorClassName="bg-talent-purple" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-bold mb-3">Match Analysis</h3>
                        <p className="text-gray-700">
                          This candidate has a strong technical background with 5 years of experience in web development, particularly in React and TypeScript which are key requirements for this role. Their expertise in front-end development aligns well with the job description.
                        </p>
                        <p className="text-gray-700 mt-2">
                          Areas of high compatibility include the tech stack knowledge and experience leading small teams. One potential gap is experience with GraphQL, which was mentioned as a preferred skill in the job description.
                        </p>
                      </div>
                      
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-bold mb-3">Salary Insights</h3>
                        <p className="text-gray-700">Based on location, experience and skills:</p>
                        <div className="flex items-center mt-2">
                          <span className="text-sm text-gray-500">$80k</span>
                          <div className="h-2 bg-gray-200 mx-2 flex-1 rounded-full">
                            <div className="h-2 bg-gradient-to-r from-talent-teal to-talent-purple rounded-full" style={{width: "75%"}}></div>
                          </div>
                          <span className="text-sm text-gray-500">$120k</span>
                        </div>
                        <p className="text-sm text-center mt-2 font-medium">Suggested range: $95k - $110k</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Candidate Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-gray-200 rounded-full mb-3 flex items-center justify-center">
                          <FileText className="h-10 w-10 text-gray-400" />
                        </div>
                        <h3 className="font-bold">Senior React Developer</h3>
                        <p className="text-gray-500 text-sm">CV uploaded 2 minutes ago</p>
                      </div>
                      
                      <div className="border-t border-gray-200 pt-4">
                        <div className="mb-3">
                          <span className="text-sm text-gray-500 block">Name</span>
                          <span className="font-medium">Alex Johnson</span>
                        </div>
                        <div className="mb-3">
                          <span className="text-sm text-gray-500 block">Experience</span>
                          <span className="font-medium">5 years</span>
                        </div>
                        <div className="mb-3">
                          <span className="text-sm text-gray-500 block">Location</span>
                          <span className="font-medium">New York, NY</span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500 block">Key Skills</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            <span className="px-2 py-1 bg-talent-teal/10 text-talent-teal text-xs rounded-full">React</span>
                            <span className="px-2 py-1 bg-talent-purple/10 text-talent-purple text-xs rounded-full">TypeScript</span>
                            <span className="px-2 py-1 bg-talent-teal/10 text-talent-teal text-xs rounded-full">Node.js</span>
                            <span className="px-2 py-1 bg-talent-purple/10 text-talent-purple text-xs rounded-full">Redux</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-talent-teal to-talent-purple hover:opacity-90">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Generate Messages
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="messages">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Message to Candidate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-800 whitespace-pre-line">
                        Hi Alex,
                        
                        I hope this message finds you well. I came across your profile and was impressed by your 5 years of experience in React development.
                        
                        We have an exciting opportunity for a Senior React Developer at a fintech company in New York. The role involves working with React, TypeScript, and Node.js - technologies you have strong experience with.
                        
                        Would you be interested in learning more about this position? If so, I'd be happy to share additional details and discuss your availability for a brief call.
                        
                        Looking forward to your response!
                        
                        Best regards,
                        [Your Name]
                      </p>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button className="bg-talent-teal hover:bg-talent-teal/90 flex-1">Copy</Button>
                      <Button variant="outline" className="flex-1">Edit</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Message to Client
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-800 whitespace-pre-line">
                        Dear Client,
                        
                        I'm pleased to present a strong candidate for your Senior React Developer position.
                        
                        Alex Johnson has 5 years of experience specializing in React, TypeScript, and Node.js development. Their past projects include building scalable financial applications and leading small teams, which aligns perfectly with your requirements.
                        
                        Key strengths:
                        - Expert in React.js (95% match)
                        - Strong TypeScript experience (90% match)
                        - Node.js back-end knowledge (85% match)
                        - Experience in team leadership
                        
                        Overall, there's an 85% match between their profile and your job requirements. The candidate is currently available for interviews and looking for a position in the $95-110k range.
                        
                        Would you like to review their full CV or schedule an interview?
                        
                        Best regards,
                        [Your Name]
                      </p>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button className="bg-talent-purple hover:bg-talent-purple/90 flex-1">Copy</Button>
                      <Button variant="outline" className="flex-1">Edit</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analysis;
