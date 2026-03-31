pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    environment {
        IMAGE_NAME = "vikasrajput0112/stationery-app"
        VERSION = "v1.0"
        DOCKER_CREDENTIALS = "dockerhub-creds"   // create in Jenkins
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

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: "$DOCKER_CREDENTIALS", usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                }
            }
        }

        stage('Push Image') {
            steps {
                sh '''
                echo "📤 Pushing Image..."
                docker push $FULL_IMAGE
                docker push $IMAGE_NAME:latest
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                echo "🚀 Deploying to Kubernetes..."

                # Update image in deployment dynamically
                kubectl set image deployment/stationery-deployment \
                stationery-container=$FULL_IMAGE

                # Apply configs (if first time)
                kubectl apply -f k8s/deployment.yaml
                kubectl apply -f k8s/service.yaml
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                kubectl get pods
                kubectl get svc
                '''
            }
        }

        stage('Cleanup Dangling Images') {
            steps {
                sh 'docker image prune -f'
            }
        }

        stage('Keep Only Latest 2 Images') {
            steps {
                sh '''
                echo "🧹 Keeping only latest 2 images..."

                IMAGES=$(docker images $IMAGE_NAME --format "{{.ID}}" | uniq)

                COUNT=0

                for IMG in $IMAGES
                do
                  COUNT=$((COUNT+1))

                  if [ $COUNT -gt 2 ]; then
                    docker rmi -f $IMG || true
                  fi
                done
                '''
            }
        }
    }
}
