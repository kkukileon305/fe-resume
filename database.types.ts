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
      educations: {
        Row: {
          created_at: string
          date: string | null
          desc: string | null
          id: number
          resume_id: number | null
          title: string | null
        }
        Insert: {
          created_at?: string
          date?: string | null
          desc?: string | null
          id?: number
          resume_id?: number | null
          title?: string | null
        }
        Update: {
          created_at?: string
          date?: string | null
          desc?: string | null
          id?: number
          resume_id?: number | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "educations_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "resumes"
            referencedColumns: ["id"]
          },
        ]
      }
      portfolios: {
        Row: {
          created_at: string
          id: number
          resume_id: number | null
          title: string | null
          url: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          resume_id?: number | null
          title?: string | null
          url?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          resume_id?: number | null
          title?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "portfolios_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "resumes"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          created_at: string
          date: string | null
          deploy_url: string | null
          github_url: string | null
          head_count: string | null
          id: number
          introduce: string | null
          issues: Json[] | null
          resume_id: number | null
          team_name: string | null
          tech_stacks: string[] | null
          title: string | null
        }
        Insert: {
          created_at?: string
          date?: string | null
          deploy_url?: string | null
          github_url?: string | null
          head_count?: string | null
          id?: number
          introduce?: string | null
          issues?: Json[] | null
          resume_id?: number | null
          team_name?: string | null
          tech_stacks?: string[] | null
          title?: string | null
        }
        Update: {
          created_at?: string
          date?: string | null
          deploy_url?: string | null
          github_url?: string | null
          head_count?: string | null
          id?: number
          introduce?: string | null
          issues?: Json[] | null
          resume_id?: number | null
          team_name?: string | null
          tech_stacks?: string[] | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "resumes"
            referencedColumns: ["id"]
          },
        ]
      }
      resumes: {
        Row: {
          created_at: string
          email: string | null
          github: string | null
          id: number
          image: Json | null
          introduce: string | null
          introduce_detail: string | null
          name: string | null
          phone_number: string | null
          position: string | null
          stacks: string[] | null
          view_count: number | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          github?: string | null
          id?: number
          image?: Json | null
          introduce?: string | null
          introduce_detail?: string | null
          name?: string | null
          phone_number?: string | null
          position?: string | null
          stacks?: string[] | null
          view_count?: number | null
        }
        Update: {
          created_at?: string
          email?: string | null
          github?: string | null
          id?: number
          image?: Json | null
          introduce?: string | null
          introduce_detail?: string | null
          name?: string | null
          phone_number?: string | null
          position?: string | null
          stacks?: string[] | null
          view_count?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
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

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
