def COLOR_MAP = [
    'SUCCESS':'good',
    'FAILURE':'danger'
]
pipeline{
    agent any
    stages{
        stage('Fetch GitHUb'){
            steps{
                git 'https://github.com/masterghost2002/CI_CD_JENKINS_REACT.git'
            }
        }
        stage('Build Image'){
            steps{
                dir('client/'){
                    sh 'docker build -t clientimage:latest .'
                }
            }
        }
        stage('Deploy Container'){
            steps{
                sh '''
                    if docker ps -a | grep -q clientcontainer;
                    then
                        docker stop clientcontainer && docker rm -f clientcontainer
                    fi
                '''
                sh 'docker run -d -p 80:80 --name clientcontainer clientimage:latest'
            }
        }
    }
    post{
        always{
            echo "Slack Notification"
            slackSend channel:'devopscicd',
                color: COLOR_MAP[currentBuild.currentResult],
                message:"Build Started - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        }
    }
}