pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    environment {
        IMAGE_NAME = "stationery-app"
        VERSION = "v1.0"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/vikasrajput0112/stationery-website.git'
            }
        }

        stage('Generate Tag') {
            steps {
                script {
                    TIMESTAMP = sh(script: "date +%Y%m%d%H%M%S", returnStdout: true).trim()
                    IMAGE_TAG = "${VERSION}-${TIMESTAMP}"
                    FULL_IMAGE = "${IMAGE_NAME}:${IMAGE_TAG}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $FULL_IMAGE .'
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                sh '''
                docker stop stationery-container || true
                docker rm stationery-container || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker run -d -p 8054:80 --name stationery-container $FULL_IMAGE
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
