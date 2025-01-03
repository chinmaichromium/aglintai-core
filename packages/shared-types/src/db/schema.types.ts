export type Json = any;

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
      application_email_status: {
        Row: {
          application_id: string
          created_at: string
          email: Database["public"]["Enums"]["email_slack_types"]
          id: string
        }
        Insert: {
          application_id: string
          created_at?: string
          email: Database["public"]["Enums"]["email_slack_types"]
          id?: string
        }
        Update: {
          application_id?: string
          created_at?: string
          email?: Database["public"]["Enums"]["email_slack_types"]
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "application_email_status_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_status_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "application_email_status_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "application_email_status_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "application_email_status_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["application_id"]
          },
        ]
      }
      application_logs: {
        Row: {
          application_id: string
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          logged_by: Database["public"]["Enums"]["application_logger"]
          metadata: Json | null
          module: Database["public"]["Enums"]["modules"]
          task_id: string | null
          title: string | null
        }
        Insert: {
          application_id: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          logged_by?: Database["public"]["Enums"]["application_logger"]
          metadata?: Json | null
          module?: Database["public"]["Enums"]["modules"]
          task_id?: string | null
          title?: string | null
        }
        Update: {
          application_id?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          logged_by?: Database["public"]["Enums"]["application_logger"]
          metadata?: Json | null
          module?: Database["public"]["Enums"]["modules"]
          task_id?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "application_logs_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "application_logs_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "application_logs_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "application_logs_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "new_tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "application_logs_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_application_logs_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_status_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_application_logs_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_application_logs_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_application_logs_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["application_id"]
          },
        ]
      }
      applications: {
        Row: {
          applied_at: string
          bookmarked: boolean
          candidate_file_id: string | null
          candidate_id: string | null
          converted_at: string | null
          created_at: string
          feedback: Json | null
          id: string
          is_new: boolean
          is_resume_fetching: boolean
          job_id: string
          overall_interview_score: number
          overall_score: number
          phone_screening: Json | null
          processing_started_at: string | null
          processing_status: Database["public"]["Enums"]["application_processing_status"]
          recruiter_id: string
          remote_data: Json | null
          remote_id: string | null
          retry: number
          score_json: Json | null
          source: Database["public"]["Enums"]["application_source"]
          status: string
          status_emails_sent: Json
        }
        Insert: {
          applied_at?: string
          bookmarked?: boolean
          candidate_file_id?: string | null
          candidate_id?: string | null
          converted_at?: string | null
          created_at?: string
          feedback?: Json | null
          id?: string
          is_new?: boolean
          is_resume_fetching?: boolean
          job_id: string
          overall_interview_score?: number
          overall_score?: number
          phone_screening?: Json | null
          processing_started_at?: string | null
          processing_status?: Database["public"]["Enums"]["application_processing_status"]
          recruiter_id: string
          remote_data?: Json | null
          remote_id?: string | null
          retry?: number
          score_json?: Json | null
          source?: Database["public"]["Enums"]["application_source"]
          status?: string
          status_emails_sent?: Json
        }
        Update: {
          applied_at?: string
          bookmarked?: boolean
          candidate_file_id?: string | null
          candidate_id?: string | null
          converted_at?: string | null
          created_at?: string
          feedback?: Json | null
          id?: string
          is_new?: boolean
          is_resume_fetching?: boolean
          job_id?: string
          overall_interview_score?: number
          overall_score?: number
          phone_screening?: Json | null
          processing_started_at?: string | null
          processing_status?: Database["public"]["Enums"]["application_processing_status"]
          recruiter_id?: string
          remote_data?: Json | null
          remote_id?: string | null
          retry?: number
          score_json?: Json | null
          source?: Database["public"]["Enums"]["application_source"]
          status?: string
          status_emails_sent?: Json
        }
        Relationships: [
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
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["candidate_id"]
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
            referencedRelation: "job_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
        ]
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
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["candidate_id"]
          },
          {
            foreignKeyName: "candidate_files_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "candidates"
            referencedColumns: ["id"]
          },
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
          },
        ]
      }
      candidate_portal_job: {
        Row: {
          application_id: string | null
          banner: string | null
          created_at: string
          greetings: string | null
          id: string
          images: string[] | null
          job_id: string | null
        }
        Insert: {
          application_id?: string | null
          banner?: string | null
          created_at?: string
          greetings?: string | null
          id?: string
          images?: string[] | null
          job_id?: string | null
        }
        Update: {
          application_id?: string | null
          banner?: string | null
          created_at?: string
          greetings?: string | null
          id?: string
          images?: string[] | null
          job_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "candidate_portal_job_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_status_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_portal_job_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_portal_job_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_portal_job_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["application_id"]
          },
          {
            foreignKeyName: "candidate_portal_job_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "job_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_portal_job_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      candidate_portal_message: {
        Row: {
          application_id: string | null
          availability_id: string | null
          created_at: string
          filter_id: string | null
          id: string
          is_readed: boolean | null
          message: string | null
          title: string | null
          type: Database["public"]["Enums"]["email_slack_types"] | null
        }
        Insert: {
          application_id?: string | null
          availability_id?: string | null
          created_at?: string
          filter_id?: string | null
          id?: string
          is_readed?: boolean | null
          message?: string | null
          title?: string | null
          type?: Database["public"]["Enums"]["email_slack_types"] | null
        }
        Update: {
          application_id?: string | null
          availability_id?: string | null
          created_at?: string
          filter_id?: string | null
          id?: string
          is_readed?: boolean | null
          message?: string | null
          title?: string | null
          type?: Database["public"]["Enums"]["email_slack_types"] | null
        }
        Relationships: [
          {
            foreignKeyName: "candidate_portal_message_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_status_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_portal_message_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_portal_message_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_portal_message_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["application_id"]
          },
          {
            foreignKeyName: "candidate_portal_message_availability_id_fkey"
            columns: ["availability_id"]
            isOneToOne: false
            referencedRelation: "candidate_request_availability"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_portal_message_filter_id_fkey"
            columns: ["filter_id"]
            isOneToOne: false
            referencedRelation: "interview_filter_json"
            referencedColumns: ["id"]
          },
        ]
      }
      candidate_request_availability: {
        Row: {
          application_id: string
          availability: Json | null
          availability_id: string | null
          booking_confirmed: boolean
          created_at: string
          date_range: Json | null
          filter_id: string | null
          id: string
          is_task_created: boolean | null
          number_of_days: number | null
          number_of_slots: number | null
          recruiter_id: string
          request_id: string
          slots: Json[] | null
          total_slots: number | null
          user_timezone: string | null
          visited: boolean | null
        }
        Insert: {
          application_id: string
          availability?: Json | null
          availability_id?: string | null
          booking_confirmed?: boolean
          created_at?: string
          date_range?: Json | null
          filter_id?: string | null
          id?: string
          is_task_created?: boolean | null
          number_of_days?: number | null
          number_of_slots?: number | null
          recruiter_id: string
          request_id: string
          slots?: Json[] | null
          total_slots?: number | null
          user_timezone?: string | null
          visited?: boolean | null
        }
        Update: {
          application_id?: string
          availability?: Json | null
          availability_id?: string | null
          booking_confirmed?: boolean
          created_at?: string
          date_range?: Json | null
          filter_id?: string | null
          id?: string
          is_task_created?: boolean | null
          number_of_days?: number | null
          number_of_slots?: number | null
          recruiter_id?: string
          request_id?: string
          slots?: Json[] | null
          total_slots?: number | null
          user_timezone?: string | null
          visited?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "candidate_request_availability_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_status_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_request_availability_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_request_availability_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_request_availability_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["application_id"]
          },
          {
            foreignKeyName: "candidate_request_availability_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidate_request_availability_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: true
            referencedRelation: "request"
            referencedColumns: ["id"]
          },
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
          },
        ]
      }
      candidates: {
        Row: {
          avatar: string | null
          city: string | null
          country: string | null
          created_at: string
          current_company: string | null
          current_job_title: string | null
          email: string
          experience_in_months: number | null
          first_name: string
          geolocation: unknown | null
          id: string
          last_name: string | null
          last_updated: string
          linkedin: string | null
          phone: string | null
          recruiter_id: string
          state: string | null
          timezone: string | null
        }
        Insert: {
          avatar?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          current_company?: string | null
          current_job_title?: string | null
          email: string
          experience_in_months?: number | null
          first_name?: string
          geolocation?: unknown | null
          id?: string
          last_name?: string | null
          last_updated?: string
          linkedin?: string | null
          phone?: string | null
          recruiter_id: string
          state?: string | null
          timezone?: string | null
        }
        Update: {
          avatar?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          current_company?: string | null
          current_job_title?: string | null
          email?: string
          experience_in_months?: number | null
          first_name?: string
          geolocation?: unknown | null
          id?: string
          last_name?: string | null
          last_updated?: string
          linkedin?: string | null
          phone?: string | null
          recruiter_id?: string
          state?: string | null
          timezone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "candidates_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
        ]
      }
      company_email_template: {
        Row: {
          body: string
          created_at: string
          from_name: string | null
          id: string
          recruiter_id: string
          subject: string
          type: Database["public"]["Enums"]["email_slack_types"]
        }
        Insert: {
          body: string
          created_at?: string
          from_name?: string | null
          id?: string
          recruiter_id?: string
          subject: string
          type: Database["public"]["Enums"]["email_slack_types"]
        }
        Update: {
          body?: string
          created_at?: string
          from_name?: string | null
          id?: string
          recruiter_id?: string
          subject?: string
          type?: Database["public"]["Enums"]["email_slack_types"]
        }
        Relationships: [
          {
            foreignKeyName: "company_email_template_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
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
      departments: {
        Row: {
          id: number
          name: string
          recruiter_id: string
          remote_id: string | null
        }
        Insert: {
          id?: number
          name: string
          recruiter_id: string
          remote_id?: string | null
        }
        Update: {
          id?: number
          name?: string
          recruiter_id?: string
          remote_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_recruiter"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
        ]
      }
      integrations: {
        Row: {
          ashby_key: string | null
          ashby_last_synced: string | null
          ashby_sync_token: string | null
          created_at: string
          domain_admin_email: string | null
          google_workspace_domain: string | null
          greenhouse_key: string | null
          greenhouse_metadata: Json | null
          id: string
          lever_key: string | null
          recruiter_id: string
          schedule_agent_email: string | null
          service_json: string | null
          twilio_phone_number: string | null
          zoom_auth: string | null
        }
        Insert: {
          ashby_key?: string | null
          ashby_last_synced?: string | null
          ashby_sync_token?: string | null
          created_at?: string
          domain_admin_email?: string | null
          google_workspace_domain?: string | null
          greenhouse_key?: string | null
          greenhouse_metadata?: Json | null
          id?: string
          lever_key?: string | null
          recruiter_id: string
          schedule_agent_email?: string | null
          service_json?: string | null
          twilio_phone_number?: string | null
          zoom_auth?: string | null
        }
        Update: {
          ashby_key?: string | null
          ashby_last_synced?: string | null
          ashby_sync_token?: string | null
          created_at?: string
          domain_admin_email?: string | null
          google_workspace_domain?: string | null
          greenhouse_key?: string | null
          greenhouse_metadata?: Json | null
          id?: string
          lever_key?: string | null
          recruiter_id?: string
          schedule_agent_email?: string | null
          service_json?: string | null
          twilio_phone_number?: string | null
          zoom_auth?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "integrations_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: true
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
        ]
      }
      interview_filter_json: {
        Row: {
          application_id: string
          confirmed_on: string | null
          created_at: string
          created_by: string | null
          filter_json: Json
          id: string
          is_flow_agent: boolean
          request_id: string
          schedule_options: Json | null
          selected_options: Json[] | null
          session_ids: string[]
          viewed_on: string | null
        }
        Insert: {
          application_id: string
          confirmed_on?: string | null
          created_at?: string
          created_by?: string | null
          filter_json: Json
          id?: string
          is_flow_agent?: boolean
          request_id: string
          schedule_options?: Json | null
          selected_options?: Json[] | null
          session_ids?: string[]
          viewed_on?: string | null
        }
        Update: {
          application_id?: string
          confirmed_on?: string | null
          created_at?: string
          created_by?: string | null
          filter_json?: Json
          id?: string
          is_flow_agent?: boolean
          request_id?: string
          schedule_options?: Json | null
          selected_options?: Json[] | null
          session_ids?: string[]
          viewed_on?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "interview_filter_json_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_status_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_filter_json_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_filter_json_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_filter_json_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["application_id"]
          },
          {
            foreignKeyName: "interview_filter_json_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "request"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_filter_json_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_interview_filter_json_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_interview_filter_json_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      interview_meeting: {
        Row: {
          application_id: string
          cal_event_id: string | null
          candidate_feedback: Json | null
          confirmed_candidate_tz: string | null
          confirmed_date: string | null
          created_at: string
          end_time: string | null
          id: string
          instructions: string | null
          job_id: string
          meeting_flow: Database["public"]["Enums"]["meeting_flow"]
          meeting_json: Json | null
          meeting_link: string | null
          organizer_id: string | null
          recruiter_id: string
          schedule_request_id: string | null
          start_time: string | null
          status: Database["public"]["Enums"]["interview_schedule_status"]
        }
        Insert: {
          application_id: string
          cal_event_id?: string | null
          candidate_feedback?: Json | null
          confirmed_candidate_tz?: string | null
          confirmed_date?: string | null
          created_at?: string
          end_time?: string | null
          id?: string
          instructions?: string | null
          job_id: string
          meeting_flow?: Database["public"]["Enums"]["meeting_flow"]
          meeting_json?: Json | null
          meeting_link?: string | null
          organizer_id?: string | null
          recruiter_id: string
          schedule_request_id?: string | null
          start_time?: string | null
          status?: Database["public"]["Enums"]["interview_schedule_status"]
        }
        Update: {
          application_id?: string
          cal_event_id?: string | null
          candidate_feedback?: Json | null
          confirmed_candidate_tz?: string | null
          confirmed_date?: string | null
          created_at?: string
          end_time?: string | null
          id?: string
          instructions?: string | null
          job_id?: string
          meeting_flow?: Database["public"]["Enums"]["meeting_flow"]
          meeting_json?: Json | null
          meeting_link?: string | null
          organizer_id?: string | null
          recruiter_id?: string
          schedule_request_id?: string | null
          start_time?: string | null
          status?: Database["public"]["Enums"]["interview_schedule_status"]
        }
        Relationships: [
          {
            foreignKeyName: "interview_meeting_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_status_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_meeting_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_meeting_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_meeting_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["application_id"]
          },
          {
            foreignKeyName: "interview_meeting_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "job_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_meeting_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_meeting_organizer_id_fkey"
            columns: ["organizer_id"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "interview_meeting_organizer_id_fkey"
            columns: ["organizer_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "interview_meeting_organizer_id_fkey"
            columns: ["organizer_id"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "interview_meeting_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
        ]
      }
      interview_meeting_log: {
        Row: {
          created_at: string
          delta: Json
          end_time: string | null
          id: number
          meeting_flow: string | null
          meeting_id: string | null
          organizer_id: string | null
          start_time: string | null
          status: string | null
        }
        Insert: {
          created_at?: string
          delta: Json
          end_time?: string | null
          id?: number
          meeting_flow?: string | null
          meeting_id?: string | null
          organizer_id?: string | null
          start_time?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string
          delta?: Json
          end_time?: string | null
          id?: number
          meeting_flow?: string | null
          meeting_id?: string | null
          organizer_id?: string | null
          start_time?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "interview_meeting_log_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "interview_meeting"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_meeting_log_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "meeting_details"
            referencedColumns: ["id"]
          },
        ]
      }
      interview_module: {
        Row: {
          created_at: string
          created_by: string | null
          department_id: number | null
          description: string | null
          duration_available: Json | null
          id: string
          instructions: string | null
          is_archived: boolean
          name: string
          recruiter_id: string
          settings: Json | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          department_id?: number | null
          description?: string | null
          duration_available?: Json | null
          id?: string
          instructions?: string | null
          is_archived?: boolean
          name: string
          recruiter_id: string
          settings?: Json | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          department_id?: number | null
          description?: string | null
          duration_available?: Json | null
          id?: string
          instructions?: string | null
          is_archived?: boolean
          name?: string
          recruiter_id?: string
          settings?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "interview_module_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_panel_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_module_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_interview_module_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_interview_module_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      interview_module_approve_users: {
        Row: {
          id: string
          module_id: string
          user_id: string
        }
        Insert: {
          id?: string
          module_id: string
          user_id: string
        }
        Update: {
          id?: string
          module_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "interview_module_approve_users_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "interview_module"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_module_approve_users_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "interview_types_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_module_approve_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "interview_module_approve_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "interview_module_approve_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      interview_module_relation: {
        Row: {
          id: string
          is_archived: boolean
          module_id: string
          number_of_reverse_shadow: number
          number_of_shadow: number
          pause_json: Json | null
          training_approver: string | null
          training_status: Database["public"]["Enums"]["status_training"]
          user_id: string
        }
        Insert: {
          id?: string
          is_archived?: boolean
          module_id: string
          number_of_reverse_shadow?: number
          number_of_shadow?: number
          pause_json?: Json | null
          training_approver?: string | null
          training_status?: Database["public"]["Enums"]["status_training"]
          user_id: string
        }
        Update: {
          id?: string
          is_archived?: boolean
          module_id?: string
          number_of_reverse_shadow?: number
          number_of_shadow?: number
          pause_json?: Json | null
          training_approver?: string | null
          training_status?: Database["public"]["Enums"]["status_training"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "interview_panel_relation_panel_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "interview_module"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_panel_relation_panel_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "interview_types_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_module_relation_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_interview_module_relation_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_interview_module_relation_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      interview_plan: {
        Row: {
          application_id: string | null
          created_at: string
          id: string
          job_id: string | null
          name: string
          plan_order: number
          recruiter_id: string
        }
        Insert: {
          application_id?: string | null
          created_at?: string
          id?: string
          job_id?: string | null
          name?: string
          plan_order?: number
          recruiter_id: string
        }
        Update: {
          application_id?: string | null
          created_at?: string
          id?: string
          job_id?: string | null
          name?: string
          plan_order?: number
          recruiter_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "interview_plan_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_status_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_plan_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_plan_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_plan_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["application_id"]
          },
          {
            foreignKeyName: "interview_plan_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_plan_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "job_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_plan_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      interview_progress: {
        Row: {
          application_id: string | null
          created_at: string
          description: string | null
          icon: string | null
          id: number
          is_completed: boolean | null
          job_id: string | null
          name: string | null
          order: number | null
          update_at: string | null
        }
        Insert: {
          application_id?: string | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: number
          is_completed?: boolean | null
          job_id?: string | null
          name?: string | null
          order?: number | null
          update_at?: string | null
        }
        Update: {
          application_id?: string | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: number
          is_completed?: boolean | null
          job_id?: string | null
          name?: string | null
          order?: number | null
          update_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "interview_progress_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_status_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_progress_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_progress_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_progress_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["application_id"]
          },
          {
            foreignKeyName: "interview_progress_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "job_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_progress_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      interview_session: {
        Row: {
          break_duration: number
          created_at: string
          id: string
          interview_plan_id: string | null
          interviewer_cnt: number
          location: string | null
          meeting_id: string | null
          members_meta: Json
          module_id: string | null
          name: string
          parent_session_id: string | null
          recruiter_id: string
          schedule_type: Database["public"]["Enums"]["interview_schedule_type"]
          session_duration: number
          session_order: number
          session_type: Database["public"]["Enums"]["session_type"]
        }
        Insert: {
          break_duration?: number
          created_at?: string
          id?: string
          interview_plan_id?: string | null
          interviewer_cnt?: number
          location?: string | null
          meeting_id?: string | null
          members_meta?: Json
          module_id?: string | null
          name?: string
          parent_session_id?: string | null
          recruiter_id: string
          schedule_type?: Database["public"]["Enums"]["interview_schedule_type"]
          session_duration?: number
          session_order?: number
          session_type?: Database["public"]["Enums"]["session_type"]
        }
        Update: {
          break_duration?: number
          created_at?: string
          id?: string
          interview_plan_id?: string | null
          interviewer_cnt?: number
          location?: string | null
          meeting_id?: string | null
          members_meta?: Json
          module_id?: string | null
          name?: string
          parent_session_id?: string | null
          recruiter_id?: string
          schedule_type?: Database["public"]["Enums"]["interview_schedule_type"]
          session_duration?: number
          session_order?: number
          session_type?: Database["public"]["Enums"]["session_type"]
        }
        Relationships: [
          {
            foreignKeyName: "interview_session_parent_session_id_fkey"
            columns: ["parent_session_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "interview_session_parent_session_id_fkey"
            columns: ["parent_session_id"]
            isOneToOne: false
            referencedRelation: "interview_session"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_session_parent_session_id_fkey"
            columns: ["parent_session_id"]
            isOneToOne: false
            referencedRelation: "meeting_details"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "interview_session_parent_session_id_fkey"
            columns: ["parent_session_id"]
            isOneToOne: false
            referencedRelation: "meeting_interviewers"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "interview_session_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_session_interview_plan_id_fkey"
            columns: ["interview_plan_id"]
            isOneToOne: false
            referencedRelation: "interview_plan"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_session_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "interview_meeting"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_session_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "meeting_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_session_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "interview_module"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_session_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "interview_types_view"
            referencedColumns: ["id"]
          },
        ]
      }
      interview_session_cancel: {
        Row: {
          application_id: string | null
          cancel_user_id: string | null
          created_at: string
          id: string
          is_ignored: boolean
          is_resolved: boolean
          other_details: Json | null
          reason: string
          request_id: string | null
          session_id: string
          session_relation_id: string | null
          type: Database["public"]["Enums"]["cancel_type"]
        }
        Insert: {
          application_id?: string | null
          cancel_user_id?: string | null
          created_at?: string
          id?: string
          is_ignored?: boolean
          is_resolved?: boolean
          other_details?: Json | null
          reason: string
          request_id?: string | null
          session_id: string
          session_relation_id?: string | null
          type?: Database["public"]["Enums"]["cancel_type"]
        }
        Update: {
          application_id?: string | null
          cancel_user_id?: string | null
          created_at?: string
          id?: string
          is_ignored?: boolean
          is_resolved?: boolean
          other_details?: Json | null
          reason?: string
          request_id?: string | null
          session_id?: string
          session_relation_id?: string | null
          type?: Database["public"]["Enums"]["cancel_type"]
        }
        Relationships: [
          {
            foreignKeyName: "interview_session_cancel_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_status_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_session_cancel_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_session_cancel_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_session_cancel_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["application_id"]
          },
          {
            foreignKeyName: "interview_session_cancel_cancel_user_id_fkey"
            columns: ["cancel_user_id"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "interview_session_cancel_cancel_user_id_fkey"
            columns: ["cancel_user_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "interview_session_cancel_cancel_user_id_fkey"
            columns: ["cancel_user_id"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "interview_session_cancel_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "request"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_session_cancel_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "interview_session_cancel_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "interview_session"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_session_cancel_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "meeting_details"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "interview_session_cancel_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "meeting_interviewers"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "interview_session_cancel_session_relation_id_fkey"
            columns: ["session_relation_id"]
            isOneToOne: false
            referencedRelation: "interview_session_relation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_session_cancel_session_relation_id_fkey"
            columns: ["session_relation_id"]
            isOneToOne: false
            referencedRelation: "meeting_interviewers"
            referencedColumns: ["session_relation_id"]
          },
        ]
      }
      interview_session_relation: {
        Row: {
          accepted_status: Database["public"]["Enums"]["session_accepted_status"]
          feedback: Json | null
          id: string
          interview_module_relation_id: string | null
          interviewer_type: Database["public"]["Enums"]["status_training"]
          is_confirmed: boolean
          session_id: string
          training_type: Database["public"]["Enums"]["interviewer_type"] | null
          user_id: string | null
        }
        Insert: {
          accepted_status?: Database["public"]["Enums"]["session_accepted_status"]
          feedback?: Json | null
          id?: string
          interview_module_relation_id?: string | null
          interviewer_type?: Database["public"]["Enums"]["status_training"]
          is_confirmed?: boolean
          session_id: string
          training_type?: Database["public"]["Enums"]["interviewer_type"] | null
          user_id?: string | null
        }
        Update: {
          accepted_status?: Database["public"]["Enums"]["session_accepted_status"]
          feedback?: Json | null
          id?: string
          interview_module_relation_id?: string | null
          interviewer_type?: Database["public"]["Enums"]["status_training"]
          is_confirmed?: boolean
          session_id?: string
          training_type?: Database["public"]["Enums"]["interviewer_type"] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_interview_session_relation_interview_module_relation_id_"
            columns: ["interview_module_relation_id"]
            isOneToOne: false
            referencedRelation: "interview_module_relation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_session_relation_interview_module_relation_id_"
            columns: ["interview_module_relation_id"]
            isOneToOne: false
            referencedRelation: "module_relations_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_session_relation_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_interview_session_relation_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_interview_session_relation_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_inteview_session_relation_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "public_inteview_session_relation_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "interview_session"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_inteview_session_relation_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "meeting_details"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "public_inteview_session_relation_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "meeting_interviewers"
            referencedColumns: ["session_id"]
          },
        ]
      }
      interview_training_progress: {
        Row: {
          approved_user_id: string | null
          created_at: string
          id: string
          is_approved: boolean
          is_attended: boolean
          session_relation_id: string
        }
        Insert: {
          approved_user_id?: string | null
          created_at?: string
          id?: string
          is_approved?: boolean
          is_attended?: boolean
          session_relation_id: string
        }
        Update: {
          approved_user_id?: string | null
          created_at?: string
          id?: string
          is_approved?: boolean
          is_attended?: boolean
          session_relation_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "interview_training_progress_approved_user_id_fkey"
            columns: ["approved_user_id"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "interview_training_progress_approved_user_id_fkey"
            columns: ["approved_user_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "interview_training_progress_approved_user_id_fkey"
            columns: ["approved_user_id"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "interview_training_progress_session_relation_id_fkey"
            columns: ["session_relation_id"]
            isOneToOne: false
            referencedRelation: "interview_session_relation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_training_progress_session_relation_id_fkey"
            columns: ["session_relation_id"]
            isOneToOne: false
            referencedRelation: "meeting_interviewers"
            referencedColumns: ["session_relation_id"]
          },
        ]
      }
      job_email_template: {
        Row: {
          body: string | null
          created_at: string
          from_name: string | null
          id: string
          job_id: string
          subject: string | null
          type: Database["public"]["Enums"]["email_slack_types"]
        }
        Insert: {
          body?: string | null
          created_at?: string
          from_name?: string | null
          id?: string
          job_id: string
          subject?: string | null
          type: Database["public"]["Enums"]["email_slack_types"]
        }
        Update: {
          body?: string | null
          created_at?: string
          from_name?: string | null
          id?: string
          job_id?: string
          subject?: string | null
          type?: Database["public"]["Enums"]["email_slack_types"]
        }
        Relationships: [
          {
            foreignKeyName: "job_email_template_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "job_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "job_email_template_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      logs: {
        Row: {
          created_at: string
          id: number
          message: string | null
          meta: Json | null
          method: string | null
          name: string
          parent_log_id: number | null
          recruiter_id: string | null
          status: string
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          message?: string | null
          meta?: Json | null
          method?: string | null
          name: string
          parent_log_id?: number | null
          recruiter_id?: string | null
          status: string
          type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          message?: string | null
          meta?: Json | null
          method?: string | null
          name?: string
          parent_log_id?: number | null
          recruiter_id?: string | null
          status?: string
          type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "logs_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      new_tasks: {
        Row: {
          agent: Database["public"]["Enums"]["task_agent_type"] | null
          application_id: string | null
          assignee: string[]
          created_at: string
          created_by: string
          due_date: string | null
          filter_id: string | null
          id: string
          name: string
          priority: Database["public"]["Enums"]["task_priority"]
          recruiter_id: string | null
          request_availability_id: string | null
          schedule_date_range: Json | null
          start_date: string | null
          status: Database["public"]["Enums"]["task_status"]
          task_action: Json | null
          task_owner: string | null
          trigger_count: number
          type: Database["public"]["Enums"]["task_type_enum"] | null
        }
        Insert: {
          agent?: Database["public"]["Enums"]["task_agent_type"] | null
          application_id?: string | null
          assignee: string[]
          created_at?: string
          created_by: string
          due_date?: string | null
          filter_id?: string | null
          id?: string
          name: string
          priority?: Database["public"]["Enums"]["task_priority"]
          recruiter_id?: string | null
          request_availability_id?: string | null
          schedule_date_range?: Json | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["task_status"]
          task_action?: Json | null
          task_owner?: string | null
          trigger_count?: number
          type?: Database["public"]["Enums"]["task_type_enum"] | null
        }
        Update: {
          agent?: Database["public"]["Enums"]["task_agent_type"] | null
          application_id?: string | null
          assignee?: string[]
          created_at?: string
          created_by?: string
          due_date?: string | null
          filter_id?: string | null
          id?: string
          name?: string
          priority?: Database["public"]["Enums"]["task_priority"]
          recruiter_id?: string | null
          request_availability_id?: string | null
          schedule_date_range?: Json | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["task_status"]
          task_action?: Json | null
          task_owner?: string | null
          trigger_count?: number
          type?: Database["public"]["Enums"]["task_type_enum"] | null
        }
        Relationships: [
          {
            foreignKeyName: "new_tasks_request_availability_id_fkey"
            columns: ["request_availability_id"]
            isOneToOne: false
            referencedRelation: "candidate_request_availability"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_new_tasks_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_status_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_new_tasks_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_new_tasks_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_new_tasks_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["application_id"]
          },
          {
            foreignKeyName: "public_new_tasks_cretaed_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_new_tasks_cretaed_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_new_tasks_cretaed_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_new_tasks_filter_id_fkey"
            columns: ["filter_id"]
            isOneToOne: false
            referencedRelation: "interview_filter_json"
            referencedColumns: ["id"]
          },
        ]
      }
      new_tasks_progress: {
        Row: {
          created_at: string
          created_by: Json
          id: string
          jsonb_data: Json | null
          progress_type: Database["public"]["Enums"]["progress_type"]
          task_id: string
          title: string
          title_meta: Json | null
        }
        Insert: {
          created_at?: string
          created_by: Json
          id?: string
          jsonb_data?: Json | null
          progress_type?: Database["public"]["Enums"]["progress_type"]
          task_id: string
          title: string
          title_meta?: Json | null
        }
        Update: {
          created_at?: string
          created_by?: Json
          id?: string
          jsonb_data?: Json | null
          progress_type?: Database["public"]["Enums"]["progress_type"]
          task_id?: string
          title?: string
          title_meta?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "public_new_tasks_progress_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "new_tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_new_tasks_progress_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks_view"
            referencedColumns: ["id"]
          },
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
      office_locations: {
        Row: {
          city: string
          country: string
          id: number
          is_headquarter: boolean
          line1: string
          line2: string | null
          name: string
          recruiter_id: string
          region: string
          remote_id: string | null
          timezone: string
          zipcode: string | null
        }
        Insert: {
          city: string
          country: string
          id?: number
          is_headquarter: boolean
          line1: string
          line2?: string | null
          name: string
          recruiter_id: string
          region: string
          remote_id?: string | null
          timezone: string
          zipcode?: string | null
        }
        Update: {
          city?: string
          country?: string
          id?: number
          is_headquarter?: boolean
          line1?: string
          line2?: string | null
          name?: string
          recruiter_id?: string
          region?: string
          remote_id?: string | null
          timezone?: string
          zipcode?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_recruiter"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
        ]
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
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "outreached_emails_recruiter_user_id_fkey"
            columns: ["recruiter_user_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "outreached_emails_recruiter_user_id_fkey"
            columns: ["recruiter_user_id"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      permissions: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          is_enable: boolean | null
          meta: Json | null
          name: string
          title: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          is_enable?: boolean | null
          meta?: Json | null
          name: string
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          is_enable?: boolean | null
          meta?: Json | null
          name?: string
          title?: string
        }
        Relationships: []
      }
      public_jobs: {
        Row: {
          active_status: Json
          created_at: string
          department_id: number | null
          description: string | null
          draft_jd_json: Json | null
          hiring_manager: string | null
          id: string
          interview_coordinator: string | null
          is_ats_sync: boolean
          is_pinned: boolean
          jd_changed: boolean | null
          jd_json: Json | null
          job_criteria: Json | null
          job_title: string
          job_type: Database["public"]["Enums"]["public_job_type"] | null
          location_id: number | null
          new_screening_setting: Json
          parameter_weights: Json
          posted_by: string
          recruiter: string | null
          recruiter_id: string
          recruiting_coordinator: string | null
          remote_id: string | null
          remote_sync_time: string | null
          scoring_criteria_loading: boolean
          screening_setting: Json | null
          slug: string
          sourcer: string | null
          status: Database["public"]["Enums"]["public_job_status"]
          updated_at: string | null
          workplace_type:
            | Database["public"]["Enums"]["public_job_workplace"]
            | null
        }
        Insert: {
          active_status?: Json
          created_at?: string
          department_id?: number | null
          description?: string | null
          draft_jd_json?: Json | null
          hiring_manager?: string | null
          id?: string
          interview_coordinator?: string | null
          is_ats_sync?: boolean
          is_pinned?: boolean
          jd_changed?: boolean | null
          jd_json?: Json | null
          job_criteria?: Json | null
          job_title: string
          job_type?: Database["public"]["Enums"]["public_job_type"] | null
          location_id?: number | null
          new_screening_setting?: Json
          parameter_weights?: Json
          posted_by?: string
          recruiter?: string | null
          recruiter_id: string
          recruiting_coordinator?: string | null
          remote_id?: string | null
          remote_sync_time?: string | null
          scoring_criteria_loading?: boolean
          screening_setting?: Json | null
          slug?: string
          sourcer?: string | null
          status?: Database["public"]["Enums"]["public_job_status"]
          updated_at?: string | null
          workplace_type?:
            | Database["public"]["Enums"]["public_job_workplace"]
            | null
        }
        Update: {
          active_status?: Json
          created_at?: string
          department_id?: number | null
          description?: string | null
          draft_jd_json?: Json | null
          hiring_manager?: string | null
          id?: string
          interview_coordinator?: string | null
          is_ats_sync?: boolean
          is_pinned?: boolean
          jd_changed?: boolean | null
          jd_json?: Json | null
          job_criteria?: Json | null
          job_title?: string
          job_type?: Database["public"]["Enums"]["public_job_type"] | null
          location_id?: number | null
          new_screening_setting?: Json
          parameter_weights?: Json
          posted_by?: string
          recruiter?: string | null
          recruiter_id?: string
          recruiting_coordinator?: string | null
          remote_id?: string | null
          remote_sync_time?: string | null
          scoring_criteria_loading?: boolean
          screening_setting?: Json | null
          slug?: string
          sourcer?: string | null
          status?: Database["public"]["Enums"]["public_job_status"]
          updated_at?: string | null
          workplace_type?:
            | Database["public"]["Enums"]["public_job_workplace"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "public_jobs_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_jobs_hiring_manager_fkey"
            columns: ["hiring_manager"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_hiring_manager_fkey"
            columns: ["hiring_manager"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_hiring_manager_fkey"
            columns: ["hiring_manager"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_interview_coordinator_fkey"
            columns: ["interview_coordinator"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_interview_coordinator_fkey"
            columns: ["interview_coordinator"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_interview_coordinator_fkey"
            columns: ["interview_coordinator"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "office_locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_jobs_recruiter_fkey"
            columns: ["recruiter"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_recruiter_fkey"
            columns: ["recruiter"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_recruiter_fkey"
            columns: ["recruiter"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_jobs_recruiting_coordinator_fkey"
            columns: ["recruiting_coordinator"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_recruiting_coordinator_fkey"
            columns: ["recruiting_coordinator"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_recruiting_coordinator_fkey"
            columns: ["recruiting_coordinator"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_sourcer_fkey"
            columns: ["sourcer"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_sourcer_fkey"
            columns: ["sourcer"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_sourcer_fkey"
            columns: ["sourcer"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      question_bank: {
        Row: {
          answer: Json | null
          created_at: string
          description: Json | null
          duration: number | null
          embeddings: string | null
          id: string
          level: Database["public"]["Enums"]["question_level"] | null
          question: Json | null
          required: boolean
          type: Database["public"]["Enums"]["question_type"]
        }
        Insert: {
          answer?: Json | null
          created_at?: string
          description?: Json | null
          duration?: number | null
          embeddings?: string | null
          id?: string
          level?: Database["public"]["Enums"]["question_level"] | null
          question?: Json | null
          required?: boolean
          type?: Database["public"]["Enums"]["question_type"]
        }
        Update: {
          answer?: Json | null
          created_at?: string
          description?: Json | null
          duration?: number | null
          embeddings?: string | null
          id?: string
          level?: Database["public"]["Enums"]["question_level"] | null
          question?: Json | null
          required?: boolean
          type?: Database["public"]["Enums"]["question_type"]
        }
        Relationships: []
      }
      recruiter: {
        Row: {
          company_overview: string | null
          company_website: string | null
          created_at: string
          employee_size: string | null
          employment_type: Json
          id: string
          industry: string | null
          logo: string | null
          name: string
          phone_number: string | null
          primary_admin: string
          scheduling_reason: Json | null
          scheduling_settings: Json
          socials: Json
          workplace_type: Json
        }
        Insert: {
          company_overview?: string | null
          company_website?: string | null
          created_at?: string
          employee_size?: string | null
          employment_type?: Json
          id?: string
          industry?: string | null
          logo?: string | null
          name: string
          phone_number?: string | null
          primary_admin: string
          scheduling_reason?: Json | null
          scheduling_settings?: Json
          socials?: Json
          workplace_type?: Json
        }
        Update: {
          company_overview?: string | null
          company_website?: string | null
          created_at?: string
          employee_size?: string | null
          employment_type?: Json
          id?: string
          industry?: string | null
          logo?: string | null
          name?: string
          phone_number?: string | null
          primary_admin?: string
          scheduling_reason?: Json | null
          scheduling_settings?: Json
          socials?: Json
          workplace_type?: Json
        }
        Relationships: [
          {
            foreignKeyName: "recruiter_primary_admin_fkey"
            columns: ["primary_admin"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "recruiter_primary_admin_fkey"
            columns: ["primary_admin"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "recruiter_primary_admin_fkey"
            columns: ["primary_admin"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      recruiter_preferences: {
        Row: {
          about: string | null
          agent: boolean
          analytics: boolean
          ats: string
          banner_image: string | null
          candidate_portal: boolean
          company_images: string[] | null
          greetings: string | null
          integrations: boolean
          onboard_complete: boolean
          recruiter_id: string
          reports: boolean
          request: boolean
          roles: boolean | null
          scheduling: boolean
          scoring: boolean
          slack: boolean
          themes: boolean
          workflow: boolean
        }
        Insert: {
          about?: string | null
          agent?: boolean
          analytics?: boolean
          ats?: string
          banner_image?: string | null
          candidate_portal?: boolean
          company_images?: string[] | null
          greetings?: string | null
          integrations?: boolean
          onboard_complete?: boolean
          recruiter_id: string
          reports?: boolean
          request?: boolean
          roles?: boolean | null
          scheduling?: boolean
          scoring?: boolean
          slack?: boolean
          themes?: boolean
          workflow?: boolean
        }
        Update: {
          about?: string | null
          agent?: boolean
          analytics?: boolean
          ats?: string
          banner_image?: string | null
          candidate_portal?: boolean
          company_images?: string[] | null
          greetings?: string | null
          integrations?: boolean
          onboard_complete?: boolean
          recruiter_id?: string
          reports?: boolean
          request?: boolean
          roles?: boolean | null
          scheduling?: boolean
          scoring?: boolean
          slack?: boolean
          themes?: boolean
          workflow?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "recuriter_preferences_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: true
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
        ]
      }
      recruiter_relation: {
        Row: {
          created_at: string
          created_by: string | null
          id: number
          is_active: boolean
          manager_id: string | null
          recruiter_id: string
          role_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: number
          is_active?: boolean
          manager_id?: string | null
          recruiter_id: string
          role_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: number
          is_active?: boolean
          manager_id?: string | null
          recruiter_id?: string
          role_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_recruiter_relation_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_recruiter_relation_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_recruiter_relation_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "recruiter_relation_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruiter_relation_manager_id_fkey"
            columns: ["manager_id"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "recruiter_relation_manager_id_fkey"
            columns: ["manager_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "recruiter_relation_manager_id_fkey"
            columns: ["manager_id"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "recruiter_relation_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruiter_relation_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      recruiter_user: {
        Row: {
          calendar_sync: Json | null
          calendar_sync_token: string | null
          created_at: string
          department_id: number | null
          email: string
          employment: Database["public"]["Enums"]["employment_type_enum"]
          first_name: string
          is_calendar_connected: boolean
          joined_at: string | null
          last_name: string
          linked_in: string | null
          office_location_id: number | null
          phone: string | null
          position: string | null
          profile_image: string | null
          remote_id: string | null
          schedule_auth: Json | null
          scheduling_settings: Json
          status: string
          user_id: string
        }
        Insert: {
          calendar_sync?: Json | null
          calendar_sync_token?: string | null
          created_at?: string
          department_id?: number | null
          email: string
          employment?: Database["public"]["Enums"]["employment_type_enum"]
          first_name: string
          is_calendar_connected?: boolean
          joined_at?: string | null
          last_name?: string
          linked_in?: string | null
          office_location_id?: number | null
          phone?: string | null
          position?: string | null
          profile_image?: string | null
          remote_id?: string | null
          schedule_auth?: Json | null
          scheduling_settings?: Json
          status?: string
          user_id: string
        }
        Update: {
          calendar_sync?: Json | null
          calendar_sync_token?: string | null
          created_at?: string
          department_id?: number | null
          email?: string
          employment?: Database["public"]["Enums"]["employment_type_enum"]
          first_name?: string
          is_calendar_connected?: boolean
          joined_at?: string | null
          last_name?: string
          linked_in?: string | null
          office_location_id?: number | null
          phone?: string | null
          position?: string | null
          profile_image?: string | null
          remote_id?: string | null
          schedule_auth?: Json | null
          scheduling_settings?: Json
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recruiter_user_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruiter_user_office_location_id_fkey"
            columns: ["office_location_id"]
            isOneToOne: false
            referencedRelation: "office_locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruiter_user_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      request: {
        Row: {
          application_id: string
          assignee_id: string
          assigner_id: string
          completed_at: string | null
          created_at: string
          id: string
          is_new: boolean
          priority: string
          schedule_end_date: string
          schedule_start_date: string
          status: string
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          application_id: string
          assignee_id?: string
          assigner_id?: string
          completed_at?: string | null
          created_at?: string
          id?: string
          is_new?: boolean
          priority?: string
          schedule_end_date: string
          schedule_start_date: string
          status?: string
          title: string
          type: string
          updated_at?: string
        }
        Update: {
          application_id?: string
          assignee_id?: string
          assigner_id?: string
          completed_at?: string | null
          created_at?: string
          id?: string
          is_new?: boolean
          priority?: string
          schedule_end_date?: string
          schedule_start_date?: string
          status?: string
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "request_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_status_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["application_id"]
          },
          {
            foreignKeyName: "request_assignee_id_fkey"
            columns: ["assignee_id"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "request_assignee_id_fkey"
            columns: ["assignee_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "request_assignee_id_fkey"
            columns: ["assignee_id"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "request_assigner_id_fkey"
            columns: ["assigner_id"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "request_assigner_id_fkey"
            columns: ["assigner_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "request_assigner_id_fkey"
            columns: ["assigner_id"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      request_integration_tool: {
        Row: {
          created_at: string
          description: string | null
          id: number
          recruiter_id: string | null
          tool_name: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          recruiter_id?: string | null
          tool_name?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          recruiter_id?: string | null
          tool_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_integration_tool_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
        ]
      }
      request_log: {
        Row: {
          assignee_id: string | null
          created_at: string
          delta: Json
          id: number
          priority: string | null
          request_id: string
          status: string | null
          type: string | null
        }
        Insert: {
          assignee_id?: string | null
          created_at?: string
          delta: Json
          id?: number
          priority?: string | null
          request_id: string
          status?: string | null
          type?: string | null
        }
        Update: {
          assignee_id?: string | null
          created_at?: string
          delta?: Json
          id?: number
          priority?: string | null
          request_id?: string
          status?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_log_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "request"
            referencedColumns: ["id"]
          },
        ]
      }
      request_note: {
        Row: {
          created_at: string
          id: string
          note: string | null
          pinned: boolean | null
          request_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          note?: string | null
          pinned?: boolean | null
          request_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          note?: string | null
          pinned?: boolean | null
          request_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "request_note_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "request"
            referencedColumns: ["id"]
          },
        ]
      }
      request_progress: {
        Row: {
          created_at: string
          event_type: string
          grouped_progress_id: string
          id: string
          is_progress_step: boolean
          log: string | null
          meta: Json | null
          request_id: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          event_type: string
          grouped_progress_id: string
          id?: string
          is_progress_step?: boolean
          log?: string | null
          meta?: Json | null
          request_id: string
          status: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          event_type?: string
          grouped_progress_id?: string
          id?: string
          is_progress_step?: boolean
          log?: string | null
          meta?: Json | null
          request_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "request_progress_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "request"
            referencedColumns: ["id"]
          },
        ]
      }
      request_relation: {
        Row: {
          cancel_id: string | null
          id: string
          request_id: string
          session_id: string
        }
        Insert: {
          cancel_id?: string | null
          id?: string
          request_id: string
          session_id: string
        }
        Update: {
          cancel_id?: string | null
          id?: string
          request_id?: string
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "request_relation_cancel_id_fkey"
            columns: ["cancel_id"]
            isOneToOne: false
            referencedRelation: "interview_session_cancel"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_relation_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "request"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_relation_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "request_relation_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "interview_session"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_relation_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "meeting_details"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "request_relation_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "meeting_interviewers"
            referencedColumns: ["session_id"]
          },
        ]
      }
      request_session_relation: {
        Row: {
          id: string
          request_availability_id: string
          session_id: string
        }
        Insert: {
          id?: string
          request_availability_id: string
          session_id: string
        }
        Update: {
          id?: string
          request_availability_id?: string
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "request_availability_relation_request_availability_id_fkey"
            columns: ["request_availability_id"]
            isOneToOne: false
            referencedRelation: "candidate_request_availability"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_availability_relation_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "request_availability_relation_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "interview_session"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "request_availability_relation_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "meeting_details"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "request_availability_relation_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "meeting_interviewers"
            referencedColumns: ["session_id"]
          },
        ]
      }
      role_permissions: {
        Row: {
          id: string
          permission_id: number
          recruiter_id: string
          role_id: string
        }
        Insert: {
          id?: string
          permission_id: number
          recruiter_id: string
          role_id: string
        }
        Update: {
          id?: string
          permission_id?: number
          recruiter_id?: string
          role_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "role_permissions_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "role_permissions_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          recruiter_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          recruiter_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          recruiter_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "roles_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
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
      scheduling_agent_chat_history: {
        Row: {
          agent_processing: boolean
          application_id: string | null
          chat_history: Json[]
          company_id: string | null
          created_at: string
          email_from_name: string
          email_subject: string
          filter_json_id: string
          job_id: string
          task_id: string | null
          thread_id: string
        }
        Insert: {
          agent_processing?: boolean
          application_id?: string | null
          chat_history?: Json[]
          company_id?: string | null
          created_at?: string
          email_from_name: string
          email_subject: string
          filter_json_id: string
          job_id: string
          task_id?: string | null
          thread_id: string
        }
        Update: {
          agent_processing?: boolean
          application_id?: string | null
          chat_history?: Json[]
          company_id?: string | null
          created_at?: string
          email_from_name?: string
          email_subject?: string
          filter_json_id?: string
          job_id?: string
          task_id?: string | null
          thread_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_scheduling-agent-chat-history_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_status_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_scheduling-agent-chat-history_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_scheduling-agent-chat-history_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_scheduling-agent-chat-history_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["application_id"]
          },
          {
            foreignKeyName: "public_scheduling-agent-chat-history_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_scheduling-agent-chat-history_filter_json_id_fkey"
            columns: ["filter_json_id"]
            isOneToOne: true
            referencedRelation: "interview_filter_json"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_scheduling-agent-chat-history_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "job_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_scheduling-agent-chat-history_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_scheduling-agent-chat-history_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "new_tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_scheduling-agent-chat-history_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks_view"
            referencedColumns: ["id"]
          },
        ]
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
          },
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
            referencedRelation: "job_view"
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
          },
        ]
      }
      task_session_relation: {
        Row: {
          id: string
          session_id: string
          task_id: string
        }
        Insert: {
          id?: string
          session_id: string
          task_id: string
        }
        Update: {
          id?: string
          session_id?: string
          task_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_session_relation_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "task_session_relation_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "interview_session"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_session_relation_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "meeting_details"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "task_session_relation_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "meeting_interviewers"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "task_session_relation_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "new_tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_session_relation_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks_view"
            referencedColumns: ["id"]
          },
        ]
      }
      tour: {
        Row: {
          created_at: string
          recruiter_relation_id: number
          type: string
        }
        Insert: {
          created_at?: string
          recruiter_relation_id?: number
          type: string
        }
        Update: {
          created_at?: string
          recruiter_relation_id?: number
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "tour_recruiter_relation_id_fkey"
            columns: ["recruiter_relation_id"]
            isOneToOne: false
            referencedRelation: "recruiter_relation"
            referencedColumns: ["id"]
          },
        ]
      }
      user_chat: {
        Row: {
          content: string
          created_at: string
          function: string | null
          id: string
          metadata: Json | null
          type: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          function?: string | null
          id?: string
          metadata?: Json | null
          type: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          function?: string | null
          id?: string
          metadata?: Json | null
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_chat_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "user_chat_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "user_chat_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
        ]
      }
      workflow: {
        Row: {
          auto_connect: boolean
          created_at: string
          description: string | null
          id: string
          interval: number
          is_active: boolean
          phase: Database["public"]["Enums"]["workflow_phase"]
          recruiter_id: string
          request_id: string | null
          title: string
          trigger: Database["public"]["Enums"]["workflow_trigger"]
          workflow_type: Database["public"]["Enums"]["workflow_type"]
        }
        Insert: {
          auto_connect?: boolean
          created_at?: string
          description?: string | null
          id?: string
          interval?: number
          is_active?: boolean
          phase: Database["public"]["Enums"]["workflow_phase"]
          recruiter_id: string
          request_id?: string | null
          title?: string
          trigger: Database["public"]["Enums"]["workflow_trigger"]
          workflow_type?: Database["public"]["Enums"]["workflow_type"]
        }
        Update: {
          auto_connect?: boolean
          created_at?: string
          description?: string | null
          id?: string
          interval?: number
          is_active?: boolean
          phase?: Database["public"]["Enums"]["workflow_phase"]
          recruiter_id?: string
          request_id?: string | null
          title?: string
          trigger?: Database["public"]["Enums"]["workflow_trigger"]
          workflow_type?: Database["public"]["Enums"]["workflow_type"]
        }
        Relationships: [
          {
            foreignKeyName: "workflow_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "request"
            referencedColumns: ["id"]
          },
        ]
      }
      workflow_action: {
        Row: {
          action_type: string
          created_at: string
          id: string
          order: number
          payload: Json
          target_api: Database["public"]["Enums"]["email_slack_types"]
          workflow_id: string
        }
        Insert: {
          action_type: string
          created_at?: string
          id?: string
          order: number
          payload?: Json
          target_api: Database["public"]["Enums"]["email_slack_types"]
          workflow_id: string
        }
        Update: {
          action_type?: string
          created_at?: string
          id?: string
          order?: number
          payload?: Json
          target_api?: Database["public"]["Enums"]["email_slack_types"]
          workflow_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workflow_action_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflow"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_action_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflow_view"
            referencedColumns: ["id"]
          },
        ]
      }
      workflow_action_logs: {
        Row: {
          completed_at: string | null
          created_at: string
          execute_at: string
          id: number
          meta: Json | null
          related_table: Database["public"]["Enums"]["workflow_cron_trigger_tables"]
          related_table_pkey: string
          started_at: string | null
          status: Database["public"]["Enums"]["workflow_cron_run_status"]
          tries: number
          workflow_action_id: string
          workflow_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          execute_at: string
          id?: number
          meta?: Json | null
          related_table: Database["public"]["Enums"]["workflow_cron_trigger_tables"]
          related_table_pkey: string
          started_at?: string | null
          status?: Database["public"]["Enums"]["workflow_cron_run_status"]
          tries?: number
          workflow_action_id: string
          workflow_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          execute_at?: string
          id?: number
          meta?: Json | null
          related_table?: Database["public"]["Enums"]["workflow_cron_trigger_tables"]
          related_table_pkey?: string
          started_at?: string | null
          status?: Database["public"]["Enums"]["workflow_cron_run_status"]
          tries?: number
          workflow_action_id?: string
          workflow_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workflow_action_logs_workflow_action_id_fkey"
            columns: ["workflow_action_id"]
            isOneToOne: false
            referencedRelation: "workflow_action"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_action_logs_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflow"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_action_logs_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflow_view"
            referencedColumns: ["id"]
          },
        ]
      }
      workflow_job_relation: {
        Row: {
          created_at: string
          id: string
          job_id: string
          workflow_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          job_id?: string
          workflow_id?: string
        }
        Update: {
          created_at?: string
          id?: string
          job_id?: string
          workflow_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workflow_job_relation_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "job_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_job_relation_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_job_relation_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflow"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_job_relation_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflow_view"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      all_interviewers: {
        Row: {
          completed_meeting_count: number | null
          completed_meeting_last_month: Json | null
          department_id: number | null
          email: string | null
          first_name: string | null
          is_calendar_connected: boolean | null
          job_ids: string[] | null
          last_name: string | null
          office_location_id: number | null
          position: string | null
          profile_image: string | null
          qualified_module_names: string[] | null
          recruiter_id: string | null
          schedule_auth: Json | null
          scheduling_settings: Json | null
          status: string | null
          total_hours_this_week: number | null
          total_hours_today: number | null
          total_interviews_this_week: number | null
          total_interviews_today: number | null
          training_module_names: string[] | null
          upcoming_meeting_count: number | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recruiter_relation_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruiter_user_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruiter_user_office_location_id_fkey"
            columns: ["office_location_id"]
            isOneToOne: false
            referencedRelation: "office_locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruiter_user_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      application_status_view: {
        Row: {
          application_match:
            | Database["public"]["Enums"]["application_match"]
            | null
          applied_at: string | null
          badges: Json | null
          bookmarked: boolean | null
          candidate_file_id: string | null
          candidate_id: string | null
          created_at: string | null
          file_url: string | null
          id: string | null
          interview_score: number | null
          is_new: boolean | null
          job_id: string | null
          processing_status:
            | Database["public"]["Enums"]["application_processing_status"]
            | null
          recruiter_id: string | null
          resume_processing_state:
            | Database["public"]["Enums"]["resume_processing_state"]
            | null
          resume_score: number | null
          status: string | null
        }
        Relationships: [
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
            foreignKeyName: "applications_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["candidate_id"]
          },
          {
            foreignKeyName: "applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "job_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
        ]
      }
      application_view: {
        Row: {
          activity_count: number | null
          application_match:
            | Database["public"]["Enums"]["application_match"]
            | null
          applied_at: string | null
          badges: Json | null
          bookmarked: boolean | null
          candidate_file_id: string | null
          candidate_id: string | null
          city: string | null
          country: string | null
          created_at: string | null
          current_job_title: string | null
          email: string | null
          file_url: string | null
          id: string | null
          interview_plans: Json[] | null
          interview_score: number | null
          is_new: boolean | null
          job_id: string | null
          latest_activity: string | null
          linkedin: string | null
          name: string | null
          phone: string | null
          processing_status:
            | Database["public"]["Enums"]["application_processing_status"]
            | null
          recruiter_id: string | null
          resume_processing_state:
            | Database["public"]["Enums"]["resume_processing_state"]
            | null
          resume_score: number | null
          session_names: string[] | null
          state: string | null
          status: string | null
          task_count: number | null
          timezone: string | null
        }
        Relationships: [
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
            foreignKeyName: "applications_candidate_id_fkey"
            columns: ["candidate_id"]
            isOneToOne: false
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["candidate_id"]
          },
          {
            foreignKeyName: "applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "job_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
        ]
      }
      candidate_applications_view: {
        Row: {
          application_id: string | null
          application_status: string | null
          candidate_email: string | null
          candidate_id: string | null
          candidate_name: string | null
          company_id: string | null
          full_text_search: unknown | null
          job_id: string | null
          job_role: string | null
        }
        Relationships: [
          {
            foreignKeyName: "applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "job_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "candidates_recruiter_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
        ]
      }
      debreif_meeting_interviewers: {
        Row: {
          email: string | null
          first_name: string | null
          interviewer_type:
            | Database["public"]["Enums"]["status_training"]
            | null
          is_confirmed: boolean | null
          last_name: string | null
          meeting_id: string | null
          profile_image: string | null
          session_id: string | null
          training_type: Database["public"]["Enums"]["interviewer_type"] | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_interview_session_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "interview_meeting"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_session_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "meeting_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recruiter_user_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      interview_types_view: {
        Row: {
          avg_meeting_duration: number | null
          canceled_meeting_count: number | null
          completed_meeting_count: number | null
          created_by: string | null
          department_id: number | null
          department_name: string | null
          description: string | null
          id: string | null
          is_archived: boolean | null
          job_names: string[] | null
          name: string | null
          recruiter_id: string | null
          this_month_cancelled_meeting_count: number | null
          this_month_completed_meeting_count: number | null
          this_month_confirmed_meeting_count: number | null
          upcoming_meeting_count: number | null
          users: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "interview_module_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_panel_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_module_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_interview_module_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_interview_module_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
        ]
      }
      job_view: {
        Row: {
          application_match: Json | null
          created_at: string | null
          department: string | null
          department_id: number | null
          description: string | null
          draft_jd_json: Json | null
          hiring_manager: string | null
          id: string | null
          interview_coordinator: string | null
          interview_plan_count: number | null
          is_pinned: boolean | null
          jd_json: Json | null
          job_title: string | null
          job_type: Database["public"]["Enums"]["public_job_type"] | null
          location: Json | null
          location_id: number | null
          parameter_weights: Json | null
          posted_by: string | null
          processing_count: Json | null
          recruiter: string | null
          recruiter_id: string | null
          recruiting_coordinator: string | null
          remote_sync_time: string | null
          scoring_criteria_loading: boolean | null
          section_count: Json | null
          sourcer: string | null
          status: Database["public"]["Enums"]["public_job_status"] | null
          syncable: boolean | null
          workplace_type:
            | Database["public"]["Enums"]["public_job_workplace"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "public_jobs_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_jobs_hiring_manager_fkey"
            columns: ["hiring_manager"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_hiring_manager_fkey"
            columns: ["hiring_manager"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_hiring_manager_fkey"
            columns: ["hiring_manager"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_interview_coordinator_fkey"
            columns: ["interview_coordinator"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_interview_coordinator_fkey"
            columns: ["interview_coordinator"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_interview_coordinator_fkey"
            columns: ["interview_coordinator"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "office_locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_jobs_recruiter_fkey"
            columns: ["recruiter"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_recruiter_fkey"
            columns: ["recruiter"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_recruiter_fkey"
            columns: ["recruiter"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_jobs_recruiting_coordinator_fkey"
            columns: ["recruiting_coordinator"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_recruiting_coordinator_fkey"
            columns: ["recruiting_coordinator"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_recruiting_coordinator_fkey"
            columns: ["recruiting_coordinator"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_sourcer_fkey"
            columns: ["sourcer"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_sourcer_fkey"
            columns: ["sourcer"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_jobs_sourcer_fkey"
            columns: ["sourcer"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
        ]
      }
      meeting_details: {
        Row: {
          application_id: string | null
          break_duration: number | null
          cal_event_id: string | null
          candidate_feedback: Json | null
          confirmed_candidate_tz: string | null
          confirmed_date: string | null
          confirmed_module_relation_ids: string[] | null
          confirmed_user_ids: string[] | null
          created_at: string | null
          end_time: string | null
          id: string | null
          instructions: string | null
          job_id: string | null
          meeting_flow: Database["public"]["Enums"]["meeting_flow"] | null
          meeting_json: Json | null
          meeting_link: string | null
          module_id: string | null
          organizer_id: string | null
          parent_session_id: string | null
          recruiter_id: string | null
          schedule_request_id: string | null
          schedule_type:
            | Database["public"]["Enums"]["interview_schedule_type"]
            | null
          session_duration: number | null
          session_id: string | null
          session_name: string | null
          session_order: number | null
          session_type: Database["public"]["Enums"]["session_type"] | null
          start_time: string | null
          status:
            | Database["public"]["Enums"]["interview_schedule_status"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "public_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "job_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_meeting_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_meeting_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_status_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_meeting_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_meeting_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["application_id"]
          },
          {
            foreignKeyName: "interview_meeting_organizer_id_fkey"
            columns: ["organizer_id"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "interview_meeting_organizer_id_fkey"
            columns: ["organizer_id"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "interview_meeting_organizer_id_fkey"
            columns: ["organizer_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "interview_session_parent_session_id_fkey"
            columns: ["parent_session_id"]
            isOneToOne: false
            referencedRelation: "interview_session"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_session_parent_session_id_fkey"
            columns: ["parent_session_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "interview_session_parent_session_id_fkey"
            columns: ["parent_session_id"]
            isOneToOne: false
            referencedRelation: "meeting_details"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "interview_session_parent_session_id_fkey"
            columns: ["parent_session_id"]
            isOneToOne: false
            referencedRelation: "meeting_interviewers"
            referencedColumns: ["session_id"]
          },
          {
            foreignKeyName: "public_interview_session_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "interview_module"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_session_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "interview_types_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_jobs_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
        ]
      }
      meeting_interviewers: {
        Row: {
          accepted_status:
            | Database["public"]["Enums"]["session_accepted_status"]
            | null
          cancel_reasons: Json | null
          email: string | null
          first_name: string | null
          interview_module_relation_id: string | null
          interviewer_type:
            | Database["public"]["Enums"]["status_training"]
            | null
          is_confirmed: boolean | null
          job_id: string | null
          last_name: string | null
          meeting_id: string | null
          module_id: string | null
          position: string | null
          profile_image: string | null
          schedule_auth: Json | null
          scheduling_settings: Json | null
          session_id: string | null
          session_relation_id: string | null
          session_type: Database["public"]["Enums"]["session_type"] | null
          totalhoursthisweek: number | null
          totalhourstoday: number | null
          totalinterviewsthisweek: number | null
          totalinterviewstoday: number | null
          training_type: Database["public"]["Enums"]["interviewer_type"] | null
          tz_code: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "interview_panel_relation_panel_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "interview_module"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_panel_relation_panel_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "interview_types_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_session_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "interview_meeting"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_session_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "meeting_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_session_relation_interview_module_relation_id_"
            columns: ["interview_module_relation_id"]
            isOneToOne: false
            referencedRelation: "interview_module_relation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_session_relation_interview_module_relation_id_"
            columns: ["interview_module_relation_id"]
            isOneToOne: false
            referencedRelation: "module_relations_view"
            referencedColumns: ["id"]
          },
        ]
      }
      module_relations_view: {
        Row: {
          cancelled_meeting_count: number | null
          completed_meeting_count: number | null
          completed_meeting_duration: number | null
          confirmed_meeting_count: number | null
          first_name: string | null
          id: string | null
          is_archived: boolean | null
          meetings: Json | null
          module_description: string | null
          module_id: string | null
          module_name: string | null
          module_training_status:
            | Database["public"]["Enums"]["status_training"]
            | null
          number_of_reverse_shadow: number | null
          number_of_shadow: number | null
          pause_json: Json | null
          phone: string | null
          position: string | null
          profile_image: string | null
          reverse_shadow_completed_count: number | null
          reverse_shadow_confirmed_count: number | null
          scheduling_settings: Json | null
          shadow_completed_count: number | null
          shadow_confirmed_count: number | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "interview_panel_relation_panel_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "interview_module"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interview_panel_relation_panel_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "interview_types_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_interview_module_relation_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_interview_module_relation_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_interview_module_relation_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
        ]
      }
      tasks_view: {
        Row: {
          agent: Database["public"]["Enums"]["task_agent_type"] | null
          application_id: string | null
          assignee: string[] | null
          created_at: string | null
          created_by: string | null
          due_date: string | null
          filter_id: string | null
          id: string | null
          latest_progress: Json | null
          name: string | null
          priority: Database["public"]["Enums"]["task_priority"] | null
          recruiter_id: string | null
          request_availability_id: string | null
          schedule_date_range: Json | null
          session_ids: Json | null
          start_date: string | null
          status: Database["public"]["Enums"]["task_status"] | null
          task_action: Json | null
          task_owner: string | null
          trigger_count: number | null
          type: Database["public"]["Enums"]["task_type_enum"] | null
        }
        Relationships: [
          {
            foreignKeyName: "new_tasks_request_availability_id_fkey"
            columns: ["request_availability_id"]
            isOneToOne: false
            referencedRelation: "candidate_request_availability"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_new_tasks_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_new_tasks_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_status_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_new_tasks_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "application_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_new_tasks_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "candidate_applications_view"
            referencedColumns: ["application_id"]
          },
          {
            foreignKeyName: "public_new_tasks_cretaed_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "recruiter_user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_new_tasks_cretaed_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "all_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_new_tasks_cretaed_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "debreif_meeting_interviewers"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_new_tasks_filter_id_fkey"
            columns: ["filter_id"]
            isOneToOne: false
            referencedRelation: "interview_filter_json"
            referencedColumns: ["id"]
          },
        ]
      }
      workflow_view: {
        Row: {
          auto_connect: boolean | null
          created_at: string | null
          description: string | null
          id: string | null
          interval: number | null
          is_paused: boolean | null
          jobs: Json[] | null
          phase: Database["public"]["Enums"]["workflow_phase"] | null
          recruiter_id: string | null
          request_id: string | null
          tags: string[] | null
          title: string | null
          trigger: Database["public"]["Enums"]["workflow_trigger"] | null
          workflow_type: Database["public"]["Enums"]["workflow_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "workflow_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "recruiter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workflow_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "request"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      add_vault_secrets: {
        Args: {
          sec_key: string
          sec_val: string
        }
        Returns: boolean
      }
      ashbyapplicationsync: {
        Args: {}
        Returns: Json
      }
      ashbyjobreference: {
        Args: {
          rec_id: string
        }
        Returns: Json[]
      }
      ashbysync: {
        Args: {}
        Returns: Json
      }
      batchcalcresumejdscore: {
        Args: {}
        Returns: Json[]
      }
      batchscorecron: {
        Args: {
          function_value: string
        }
        Returns: Json
      }
      batchtriggergreenhouse: {
        Args: {}
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
      calculate_experience: {
        Args: {
          start_time: Json
          end_time: Json
        }
        Returns: number
      }
      calculate_resume_score: {
        Args: {
          in_score_json: Json
          app_id: string
        }
        Returns: boolean
      }
      candidate_exp_analytic: {
        Args: {
          recruiter_id: string
          departments?: number[]
          locations?: number[]
          jobs?: string[]
          start_datetime?: string
          end_datetime?: string
        }
        Returns: {
          app_id: string
          total_exp: number
          count: number
        }[]
      }
      candidate_skills_analysis: {
        Args: {
          recruiter_id: string
          departments?: number[]
          locations?: number[]
          jobs?: string[]
          start_datetime?: string
          end_datetime?: string
        }
        Returns: {
          skill: string
          frequency: number
        }[]
      }
      check_user_auth: {
        Args: {}
        Returns: undefined
      }
      count_candidates: {
        Args: {
          job_ids: string[]
        }
        Returns: {
          total_records: number
        }[]
      }
      count_requests: {
        Args: {}
        Returns: {
          date: string
          created_at_count: number
          completed_at_count: number
          on_progress_count: number
        }[]
      }
      create_auth_user: {
        Args: {
          email: string
          password: string
          user_id: string
          app_meta_data: Json
          user_meta_data: Json
        }
        Returns: undefined
      }
      create_new_workflow_action_log: {
        Args: {
          triggered_table: Database["public"]["Enums"]["workflow_cron_trigger_tables"]
          triggered_table_pkey: string
          workflow_id: string
          workflow_action_id: string
          interval_minutes: number
          phase: string
          meta: Json
          base_time?: string
        }
        Returns: number
      }
      create_session_request: {
        Args: {
          application?: string
          sessions?: string[]
          request?: Json
        }
        Returns: string
      }
      createrecuriterrelation: {
        Args: {
          in_user_id: string
          in_recruiter_id: string
          in_is_active: boolean
        }
        Returns: boolean
      }
      custom_access_token_hook: {
        Args: {
          event: Json
        }
        Returns: Json
      }
      delete_session: {
        Args: {
          session_id: string
          interview_plan_id: string
        }
        Returns: undefined
      }
      duplicateassessment: {
        Args: {
          assessmentid: string
          newassessmentid: string
          recruiterid: string
          newtitle: string
        }
        Returns: undefined
      }
      emailcroncandidatedb: {
        Args: {}
        Returns: Json
      }
      emailhandlercandidatedb: {
        Args: {}
        Returns: Json[]
      }
      expire_new_applications: {
        Args: {}
        Returns: undefined
      }
      expire_new_requests: {
        Args: {}
        Returns: undefined
      }
      fail_processing_applications: {
        Args: {}
        Returns: undefined
      }
      fetch_interview_data: {
        Args: {
          rec_id: string
          text_search_filter?: string
          job_id_filter?: string[]
          sort_by?: string
          cord_ids?: string[]
          status_filter?: string[]
          schedule_type_filter?: string[]
          module_ids?: string[]
          page_number?: number
        }
        Returns: {
          applications: Json
          candidates: Json
          file: Json
          public_jobs: Json
          schedule: Json
          interview_session_meetings: Json
        }[]
      }
      fetch_slots_api_details: {
        Args: {
          in_plan_id: string
          in_company_id: string
        }
        Returns: {
          interview_sessions: Json
          service_json: string
        }[]
      }
      find_avail_api_details: {
        Args: {
          job_id: string
          recruiter_id: string
        }
        Returns: {
          interview_plan: Json
          service_json: Json
          interviewer: Json
          interview_modules: Json
        }[]
      }
      find_avail_api_details_updated: {
        Args: {
          job_id: string
          recruiter_id: string
        }
        Returns: {
          interview_plan: Json
          service_json: Json
          interviewer: Json
          interview_modules: Json
          shadow_ints: Json
          rshadow_ints: Json
        }[]
      }
      find_avail_api_details_updated_2: {
        Args: {
          job_id: string
          recruiter_id: string
        }
        Returns: {
          interview_plan: Json
          service_json: Json
          interviewer: Json
          interview_modules: Json
          shadow_ints: Json
          rshadow_ints: Json
          int_mod_relns: Json
        }[]
      }
      get_all_interview_session_by_user_id: {
        Args: {
          target_user_id: string
        }
        Returns: Json
      }
      get_all_interviewers: {
        Args: {
          recruiter_id_param: string
          start_time_param: string
          end_time_param: string
          department_ids_params: number[]
          office_location_ids_params: number[]
          job_ids_params: string[]
          module_ids_params: string[]
        }
        Returns: {
          user_id: string
          first_name: string
          last_name: string
          email: string
          profile_image: string
          position: string
          schedule_auth: Json
          scheduling_settings: Json
          status: string
          department_id: number
          office_location_id: number
          recruiter_id: string
          is_calendar_connected: boolean
          upcoming_meeting_count: number
          completed_meeting_count: number
          completed_meetings: Json
        }[]
      }
      get_applicant_badges: {
        Args: {
          job_id: string
          badge_constants?: Json
        }
        Returns: Json
      }
      get_applicant_locations: {
        Args: {
          job_id: string
        }
        Returns: {
          locations: Json
        }[]
      }
      get_auth_users: {
        Args: {}
        Returns: unknown[]
      }
      get_candidate_info: {
        Args: {
          rec_id: string
        }
        Returns: {
          first_name: string
          last_name: string
          avatar: string
          screening_title: string
          job_title: string
        }[]
      }
      get_combined_resume_score: {
        Args: {
          jd_data: Json
          parameter_weights: Json
        }
        Returns: number
      }
      get_completed_requests_candidate_list: {
        Args: {
          rec_id: string
        }
        Returns: {
          applications: Json[]
          jobs: Json[]
          assignerlist: Json[]
          assigneelist: Json[]
        }[]
      }
      get_conversion_count: {
        Args: {
          recruiter_id: string
          type: string
        }
        Returns: {
          timeline: string
          count: number
        }[]
      }
      get_filtered_job_ids: {
        Args: {
          recruiter_id: string
          departments?: number[]
          jobs?: string[]
        }
        Returns: string[]
      }
      get_interview_data_count: {
        Args: {
          rec_id: string
          text_search_filter?: string
          job_id_filter?: string[]
          cord_ids?: string[]
          status_filter?: string[]
          schedule_type_filter?: string[]
          module_ids?: string[]
        }
        Returns: number
      }
      get_interview_leaderboard: {
        Args: {
          recruiter_id: string
          type: string
        }
        Returns: {
          user_id: string
          first_name: string
          last_name: string
          profile_image: string
          user_position: string
          duration: number
          interviews: number
        }[]
      }
      get_interview_meeting_status_count: {
        Args: {
          recruiter_id: string
          type: string
        }
        Returns: {
          timeline: string
          completed: number
          cancelled: number
          not_scheduled: number
          waiting: number
          confirmed: number
          reschedule: number
        }[]
      }
      get_interview_modules: {
        Args: {
          rec_id: string
        }
        Returns: {
          interview_modules: Json
          users: Json
          upcoming_meeting_count: number
          completed_meeting_count: number
          canceled_meeting_count: number
        }[]
      }
      get_interview_schedule_by_job_id: {
        Args: {
          target_job_id: string
        }
        Returns: {
          interview_meeting: Json
          schedule: Json
          interview_session: Json
          candidates: Json
          users: Json
        }[]
      }
      get_interview_schedule_by_module_id: {
        Args: {
          target_module_id: string
        }
        Returns: {
          interview_meeting: Json
          users: Json
          candidate: Json
        }[]
      }
      get_interview_schedule_by_rec_id: {
        Args: {
          target_rec_id: string
        }
        Returns: {
          interview_meeting: Json
          users: Json
          candidate: Json
        }[]
      }
      get_interview_schedule_by_user_id: {
        Args: {
          target_user_id: string
        }
        Returns: {
          interview_meeting: Json
          interview_session: Json
          schedule: Json
          users: Json
        }[]
      }
      get_interview_session_data: {
        Args: {
          session_ids: string[]
          company_id: string
          meet_start_date?: string
          meet_end_date?: string
        }
        Returns: {
          interview_sessions: Json[]
          interviewers: Json[]
          service_cred: string
          interview_modules: Json[]
          comp_schedule_setting: Json
          int_meetings: Json[]
        }[]
      }
      get_interview_training_status_count: {
        Args: {
          recruiter_id: string
        }
        Returns: {
          id: string
          name: string
          training_status_count: Json
        }[]
      }
      get_interviewer_meetings: {
        Args: {
          target_user_id: string
        }
        Returns: {
          interviewer_meetings: Json
        }[]
      }
      get_interviewers: {
        Args: {
          rec_id: string
        }
        Returns: {
          rec_user: Json
          qualified_module_names: string[]
          training_module_names: string[]
          upcoming_meeting_count: number
          completed_meeting_count: number
        }[]
      }
      get_job_workflows: {
        Args: {
          recruiter_id: string
        }
        Returns: {
          id: string
          job_title: string
          workflow_count: number
        }[]
      }
      get_present_scheduled_jobs: {
        Args: {}
        Returns: Json[]
      }
      get_recruiter_id_by_user: {
        Args: {
          user_id: string
        }
        Returns: string
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
      get_recruiter_screening_data: {
        Args: {
          recruiter_id: string
        }
        Returns: {
          first_name: string
          last_name: string
          avatar: string
          status_emails_sent: number
          screening_title: string
          job_title: string
        }[]
      }
      get_request_count_stats: {
        Args: {
          assigner_id: string
        }
        Returns: {
          date: string
          counts: Json
        }[]
      }
      get_request_count_stats_new: {
        Args: {
          assigner_id: string
        }
        Returns: {
          date: string
          counts: Json
        }[]
      }
      get_request_stats: {
        Args: {
          assigner_id: string
          curr_date?: string
        }
        Returns: {
          date: string
          created: number
          completed: number
          on_going: number
        }[]
      }
      get_requests_candidate_list: {
        Args: {
          rec_id: string
        }
        Returns: {
          applications: Json[]
          jobs: Json[]
          assignerlist: Json[]
          assigneelist: Json[]
        }[]
      }
      get_screening_candidates: {
        Args: {
          p_recruiter_id: string
        }
        Returns: {
          id: string
          first_name: string
          last_name: string
          avatar: string
          status_emails_sent: Json
          screening_title: string
          job_title: string
          created_at: string
          response: Json
          questions: Json
          public_job_id: string
          company: string
          email: string
          candidate_id: string
          email_template: Json
          result_created_at: string
          assessment_result: Json[]
          phonescreening_templateid: string
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
      getapplicationprocessingstatuscount: {
        Args: {
          jobid: string
        }
        Returns: Json
      }
      getexperienceandtenure: {
        Args: {
          jobid: string
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
      getjobassessments: {
        Args: {
          jobid: string
        }
        Returns: {
          id: string
          created_at: string
          title: string
          description: string
          type: Database["public"]["Enums"]["template_type"]
          recruiter_id: string
          level: Database["public"]["Enums"]["question_level"]
          mode: Database["public"]["Enums"]["assessment_mode"]
          duration: number
        }[]
      }
      getlocationspool: {
        Args: {
          jobid: string
        }
        Returns: Json
      }
      getoutreachemails: {
        Args: {}
        Returns: Json[]
      }
      getrecruiterscreeningdata: {
        Args: {
          recruiter_id: number
        }
        Returns: {
          first_name: string
          last_name: string
          avatar: string
          status_emails_sent: string
          screening_title: string
          job_title: string
        }[]
      }
      getskillpools: {
        Args: {
          jobid: string
        }
        Returns: Json
      }
      greenhouse_sync: {
        Args: {}
        Returns: undefined
      }
      insert_debrief_session: {
        Args: {
          recruiter_id: string
          interview_plan_id: string
          session_order: number
          session_duration: number
          break_duration: number
          location: string
          schedule_type: Database["public"]["Enums"]["interview_schedule_type"]
          name: string
          members: Json
          members_meta: Json
        }
        Returns: undefined
      }
      insert_email_templates: {
        Args: {
          recruiter_id: string
        }
        Returns: undefined
      }
      insert_interview_session: {
        Args: {
          recruiter_id: string
          module_id: string
          interview_plan_id: string
          session_order: number
          session_duration: number
          break_duration: number
          interviewer_cnt: number
          session_type: Database["public"]["Enums"]["session_type"]
          location: string
          schedule_type: Database["public"]["Enums"]["interview_schedule_type"]
          name: string
          interview_module_relation_entries: Json
        }
        Returns: undefined
      }
      insert_job_email_template: {
        Args: {
          p_job_id: string
        }
        Returns: undefined
      }
      interviewers_analytic_extra: {
        Args: {
          recruiter_id: string
          departments?: number[]
          locations?: number[]
          jobs?: string[]
          start_datetime?: string
          end_datetime?: string
        }
        Returns: {
          user_id: string
          average_weekly_count: number
          average_weekly_duration: number
          upcoming: number
          qualified: number
          training: number
        }[]
      }
      interviewers_analytic_rejections: {
        Args: {
          recruiter_id: string
          departments?: number[]
          locations?: number[]
          jobs?: string[]
          start_datetime?: string
          end_datetime?: string
        }
        Returns: {
          user_id: string
          decline: number
          lead_time: number
          reason: string[]
          note: string[]
        }[]
      }
      interviewers_leaderboard_by_v: {
        Args: {
          recruiter_id: string
          departments?: number[]
          locations?: number[]
          jobs?: string[]
          start_datetime?: string
          end_datetime?: string
        }
        Returns: {
          user_id: string
          duration: number
          total_hours: number
          accepted: number
          rejected: number
          feedback: number
        }[]
      }
      interviewing_state_active: {
        Args: {}
        Returns: undefined
      }
      jobs_locations_count: {
        Args: {
          recruiter_id: string
          departments?: number[]
          locations?: number[]
          jobs?: string[]
          start_datetime?: string
          end_datetime?: string
        }
        Returns: {
          country: string
          state: string
          city: string
          app_count: number
        }[]
      }
      lever_resume_save: {
        Args: {}
        Returns: undefined
      }
      levercandidatesync: {
        Args: {}
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
        Args: {}
        Returns: undefined
      }
      move_to_interview: {
        Args: {
          applications?: string[]
          sessions?: string[]
          requests?: Json[]
        }
        Returns: undefined
      }
      new_get_interview_schedule_by_meeting_id: {
        Args: {
          target_meeting_id: string
        }
        Returns: Json
      }
      new_get_interview_schedule_by_user_id: {
        Args: {
          target_user_id: string
        }
        Returns: {
          interview_meeting: Json
          users: Json
          candidate: Json
        }[]
      }
      outreachhandler: {
        Args: {}
        Returns: Json
      }
      overviewgenerate: {
        Args: {}
        Returns: Json
      }
      per_module_candidate_pipeline: {
        Args: {
          module_id: string
        }
        Returns: {
          applied: number
          screened: number
          interviewed: number
          offered: number
        }[]
      }
      per_module_interview_statistics: {
        Args: {
          module_id: string
        }
        Returns: {
          total: number
          completed: number
          duration: number
          time_to_schedule: Json
        }[]
      }
      per_module_interviewer_performance: {
        Args: {
          module_id: string
        }
        Returns: {
          candidate_feedback_avg: number
          total_interviews: number
          interviewer_feedback_count: number
          recommendation_success: number
          interviewers_count: number
        }[]
      }
      reports_request_metrics: {
        Args: {
          recruiter_id: string
          departments?: number[]
          locations?: number[]
          jobs?: string[]
          start_datetime?: string
          end_datetime?: string
        }
        Returns: {
          request_id: string
          interviewing_coordinator: string
          candidate_name: string
          recruiting_coord: string
          type: string
          availability_req: boolean
          self_scheduling_req: boolean
          confirmation: boolean
          availability_received: boolean
          availability_followup: boolean
          self_scheduling_followup: boolean
          candidate_status: string
        }[]
      }
      reset_auth_users_identities: {
        Args: {
          user_email: string
        }
        Returns: undefined
      }
      resync_calendar: {
        Args: {}
        Returns: undefined
      }
      retrybatchcalcresumejdscore: {
        Args: {}
        Returns: Json[]
      }
      run_workflow_action: {
        Args: {
          action_id: number
        }
        Returns: boolean
      }
      schedulercron: {
        Args: {}
        Returns: Json
      }
      scheduling_analytics_completed_interviews: {
        Args: {
          recruiter_id: string
          departments?: number[]
          jobs?: string[]
          type?: string
        }
        Returns: {
          date: string
          count: number
        }[]
      }
      scheduling_analytics_decline_requests: {
        Args: {
          recruiter_id: string
          departments?: number[]
          jobs?: string[]
        }
        Returns: {
          completed_at: string
          count: number
        }[]
      }
      scheduling_analytics_filters: {
        Args: {
          recruiter_id: string
        }
        Returns: {
          jobs: Json[]
          departments: Json[]
        }[]
      }
      scheduling_analytics_interview_types: {
        Args: {
          recruiter_id: string
          departments?: number[]
          jobs?: string[]
        }
        Returns: {
          id: string
          name: string
          qualified: number
          training: number
        }[]
      }
      scheduling_analytics_interviewers: {
        Args: {
          recruiter_id: string
          departments?: number[]
          jobs?: string[]
          type?: Database["public"]["Enums"]["status_training"]
        }
        Returns: {
          name: string
          user_id: string
          profile_image: string
          accepted: number
          declined: number
        }[]
      }
      scheduling_analytics_leaderboard: {
        Args: {
          recruiter_id: string
          departments?: number[]
          jobs?: string[]
          type?: string
        }
        Returns: {
          name: string
          position: string
          profile_image: string
          user_id: string
          duration: number
          interviews: number
        }[]
      }
      scheduling_analytics_reasons: {
        Args: {
          recruiter_id: string
          departments?: number[]
          jobs?: string[]
          type?: Database["public"]["Enums"]["cancel_type"]
        }
        Returns: {
          reason: string
          count: number
        }[]
      }
      scheduling_analytics_recent_decline_reschedule: {
        Args: {
          recruiter_id: string
          departments?: number[]
          jobs?: string[]
        }
        Returns: {
          profile_image: string
          name: string
          note: string
          id: string
          type: Database["public"]["Enums"]["cancel_type"]
        }[]
      }
      scheduling_analytics_tabs: {
        Args: {
          recruiter_id: string
          departments?: number[]
          jobs?: string[]
        }
        Returns: {
          cancelled: number
          waiting: number
          completed: number
          confirmed: number
          not_scheduled: number
        }[]
      }
      scheduling_analytics_training_progress: {
        Args: {
          recruiter_id: string
          departments?: number[]
          jobs?: string[]
          locations?: number[]
        }
        Returns: {
          number_of_shadow: number
          noshadow: number
          number_of_reverse_shadow: number
          noreverseshadow: number
          user_id: string
          name: string
          position: string
        }[]
      }
      score_application: {
        Args: {
          scores?: Json
          parameter_weights?: Json
        }
        Returns: number
      }
      search_candidates: {
        Args: {
          recruiter_id_param: string
          name_param: string
        }
        Returns: {
          applications: Json
          candidate: Json
          job: Json
        }[]
      }
      search_members: {
        Args: {
          recruiter_id_param: string
          name_param: string
        }
        Returns: {
          member_info: Json
        }[]
      }
      secondretrybatchcalcresumejdscore: {
        Args: {}
        Returns: Json[]
      }
      set_active_rec: {
        Args: {
          in_user_id: string
          in_recruiter_id: string
        }
        Returns: boolean
      }
      swap_stage_order: {
        Args: {
          plan_id_1: string
          plan_id_2: string
        }
        Returns: undefined
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
      transfer_user_responsibilities: {
        Args: {
          suspended_user: string
          task_owner?: string
          hiring_manager?: string
          recruiter?: string
          recruiting_coordinator?: string
          sourcer?: string
        }
        Returns: undefined
      }
      update_debrief_session: {
        Args: {
          session_id: string
          session_duration: number
          break_duration: number
          location: string
          schedule_type: Database["public"]["Enums"]["interview_schedule_type"]
          name: string
          members: Json
          members_meta: Json
        }
        Returns: undefined
      }
      update_interview_session: {
        Args: {
          session_id: string
          module_id: string
          session_duration: number
          break_duration: number
          interviewer_cnt: number
          session_type: Database["public"]["Enums"]["session_type"]
          location: string
          schedule_type: Database["public"]["Enums"]["interview_schedule_type"]
          name: string
          interview_module_relation_entries: Json
          interview_plan_id: string
          session_order: number
        }
        Returns: undefined
      }
      update_meeting_status: {
        Args: {}
        Returns: undefined
      }
      update_or_delete_filter_json: {
        Args: {
          session_ids_to_remove: string[]
        }
        Returns: undefined
      }
      update_resume_score: {
        Args: {
          job_id: string
        }
        Returns: boolean
      }
      updatequestionorder: {
        Args: {
          start_point: number
          question_ids: string[]
        }
        Returns: undefined
      }
      workflow_action_log_cron: {
        Args: {}
        Returns: boolean
      }
      workflow_action_log_set_fail_cron: {
        Args: {}
        Returns: boolean
      }
    }
    Enums: {
      activity_type: "aglint" | "user" | "candidate"
      agent_type: "scheduler" | "job" | "sourcing" | "screening"
      agent_types: "scheduler" | "screening" | "job_assistant" | "sourcing"
      application_logger:
        | "email_agent"
        | "phone_agent"
        | "user"
        | "system"
        | "candidate"
      application_match:
        | "top_match"
        | "good_match"
        | "average_match"
        | "poor_match"
        | "not_a_match"
        | "unknown_match"
      application_processing_status:
        | "not started"
        | "processing"
        | "failed"
        | "success"
      application_source:
        | "ashby"
        | "lever"
        | "greenhouse"
        | "resume_upload"
        | "manual_upload"
        | "csv_upload"
        | "apply_link"
        | "candidate_database"
      assessment_mode: "classic" | "verbal" | "visual"
      cancel_type:
        | "interviewer_request_decline"
        | "candidate_request_decline"
        | "admin_cancel"
        | "candidate_request_reschedule"
      db_search_type: "aglint" | "candidate"
      email_fetch_status: "not fetched" | "success" | "unable to fetch"
      email_slack_types:
        | "interviewEnd_slack_interviewers"
        | "interviewerConfirmation_slack_interviewers"
        | "interviewStart_slack_interviewers"
        | "agent_email_candidate"
        | "applicantReject_email_applicant"
        | "applicationRecieved_email_applicant"
        | "confInterview_email_organizer"
        | "confirmInterview_email_applicant"
        | "debrief_email_interviewer"
        | "interReschedReq_email_recruiter"
        | "interviewCancel_email_applicant"
        | "InterviewCancelReq_email_recruiter"
        | "interviewReschedule_email_applicant"
        | "interviewStart_email_applicant"
        | "interviewStart_email_interviewers"
        | "phoneScreen_email_candidate"
        | "phoneScreenRemind_email_applicant"
        | "selfScheduleReminder_email_applicant"
        | "sendAvailReqReminder_email_applicant"
        | "sendSelfScheduleRequest_email_applicant"
        | "sendAvailabilityRequest_email_applicant"
        | "availabilityReqResend_email_candidate"
        | "interviewDetails_calender_interviewer"
        | "rescheduleSelfSchedule_email_applicant"
        | "interviewStart_email_organizer"
        | "meetingDeclined_email_organizer"
        | "meetingAccepted_email_organizer"
        | "candidateBook_slack_interviewerForFeedback"
        | "candidateBook_email_interviewerForFeedback"
        | "interviewEnd_slack_interviewerForFeedback"
        | "interviewEnd_email_interviewerForFeedback"
        | "candidateBook_slack_interviewerForConfirmation"
        | "onSignup_email_admin"
        | "onInvite_email_user"
        | "interviewEnd_email_shadowTraineeForMeetingAttendence"
        | "interviewEnd_email_rShadowTraineeForMeetingAttendence"
        | "interviewEnd_slack_shadowTraineeForMeetingAttendence"
        | "interviewEnd_slack_rShadowTraineeForMeetingAttendence"
        | "onQualified_email_trainee"
        | "onQualified_email_approved"
        | "onQualified_slack_trainee"
        | "onQualified_slack_approved"
        | "onTrainingComplete_slack_approverForTraineeMeetingQualification"
        | "onTrainingComplete_email_approverForTraineeMeetingQualification"
        | "interviewerResumed_email_admin"
        | "interviewEnd_slack_organizerForMeetingStatus"
        | "interviewEnd_email_organizerForMeetingStatus"
        | "onRequestSchedule_emailAgent_getCandidateAvailability"
        | "onRequestSchedule_emailLink_getCandidateAvailability"
        | "onReceivingAvailReq_agent_sendSelfScheduleRequest"
        | "onReceivingAvailReq_agent_suggestSlots"
        | "onRequestSchedule_emailLink_sendSelfSchedulingLink"
        | "onRequestSchedule_phoneAgent_selfSchedule"
        | "onRequestSchedule_emailAgent_selfSchedule"
        | "onRequestReschedule_emailLink_resendAvailRequest"
        | "onRequestCancel_agent_cancelEvents"
        | "onRequestCancel_slack_interviewersOrganizer"
        | "onRequestInterviewerDecline_agent_changeInterviewer"
      employment_type_enum: "fulltime" | "parttime" | "contractor"
      file_type: "resume" | "coverletter" | "cv" | "image"
      icon_status_activity: "success" | "waiting" | "error"
      interview_schedule_status:
        | "waiting"
        | "confirmed"
        | "completed"
        | "cancelled"
        | "reschedule"
        | "not_scheduled"
      interview_schedule_type:
        | "in_person_meeting"
        | "google_meet"
        | "phone_call"
        | "zoom"
      interviewer_type: "qualified" | "shadow" | "reverse_shadow"
      meeting_flow:
        | "self_scheduling"
        | "candidate_request"
        | "debrief"
        | "mail_agent"
        | "phone_agent"
        | "hybrid"
      modules: "standard" | "scheduler" | "assessment" | "jobs"
      permissions_type:
        | "jobs_create"
        | "jobs_read"
        | "jobs_update"
        | "jobs_delete"
        | "jobs_publish"
        | "jobs_unpublish"
        | "jobs_archive"
        | "jobs_restore"
        | "jobs_assignHiringManager"
        | "jobs_assignRecruiter"
        | "jobs_assignCoordinator"
        | "jobs_assignSourcer"
        | "candidates_add"
        | "candidates_read"
        | "candidates_update"
        | "candidates_delete"
        | "candidates_moveStage"
        | "profileScore_view"
        | "profileScore_update"
        | "interviews_schedule"
        | "interviews_read"
        | "interviews_update"
        | "interviews_delete"
        | "reports_generate"
        | "reports_view"
        | "reports_export"
        | "settings_view"
        | "settings_update"
        | "tasks_enabled"
        | "jobs_enabled"
        | "scheduler_enabled"
        | "sourcing_enabled"
        | "phone_screening_enabled"
        | "assessment_enabled"
        | "integrations_enabled"
        | "company_setting_enabled"
        | "workflow_enabled"
        | "workflow_create"
        | "workflow_read"
        | "workflow_update"
        | "workflow_delete"
        | "team_enabled"
        | "team_create"
        | "team_read"
        | "team_update"
        | "team_delete"
        | "tasks_create"
        | "tasks_read"
        | "tasks_update"
        | "tasks_delete"
        | "scheduler_create"
        | "scheduler_read"
        | "scheduler_update"
        | "scheduler_delete"
        | "scheduler_request_availability"
        | "scheduler_send_scheduling"
        | "scheduler_interview_types_create"
        | "scheduler_interview_types_read"
        | "scheduler_interview_types_update"
        | "scheduler_interviewer_edit"
        | "settings_scheduler_enable"
        | "settings_scheduler_update"
        | "settings_company_enable"
        | "settings_company_update"
        | "settings_team_enable"
        | "settings_team_update"
        | "settings_roles_enable"
        | "settings_roles_update"
      progress_type:
        | "standard"
        | "interview_schedule"
        | "email_messages"
        | "call_completed"
        | "call_failed"
        | "email_failed"
        | "call_disconnected"
        | "email_follow_up"
        | "call_follow_up"
        | "email_follow_up_reminder"
        | "call_follow_up_reminder"
        | "request_availability_list"
        | "request_availability"
        | "self_schedule"
        | "send_email"
        | "request_submitted"
        | "schedule"
        | "closed"
        | "completed"
      public_job_status: "draft" | "published" | "closed"
      public_job_type:
        | "contract"
        | "full time"
        | "part time"
        | "temporary"
        | "volunteer"
        | "internship"
      public_job_workplace: "hybrid" | "on site" | "off site"
      question_level: "basic" | "intermediate" | "advanced"
      question_type: "scq" | "mcq" | "qna" | "code"
      recruiter_rolesx:
        | "admin"
        | "member"
        | "interviewer"
        | "scheduler"
        | "recruiter"
      resume_processing_state:
        | "unavailable"
        | "fetching"
        | "processing"
        | "unparsable"
        | "processed"
        | "unscorable"
      sender_type: "aglint" | "you" | "system" | "user"
      session_accepted_status:
        | "waiting"
        | "accepted"
        | "declined"
        | "request_reschedule"
      session_type: "panel" | "individual" | "debrief"
      status_training: "qualified" | "training"
      sub_task_status:
        | "completed"
        | "pending"
        | "in_progress"
        | "failed"
        | "closed"
      task_agent_type: "phone" | "email" | "job"
      task_priority: "high" | "low" | "medium"
      task_status:
        | "pending"
        | "in_progress"
        | "completed"
        | "closed"
        | "not_started"
        | "scheduled"
        | "cancelled"
        | "overdue"
        | "on_hold"
        | "failed"
      task_type_enum:
        | "schedule"
        | "training"
        | "empty"
        | "availability"
        | "self_schedule"
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
      user_roles:
        | "admin"
        | "recruiter"
        | "interviewer"
        | "recruiting_coordinator"
        | "sourcer"
        | "hiring_manager"
      workflow_cron_run_status:
        | "not_started"
        | "processing"
        | "failed"
        | "success"
        | "stopped"
      workflow_cron_trigger_tables:
        | "interview_meeting"
        | "interview_session_relation"
        | "interview_filter_json"
        | "candidate_request_availability"
        | "interview_module_relation"
        | "interview_training_progress"
        | "request"
      workflow_phase: "before" | "after" | "now"
      workflow_trigger:
        | "selfScheduleReminder"
        | "interviewStart"
        | "sendAvailReqReminder"
        | "interviewerConfirmation"
        | "interviewEnd"
        | "meetingDeclined"
        | "meetingAccepted"
        | "candidateBook"
        | "onQualified"
        | "onTrainingComplete"
        | "onReceivingAvailReq"
        | "onRequestSchedule"
        | "onRequestCancel"
        | "onRequestReschedule"
        | "onRequestInterviewerDecline"
      workflow_type: "company" | "job" | "request"
    }
    CompositeTypes: {
      location_type: {
        city: string | null
        state: string | null
        country: string | null
      }
      my_table_type: {
        name: string | null
        age: number | null
        city: string | null
      }
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

