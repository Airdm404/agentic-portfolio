import { z } from 'zod';

export const classifyIntentSchema = z.object({
  intent: z.enum([
    'PORTFOLIO',
    'PROJECT',
    'EXPERIENCE',
    'HIRING',
    'CONTACT',
    'SMALL_TALK',
    'OFF_TOPIC',
    'INJECTION',
  ]),
});
