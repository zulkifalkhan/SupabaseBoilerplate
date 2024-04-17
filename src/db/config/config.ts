import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

//Supabase config

config();

const supabaseUrl = process.env.SUPABASEURL;
const supabaseAnonKey = process.env.SUPABASEANONKEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
