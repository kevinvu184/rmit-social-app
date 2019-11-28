# Instruction
## Metadata
- Cloud SQL username: root
- Cloud SQL password: N/A
- Cloud SQL IP: 35.197.175.204
- spring.datasource.username=springuser
- spring.datasource.password=ThePassword
## Demo
### Front-end, Back-end, Database, connection
- s1: Add local IP to database whitelist -> so the backend service can connect the database
- s2: Activate the Spring Boot application
- s3: Open google chrome with disable-web-security (This step exist because the CROS security issues, will be fix in sprint 3)


`chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security`

- s4 Access application through 
 
http://jkky-sept2019-01.appspot.com/

### Open SQL Client 
- s1: Change gcloud project (optional) 
	
  `sdk -> gcloud config set project jkky-sept2019-01`
- s2: Connect to databases:
	
  `sdk -> gcloud sql connect myinstance --user=root` 
  
  `use db_example;`
  
  `select * from todo;`
  
### Open DBeaver SQL Client (Optional)
- s1: change gcloud project (optional) 
	
  cloud sdk -> `gcloud config set project jkky-sept2019-01`
  
- s2: Open proxy
	
  bash.exe -> `./cloud_sql_proxy -instances=jkky-sept2019-01:australia-southeast1:myinstance=tcp:3307`

- s3: Connect to DBeaver
  
  Change port to 3307
  
  Cloud SQL username: 'root'
  
  Cloud SQL password: '' (Blank)
  
# To-do
- [✔] Local MySQL Database
- [✔] Cloud MySQL Database
- [✔] Deploy front end to GAE
- [  ] Deploy back end to GAE
