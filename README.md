# Supabase Boilerplate
This code includes Supabase CRUD with a generic folder strucutre and also includes Supabase Auth

# Env required to run this app

SUPABASEURL=

SUPABASEANONKEY=

You can get them by creating a Supabase account and create your own project.

# Running the app

npm install

and 

npm run start

# Routes

"localhost:3000/auth"; // Mount authRouter under the /auth path

"localhost:3000/api/users",  // Mount userRouter under the /users path

"localhost:3000/api/plans", // Mount userRouter under the /plans path

# Supabase config

If you need to update and review how supabase connection works then redirect to src/db/config folder

# Supabase queries

If you want to see how the Supabase queries work then redirect to src/db/repositories/* and in those files you will see how Supabase queries work.
