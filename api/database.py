import os
from supabase import create_client, Client

SUPABASE_URL = os.environ.get("SUPABASE_URL", "")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY", "")


def get_supabase_client() -> Client | None:
    """
    Creates and returns a Supabase client.
    Returns None if credentials are not configured.
    """
    if not SUPABASE_URL or not SUPABASE_KEY:
        print("⚠️  Supabase credentials not configured. Using fallback data.")
        return None
    return create_client(SUPABASE_URL, SUPABASE_KEY)


supabase = get_supabase_client()
