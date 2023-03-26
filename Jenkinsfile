pipeline {
  agent any

  environment {
    NODE_ENV = "production"
  }

  stages {
    stage ('Cleanup docker system') {
      steps {
        sh 'docker system prune -a -f --volumes'
      }
    }
    stage ('Build the fallback page') {
      steps {
        echo 'Building the fallback page...'
        sh 'docker compose create landing-page-fallback --build --force-recreate'
      }
    }
    stage ('Stop previously running app') {
      steps {
        echo 'Stopping the app server...'
        script {
          try {
            sh 'docker compose stop landing-page-app'
          } catch (error) {
            echo "Caugh: ${error}"
          }
        }
      }
    }
    stage ('Run the fallback page') {
      steps {
        echo 'Running the fallback server...'
        sh 'docker compose start landing-page-fallback'
      }
    }
    stage ('Build the app') {
      steps {
        sh 'docker compose create landing-page-app --build --force-recreate'
      }
    }
    stage ('Stop the fallback page') {
      steps {
        sh 'docker compose stop landing-page-fallback'
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
