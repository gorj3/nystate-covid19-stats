# NY State COVID-19 React App hosted in AWS with CI/CD

React application displaying the current and historical COVID-19 data for the state of New York. Data provided by [Covid Act Now API](https://apidocs.covidactnow.org/).

The application is deployed in [react.jorgedemo.com](https://react.jorgedemo.com).
## The CI/CD pipeline used in AWS is the following:

Using the Developer Tools on AWS, CodePiline starts the continuous delivery when it detects a change in this repository main branch.

![source](https://raw.githubusercontent.com/gorj3/nystate-covid19-stats/main/public/logo512.png)

 AWS CodePipeline takes the source code and builds it for continuous integration with AWS CodeBuild, using the configuration from [buildspec.yml](https://raw.githubusercontent.com/gorj3/nystate-covid19-stats/main/buildspec.yml).

![build](https://raw.githubusercontent.com/gorj3/nystate-covid19-stats/main/public/logo512.png)

After the files has been created, AWS CodeDeploy copies the files into an AWS S3 stage bucket for web testing: 
[http://stagereact.jorgedemo.com.s3-website-us-east-1.amazonaws.com/](http://stagereact.jorgedemo.com.s3-website-us-east-1.amazonaws.com/)
  
![deploy](https://raw.githubusercontent.com/gorj3/nystate-covid19-stats/main/public/logo512.png)

Finally, after reviewing the changes, I can manually approve the changes to be pushed into the production enviroment, hosted at [react.jorgedemo.com](https://react.jorgedemo.com).

![prod](https://raw.githubusercontent.com/gorj3/nystate-covid19-stats/main/public/logo512.png)

The process to use AWS S3 to host serverless web applications is in [react.jorgedemo.com](https://react.jorgedemo.com). The content in prod served with a CDN, so old content needs to be purged after every change.


---
### Libraries used in this app
- [React-Bootstrap](https://github.com/react-bootstrap/react-bootstrap)
- [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)
- [React CountUp](https://github.com/glennreyes/react-countup)
- [axios](https://github.com/axios/axios)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).