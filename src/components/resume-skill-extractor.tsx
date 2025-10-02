'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function ResumeSkillExtractor() {
  const [resumeText, setResumeText] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const extractSkills = (text: string): string[] => {
    const skillList = [
      'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 
      'React', 'Node.js', 'Angular', 'Vue', 'HTML', 'CSS', 
      'MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'AWS', 'Azure', 
      'Docker', 'Kubernetes', 'Git', 'GitHub', 'REST API', 'GraphQL', 
      'Express', 'Next.js', 'Spring Boot', 'Django', 'Flask', 
      'Android', 'iOS', 'Swift', 'Kotlin', 'Flutter', 'React Native', 
      'Machine Learning', 'AI', 'TensorFlow', 'PyTorch', 'Data Science',
      'Pandas', 'NumPy', 'Linux', 'Windows', 'macOS', 'DevOps', 'CI/CD'
    ];
    
    const found: string[] = [];
    const lower = text.toLowerCase();
    
    skillList.forEach(skill => {
      if (lower.includes(skill.toLowerCase())) {
        found.push(skill);
      }
    });
    
    return [...new Set(found)];
  };

  const analyzeResume = async () => {
    setError('');
    
    if (!resumeText.trim()) {
      setError('Please enter resume text');
      toast({
        title: 'Error',
        description: 'Please enter resume text to analyze',
        variant: 'destructive',
      });
      return;
    }

    if (resumeText.length < 100) {
      setError('Resume text must be at least 100 characters');
      toast({
        title: 'Error',
        description: 'Resume text must be at least 100 characters',
        variant: 'destructive',
      });
      return;
    }

    setIsAnalyzing(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const found = extractSkills(resumeText);
      setSkills(found);
      
      if (found.length > 0) {
        toast({
          title: 'Success',
          description: `Found ${found.length} skills in your resume`,
        });
      } else {
        toast({
          title: 'No Skills Found',
          description: 'Try adding more technical details.',
        });
      }
    } catch (err) {
      setError('Analysis failed');
      toast({
        title: 'Error',
        description: 'Failed to analyze resume',
        variant: 'destructive',
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Sparkles className="text-accent" />
          Smart Skill Analysis
        </CardTitle>
        <CardDescription>
          Paste your resume text below to extract key technical skills.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <Textarea
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          placeholder="Paste your full resume text here..."
          rows={12}
          className="text-sm resize-none"
        />
        
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-end">
        <Button 
          onClick={analyzeResume} 
          disabled={isAnalyzing || !resumeText.trim()}
          className="w-full md:w-auto"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="animate-spin mr-2 h-4 w-4" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Analyze Resume
            </>
          )}
        </Button>
      </CardFooter>

      {skills.length > 0 && (
        <div className="px-6 pb-6">
          <Alert>
            <Sparkles className="h-4 w-4" />
            <AlertTitle className="font-bold">
              Extracted Skills ({skills.length})
            </AlertTitle>
            <AlertDescription>
              <div className="flex flex-wrap gap-2 mt-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                These skills were detected from your resume text.
              </p>
            </AlertDescription>
          </Alert>
        </div>
      )}
    </Card>
  );
}