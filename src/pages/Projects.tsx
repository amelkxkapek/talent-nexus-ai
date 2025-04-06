
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, Users, Plus, Search, Filter } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "FinTech Solutions",
      location: "New York, NY",
      candidates: 4,
      status: "active"
    },
    {
      id: 2,
      title: "Full Stack JavaScript Developer",
      company: "E-commerce Platform",
      location: "Remote",
      candidates: 6,
      status: "active"
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "Cloud Services Inc.",
      location: "San Francisco, CA",
      candidates: 2,
      status: "active"
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Mobile App Startup",
      location: "Austin, TX",
      candidates: 3,
      status: "completed"
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Analytics Co.",
      location: "Boston, MA",
      candidates: 5,
      status: "completed"
    }
  ];
  
  const candidates = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Senior React Developer",
      match: 85,
      status: "interview"
    },
    {
      id: 2,
      name: "Jamie Smith",
      role: "React Frontend Developer",
      match: 78,
      status: "contacted"
    },
    {
      id: 3,
      name: "Morgan Lee",
      role: "Full Stack Developer",
      match: 92,
      status: "interview"
    },
    {
      id: 4,
      name: "Casey Brown",
      role: "JavaScript Developer",
      match: 72,
      status: "pending"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 px-4 pb-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <h1 className="text-3xl font-bold">Projects</h1>
            <Button className="mt-4 sm:mt-0 bg-gradient-to-r from-talent-teal to-talent-purple hover:opacity-90">
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Projects List */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center">
                      <Briefcase className="h-5 w-5 mr-2" />
                      Projects
                    </CardTitle>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="active" className="mb-4">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="active">Active</TabsTrigger>
                      <TabsTrigger value="completed">Completed</TabsTrigger>
                    </TabsList>
                  </Tabs>
                  
                  <div className="space-y-2">
                    {projects.filter(p => p.status === "active").map(project => (
                      <div key={project.id} className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                        <h3 className="font-medium">{project.title}</h3>
                        <p className="text-sm text-gray-500">{project.company}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-500">{project.location}</span>
                          <Badge variant="outline" className="text-xs bg-talent-teal/10 text-talent-teal border-talent-teal/20">
                            {project.candidates} candidates
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Project Details */}
            <div className="lg:col-span-3">
              <Card className="mb-8">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Senior React Developer</CardTitle>
                      <p className="text-sm text-gray-500">FinTech Solutions • New York, NY</p>
                    </div>
                    <Badge className="bg-talent-teal">Active</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold mb-2">Job Description</h3>
                      <p className="text-gray-600">
                        We are seeking an experienced Senior React Developer to join our team. The ideal candidate will have strong expertise in React, TypeScript, and Node.js, with experience building scalable web applications in the financial sector.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold mb-2">Requirements</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>5+ years of experience with React.js</li>
                        <li>Strong knowledge of TypeScript</li>
                        <li>Experience with Node.js and Express</li>
                        <li>Familiarity with RESTful APIs</li>
                        <li>Experience leading small development teams</li>
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-500">Salary Range</p>
                        <p className="font-medium">$100k - $130k</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-500">Experience</p>
                        <p className="font-medium">5+ years</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-500">Work Type</p>
                        <p className="font-medium">Hybrid</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-500">Start Date</p>
                        <p className="font-medium">Immediate</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      Candidates
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="h-8">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                      <Button size="sm" className="h-8 bg-talent-teal hover:bg-talent-teal/90">
                        <Plus className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-xs text-gray-500 border-b">
                          <th className="pb-2 font-normal">Name</th>
                          <th className="pb-2 font-normal">Match</th>
                          <th className="pb-2 font-normal">Status</th>
                          <th className="pb-2 font-normal">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {candidates.map(candidate => (
                          <tr key={candidate.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3">
                              <div>
                                <p className="font-medium">{candidate.name}</p>
                                <p className="text-xs text-gray-500">{candidate.role}</p>
                              </div>
                            </td>
                            <td className="py-3">
                              <div className="flex items-center">
                                <span className={`font-medium ${candidate.match >= 80 ? 'text-talent-teal' : 'text-talent-purple'}`}>{candidate.match}%</span>
                                <div className="ml-2 w-16 h-1.5 bg-gray-200 rounded-full">
                                  <div className={`h-1.5 rounded-full ${candidate.match >= 80 ? 'bg-talent-teal' : 'bg-talent-purple'}`} style={{width: `${candidate.match}%`}}></div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3">
                              <Badge className={
                                candidate.status === 'interview' ? 'bg-talent-teal' : 
                                candidate.status === 'contacted' ? 'bg-talent-purple' : 
                                'bg-gray-400'
                              }>
                                {candidate.status.charAt(0).toUpperCase() + candidate.status.slice(1)}
                              </Badge>
                            </td>
                            <td className="py-3">
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="h-7 text-xs">View</Button>
                                <Button variant="outline" size="sm" className="h-7 text-xs">Message</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
