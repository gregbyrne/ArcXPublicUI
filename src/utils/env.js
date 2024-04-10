export default function getEnv() {
    let environment = ''
    if(window.location.origin.includes("localhost") ){
        environment =  "http://localhost:7100"
    }else if(window.location.origin.includes("arcx-public-ui.devsecops-dev") ){
        environment = "https://arc-x-public-api.devsecops-dev.aws.epa.gov"
    }else {
        environment = "https://climateadaptation.epa.gov"
    }
    return environment
}
