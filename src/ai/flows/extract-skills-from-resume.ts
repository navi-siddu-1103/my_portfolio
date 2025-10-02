'use server';
/**
 * @fileOverview An AI agent that extracts skills from a resume.
 *
 * - extractSkillsFromResume - A function that extracts skills from a resume.
 * - ExtractSkillsFromResumeInput - The input type for the extractSkillsFromResume function.
 * - ExtractSkillsFromResumeOutput - The return type for the extractSkillsFromResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExtractSkillsFromResumeInputSchema = z.object({
  resumeText: z.string().describe('The text content of the resume.'),
});
export type ExtractSkillsFromResumeInput = z.infer<typeof ExtractSkillsFromResumeInputSchema>;

const ExtractSkillsFromResumeOutputSchema = z.object({
  skills: z.array(z.string()).describe('A list of key skills extracted from the resume.'),
});
export type ExtractSkillsFromResumeOutput = z.infer<typeof ExtractSkillsFromResumeOutputSchema>;

export async function extractSkillsFromResume(input: ExtractSkillsFromResumeInput): Promise<ExtractSkillsFromResumeOutput> {
  return extractSkillsFromResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'extractSkillsFromResumePrompt',
  input: {schema: ExtractSkillsFromResumeInputSchema},
  output: {schema: ExtractSkillsFromResumeOutputSchema},
  prompt: `You are an AI expert in resume analysis. Your job is to extract the
  key technical skills from the resume text provided. Return a list of skills.

  Resume Text: {{{resumeText}}}
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const extractSkillsFromResumeFlow = ai.defineFlow(
  {
    name: 'extractSkillsFromResumeFlow',
    inputSchema: ExtractSkillsFromResumeInputSchema,
    outputSchema: ExtractSkillsFromResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
