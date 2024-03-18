CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE profiles (
    user_id INTEGER PRIMARY KEY REFERENCES users(id),
    full_name VARCHAR(255) NOT NULL,
    profile_picture_url TEXT,
    major VARCHAR(255),
    minor VARCHAR(255),
    graduation_year INTEGER,
    aspiration_statement TEXT,
    linkedin_url TEXT,
    resume_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    skill_name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE user_skills (
    user_id INTEGER REFERENCES users(id),
    skill_id INTEGER REFERENCES skills(id),
    PRIMARY KEY (user_id, skill_id)
);

CREATE TABLE achievements (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    date_achieved DATE
);

CREATE TABLE activity_logs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id), -- (not necessary, since search can be done without login as well)
    activity_description TEXT,
    activity_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE final_year_projects (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    start_date TIMESTAMP WITH TIME ZONE,
    end_date TIMESTAMP WITH TIME ZONE,
    project_url TEXT,
    images TEXT[] -- Array of image URLs
);
