import { defineType } from 'sanity';

export default defineType({
  name: 'comment', // The name of the schema
  title: 'Comment', // The display name for the schema
  type: 'document', // Specifies this is a document type
  fields: [
    {
      name: 'name', // Field for the name of the person/commenter
      title: 'Name', // Display name for the field
      type: 'string', // Type is string
      validation: Rule => Rule.required().max(100), // Validation rules: required, max 100 characters
    },
    {
      name: 'comment', // Field for the comment content
      title: 'Comment', // Display name for the field
      type: 'text', // Type is text for longer comments
      validation: Rule => Rule.required().max(500), // Validation rules: required, max 500 characters
    },
    {
        name: 'slug', 
        title: 'slug', 
        type: 'string', 
    },
    {
          name: 'publishedAt',
          type: 'datetime',
    },
  ],
});