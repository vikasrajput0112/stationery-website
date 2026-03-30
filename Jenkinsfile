pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/YOUR_GITHUB_USERNAME/stationery-website.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t stationery-app:latest .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 8080:80 stationery-app:latest'
            }
        }
    }
}
