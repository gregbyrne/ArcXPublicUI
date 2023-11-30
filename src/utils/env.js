export default function getEnv() {
    let environment = ''
    console.log("origin " + window.location.origin)
    if(window.location.origin.includes("localhost") ){
        environment =  "http://localhost:7101"
    }else if(window.location.origin.includes("arcx-public-ui.devsecops-dev") ){
        console.log("staging")
        environment = "https://arc-x-public-api.devsecops-dev.aws.epa.gov"
    }else {
        environment = "https://climateadaptation.epa.gov"
    }
    return environment
}
