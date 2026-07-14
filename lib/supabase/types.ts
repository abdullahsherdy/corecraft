export interface ContactSubmission {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  topic: string | null;
  message: string;
  status: 'new' | 'contacted' | 'closed';
}

export type ContactSubmissionInsert = Omit<
  ContactSubmission,
  'id' | 'created_at' | 'status'
> & {
  status?: ContactSubmission['status'];
};

export interface EnrollmentLead {
  id: string;
  created_at: string;
  name: string;
  email: string;
  course_slug: string | null;
  service:
    | 'private-mentorship'
    | 'private-course'
    | 'group-course'
    | 'undecided';
  preferred_language: 'arabic' | 'english' | 'either' | null;
  notes: string | null;
  status: 'new' | 'intro-call-booked' | 'enrolled' | 'closed';
}

export type EnrollmentLeadInsert = Omit<
  EnrollmentLead,
  'id' | 'created_at' | 'status'
> & {
  status?: EnrollmentLead['status'];
};

export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: ContactSubmission;
        Insert: ContactSubmissionInsert;
        Update: Partial<ContactSubmissionInsert>;
        Relationships: [];
      };
      enrollment_leads: {
        Row: EnrollmentLead;
        Insert: EnrollmentLeadInsert;
        Update: Partial<EnrollmentLeadInsert>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
