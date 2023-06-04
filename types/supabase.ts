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
          description: string
          image: string
          language: string
          price_id: string
          publisher: string
          ratings: string
        }
        Insert: {
          author_name: string
          available_for: Database["public"]["Enums"]["available_for"]
          book_id?: string
          book_name: string
          book_type: Database["public"]["Enums"]["book_type"]
          description: string
          image: string
          language: string
          price_id: string
          publisher: string
          ratings: string
        }
        Update: {
          author_name?: string
          available_for?: Database["public"]["Enums"]["available_for"]
          book_id?: string
          book_name?: string
          book_type?: Database["public"]["Enums"]["book_type"]
          description?: string
          image?: string
          language?: string
          price_id?: string
          publisher?: string
          ratings?: string
        }
      }
      category: {
        Row: {
          book_id: string
          category_id: string
          category_name: string
          related_to: Database["public"]["Enums"]["related_to"]
        }
        Insert: {
          book_id: string
          category_id?: string
          category_name: string
          related_to: Database["public"]["Enums"]["related_to"]
        }
        Update: {
          book_id?: string
          category_id?: string
          category_name?: string
          related_to?: Database["public"]["Enums"]["related_to"]
        }
      }
      events: {
        Row: {
          duration: string
          event_id: string
          location_id: string
          name: string
          organiser_details_id: string
        }
        Insert: {
          duration: string
          event_id?: string
          location_id: string
          name: string
          organiser_details_id: string
        }
        Update: {
          duration?: string
          event_id?: string
          location_id?: string
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
      location: {
        Row: {
          city: string
          country: string
          image: string
          loc_address: string
          loc_id: string
          state: string
        }
        Insert: {
          city: string
          country: string
          image: string
          loc_address: string
          loc_id?: string
          state: string
        }
        Update: {
          city?: string
          country?: string
          image?: string
          loc_address?: string
          loc_id?: string
          state?: string
        }
      }
      order: {
        Row: {
          address_id: string
          order_date: string
          order_id: string
          payment_id: string
          status: Database["public"]["Enums"]["status"]
        }
        Insert: {
          address_id: string
          order_date: string
          order_id?: string
          payment_id: string
          status: Database["public"]["Enums"]["status"]
        }
        Update: {
          address_id?: string
          order_date?: string
          order_id?: string
          payment_id?: string
          status?: Database["public"]["Enums"]["status"]
        }
      }
      payment: {
        Row: {
          payment_date: string
          payment_id: string
          payment_type: Database["public"]["Enums"]["payment_type"]
          price: number
        }
        Insert: {
          payment_date: string
          payment_id?: string
          payment_type: Database["public"]["Enums"]["payment_type"]
          price: number
        }
        Update: {
          payment_date?: string
          payment_id?: string
          payment_type?: Database["public"]["Enums"]["payment_type"]
          price?: number
        }
      }
      price_details: {
        Row: {
          actual_price: number
          discount: number
          price_id: string
          selling_price: number
        }
        Insert: {
          actual_price: number
          discount: number
          price_id?: string
          selling_price: number
        }
        Update: {
          actual_price?: number
          discount?: number
          price_id?: string
          selling_price?: number
        }
      }
      rating: {
        Row: {
          book_id: string
          rating_id: string
          rating_value: number
          user_id: string
        }
        Insert: {
          book_id: string
          rating_id?: string
          rating_value: number
          user_id: string
        }
        Update: {
          book_id?: string
          rating_id?: string
          rating_value?: number
          user_id?: string
        }
      }
      readlist: {
        Row: {
          book_id: string
          book_name: string
          description: string
          id: string
          name: string
          user_id: string
        }
        Insert: {
          book_id: string
          book_name: string
          description: string
          id?: string
          name: string
          user_id: string
        }
        Update: {
          book_id?: string
          book_name?: string
          description?: string
          id?: string
          name?: string
          user_id?: string
        }
      }
      user: {
        Row: {
          address_id: string
          mail_id: string
          password: string
          ph_no: string
          profile_image: string
          user_id: string
          username: string
        }
        Insert: {
          address_id: string
          mail_id: string
          password: string
          ph_no: string
          profile_image: string
          user_id?: string
          username: string
        }
        Update: {
          address_id?: string
          mail_id?: string
          password?: string
          ph_no?: string
          profile_image?: string
          user_id?: string
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
      available_for: "SELL" | "RENT"
      book_type: "OLD" | "NEW"
      payment_type: "CASH" | "UPI" | "NET_BANKING" | "CREDIT_OR_DEBIT_CARD"
      related_to: "FRICTION" | "NON_FRICTION"
      status: "PENDING" | "DISPATCHED" | "READY_FOR_DELIVERY" | "DELIVERED"
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

