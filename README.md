# AWS Cloud Resume Challenge

## Overview
The AWS Cloud Resume Challenge involves building a resume hosted on AWS with a visitor counter. This project demonstrates my skills in cloud architecture, serverless applications, and web development.

![Portfolio Diagram](./CD%20Static%20Site%20with%20HTTPS.png)

## Goal
Create a resume website that tracks the number of visitors using AWS services.

## Architecture
The following AWS services are utilized in this project:
- **Amazon S3**: Hosts the static resume website files (HTML, CSS, JavaScript), making them publicly accessible.
- **Amazon DynamoDB**: Stores the visitor count in a NoSQL database. The visitor count is tracked in a single item.
- **AWS Lambda**: Executes serverless code to update the visitor count in DynamoDB each time a user visits the site.
- **AWS Route 53**: Manages the DNS records for the domain, allowing users to access the resume via a custom domain.
- **AWS CloudFront**: Serves as a Content Delivery Network (CDN) to distribute the website content globally and improve loading times.
- **AWS Certificate Manager**: Provides SSL/TLS certificates to secure the website with HTTPS.
- **GitHub Actions**: Automates the deployment process by syncing the latest code to S3 and invalidating the CloudFront cache on every push to the main branch.


## Implementation Steps
1. **Setup S3**: 
   - Created an S3 bucket to store and serve the resume website.

2. **Configure DynamoDB**:
   - Created a DynamoDB table with a partition key `id` set to `"counter"` to track the visitor count.

3. **Develop Lambda Function**:
   - Built a Lambda function to increment the visitor count in DynamoDB and return the updated count.
   - Assigned necessary permissions to allow the Lambda function to access the DynamoDB table.

4. **Setup Route 53**:
   - Created a hosted zone in Route 53 and configured DNS settings to point the custom domain to the CloudFront distribution.

5. **Configure CloudFront**:
   - Set up a CloudFront distribution to serve the S3 content and improve performance globally.

6. **Set Up AWS Certificate Manager**:
   - Requested and configured an SSL certificate to enable HTTPS for the domain.

7. **Set Up GitHub Actions**:
   - Configured GitHub Actions to automate deployments. On every push to the `main` branch:
     1. Files are synced to the `website` directory in the S3 bucket.
     2. CloudFront cache is invalidated to ensure users receive the latest content.

## Final Outcome
The project successfully tracks the number of visitors to the site, demonstrating the use of various AWS services in a practical application. This implementation not only showcases my technical skills but also highlights my ability to integrate cloud services for a seamless user experience.

## Additional Resources
- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
- [Amazon DynamoDB Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
- [AWS Route 53 Documentation](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Welcome.html)
- [AWS Certificate Manager Documentation](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Amazon S3 Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)
