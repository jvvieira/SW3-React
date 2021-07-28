resource "aws_elastic_beanstalk_application" "aplication" {
  name = "sw3-web"

}

resource "aws_elastic_beanstalk_environment" "environment" {
  name                = "sw3-web"
  application         = aws_elastic_beanstalk_application.aplication.name
  solution_stack_name = "64bit Amazon Linux 2 v5.4.3 running Node.js 14"

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "IamInstanceProfile"
    value     = "aws-elasticbeanstalk-ec2-role"
  }
}
