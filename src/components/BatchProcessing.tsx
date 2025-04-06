
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Upload, FilePlus, FileCheck, AlertCircle } from 'lucide-react';

const BatchProcessing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Batch <span className="gradient-text">CV Processing</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upload multiple CVs and match them against job descriptions in bulk
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Batch Upload */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Upload Files</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed rounded-lg p-8 text-center flex flex-col items-center justify-center h-48 mb-4">
                  <div className="bg-gray-100 rounded-full p-2 mb-3">
                    <Upload className="h-6 w-6 text-gray-500" />
                  </div>
                  <p className="mb-1 font-medium">Drop multiple CVs here</p>
                  <p className="text-sm text-gray-500 mb-3">or click to browse</p>
                  <Button size="sm">Select Files</Button>
                </div>
                
                <div className="mt-4">
                  <label className="text-sm font-medium block mb-2">Select Job Description</label>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-2">
                    <div className="flex items-center gap-2">
                      <FilePlus className="h-5 w-5 text-talent-purple" />
                      <span className="text-sm">Senior Developer.pdf</span>
                    </div>
                    <Badge>Selected</Badge>
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-gradient-to-r from-talent-teal to-talent-purple hover:opacity-90">
                  Process Batch
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Processing Status */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Batch Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Processing Status</span>
                    <span className="text-sm">4/10 complete</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                
                <div className="space-y-3 mt-5">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="text-sm font-medium">John_Doe_CV.pdf</p>
                        <p className="text-xs text-gray-500">Processed</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-green-600">92% Match</p>
                      <p className="text-xs font-medium">€60-70/hr</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="text-sm font-medium">Jane_Smith_CV.pdf</p>
                        <p className="text-xs text-gray-500">Processed</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-green-600">85% Match</p>
                      <p className="text-xs font-medium">€55-65/hr</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <div className="flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-yellow-500" />
                      <div>
                        <p className="text-sm font-medium">Mike_Johnson_CV.pdf</p>
                        <p className="text-xs text-gray-500">Processed</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-yellow-600">68% Match</p>
                      <p className="text-xs font-medium">€45-55/hr</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <div>
                        <p className="text-sm font-medium">Alex_Brown_CV.pdf</p>
                        <p className="text-xs text-gray-500">Processed</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-red-600">45% Match</p>
                      <p className="text-xs font-medium">Not recommended</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Upload className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium">Lisa_White_CV.pdf</p>
                        <p className="text-xs text-gray-500">Processing...</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Progress value={60} className="w-16 h-1" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-between">
                  <Button variant="outline">
                    Cancel Remaining
                  </Button>
                  <Button>
                    Export Results
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatchProcessing;
