# MovieDB-FullStack-Movie-Application 

This is a cross MERN (MongoDB, Express, React, NodeJS) - React - Java - SpringBoot - PostgreSQL SQL Web Movie Streaming Application. 
This application is made with React on the Front End 
The application uses 2 backends:
One is a NodeJS Server that uses Express Frameworks and connects to a MongoDB Database using the Mongoose package. 
The second backend is a Java - Spring Boot server that uses Hibernate to manage a PostgreSQL database. 

Some of the functionalities of the application are handled by the Java backend, such as Authentication and Authorization, which are done using JWT and Spring Security, as well as user roles, contacts ... Etc 
Other functionalities are handled by the NodeJS backend. Mainly the rating system that shows how many users rated a specific movies and what are their comments. 
The main functionnality which is storing and showing movie information is handled by both the Java and NodeJS backend. 
For instance part of the information of a movie are stored in the MongoDB Database, other parts are stored in PostgreSQL. 
Therefore to fetch the full information of a movie, an API call must be made to the NodeJS backend, then inside the first API call another API call must be made to the Java backend. 
Finally the returned results will be aggregated in one object before being passed to the page to be rendered nicely and accurately. 

This is a mock application, when the user clicks on a movie they will only be able to see the youtube trial of said movie, but you might easily adjust it to your needs if you 
run a movie streaming business. 

---------------------------------

# How to deploy locally : 

Requirements: 
1 - NodeJS and NPM 
2 - Java
3 - MongoDB 
4 - PostgreSQL

After you made sure that you have NodeJS, Java, MongoDB and PostgreSQL installed on your local machine. 
1 - Create a new database in PGSQL and name it "moviedb", then import the PGSQL dump in the git repository under dumps/
2 - Create a MongoDB database called "moviedb", either create 2 collections: movieinformation and movieratings, import the data in dumps/mongodb to each of the collections. 
3 - Open the directory where your application is in the terminal and navigate to /servernode . After that type: npm install && run index.js (Make sure your mongodb server is running) 
4 - Navigate to /serverjava in your terminal and run the file moviedb-0.0.1-SNAPSHOT.jar by using: java -jar moviedb-0.0.1-SNAPSHOT.jar 
5 - Navigate to client directory /client and create a .env.local file and put in it the following: 
    REACT_APP_APIJAVA_URL=http://localhost:8080
    REACT_APP_APINODE_URL=http://localhost:5000/api
5 - Navigate to the client directory /client and run : npm start 

That's it, your default browser should start and now you should be able to use the application. 

# How to deploy on an AWS EC2 AlmaLinux instance: 

AlmaLinux is just a prefered choice since it is the best substitute to CentOS, but you can use any Linux distribution as long as you know how install the requirements. 

1 - Go to AWS and create a new EC2 Instance, choose AlmaLinux 
2 - Define storage and other details ... For security groups, add the following TCP ports: 
  80 : For Apache
  5000 : For NodeJS
  8080 : For TomCat 
  5432 : For PostgreSQL
  27001 : For MongoDB (You might also use MongoDB Atlas which gives you a MongoDB cluster hosted by MongoDB itself, without having to install anything) 
  PS : Do not forget to add the Ports to the inbound roules in your instance security group, otherwise the application won't work. 
3 - Download a new key for AWS if you don't already have one 
4 - After your EC2 instance is initialized, use an SSH client to access your server. I recommend BitVise as it is simpler to use and has a lot of options.  
5 - You will only be able to login as an ec2-user to your server which is a security measure. But once you log in you can type "sudo bash" to become root. 
6 - If you want to use the SFTP function of BitVise to easily upload, edit and delete files you have to have root access, sadly this can't be done with the default ec2-user account, 
and you can't login as root either. But, you can change that and make your server accept root login, but make sure to disable it after you've finished your work. 
To enable root login, log in as ec2-user, then open /etc/ssh/sshd_config with your favorite editor, either vi which is preinstalled or nano, which you'll need to install. 
After you open the file on the terminal search for line PermitRootLogin, uncomment it and make sure it says "PermitRootLogin yes"
In the file you can also enable password authentication which is disabled, but it is not recommended as that would put your server in risk. 
Edit the file and save it, then restart ssh by : systemctl restart sshd 
7 - You need a package manager for AlmaLinux, dnf is not installed by default so you need to install it with yum : 
  yum install dnf 
8 - Verify installation by: dnf --version 
9 - Update dnf: dnf update
10 - Install zip : dnf install zip 
11 - Install NodeJS: dnf install nodejs
12 - Verify installation: node --version 
13 - Install PostgreSQL : dnf install postgresql-server
14 - Initialize PGSQL db : postgresql-setup initdb 
15 - Start PGSQL: systemctl start postgresql.service
16 - Check if it's running: systemctl status postgresql.service 
17 - Make sure PGSQL starts whenver your server starts: systemctl enable postgresql.service
18 - Change user from root to postgres to be able to use psql : su - postgres 
19 - type: psql 
20 - Set a password for the user postgres, this password must be the same one used in the jar file which is: 'Ak47!!!!****' , The command is: 
     ALTER USER postgres WITH PASSWORD 'Ak47!!!!****';
21 - Create the moviedb database: CREATE DATABASE moviedb; 
     PS : make sure you terminate your queries with a semicolon otherwise it's considered as a new line.
23 - Create a new directory where you will put your application files (I recommend creating it in /var/) mkdir /var/applicationdata
24 - Upload the postgresql dump (moviedbpg.sql) to your server using BitVise SFTP to the /var/applicationdata directory on your server 
25 - Import (Resotre) the database by typing: psql -U postgres -d moviedb -f /var/applicationdata/moviedbpg.sql
26 - Now you need to edit some PostgreSQL configuration files to control access to the database, navigate to : var/lib/pgsql/data 
27 - Open pg_hba.conf and make sure you have the following line at the end : 
  local   all             postgres                                md5
28 - Save and open postgresql.conf and do the following: 
  28-1 : Uncomment: listen_addresses = 'localhost'
  28-2 : Uncomment: port = 5432 
  28-3 : Max connections > either keep default or change it to however many connections you think your server can handle at a time: max_connections = 100
29 - Save and restart pogstgreSQL: systemctl restart postgresql.service 
30 - Install MongoDB ( I used MongoDB Atlas and didn't install it the server, I'll update this manual later to talk about how to install it) 
31 - Install Java version 11 > dnf install java-11-openjdk 
32 - Check installation by : java -version 
33 - Upload moviedb-0.0.1-SNAPSHOT.jar to /var/applicationdata 
34 - Run the jar: java -jar /var/applicationdata/moviedb-0.0.1-SNAPSHOT.jar 
  Congratulations, now your Java backend is ready for action! 
35 - Now take the nodeserver from the repository and upload it to /var/applicationdata (It's better to upload it as a zip file and then unzip it once uploded uzing unzip file command) 
36 - Once unzipped, open a new terminal and type: npm run /var/applicationdata/servernode/index.js 
  (PS, at this stage you need to have already correctly configured your mongodb server) 
  That's it, your Node backend is running now as well and all that is left is the front end! 
37 - Go to your local machine to the repository you download and open moviedb/client folder. locate the .env.local file and change "localhost" with the IP address/domain name 
of your production server. 
38 - Open a terminal and cd to the same folder, then run > npm run build 
  This will generate a build for your front end application ready to be deployed. 
39 - Now we have a running web server for our Java backend (TomCat), a running webserver for our NodeJS backend (express). We need one for our front-end, you can use 
whatever you like but I prefer Apache. 
40 - Install httpd, by : dnf install httpd 
41 - Start it : systemctl start httpd
42 - Check if it's running: systemctl status httpd
43 - Make sure it's enabled on boot: systemctl enable httpd 
  43 - 1 : By default apache web server listens on port 80. Just to make sure navigate to etc/http and open the httpd.conf file, make sure "listen 80" is not commented 
  43 - 2 : That's it, now go to the browser and type the IP address/hostname of your server and you should see an apache welcome page. 
  43 - 3 : By default the apache root folder is /var/www/html, that is where your front end application files should be. 
    Notice : You can change that route, create multiple routes, make different domains/subdomains take to different folders in just one web server, using <VirtualHost> 
    But we don't need that for now. 
44 - Upload the react client build.zip to /var/www/html, cd into that folder with the SSH terminal and run unzip build.zip (This will unzip all the files in the same place) 
45 - That's it, now you should be able to access your application through the IP/Hostname and enjoy a multi-backend movie streaming applications. 

# Notices and future development: 
1 - This application is not yet totally finished nor is it thoroughly tested, updates will be made in this repository 
2 - I will add the API Gateway Zuul by Netflix to the application in the next version 
3 - User roles are not yet functional and so far there is only 1 Role which is a user 
4 - Add Movie has been granted to normal users for testing purposes, this will be a feature for admins only in the future. 
Stay tuned and happy streaming ;) 


  

