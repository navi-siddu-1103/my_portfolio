'use server';

import { extractSkillsFromResume } from '@/ai/flows/extract-skills-from-resume';
import { z } from 'zod';

const ResumeSchema = z.object({
  resumeText: z.string().min(100, { message: 'Resume text must be at least 100 characters to analyze effectively.' }),
});

export type FormState = {
  message: string;
  skills: string[] | null;
  errors?: {
    resumeText?: string[];
  } | null;
  timestamp?: number;
};

export async function handleResumeAnalysis(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validationResult = ResumeSchema.safeParse({
    resumeText: formData.get('resumeText'),
  });

  if (!validationResult.success) {
    return {
      message: 'Validation failed.',
      skills: null,
      errors: validationResult.error.flatten().fieldErrors,
      timestamp: Date.now(),
    };
  }

  try {
    const result = await extractSkillsFromResume({
      resumeText: validationResult.data.resumeText,
    });
    
    if (result.skills && result.skills.length > 0) {
      return {
        message: 'Successfully extracted skills from your resume.',
        skills: result.skills,
        errors: null,
        timestamp: Date.now(),
      };
    } else {
      return {
        message: 'Could not extract any skills. Try providing more detailed information in your resume.',
        skills: [],
        errors: null,
        timestamp: Date.now(),
      };
    }
  } catch (error) {
    console.error('Error extracting skills:', error);
    return {
      message: 'An AI-related error occurred. Please try again later.',
      skills: null,
      errors: null,
      timestamp: Date.now(),
    };
  }
}
