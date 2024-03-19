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
-d '{"email": "i211682@nu.edu.pk", "password": "password123"}' \
http://51.142.184.185:6001/register

ACCESS_TOKEN=$(curl -X POST -H "Content-Type: application/json" -d '{"email": "i211682@nu.edu.pk", "password": "password123"}' http://51.142.184.185:6001/login | jq -r '.token')

curl -X GET \
-H "Authorization: Bearer $ACCESS_TOKEN" \
http://51.142.184.185:6001/check_token_status

curl -X GET 'http://51.142.184.185:6001/search?Name=<name>&ClassOf=<class_of>&Program=<program>&Skills=<skills>&Minor=<minor>&Achievements=<achievements>&ProjectTitle=<project_title>&Interest=<interest>'

curl -X GET 'http://51.142.184.185:6001/retrieve-info?user_id=<user_id>'

curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"skill_name": "<skill_name>"}' http://51.142.184.185:6001/skills

curl -X PATCH -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"skill_name": "<new_skill_name>"}' http://51.142.184.185:6001/skills/<skill_id>

curl -X DELETE -H "Authorization: Bearer <access_token>" http://51.142.184.185:6001/skills/<skill_id>

curl -X GET http://51.142.184.185:6001/skills

curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"skill_name": "<skill_name>"}' http://51.142.184.185:6001/user/skills

curl -X PATCH -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"skill_name": "<new_skill_name>"}' http://51.142.184.185:6001/user/skills/<user_skill_id>

curl -X DELETE -H "Authorization: Bearer <access_token>" http://51.142.184.185:6001/user/skills/<user_skill_id>

curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $ACCESS_TOKEN" -d '{"full_name": "Maemoon Farooq", "profile_picture_url": "link.com", "major": "CS", "minor": "CYS", "graduation_year": "2025", "aspiration_statement": "i am a perfectionist ", "linkedin_url": "link.com", "resume_url": "link.com"}' http://51.142.184.185:6001/profile

curl -X PATCH -H "Content-Type: application/json" -H "Authorization: Bearer $ACCESS_TOKEN" -d '{"full_name": "Asad", "profile_picture_url": "link.com", "major": "CS", "minor": "CYS", "graduation_year": "2025", "aspiration_statement": "i am the best ui/ux dev", "linkedin_url": "link.com", "resume_url": "link.com"}' http://51.142.184.185:6001/profile

curl -X DELETE -H "Authorization: Bearer <access_token>" http://51.142.184.185:6001/profile

curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"title": "<title>", "description": "<description>", "date_achieved": "<date_achieved>"}' http://51.142.184.185:6001/achievements

curl -X PATCH -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"title": "<title>", "description": "<description>", "date_achieved": "<date_achieved>"}' http://51.142.184.185:6001/achievements/<achievement_id>

curl -X DELETE -H "Authorization: Bearer <access_token>" http://51.142.184.185:6001/achievements/<achievement_id>

curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"title": "<title>", "description": "<description>", "start_date": "<start_date>", "end_date": "<end_date>", "project_url": "<project_url>", "images": "<images>"}' http://51.142.184.185:6001/final-year-project

curl -X PATCH -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" -d '{"title": "<title>", "description": "<description>", "start_date": "<start_date>", "end_date": "<end_date>", "project_url": "<project_url>", "images": "<images>"}' http://51.142.184.185:6001/final-year-project/<project_id>

curl -X DELETE -H "Authorization: Bearer <access_token>" http://51.142.184.185:6001/final-year-project/<project_id>

curl -X POST http://51.142.184.185:6001/user/experiences \
-H "Authorization: Bearer $ACCESS_TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "title": "Full Stack Developer",
    "description": "Developing full stack application for a startup company",
    "start_date": "2022-05-01",
    "end_date": "2022-05-03"
}'


curl -X PATCH http://51.142.184.185:6001/user/experiences/<experience_id> \
-H "Authorization: Bearer $ACCESS_TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "title": "Updated Title",
    "description": "Updated description",
    "start_date": "2022-01-01",
    "end_date": "2022-06-30"
}'

curl -X GET http://51.142.184.185:6001/user/experiences \
-H "Authorization: Bearer $ACCESS_TOKEN"


curl -X DELETE http://51.142.184.185:6001/user/experiences/<experience_id> \
-H "Authorization: Bearer $ACCESS_TOKEN"

```
```