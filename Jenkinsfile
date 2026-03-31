pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    environment {
        IMAGE_NAME = "stationery-app"
        VERSION = "v1.0"
        CONTAINER_NAME = "stationery-container"
        PORT = "8054"
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
                    def TIMESTAMP = sh(script: "date +%Y%m%d%H%M%S", returnStdout: true).trim()
                    def IMAGE_TAG = "${VERSION}-${TIMESTAMP}"
                    env.FULL_IMAGE = "${IMAGE_NAME}:${IMAGE_TAG}"

                    echo "🚀 Generated Image: ${env.FULL_IMAGE}"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                echo "📦 Building Image: $FULL_IMAGE"
                docker build --no-cache -t $FULL_IMAGE .
                docker tag $FULL_IMAGE $IMAGE_NAME:latest
                '''
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                echo "🚀 Running Container with Image: $FULL_IMAGE"
                docker run -d -p $PORT:80 --name $CONTAINER_NAME $FULL_IMAGE
                '''
            }
        }

        stage('Verify') {
            steps {
                sh '''
                echo "📋 Running Containers:"
                docker ps

                echo "🔍 Image used by container:"
                docker inspect $CONTAINER_NAME | grep Image
                '''
            }
        }

        stage('Cleanup Dangling Images') {
            steps {
                sh '''
                echo "🧹 Cleaning dangling images..."
                docker image prune -f
                '''
            }
        }

        stage('Keep Only Latest 3 Images') {
            steps {
                sh '''
                echo "🧹 Keeping only latest 5 images..."

                # Get images sorted by creation date (newest first)
                IMAGES=$(docker images $IMAGE_NAME --format "{{.ID}}" | uniq)

                COUNT=0

                for IMG in $IMAGES
                do
                  COUNT=$((COUNT+1))

                  if [ $COUNT -gt 5 ]; then
                    echo "Deleting old image: $IMG"
                    docker rmi -f $IMG || true
                  fi
                done
                '''
            }
        }
    }
}
