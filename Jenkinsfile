pipeline {
  agent any

  environment {
    NODE_ENV = "production"
  }

  stages {
    stage ('Stop previously running app') {
      steps {
        echo 'Stopping server...'
        script {
          try {
            sh 'docker compose stop landing-page-app'
          } catch (error) {
            echo "Caugh: ${error}"
          }
        }
      }
    }
    stage ('Build the app') {
      steps {
        sh 'docker compose create landing-page-app --build --force-recreate'
      }
    }
    stage ('Run the app') {
      steps {
        script {
          env.JENKINS_NODE_COOKIE = 'dontKillMe' // this is necessary for the Gradle daemon to be kept alive
        }
        sh 'docker compose start landing-page-app'
      }
    }
  }
}
