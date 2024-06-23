A Phonebook application made with React with features to add contacts, delete and view contact info.
The application is containerized using docker to provide portability.
Simply pull these files and hit docker build and docker run and the application should start running at localhost:80
Follow these steps:
1. Clone the repository to local machine
2. make sure you have docker installed and docker engine running on you machine
3. enter the command: docker build -t image_name .
4. enter the command: docker run -p 80:80 image_name
5. open the web browser and go to https://localhost:80
6. the application should be running

PS: the '.' at the end of step 3 is intentional and is a part of the command.
