// ./schemas/resumeSubmission.ts
export default {
  name: 'resumeSubmission',
  title: 'Resume Submission',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'file',
      title: 'Resume File',
      type: 'file',
    },
  ],
};
