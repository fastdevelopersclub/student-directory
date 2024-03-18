# To run all containers:
```
docker-compose up -d
```

# To take all containers down:
```
docker-compose down
```

# To take all containers down plus volumes:
```
docker-compose down -v
```

# DB Endpoints:
```
curl -X POST \
-H "Content-Type: application/json" \
-d '{"email": "example@example.com", "password": "password123"}' \
http://localhost:6001/register

ACCESS_TOKEN=$(curl -X POST -H "Content-Type: application/json" -d '{"email": "example@example.com", "password": "password123"}' http://localhost:6001/login | jq -r '.token')

curl -X GET \
-H "Authorization: Bearer $ACCESS_TOKEN" \
http://localhost:6001/check_token_status

curl -X GET 'http://localhost:6001/search?Name=<name>&ClassOf=<class_of>&Program=<program>&Skills=<skills>&Minor=<minor>&Achievements=<achievements>&ProjectTitle=<project_title>&Interest=<interest>'

curl -X GET 'http://localhost:6001/retrieve-info?user_id=<user_id>'

curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"skill_name": "<skill_name>"}' http://localhost:6001/skills

curl -X PATCH -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"skill_name": "<new_skill_name>"}' http://localhost:6001/skills/<skill_id>

curl -X DELETE -H "Authorization: Bearer <access_token>" http://localhost:6001/skills/<skill_id>

curl -X GET http://localhost:6001/skills

curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"skill_name": "<skill_name>"}' http://localhost:6001/user/skills

curl -X PATCH -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"skill_name": "<new_skill_name>"}' http://localhost:6001/user/skills/<user_skill_id>

curl -X DELETE -H "Authorization: Bearer <access_token>" http://localhost:6001/user/skills/<user_skill_id>

curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"full_name": "<full_name>", "profile_picture_url": "<profile_picture_url>", "major": "<major>", "minor": "<minor>", "graduation_year": "<graduation_year>", "aspiration_statement": "<aspiration_statement>", "linkedin_url": "<linkedin_url>", "resume_url": "<resume_url>"}' http://localhost:6001/profile

curl -X PATCH -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"full_name": "<full_name>", "profile_picture_url": "<profile_picture_url>", "major": "<major>", "minor": "<minor>", "graduation_year": "<graduation_year>", "aspiration_statement": "<aspiration_statement>", "linkedin_url": "<linkedin_url>", "resume_url": "<resume_url>"}' http://localhost:6001/profile

curl -X DELETE -H "Authorization: Bearer <access_token>" http://localhost:6001/profile

curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"title": "<title>", "description": "<description>", "date_achieved": "<date_achieved>"}' http://localhost:6001/achievements

curl -X PATCH -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"title": "<title>", "description": "<description>", "date_achieved": "<date_achieved>"}' http://localhost:6001/achievements/<achievement_id>

curl -X DELETE -H "Authorization: Bearer <access_token>" http://localhost:6001/achievements/<achievement_id>

curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"title": "<title>", "description": "<description>", "start_date": "<start_date>", "end_date": "<end_date>", "project_url": "<project_url>", "images": "<images>"}' http://localhost:6001/final-year-project

curl -X PATCH -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"title": "<title>", "description": "<description>", "start_date": "<start_date>", "end_date": "<end_date>", "project_url": "<project_url>", "images": "<images>"}' http://localhost:6001/final-year-project/<project_id>

curl -X DELETE -H "Authorization: Bearer <access_token>" http://localhost:6001/final-year-project/<project_id>
```