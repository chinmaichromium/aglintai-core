export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      aggregated_data: {
        Row: {
          jsonb_agg: Json | null
        }
        Insert: {
          jsonb_agg?: Json | null
        }
        Update: {
          jsonb_agg?: Json | null
        }
        Relationships: []
      }
      ai_videos: {
        Row: {
          created_at: string
          error: Json | null
          file_url: string | null
          id: number
          video_id: string | null
          video_url: string | null
        }
        Insert: {
          created_at?: string
          error?: Json | null
          file_url?: string | null
          id?: number
          video_id?: string | null
          video_url?: string | null
        }
        Update: {
          created_at?: string
          error?: Json | null
          file_url?: string | null
          id?: number
          video_id?: string | null
          video_url?: string | null
        }
        Relationships: []
      }
      application_reference: {
        Row: {
          ats_json: Json
          created_at: string
          id: number
          is_processed: boolean
          recruiter_id: string
        }
        Insert: {
          ats_json: Json
          created_at?: string
          id?: number
          is_processed?: boolean
          recruiter_id: string
        }
        Update: {
          ats_json?: Json
          created_at?: string
          id?: number
          is_processed?: boolean
          recruiter_id?: string
        }
        Relationships: []
      }
      applications: {
        Row: {
          applied_at: string
          assessment_id: string | null
          candidate_file_id: string | null
          candidate_id: string
          created_at: string
          id: string
          is_resume_fetching: boolean
          job_id: string
          overall_score: number | null
          phone_screening: Json | null
          processing_status: Database["public"]["Enums"]["application_processing_status"]
          retry: number
          score_json: Json | null
          status: Database["public"]["Enums"]["application_status"]
          status_emails_sent: Json
        }
        Insert: {
          applied_at?: string
          assessment_id?: string | null
          candidate_file_id?: string | null
          candidate_id: string
          created_at?: string
          id?: string
          is_resume_fetching?: boolean
          job_id: string
          overall_score?: number | null
          phone_screening?: Json | null
          processing_status?: Database["public"]["Enums"]["application_processing_status"]
          retry?: number
          score_json?: Json | null
          status?: Database["public"]["Enums"]["application_status"]
          status_emails_sent?: Json
        }
        Update: {
          applied_at?: string
          assessment_id?: string | null
          candidate_file_id?: string | null
          candidate_id?: string
          created_at?: string
          id?: string
          is_resume_fetching?: boolean
          job_id?: string
          overall_score?: number | null
          phone_screening?: Json | null
          processing_status?: Database["public"]["Enums"]["application_processing_status"]
          retry?: number
          score_json?: Json | null
          status?: Database["public"]["Enums"]["application_status"]
          status_emails_sent?: Json
        }
        Relationships: [
          {
            foreignKeyName: "applications_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "assessment_results"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_candidate_file_id_fkey"
            columns: ["candidate_file_id"]
            isOneToOne: false
            referencedRelation: "candidate_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "candidates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          }
        ]
      }
      assessment_results: {
        Row: {
          ai_interviewer_id: number
          application_id: string
          conversation: Json[]
          created_at: string
          feedback: Json
          id: string
          interview_duration: string
          interview_score: number
          interviewing_date: string
        }
        Insert: {
          ai_interviewer_id: number
          application_id: string
          conversation: Json[]
          created_at?: string
          feedback: Json
          id?: string
          interview_duration: string
          interview_score?: number
          interviewing_date?: string
        }
        Update: {
          ai_interviewer_id?: number
          application_id?: string
          conversation?: Json[]
          created_at?: string
          feedback?: Json
          id?: string
          interview_duration?: string
          interview_score?: number
          interviewing_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "assessment_results_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          }
        ]
      }
      candidate_files: {
        Row: {
          candidate_id: string | null
          created_at: string
          education_embedding: string | null
          experience_embedding: string | null
          file_url: string | null
          id: string
          resume_embedding: string | null
          resume_json: Json | null
          resume_text: string | null
          skills_embedding: string | null
          type: Database["public"]["Enums"]["file_type"] | null
        }
        Insert: {
          candidate_id?: string | null
          created_at?: string
          education_embedding?: string | null
          experience_embedding?: string | null
          file_url?: string | null
          id?: string
          resume_embedding?: string | null
          resume_json?: Json | null
          resume_text?: string | null
          skills_embedding?: string | null
          type?: Database["public"]["Enums"]["file_type"] | null
        }
        Update: {
          candidate_id?: string | null
          created_at?: string
          education_embedding?: string | null
          experience_embedding?: string | null
          file_url?: string | null
          id?: string
          resume_embedding?: string | null
          resume_json?: Json | null
          resume_text?: string | null
          skills_embedding?: string | null
          type?: Database["public"]["Enums"]["file_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "new_candidate_files_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "candidates"
            referencedColumns: ["id"]
          }
        ]
      }
      candidate_search_history: {
        Row: {
          bookmarked_candidates: string[] | null
          created_at: string
          id: number
          is_search_jd: boolean | null
          query_json: Json | null
          recruiter_id: string
          search_query: string | null
          search_results: Json[] | null
        }
        Insert: {
          bookmarked_candidates?: string[] | null
          created_at?: string
          id?: number
          is_search_jd?: boolean | null
          query_json?: Json | null
          recruiter_id: string
          search_query?: string | null
          search_results?: Json[] | null
        }
        Update: {
          bookmarked_candidates?: string[] | null
          created_at?: string
          id?: number
          is_search_jd?: boolean | null
          query_json?: Json | null
          recruiter_id?: string
          search_query?: string | null
          search_results?: Json[] | null
        }
        Relationships: [
          {
            foreignKeyName: "candidate_search_history_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          }
        ]
      }
      candidates: {
        Row: {
          avatar: string | null
          city: string | null
          country: string | null
          created_at: string
          email: string
          experince_in_months: number | null
          first_name: string
          geolocation: unknown | null
          id: string
          last_name: string | null
          last_updated: string
          linkedin: string | null
          phone: string | null
          recruiter_id: string
          state: string | null
        }
        Insert: {
          avatar?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          email: string
          experince_in_months?: number | null
          first_name?: string
          geolocation?: unknown | null
          id?: string
          last_name?: string | null
          last_updated?: string
          linkedin?: string | null
          phone?: string | null
          recruiter_id: string
          state?: string | null
        }
        Update: {
          avatar?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          email?: string
          experince_in_months?: number | null
          first_name?: string
          geolocation?: unknown | null
          id?: string
          last_name?: string | null
          last_updated?: string
          linkedin?: string | null
          phone?: string | null
          recruiter_id?: string
          state?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "new_candidate_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          }
        ]
      }
      env: {
        Row: {
          created_at: string
          id: number
          name: string | null
          value: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          value?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          value?: string | null
        }
        Relationships: []
      }
      greenhouse_reference: {
        Row: {
          application_id: string
          created_at: string
          greenhouse_id: string
          id: number
          posting_id: string
          public_job_id: string
          resume: string | null
          resume_saved: boolean
        }
        Insert: {
          application_id: string
          created_at?: string
          greenhouse_id: string
          id?: number
          posting_id: string
          public_job_id: string
          resume?: string | null
          resume_saved?: boolean
        }
        Update: {
          application_id?: string
          created_at?: string
          greenhouse_id?: string
          id?: number
          posting_id?: string
          public_job_id?: string
          resume?: string | null
          resume_saved?: boolean
        }
        Relationships: []
      }
      job_reference: {
        Row: {
          ats: string | null
          ats_job_id: string
          ats_json: Json | null
          created_at: string
          id: number
          public_job_id: string
          recruiter_id: string
        }
        Insert: {
          ats?: string | null
          ats_job_id: string
          ats_json?: Json | null
          created_at?: string
          id?: number
          public_job_id: string
          recruiter_id: string
        }
        Update: {
          ats?: string | null
          ats_job_id?: string
          ats_json?: Json | null
          created_at?: string
          id?: number
          public_job_id?: string
          recruiter_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_reference_public_job_id_fkey"
            columns: ["public_job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "job_reference_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          }
        ]
      }
      json_resume: {
        Row: {
          "?column?": Json | null
        }
        Insert: {
          "?column?"?: Json | null
        }
        Update: {
          "?column?"?: Json | null
        }
        Relationships: []
      }
      lever_job_reference: {
        Row: {
          created_at: string
          id: number
          job_id: string
          last_synced_at: string | null
          posting_id: string
          recruiter_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          job_id: string
          last_synced_at?: string | null
          posting_id: string
          recruiter_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          job_id?: string
          last_synced_at?: string | null
          posting_id?: string
          recruiter_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lever_job_reference_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lever_job_reference_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          }
        ]
      }
      lever_reference: {
        Row: {
          application_id: string
          created_at: string
          feedback: Json | null
          last_synced: string
          opportunity_id: string
          posting_id: string
          public_job_id: string
          stage: string | null
        }
        Insert: {
          application_id: string
          created_at?: string
          feedback?: Json | null
          last_synced?: string
          opportunity_id: string
          posting_id: string
          public_job_id: string
          stage?: string | null
        }
        Update: {
          application_id?: string
          created_at?: string
          feedback?: Json | null
          last_synced?: string
          opportunity_id?: string
          posting_id?: string
          public_job_id?: string
          stage?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lever_reference_public_job_id_fkey"
            columns: ["public_job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          }
        ]
      }
      notify_me: {
        Row: {
          created_at: string | null
          email: string
          id: string
          job_id: string | null
          job_title: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          job_id?: string | null
          job_title?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          job_id?: string | null
          job_title?: string | null
        }
        Relationships: []
      }
      outreached_emails: {
        Row: {
          candidate_id: string
          email: Json
          id: number
          recruiter_id: string
        }
        Insert: {
          candidate_id: string
          email?: Json
          id?: number
          recruiter_id: string
        }
        Update: {
          candidate_id?: string
          email?: Json
          id?: number
          recruiter_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "outreached_emails_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          }
        ]
      }
      public_jobs: {
        Row: {
          active_status: Json
          assessment: boolean | null
          company: string | null
          company_details: string | null
          created_at: string
          department: string | null
          description: string | null
          draft: Json | null
          email_template: Json
          end_video: Json | null
          id: string
          interview_instructions: string | null
          intro_videos: Json | null
          is_ats_sync: boolean
          jd_json: Json | null
          jd_json_2: Json | null
          job_criteria: Json | null
          job_title: string | null
          job_type: string | null
          location: string | null
          logo: string | null
          new_screening_setting: Json
          overview: string | null
          parameter_weights: Json
          phone_screening: Json | null
          posted_by: string
          recruiter_id: string
          screening_questions: Json[] | null
          screening_setting: Json | null
          skills: string[] | null
          slug: string
          start_video: Json | null
          status: string
          updated_at: string | null
          video_assessment: boolean
          workplace_type: string | null
        }
        Insert: {
          active_status?: Json
          assessment?: boolean | null
          company?: string | null
          company_details?: string | null
          created_at?: string
          department?: string | null
          description?: string | null
          draft?: Json | null
          email_template?: Json
          end_video?: Json | null
          id?: string
          interview_instructions?: string | null
          intro_videos?: Json | null
          is_ats_sync?: boolean
          jd_json?: Json | null
          jd_json_2?: Json | null
          job_criteria?: Json | null
          job_title?: string | null
          job_type?: string | null
          location?: string | null
          logo?: string | null
          new_screening_setting?: Json
          overview?: string | null
          parameter_weights?: Json
          phone_screening?: Json | null
          posted_by?: string
          recruiter_id: string
          screening_questions?: Json[] | null
          screening_setting?: Json | null
          skills?: string[] | null
          slug?: string
          start_video?: Json | null
          status?: string
          updated_at?: string | null
          video_assessment?: boolean
          workplace_type?: string | null
        }
        Update: {
          active_status?: Json
          assessment?: boolean | null
          company?: string | null
          company_details?: string | null
          created_at?: string
          department?: string | null
          description?: string | null
          draft?: Json | null
          email_template?: Json
          end_video?: Json | null
          id?: string
          interview_instructions?: string | null
          intro_videos?: Json | null
          is_ats_sync?: boolean
          jd_json?: Json | null
          jd_json_2?: Json | null
          job_criteria?: Json | null
          job_title?: string | null
          job_type?: string | null
          location?: string | null
          logo?: string | null
          new_screening_setting?: Json
          overview?: string | null
          parameter_weights?: Json
          phone_screening?: Json | null
          posted_by?: string
          recruiter_id?: string
          screening_questions?: Json[] | null
          screening_setting?: Json | null
          skills?: string[] | null
          slug?: string
          start_video?: Json | null
          status?: string
          updated_at?: string | null
          video_assessment?: boolean
          workplace_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_jobs_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          }
        ]
      }
      recruiter: {
        Row: {
          ai_avatar: Json | null
          application_process: string | null
          ashby_key: string | null
          ashby_last_synced: string | null
          ashby_sync_token: string | null
          assistant_id: string | null
          ats_familiar: string | null
          audio_avatar_id: number
          available_roles: string[]
          benefits: string | null
          company_overview: string | null
          company_values: string | null
          company_website: string | null
          created_at: string
          departments: string[]
          e_o_statement: string | null
          email: string | null
          email_outreach_templates: Json[] | null
          email_template: Json
          employee_size: string | null
          employment_type: Json
          greenhouse_key: string | null
          hr_contact: Json | null
          id: string
          industry: string | null
          lever_key: string | null
          logo: string | null
          m_v_statement: string | null
          name: string | null
          office_locations: Json[] | null
          phone_number: string | null
          primary_contact: Json | null
          recruiter_active: boolean | null
          recruiter_type: string | null
          recruiter_user_id: string | null
          roles: Json
          socials: Json | null
          technology_score: string[]
          use_of_purpose: Json | null
          video_assessment: boolean | null
          workplace_type: Json
        }
        Insert: {
          ai_avatar?: Json | null
          application_process?: string | null
          ashby_key?: string | null
          ashby_last_synced?: string | null
          ashby_sync_token?: string | null
          assistant_id?: string | null
          ats_familiar?: string | null
          audio_avatar_id?: number
          available_roles?: string[]
          benefits?: string | null
          company_overview?: string | null
          company_values?: string | null
          company_website?: string | null
          created_at?: string
          departments?: string[]
          e_o_statement?: string | null
          email?: string | null
          email_outreach_templates?: Json[] | null
          email_template?: Json
          employee_size?: string | null
          employment_type?: Json
          greenhouse_key?: string | null
          hr_contact?: Json | null
          id?: string
          industry?: string | null
          lever_key?: string | null
          logo?: string | null
          m_v_statement?: string | null
          name?: string | null
          office_locations?: Json[] | null
          phone_number?: string | null
          primary_contact?: Json | null
          recruiter_active?: boolean | null
          recruiter_type?: string | null
          recruiter_user_id?: string | null
          roles?: Json
          socials?: Json | null
          technology_score?: string[]
          use_of_purpose?: Json | null
          video_assessment?: boolean | null
          workplace_type?: Json
        }
        Update: {
          ai_avatar?: Json | null
          application_process?: string | null
          ashby_key?: string | null
          ashby_last_synced?: string | null
          ashby_sync_token?: string | null
          assistant_id?: string | null
          ats_familiar?: string | null
          audio_avatar_id?: number
          available_roles?: string[]
          benefits?: string | null
          company_overview?: string | null
          company_values?: string | null
          company_website?: string | null
          created_at?: string
          departments?: string[]
          e_o_statement?: string | null
          email?: string | null
          email_outreach_templates?: Json[] | null
          email_template?: Json
          employee_size?: string | null
          employment_type?: Json
          greenhouse_key?: string | null
          hr_contact?: Json | null
          id?: string
          industry?: string | null
          lever_key?: string | null
          logo?: string | null
          m_v_statement?: string | null
          name?: string | null
          office_locations?: Json[] | null
          phone_number?: string | null
          primary_contact?: Json | null
          recruiter_active?: boolean | null
          recruiter_type?: string | null
          recruiter_user_id?: string | null
          roles?: Json
          socials?: Json | null
          technology_score?: string[]
          use_of_purpose?: Json | null
          video_assessment?: boolean | null
          workplace_type?: Json
        }
        Relationships: []
      }
      recruiter_user: {
        Row: {
          created_at: string
          email: string | null
          first_name: string | null
          is_deactivated: boolean | null
          join_status: string
          joined_at: string | null
          last_name: string | null
          phone: string | null
          profile_image: string | null
          recruiter_id: string | null
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          is_deactivated?: boolean | null
          join_status?: string
          joined_at?: string | null
          last_name?: string | null
          phone?: string | null
          profile_image?: string | null
          recruiter_id?: string | null
          role?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          is_deactivated?: boolean | null
          join_status?: string
          joined_at?: string | null
          last_name?: string | null
          phone?: string | null
          profile_image?: string | null
          recruiter_id?: string | null
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recruiter_user_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruiter_user_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      rp_logs: {
        Row: {
          application_id: string
          created_at: string
          id: number
          logs: Json
        }
        Insert: {
          application_id: string
          created_at?: string
          id?: number
          logs?: Json
        }
        Update: {
          application_id?: string
          created_at?: string
          id?: number
          logs?: Json
        }
        Relationships: []
      }
      rp_token_usage: {
        Row: {
          application_id: string
          created_at: string
          id: number
          task: string | null
          token_used_json: Json | null
          total_token_used: number | null
        }
        Insert: {
          application_id: string
          created_at?: string
          id?: number
          task?: string | null
          token_used_json?: Json | null
          total_token_used?: number | null
        }
        Update: {
          application_id?: string
          created_at?: string
          id?: number
          task?: string | null
          token_used_json?: Json | null
          total_token_used?: number | null
        }
        Relationships: []
      }
      support_groups: {
        Row: {
          company_id: string | null
          created_at: string | null
          id: string
          updated_at: string | null
          user_ids: string[]
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          id?: string
          updated_at?: string | null
          user_ids?: string[]
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          id?: string
          updated_at?: string | null
          user_ids?: string[]
        }
        Relationships: [
          {
            foreignKeyName: "support_groups_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          }
        ]
      }
      support_ticket: {
        Row: {
          action_pending: Json
          application_id: string | null
          assign_to: string | null
          attachments: string[] | null
          company_id: string | null
          content: Json[]
          created_at: string | null
          email: string | null
          email_updates: boolean
          id: string
          idx: string
          job_id: string
          priority: string
          state: string
          support_group_id: string | null
          title: string
          type: string
          updated_at: string | null
          user_id: string | null
          user_name: string
        }
        Insert: {
          action_pending?: Json
          application_id?: string | null
          assign_to?: string | null
          attachments?: string[] | null
          company_id?: string | null
          content?: Json[]
          created_at?: string | null
          email?: string | null
          email_updates?: boolean
          id?: string
          idx?: string
          job_id: string
          priority?: string
          state?: string
          support_group_id?: string | null
          title: string
          type: string
          updated_at?: string | null
          user_id?: string | null
          user_name: string
        }
        Update: {
          action_pending?: Json
          application_id?: string | null
          assign_to?: string | null
          attachments?: string[] | null
          company_id?: string | null
          content?: Json[]
          created_at?: string | null
          email?: string | null
          email_updates?: boolean
          id?: string
          idx?: string
          job_id?: string
          priority?: string
          state?: string
          support_group_id?: string | null
          title?: string
          type?: string
          updated_at?: string | null
          user_id?: string | null
          user_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "support_ticket_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "support_ticket_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "support_ticket_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      threads: {
        Row: {
          applied: boolean | null
          assistant_id: string | null
          candidate_email: string | null
          candidate_name: string | null
          candidate_phone: string | null
          chat_end: boolean | null
          created_at: string
          id: number
          linkedin_url: string | null
          thread_id: string | null
        }
        Insert: {
          applied?: boolean | null
          assistant_id?: string | null
          candidate_email?: string | null
          candidate_name?: string | null
          candidate_phone?: string | null
          chat_end?: boolean | null
          created_at?: string
          id?: number
          linkedin_url?: string | null
          thread_id?: string | null
        }
        Update: {
          applied?: boolean | null
          assistant_id?: string | null
          candidate_email?: string | null
          candidate_name?: string | null
          candidate_phone?: string | null
          chat_end?: boolean | null
          created_at?: string
          id?: number
          linkedin_url?: string | null
          thread_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      ashbyapplicationsync: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      ashbyjobreference: {
        Args: {
          rec_id: string
        }
        Returns: unknown
      }
      ashbysync: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      batchcalcresumejdscore: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      batchsavegreenhouse: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      batchsavegreenhouse_test: {
        Args: {
          rec_id: string
        }
        Returns: unknown
      }
      batchscorecron: {
        Args: {
          function_value: string
        }
        Returns: Json
      }
      batchtriggergreenhouse: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      calc_cosine_sim: {
        Args: {
          emb1: string
          emb2: string
        }
        Returns: {
          similarity: number
        }[]
      }
      calc_sim_score: {
        Args: {
          job_ids: string[]
          skill_qry_emb: string
          edu_qry_emb: string
          exp_qry_emb: string
          resume_qry_emb: string
          max_records?: number
          ts_query?: string
          filter_companies?: string
        }
        Returns: {
          application_id: string
          created_at: string
          first_name: string
          last_name: string
          job_title: string
          email: string
          resume_link: string
          json_resume: Json
          profile_image: string
          candidate_id: string
          job_id: string
          similarity: number
          sim_exp: number
          sim_res: number
          sim_skills: number
          sim_educ: number
        }[]
      }
      calc_sim_score2: {
        Args: {
          job_ids: string[]
          skill_qry_emb: string
          edu_qry_emb: string
          exp_qry_emb: string
          resume_qry_emb: string
          max_records?: number
          ts_query?: string
          filter_companies?: string
        }
        Returns: {
          application_id: string
          created_at: string
          first_name: string
          last_name: string
          job_title: string
          email: string
          resume_link: string
          json_resume: Json
          profile_image: string
          candidate_id: string
          job_id: string
          similarity: number
          sim_exp: number
          sim_res: number
          sim_skills: number
          sim_educ: number
        }[]
      }
      calc_sim_score3: {
        Args: {
          job_ids: string[]
          skill_qry_emb: string
          edu_qry_emb: string
          exp_qry_emb: string
          resume_qry_emb: string
          max_records?: number
          ts_query?: string
          filter_companies?: string
        }
        Returns: {
          application_id: string
          created_at: string
          first_name: string
          last_name: string
          job_title: string
          email: string
          resume_link: string
          json_resume: Json
          profile_image: string
          candidate_id: string
          job_id: string
          similarity: number
          sim_exp: number
          sim_res: number
          sim_skills: number
          sim_educ: number
          candfile_id: string
        }[]
      }
      calculate_resume_score: {
        Args: {
          in_score_json: Json
          app_id: string
        }
        Returns: boolean
      }
      citext:
        | {
            Args: {
              "": boolean
            }
            Returns: string
          }
        | {
            Args: {
              "": string
            }
            Returns: string
          }
        | {
            Args: {
              "": unknown
            }
            Returns: string
          }
      citext_hash: {
        Args: {
          "": string
        }
        Returns: number
      }
      citextin: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      citextout: {
        Args: {
          "": string
        }
        Returns: unknown
      }
      citextrecv: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      citextsend: {
        Args: {
          "": string
        }
        Returns: string
      }
      count_candidates: {
        Args: {
          job_ids: string[]
        }
        Returns: {
          total_records: number
        }[]
      }
      embeddingresume: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      filter_candidates2: {
        Args: {
          rec_id: string
          max_records?: number
          offset_records?: number
          location_filter?: string
          name_filter?: string
          job_title_filter?: string
          is_location_desc?: boolean
          is_name_desc?: boolean
          is_job_title_desc?: boolean
        }
        Returns: {
          application_id: string
          created_at: string
          first_name: string
          last_name: string
          job_title: string
          email: string
          resume_link: string
          json_resume: Json
          profile_image: string
          candidate_id: string
          job_id: string
          total_results: number
        }[]
      }
      get_combined_resume_score: {
        Args: {
          jd_data: Json
          parameter_weights: Json
        }
        Returns: number
      }
      get_present_scheduled_jobs: {
        Args: Record<PropertyKey, never>
        Returns: Json[]
      }
      get_recruiter_name_id: {
        Args: {
          in_application_id: string
        }
        Returns: {
          id: string
          name: string
        }[]
      }
      getjobapplicationcountforcandidates: {
        Args: {
          candidate_ids: string[]
        }
        Returns: {
          candidate_id: string
          job_ids: string[]
          job_titles: string[]
        }[]
      }
      getjobapplicationcountforcandidates2: {
        Args: {
          candidate_ids: string[]
        }
        Returns: {
          candidate_id: string
          job_ids: string[]
          job_titles: string[]
        }[]
      }
      getjobapplications: {
        Args: {
          ids: string[]
        }
        Returns: {
          job_id: string
          status: string
          count: number
        }[]
      }
      greenhousecandidatesync: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      interviewing_state_active: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      job_application_filter_sort: {
        Args: {
          jb_id: string
          min_lat?: number
          min_long?: number
          max_lat?: number
          max_long?: number
          j_status?: string
          from_rec_num?: number
          end_rec_num?: number
          min_resume_score?: number
          max_resume_score?: number
          min_interview_score?: number
          max_interview_score?: number
          sort_column_text?: string
          is_sort_desc?: boolean
          text_search_qry?: string
          is_locat_filter_on?: boolean
        }
        Returns: {
          job_app: Json
          cand: Json
          candfiles: Json
          assres: Json
          total_results: number
        }[]
      }
      levercandidatesync: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      match_documents: {
        Args: {
          query_embedding: string
          match_count?: number
          filter?: Json
        }
        Returns: {
          id: string
          content: string
          metadata: Json
          similarity: number
          json_resume: Json
        }[]
      }
      move_scheduled_jobs_sourcing_to_active: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      overviewgenerate: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      retrybatchcalcresumejdscore: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      secondretrybatchcalcresumejdscore: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      test_filter3: {
        Args: {
          rec_id: string
          location_filter: string
          name_filter: string
          job_title_filter: string
          page_size: number
          page_number: number
          sort_param?: string
          is_name_sort_desc?: boolean
          is_location_sort_desc?: boolean
          is_job_title_sort_desc?: boolean
        }
        Returns: {
          application_id: string
          created_at: string
          first_name: string
          last_name: string
          job_title: string
          email: string
          resume_link: string
          json_resume: Json
          profile_image: string
          candidate_id: string
          job_id: string
          candfile_id: string
          total_results: number
        }[]
      }
      update_resume_score: {
        Args: {
          job_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      application_processing_status:
        | "not started"
        | "processing"
        | "failed"
        | "success"
      application_status: "new" | "assessment" | "qualified" | "disqualified"
      file_type: "resume" | "coverletter" | "cv" | "image"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
