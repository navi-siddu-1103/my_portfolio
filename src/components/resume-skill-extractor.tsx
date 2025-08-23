'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { handleResumeAnalysis, type FormState } from '@/app/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Sparkles } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? <Loader2 className="animate-spin" /> : "Analyze Resume"}
    </Button>
  );
}

export function ResumeSkillExtractor() {
  const initialState: FormState = {
    message: '',
    skills: null,
    errors: null,
  };
  const [state, formAction] = useActionState(handleResumeAnalysis, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.timestamp) { // Only run when the action has been executed
        if(state.errors) {
            toast({
                title: 'Error',
                description: state.errors.resumeText?.join(', ') || state.message,
                variant: 'destructive',
            });
        } else if (state.skills !== null) {
             toast({
                title: 'Success',
                description: state.message,
            });
        } else if (state.message) {
            toast({
                title: 'Info',
                description: state.message,
            });
        }
    }
  }, [state]);

  return (
    <Card className="max-w-4xl mx-auto shadow-lg">
      <form action={formAction}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="text-accent" />
            AI-Powered Skill Analysis
          </CardTitle>
          <CardDescription>
            Paste your resume text below. Our AI will analyze it and extract key skills to help you tailor your portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            name="resumeText"
            placeholder="Paste your full resume text here..."
            rows={15}
            className="text-sm"
          />
          {state?.errors?.resumeText && (
            <p className="text-sm text-destructive">{state.errors.resumeText[0]}</p>
          )}
        </CardContent>
        <CardFooter className="flex justify-end">
          <SubmitButton />
        </CardFooter>
      </form>

      {state.skills && state.skills.length > 0 && (
        <div className="p-6 border-t">
          <Alert>
            <Sparkles className="h-4 w-4" />
            <AlertTitle className="font-bold">Extracted Skills</AlertTitle>
            <AlertDescription>
              <div className="flex flex-wrap gap-2 mt-2">
                {state.skills.map((skill, index) => (
                  <Badge key={index} variant="default">{skill}</Badge>
                ))}
              </div>
            </AlertDescription>
          </Alert>
        </div>
      )}

      {state.skills && state.skills.length === 0 && (
         <div className="p-6 border-t">
            <Alert variant="destructive">
                <AlertTitle>No Skills Found</AlertTitle>
                <AlertDescription>
                {state.message}
                </AlertDescription>
            </Alert>
        </div>
      )}
    </Card>
  );
}
