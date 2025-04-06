
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Upload, FileText, File } from 'lucide-react';
import { cn } from '@/lib/utils';

const MatchAnalysis = () => {
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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            CV-Job <span className="gradient-text">Match Analysis</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upload a CV and job description to get an instant analysis of compatibility
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div 
              className={`border-2 border-dashed rounded-xl p-10 text-center flex flex-col items-center justify-center h-64 transition-colors ${isDragging ? 'border-talent-teal bg-talent-teal/5' : 'border-gray-200'}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="bg-gray-100 rounded-full p-3 mb-4">
                <Upload className="h-8 w-8 text-gray-500" />
              </div>
              <p className="mb-2 font-medium">Drag and drop files here</p>
              <p className="text-sm text-gray-500 mb-4">or click to browse</p>
              <Button className="bg-gradient-to-r from-talent-teal to-talent-purple hover:opacity-90">
                Upload Files
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="hover-scale">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-talent-teal/10 rounded-full p-3">
                    <FileText className="h-6 w-6 text-talent-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Upload CV</h3>
                    <p className="text-xs text-gray-500">PDF or DOCX</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover-scale">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-talent-purple/10 rounded-full p-3">
                    <File className="h-6 w-6 text-talent-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Job Description</h3>
                    <p className="text-xs text-gray-500">Text or PDF</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold mb-6">Match Analysis</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Overall Match</span>
                  <span className="font-bold text-talent-teal">85%</span>
                </div>
                <Progress value={85} className="h-2 bg-gray-100" />
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Technical Skills</span>
                    <span className="font-bold text-talent-teal">90%</span>
                  </div>
                  <Progress value={90} className="h-1.5 bg-gray-100" />
                  <p className="text-sm text-gray-600 mt-2">Strong match in React, TypeScript, and Node.js requirements</p>
                </div>
                
                <div className="p-4 bg-white rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Experience Level</span>
                    <span className="font-bold text-talent-purple">80%</span>
                  </div>
                  <Progress value={80} className="h-1.5 bg-gray-100" />
                  <p className="text-sm text-gray-600 mt-2">5 years experience vs. requested 6+ years</p>
                </div>
                
                <div className="p-4 bg-white rounded-lg">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Soft Skills</span>
                    <span className="font-bold text-talent-teal">85%</span>
                  </div>
                  <Progress value={85} className="h-1.5 bg-gray-100" />
                  <p className="text-sm text-gray-600 mt-2">Strong communication and teamwork indicators</p>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-talent-teal to-talent-purple hover:opacity-90">
                Generate Communications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchAnalysis;
