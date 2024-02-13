export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      aglint_candidates: {
        Row: {
          aglint_id: string
          city: string | null
          country: string | null
          created_at: string
          departments: string[] | null
          email: string | null
          email_fetch_status: Database["public"]["Enums"]["email_fetch_status"]
          email_status: string | null
          employment_history: Json[] | null
          extrapolated_email_confidence: string | null
          facebook_url: string | null
          first_name: string | null
          functions: string[] | null
          github_url: string | null
          headline: string | null
          id: string
          intent_strength: string | null
          is_likely_to_engage: boolean | null
          last_name: string | null
          linkedin_url: string | null
          name: string | null
          organization: Json | null
          organization_id: string | null
          phone_numbers: Json | null
          photo_url: string | null
          revealed_for_current_team: boolean | null
          search_query: Json
          seniority: string | null
          show_intent: boolean | null
          state: string | null
          subdepartments: string[] | null
          title: string | null
          twitter_url: string | null
        }
        Insert: {
          aglint_id?: string
          city?: string | null
          country?: string | null
          created_at?: string
          departments?: string[] | null
          email?: string | null
          email_fetch_status?: Database["public"]["Enums"]["email_fetch_status"]
          email_status?: string | null
          employment_history?: Json[] | null
          extrapolated_email_confidence?: string | null
          facebook_url?: string | null
          first_name?: string | null
          functions?: string[] | null
          github_url?: string | null
          headline?: string | null
          id: string
          intent_strength?: string | null
          is_likely_to_engage?: boolean | null
          last_name?: string | null
          linkedin_url?: string | null
          name?: string | null
          organization?: Json | null
          organization_id?: string | null
          phone_numbers?: Json | null
          photo_url?: string | null
          revealed_for_current_team?: boolean | null
          search_query: Json
          seniority?: string | null
          show_intent?: boolean | null
          state?: string | null
          subdepartments?: string[] | null
          title?: string | null
          twitter_url?: string | null
        }
        Update: {
          aglint_id?: string
          city?: string | null
          country?: string | null
          created_at?: string
          departments?: string[] | null
          email?: string | null
          email_fetch_status?: Database["public"]["Enums"]["email_fetch_status"]
          email_status?: string | null
          employment_history?: Json[] | null
          extrapolated_email_confidence?: string | null
          facebook_url?: string | null
          first_name?: string | null
          functions?: string[] | null
          github_url?: string | null
          headline?: string | null
          id?: string
          intent_strength?: string | null
          is_likely_to_engage?: boolean | null
          last_name?: string | null
          linkedin_url?: string | null
          name?: string | null
          organization?: Json | null
          organization_id?: string | null
          phone_numbers?: Json | null
          photo_url?: string | null
          revealed_for_current_team?: boolean | null
          search_query?: Json
          seniority?: string | null
          show_intent?: boolean | null
          state?: string | null
          subdepartments?: string[] | null
          title?: string | null
          twitter_url?: string | null
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
          candidate_id: string | null
          created_at: string
          id: string
          is_resume_fetching: boolean
          job_id: string
          overall_score: number
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
          candidate_id?: string | null
          created_at?: string
          id?: string
          is_resume_fetching?: boolean
          job_id: string
          overall_score?: number
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
          candidate_id?: string | null
          created_at?: string
          id?: string
          is_resume_fetching?: boolean
          job_id?: string
          overall_score?: number
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
      assessment: {
        Row: {
          created_at: string
          description: string | null
          edited: boolean
          id: string
          level: Database["public"]["Enums"]["question_level"]
          recruiter_id: string
          title: string | null
          type: Database["public"]["Enums"]["template_type"] | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          edited?: boolean
          id?: string
          level?: Database["public"]["Enums"]["question_level"]
          recruiter_id: string
          title?: string | null
          type?: Database["public"]["Enums"]["template_type"] | null
        }
        Update: {
          created_at?: string
          description?: string | null
          edited?: boolean
          id?: string
          level?: Database["public"]["Enums"]["question_level"]
          recruiter_id?: string
          title?: string | null
          type?: Database["public"]["Enums"]["template_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "assessment_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          }
        ]
      }
      assessment_job_relation: {
        Row: {
          assessment_id: string
          created_at: string
          id: string
          job_id: string | null
        }
        Insert: {
          assessment_id: string
          created_at?: string
          id?: string
          job_id?: string | null
        }
        Update: {
          assessment_id?: string
          created_at?: string
          id?: string
          job_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assessment_job_relation_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "assessment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assessment_job_relation_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          }
        ]
      }
      assessment_question: {
        Row: {
          answer: Json | null
          assessment_id: string | null
          created_at: string
          duration: number | null
          id: string
          level: Database["public"]["Enums"]["question_level"] | null
          question: Json | null
          type: Database["public"]["Enums"]["question_type"] | null
        }
        Insert: {
          answer?: Json | null
          assessment_id?: string | null
          created_at?: string
          duration?: number | null
          id?: string
          level?: Database["public"]["Enums"]["question_level"] | null
          question?: Json | null
          type?: Database["public"]["Enums"]["question_type"] | null
        }
        Update: {
          answer?: Json | null
          assessment_id?: string | null
          created_at?: string
          duration?: number | null
          id?: string
          level?: Database["public"]["Enums"]["question_level"] | null
          question?: Json | null
          type?: Database["public"]["Enums"]["question_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "assessment_question_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "assessment"
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
      assessment_template: {
        Row: {
          created_at: string
          description: string | null
          embeddings: string | null
          id: string
          title: string | null
          type: Database["public"]["Enums"]["template_type"] | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          embeddings?: string | null
          id?: string
          title?: string | null
          type?: Database["public"]["Enums"]["template_type"] | null
        }
        Update: {
          created_at?: string
          description?: string | null
          embeddings?: string | null
          id?: string
          title?: string | null
          type?: Database["public"]["Enums"]["template_type"] | null
        }
        Relationships: []
      }
      candidate_files: {
        Row: {
          candidate_id: string
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
          candidate_id: string
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
          candidate_id?: string
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
            foreignKeyName: "candidate_files_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "candidates"
            referencedColumns: ["id"]
          }
        ]
      }
      candidate_list: {
        Row: {
          candidates: string[]
          created_at: string
          id: string
          name: string
          recruiter_id: string
        }
        Insert: {
          candidates?: string[]
          created_at?: string
          id?: string
          name: string
          recruiter_id: string
        }
        Update: {
          candidates?: string[]
          created_at?: string
          id?: string
          name?: string
          recruiter_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "candidate_list_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          }
        ]
      }
      candidate_search_history: {
        Row: {
          bookmarked_candidates: string[] | null
          candidates: string[]
          created_at: string
          db_search: Database["public"]["Enums"]["db_search_type"] | null
          id: number
          is_search_jd: boolean | null
          query_json: Json | null
          recruiter_id: string
          search_query: string | null
          search_results: Json[] | null
          used_credits: Json
        }
        Insert: {
          bookmarked_candidates?: string[] | null
          candidates?: string[]
          created_at?: string
          db_search?: Database["public"]["Enums"]["db_search_type"] | null
          id?: number
          is_search_jd?: boolean | null
          query_json?: Json | null
          recruiter_id: string
          search_query?: string | null
          search_results?: Json[] | null
          used_credits?: Json
        }
        Update: {
          bookmarked_candidates?: string[] | null
          candidates?: string[]
          created_at?: string
          db_search?: Database["public"]["Enums"]["db_search_type"] | null
          id?: number
          is_search_jd?: boolean | null
          query_json?: Json | null
          recruiter_id?: string
          search_query?: string | null
          search_results?: Json[] | null
          used_credits?: Json
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
          current_company: string | null
          email: string
          experience_in_months: number | null
          first_name: string
          geolocation: unknown | null
          id: string
          last_name: string | null
          last_updated: string
          linkedin: string | null
          phone: string | null
          recruiter_id: string | null
          state: string | null
        }
        Insert: {
          avatar?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          current_company?: string | null
          email: string
          experience_in_months?: number | null
          first_name?: string
          geolocation?: unknown | null
          id?: string
          last_name?: string | null
          last_updated?: string
          linkedin?: string | null
          phone?: string | null
          recruiter_id?: string | null
          state?: string | null
        }
        Update: {
          avatar?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          current_company?: string | null
          email?: string
          experience_in_months?: number | null
          first_name?: string
          geolocation?: unknown | null
          id?: string
          last_name?: string | null
          last_updated?: string
          linkedin?: string | null
          phone?: string | null
          recruiter_id?: string | null
          state?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "candidates_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          }
        ]
      }
      company_search_cache: {
        Row: {
          company_name: string
          created_at: string
          id: string
          search_result: Json
          website_url: string | null
        }
        Insert: {
          company_name: string
          created_at?: string
          id?: string
          search_result: Json
          website_url?: string | null
        }
        Update: {
          company_name?: string
          created_at?: string
          id?: string
          search_result?: Json
          website_url?: string | null
        }
        Relationships: []
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
      interview_availabilties: {
        Row: {
          slot_availability: Json[] | null
          user_id: string
        }
        Insert: {
          slot_availability?: Json[] | null
          user_id: string
        }
        Update: {
          slot_availability?: Json[] | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "interview_availabilties_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          }
        ]
      }
      interview_panel: {
        Row: {
          created_at: string
          id: string
          name: string
          recruiter_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          recruiter_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          recruiter_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "interview_panel_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          }
        ]
      }
      interview_panel_relation: {
        Row: {
          id: string
          panel_id: string
          user_id: string
        }
        Insert: {
          id?: string
          panel_id: string
          user_id: string
        }
        Update: {
          id?: string
          panel_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "interview_panel_relation_panel_id_fkey"
            columns: ["panel_id"]
            isOneToOne: false
            referencedRelation: "interview_panel"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_panel_relation_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          }
        ]
      }
      interview_schedule: {
        Row: {
          application_id: string
          created_at: string
          duration: number
          id: string
          panel_id: string
          panel_users: Json[] | null
          schedule_name: string
          schedule_time: string | null
          schedule_type: Database["public"]["Enums"]["interview_schedule_type"]
          selected_slots: Json[] | null
          status: Database["public"]["Enums"]["interview_schedule_status"]
        }
        Insert: {
          application_id: string
          created_at?: string
          duration: number
          id?: string
          panel_id: string
          panel_users?: Json[] | null
          schedule_name: string
          schedule_time?: string | null
          schedule_type?: Database["public"]["Enums"]["interview_schedule_type"]
          selected_slots?: Json[] | null
          status?: Database["public"]["Enums"]["interview_schedule_status"]
        }
        Update: {
          application_id?: string
          created_at?: string
          duration?: number
          id?: string
          panel_id?: string
          panel_users?: Json[] | null
          schedule_name?: string
          schedule_time?: string | null
          schedule_type?: Database["public"]["Enums"]["interview_schedule_type"]
          selected_slots?: Json[] | null
          status?: Database["public"]["Enums"]["interview_schedule_status"]
        }
        Relationships: [
          {
            foreignKeyName: "interview_schedule_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_schedule_interview_panel_fkey"
            columns: ["panel_id"]
            isOneToOne: false
            referencedRelation: "interview_panel"
            referencedColumns: ["id"]
          }
        ]
      }
      job_assiatan_chat: {
        Row: {
          created_at: string
          id: string
          job_id: string
          last_message: string | null
          name: string | null
          thread_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          job_id: string
          last_message?: string | null
          name?: string | null
          thread_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          job_id?: string
          last_message?: string | null
          name?: string | null
          thread_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_assiatan_chat_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          }
        ]
      }
      job_assiatan_chat_messages: {
        Row: {
          content: Json
          created_at: string
          id: number
          job_assiatan_chat_id: string
          message_id: string
          sender: string
          type: string
        }
        Insert: {
          content: Json
          created_at?: string
          id?: number
          job_assiatan_chat_id: string
          message_id: string
          sender: string
          type: string
        }
        Update: {
          content?: Json
          created_at?: string
          id?: number
          job_assiatan_chat_id?: string
          message_id?: string
          sender?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_assiatan_chat_messages_job_assiatan_chat_id_fkey"
            columns: ["job_assiatan_chat_id"]
            isOneToOne: false
            referencedRelation: "job_assiatan_chat"
            referencedColumns: ["id"]
          }
        ]
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
          email_sent: boolean
          id: number
          recruiter_user_id: string
        }
        Insert: {
          candidate_id: string
          email?: Json
          email_sent?: boolean
          id?: number
          recruiter_user_id: string
        }
        Update: {
          candidate_id?: string
          email?: Json
          email_sent?: boolean
          id?: number
          recruiter_user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "outreached_emails_recruiter_user_id_fkey"
            columns: ["recruiter_user_id"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
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
          experience_in_months: number | null
          id: string
          interview_instructions: string | null
          intro_videos: Json | null
          is_ats_sync: boolean
          jd_changed: boolean | null
          jd_json: Json | null
          job_criteria: Json | null
          job_details_embedding: string | null
          job_title: string | null
          job_type: string | null
          location: string | null
          location_json: Json | null
          logo: string | null
          new_screening_setting: Json
          overview: string | null
          parameter_weights: Json
          phone_screen_enabled: boolean | null
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
          experience_in_months?: number | null
          id?: string
          interview_instructions?: string | null
          intro_videos?: Json | null
          is_ats_sync?: boolean
          jd_changed?: boolean | null
          jd_json?: Json | null
          job_criteria?: Json | null
          job_details_embedding?: string | null
          job_title?: string | null
          job_type?: string | null
          location?: string | null
          location_json?: Json | null
          logo?: string | null
          new_screening_setting?: Json
          overview?: string | null
          parameter_weights?: Json
          phone_screen_enabled?: boolean | null
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
          experience_in_months?: number | null
          id?: string
          interview_instructions?: string | null
          intro_videos?: Json | null
          is_ats_sync?: boolean
          jd_changed?: boolean | null
          jd_json?: Json | null
          job_criteria?: Json | null
          job_details_embedding?: string | null
          job_title?: string | null
          job_type?: string | null
          location?: string | null
          location_json?: Json | null
          logo?: string | null
          new_screening_setting?: Json
          overview?: string | null
          parameter_weights?: Json
          phone_screen_enabled?: boolean | null
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
      question_bank: {
        Row: {
          answer: Json | null
          created_at: string
          duration: number | null
          embeddings: string | null
          id: string
          level: Database["public"]["Enums"]["question_level"] | null
          question: Json | null
          type: Database["public"]["Enums"]["question_type"] | null
        }
        Insert: {
          answer?: Json | null
          created_at?: string
          duration?: number | null
          embeddings?: string | null
          id?: string
          level?: Database["public"]["Enums"]["question_level"] | null
          question?: Json | null
          type?: Database["public"]["Enums"]["question_type"] | null
        }
        Update: {
          answer?: Json | null
          created_at?: string
          duration?: number | null
          embeddings?: string | null
          id?: string
          level?: Database["public"]["Enums"]["question_level"] | null
          question?: Json | null
          type?: Database["public"]["Enums"]["question_type"] | null
        }
        Relationships: []
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
          roles?: Json
          socials?: Json | null
          technology_score?: string[]
          use_of_purpose?: Json | null
          video_assessment?: boolean | null
          workplace_type?: Json
        }
        Relationships: []
      }
      recruiter_relation: {
        Row: {
          created_at: string
          created_by: string
          id: number
          is_active: boolean
          recruiter_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string
          id?: number
          is_active?: boolean
          recruiter_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          created_by?: string
          id?: number
          is_active?: boolean
          recruiter_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recruiter_relation_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruiter_relation_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruiter_relation_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      recruiter_user: {
        Row: {
          created_at: string
          email: string | null
          email_auth: Json | null
          email_outreach_templates: Json[] | null
          first_name: string | null
          join_status: string
          joined_at: string | null
          last_name: string | null
          phone: string | null
          position: string | null
          profile_image: string | null
          recruiter_id: string | null
          role: Database["public"]["Enums"]["recruiter_roles"]
          schedule_auth: Json | null
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          email_auth?: Json | null
          email_outreach_templates?: Json[] | null
          first_name?: string | null
          join_status?: string
          joined_at?: string | null
          last_name?: string | null
          phone?: string | null
          position?: string | null
          profile_image?: string | null
          recruiter_id?: string | null
          role?: Database["public"]["Enums"]["recruiter_roles"]
          schedule_auth?: Json | null
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          email_auth?: Json | null
          email_outreach_templates?: Json[] | null
          first_name?: string | null
          join_status?: string
          joined_at?: string | null
          last_name?: string | null
          phone?: string | null
          position?: string | null
          profile_image?: string | null
          recruiter_id?: string | null
          role?: Database["public"]["Enums"]["recruiter_roles"]
          schedule_auth?: Json | null
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
      state_json: {
        Row: {
          jsonb_object_agg: Json | null
        }
        Insert: {
          jsonb_object_agg?: Json | null
        }
        Update: {
          jsonb_object_agg?: Json | null
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
      template_question_relation: {
        Row: {
          created_at: string
          id: number
          question_id: string
          template_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          question_id: string
          template_id: string
        }
        Update: {
          created_at?: string
          id?: number
          question_id?: string
          template_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "template_question_relation_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "question_bank"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "template_question_relation_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "assessment_template"
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
          designation: string | null
          document_text: string | null
          file_url: string | null
          id: number
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
          designation?: string | null
          document_text?: string | null
          file_url?: string | null
          id?: number
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
          designation?: string | null
          document_text?: string | null
          file_url?: string | null
          id?: number
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
      createrecuriterrelation:
        | {
            Args: {
              in_user_id: string
              in_recruiter_id: string
            }
            Returns: boolean
          }
        | {
            Args: {
              in_user_id: string
              in_recruiter_id: string
              in_is_active: boolean
            }
            Returns: boolean
          }
      emailcroncandidatedb: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      emailhandlercandidatedb: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      embeddingresume: {
        Args: Record<PropertyKey, never>
        Returns: Json
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
      getallresumematches: {
        Args: {
          jobid: string
          topmatch?: number
          goodmatch?: number
          averagematch?: number
          poormatch?: number
        }
        Returns: Json
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
      getlocationspool: {
        Args: {
          jobid: string
        }
        Returns: Json
      }
      getoutreachemails: {
        Args: Record<PropertyKey, never>
        Returns: unknown
      }
      getresumematch: {
        Args: {
          jobid: string
          section: Database["public"]["Enums"]["application_status"]
          topmatch?: number
          goodmatch?: number
          averagematch?: number
          poormatch?: number
        }
        Returns: {
          match: string
          count: number
        }[]
      }
      getresumematches: {
        Args: {
          jobid: string
          section: Database["public"]["Enums"]["application_status"]
          topmatch?: number
          goodmatch?: number
          averagematch?: number
          poormatch?: number
        }
        Returns: Json
      }
      getskillpools: {
        Args: {
          jobid: string
        }
        Returns: Json
      }
      getskillspool: {
        Args: {
          jobid: string
        }
        Returns: Json
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
          fil_res: number
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
      match_questions: {
        Args: {
          query_embedding: string
          match_threshold: number
          match_count: number
        }
        Returns: {
          id: string
          question: Json
          level: string
          type: string
          duration: number
          similarity: number
        }[]
      }
      move_scheduled_jobs_sourcing_to_active: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      outreachhandler: {
        Args: Record<PropertyKey, never>
        Returns: Json
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
      set_active_rec: {
        Args: {
          in_user_id: string
          in_recruiter_id: string
        }
        Returns: boolean
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
      application_status:
        | "new"
        | "assessment"
        | "qualified"
        | "disqualified"
        | "screening"
        | "interview"
      db_search_type: "aglint" | "candidate"
      email_fetch_status: "not fetched" | "success" | "unable to fetch"
      file_type: "resume" | "coverletter" | "cv" | "image"
      interview_schedule_status: "pending" | "confirmed" | "completed"
      interview_schedule_type:
        | "in_person_meeting"
        | "google_meet"
        | "phone_call"
        | "zoom"
      question_level: "basic" | "intermediate" | "advanced"
      question_type: "code" | "mcq" | "tfq" | "match" | "qna"
      recruiter_roles: "admin" | "member" | "interviewer"
      template_type:
        | "cognitive"
        | "language"
        | "personality"
        | "culture"
        | "programming"
        | "role"
        | "situational"
        | "software"
        | "typing"
    }
    CompositeTypes: {
      location_type: {
        city: string
        state: string
        country: string
      }
      my_table_type: {
        name: string
        age: number
        city: string
      }
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
