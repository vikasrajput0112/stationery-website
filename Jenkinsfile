pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    environment {
        IMAGE = "stationery-app:latest"
        CONTAINER = "stationery-container"
        PORT = "8054"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/vikasrajput0112/stationery-website.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE .'
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                sh '''
                docker stop $CONTAINER || true
                docker rm $CONTAINER || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker run -d -p $PORT:80 --name $CONTAINER $IMAGE
                '''
            }
        }

        stage('Verify') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
