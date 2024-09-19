pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn run build'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }
        stage('Deploy') {
            steps {
                // Example: SCP files to your server or deploy using a service
                sh 'scp -r dist/* user@your-server:/var/www/frontend-project-1'
            }
        }
    }
}
