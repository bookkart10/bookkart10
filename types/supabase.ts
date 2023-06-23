export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      account: {
        Row: {
          access_token: string | null
          expires_at: number | null
          id: string
          id_token: string | null
          provider: string
          providerAccountId: string
          refresh_token: string | null
          scope: string | null
          session_state: string | null
          token_type: string | null
          type: string
          userId: string
        }
        Insert: {
          access_token?: string | null
          expires_at?: number | null
          id?: string
          id_token?: string | null
          provider: string
          providerAccountId: string
          refresh_token?: string | null
          scope?: string | null
          session_state?: string | null
          token_type?: string | null
          type: string
          userId: string
        }
        Update: {
          access_token?: string | null
          expires_at?: number | null
          id?: string
          id_token?: string | null
          provider?: string
          providerAccountId?: string
          refresh_token?: string | null
          scope?: string | null
          session_state?: string | null
          token_type?: string | null
          type?: string
          userId?: string
        }
      }
      address: {
        Row: {
          address_id: string
          area_and_street: string
          city_or_town: string
          landmark: string
          pincode: number
          state: string
        }
        Insert: {
          address_id?: string
          area_and_street: string
          city_or_town: string
          landmark: string
          pincode: number
          state: string
        }
        Update: {
          address_id?: string
          area_and_street?: string
          city_or_town?: string
          landmark?: string
          pincode?: number
          state?: string
        }
      }
      books: {
        Row: {
          author_name: string
          available_for: Database["public"]["Enums"]["available_for"]
          book_id: string
          book_name: string
          book_type: Database["public"]["Enums"]["book_type"]
          categories: string[] | null
          description: string
          image: string
          language: string
          price: number
          publisher: string
          userId: string | null
        }
        Insert: {
          author_name: string
          available_for?: Database["public"]["Enums"]["available_for"]
          book_id?: string
          book_name: string
          book_type: Database["public"]["Enums"]["book_type"]
          categories?: string[] | null
          description: string
          image: string
          language: string
          price: number
          publisher: string
          userId?: string | null
        }
        Update: {
          author_name?: string
          available_for?: Database["public"]["Enums"]["available_for"]
          book_id?: string
          book_name?: string
          book_type?: Database["public"]["Enums"]["book_type"]
          categories?: string[] | null
          description?: string
          image?: string
          language?: string
          price?: number
          publisher?: string
          userId?: string | null
        }
      }
      cart: {
        Row: {
          books_id: string | null
          id: string
          userId: string | null
        }
        Insert: {
          books_id?: string | null
          id?: string
          userId?: string | null
        }
        Update: {
          books_id?: string | null
          id?: string
          userId?: string | null
        }
      }
      events: {
        Row: {
          duration: string
          event_id: string
          location: string
          name: string
          organiser_details_id: string
        }
        Insert: {
          duration: string
          event_id?: string
          location: string
          name: string
          organiser_details_id: string
        }
        Update: {
          duration?: string
          event_id?: string
          location?: string
          name?: string
          organiser_details_id?: string
        }
      }
      events_org_details: {
        Row: {
          mail_id: string
          name: string
          organiser_details_id: string
          ph_no: string
        }
        Insert: {
          mail_id: string
          name: string
          organiser_details_id?: string
          ph_no: string
        }
        Update: {
          mail_id?: string
          name?: string
          organiser_details_id?: string
          ph_no?: string
        }
      }
      session: {
        Row: {
          expires: string
          id: string
          sessionToken: string
          userId: string
        }
        Insert: {
          expires: string
          id?: string
          sessionToken: string
          userId: string
        }
        Update: {
          expires?: string
          id?: string
          sessionToken?: string
          userId?: string
        }
      }
      user: {
        Row: {
          addressAddress_id: string | null
          id: string
          mail_id: string
          password: string
          ph_no: string | null
          profile_image: string | null
          username: string
        }
        Insert: {
          addressAddress_id?: string | null
          id?: string
          mail_id: string
          password: string
          ph_no?: string | null
          profile_image?: string | null
          username: string
        }
        Update: {
          addressAddress_id?: string | null
          id?: string
          mail_id?: string
          password?: string
          ph_no?: string | null
          profile_image?: string | null
          username?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      available_for: "SALE" | "RENT"
      book_type: "OLD" | "NEW"
      related_to: "FICTION" | "NON_FICTION"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

